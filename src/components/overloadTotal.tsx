import { overload_data } from "../data/overloadData";
import { Equipment, Nikke, OverloadAttribute, OverloadLine, OverloadValue } from "../types";

interface OverloadTotalProps {
    nikke: Nikke;
    attribute: OverloadAttribute;
}

const calculateTotals = (nikke: Nikke, attribute: OverloadAttribute): [OverloadAttribute, number, number] | undefined => {
    var count = 0;
    var totalValue = 0;

    const overload_value: OverloadValue | undefined = overload_data.find((value) => value.attribute === attribute )
    if (!overload_value) return undefined

    const equipment_slots = Object.values(nikke.equipment);

    equipment_slots.forEach(slot => {
        ['overload_line_1', 'overload_line_2', 'overload_line_3'].forEach(lineKey => {
            const line = slot[lineKey as keyof Equipment] as OverloadLine | undefined;
            if (line && line.attribute === attribute) {
                count += 1;
                totalValue += overload_value.level_values[line.level]
            }
        });
    });

    return [overload_value.attribute, count, totalValue];
};

const OverloadTotal: React.FC<OverloadTotalProps> = ({ nikke, attribute }) => {
    const attributeTotals: [OverloadAttribute, number, number] | undefined = calculateTotals(nikke, attribute);
    if (!attributeTotals || attributeTotals[1] === 0) return null

    return (
        <p style={{ fontWeight: 'bold' }}>{attributeTotals[1]}
            {'x '}{attributeTotals[0]}
            {', total: '}{attributeTotals[2]}
        </p>
    )
}

export default OverloadTotal;