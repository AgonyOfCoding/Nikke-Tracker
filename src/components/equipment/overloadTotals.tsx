import { useSelector } from "react-redux";
import { overload_data } from "../../data/overloadData";
import { RootState } from "../../state/store";
import { color_scheme, Equipment, EquipmentManufacturer, Nikke, OverloadAttribute, OverloadLine, OverloadValues } from "../../types";

function arrayToString(arr: number[]): string {
    return `(${arr.join(', ')})`;
}

const calculateTotals = (nikke: Nikke, attribute: OverloadAttribute): [OverloadAttribute, number, number, string] | undefined => {
    var count = 0;
    var totalValue = 0;
    const levels: number[] = [];

    const overload_value: OverloadValues | undefined = overload_data.find((value) => value.attribute === attribute )
    if (!overload_value) return undefined

    const equipment_slots = Object.values(nikke.equipment);

    equipment_slots.forEach(slot => {
        if (slot) {
            ['overload_line_1', 'overload_line_2', 'overload_line_3'].forEach(lineKey => {
                const line = slot[lineKey as keyof Equipment] as OverloadLine | undefined;
                if (line && line.attribute === attribute) {
                    count += 1;
                    totalValue += overload_value.level_values[line.level];
                    levels.push(line.level);
                }
            });
        }
    });

    return [overload_value.attribute, count, totalValue, arrayToString(levels)];
};

const getGridStyles = (attribute: OverloadAttribute, wide: boolean): { grid_column: number; grid_row: number; } => {
    if (wide) {
        switch (attribute) {
            case OverloadAttribute.atk:
            default:
                return { grid_column: 1, grid_row: 1 };
            case OverloadAttribute.elemental_damage:
                return { grid_column: 1, grid_row: 2 };
            case OverloadAttribute.max_ammo:
                return { grid_column: 1, grid_row: 3 };
            case OverloadAttribute.crit_rate:
                return { grid_column: 2, grid_row: 1 };
            case OverloadAttribute.crit_damage:
                return { grid_column: 2, grid_row: 2 };
            case OverloadAttribute.hit_rate:
                return { grid_column: 2, grid_row: 3 };
            case OverloadAttribute.charge_speed:
                return { grid_column: 3, grid_row: 1 };
            case OverloadAttribute.charge_damage:
                return { grid_column: 3, grid_row: 2 };
            case OverloadAttribute.def:
                return { grid_column: 3, grid_row: 3 };
        }
    } else {
        switch (attribute) {
            case OverloadAttribute.atk:
            default:
                return { grid_column: 1, grid_row: 1 };
            case OverloadAttribute.elemental_damage:
                return { grid_column: 1, grid_row: 2 };
            case OverloadAttribute.max_ammo:
                return { grid_column: 1, grid_row: 3 };
            case OverloadAttribute.crit_rate:
                return { grid_column: 2, grid_row: 1 };
            case OverloadAttribute.crit_damage:
                return { grid_column: 2, grid_row: 2 };
            case OverloadAttribute.hit_rate:
                return { grid_column: 1, grid_row: 4 };
            case OverloadAttribute.charge_speed:
                return { grid_column: 2, grid_row: 3 };
            case OverloadAttribute.charge_damage:
                return { grid_column: 2, grid_row: 4 };
            case OverloadAttribute.def:
                return { grid_column: 1, grid_row: 5 };
        }
    }
};

interface AttributeTotalsProps {
    nikke: Nikke;
    attribute: OverloadAttribute;
    wide: boolean;
}

const AttributeTotals: React.FC<AttributeTotalsProps> = ({ nikke, attribute, wide }) => {
    const attributeTotals: [OverloadAttribute, number, number, string] | undefined = calculateTotals(nikke, attribute);
    const {grid_column, grid_row} = getGridStyles(attribute, wide);

    return (
        <div
            style={{
                gridColumn: `${grid_column} / ${grid_column + 1}`,
                gridRow: `${grid_row} / ${grid_row + 1}`,
                backgroundColor: color_scheme[0],
                border: '1px solid black',
                fontSize: 12
            }}
        >
            {attributeTotals && attributeTotals[1] !== 0 && <>
                {attributeTotals[1]}
                {"x "}{attributeTotals[0]}
                {": "}<b>{Math.round(100 * attributeTotals[2]) / 100}</b>{"% "}
                {attributeTotals[3]}
            </>}
        </div>
    )
}

interface OverloadTotalsProps {
    nikke: Nikke;
}

const OverloadTotals: React.FC<OverloadTotalsProps> = ({ nikke }) => {
    const wide_layout: boolean = useSelector((state: RootState) => state.settings.wide_layout);

    if (nikke.equipment.boots?.manufacturer !== EquipmentManufacturer.ol && nikke.equipment.gloves?.manufacturer !== EquipmentManufacturer.ol &&
        nikke.equipment.chest?.manufacturer !== EquipmentManufacturer.ol && nikke.equipment.helm?.manufacturer !== EquipmentManufacturer.ol
    ) return null;

    return (
        <div 
            style={{
                display: 'grid',
                gridTemplateColumns: wide_layout ? "repeat(3, 370px)" : "repeat(2, 370px)",
                gridTemplateRows: wide_layout ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr",
                gap: '0',
                justifyContent: 'center',
                margin: '0 auto',
            }}
        >
            {Object.values(OverloadAttribute).map(attribute =>
                <AttributeTotals nikke={nikke} attribute={attribute} wide={wide_layout} />
            )}
            {!wide_layout && 
                <div
                    style={{
                        gridColumn: "2 / 3",
                        gridRow: "5 / 6",
                        backgroundColor: color_scheme[0],
                        color: color_scheme[0],
                        border: '1px solid black',
                        fontSize: 12
                    }}
                >Mary is best waifu</div>
            }
        </div>
    )
}

export default OverloadTotals;