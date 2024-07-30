import React, { useCallback } from "react"
import { color_scheme, Equipment, EquipmentData, EquipmentType, Nikke, OverloadAttribute, OverloadLine, OverloadValues } from "../../types";
import { overload_data } from "../../data/overloadData";
import { Button, Menu, MenuItem, Popover } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import { modifyInvestment } from "../../state/investment";

interface OverloadLineVisualizationProps {
    overload_line: OverloadLine | undefined;
    line_number: number
    equipment_type: EquipmentType;
    equipment_data: EquipmentData;
    nikke: Nikke;
}

const OverloadLineVisualization: React.FC<OverloadLineVisualizationProps> = ({ overload_line, line_number, equipment_type, equipment_data, nikke }) => {
    const dispatch = useDispatch();
    const overload_value: OverloadValues | undefined = overload_data.find((value) => value.attribute === overload_line?.attribute);

    const setOverloadLine = useCallback((attribute: OverloadAttribute, level: number) => {
        const new_overload_line: OverloadLine = {
            attribute: attribute,
            level: level
        };

        const new_equipment_data: EquipmentData = {
            ...equipment_data,
        };

        if (line_number === 1) {
            new_equipment_data.overload_line_1 = new_overload_line;
        } else if (line_number === 2) {
            new_equipment_data.overload_line_2 = new_overload_line;
        } else if (line_number === 3) {
            new_equipment_data.overload_line_3 = new_overload_line;
        }

        const new_equipment: Equipment = {
            ...nikke.equipment,
            [equipment_type]: new_equipment_data
        };

        const new_nikke: Nikke = {
            ...nikke,
            equipment: new_equipment
        };

        dispatch(modifyInvestment(new_nikke));
    }, [
        dispatch,
        nikke,
        equipment_data,
        equipment_type,
        line_number
    ]);

    const overloadMenu = () => {
        return <Menu>
            <MenuItem text="Effect not obtained" />
            {overload_data.map((attribute, index) => {
                return (
                    <MenuItem key={index} text={attribute.attribute} >
                        {Object.entries(attribute.level_values).map(([level, value]) => (
                            <MenuItem
                                key={value}
                                text={value}
                                onClick={() => setOverloadLine(attribute.attribute, Number(level))}
                            />
                        ))}
                    </MenuItem>
                )
            })}
        </Menu>
    };

    return (
        <Popover content={overloadMenu()} >
            {!overload_value || !overload_line ? 
                <Button
                    fill
                    style={{ backgroundColor: color_scheme[0] }}
                >
                    Effect not obtained
                </Button> :
                <Button
                    fill
                    style={{
                        backgroundColor: overload_line.level === 15 ? 'black' : color_scheme[0]
                    }}
                >
                    <div 
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}
                    >
                        <span style={{ color: overload_line.level === 15 ? color_scheme[0] : 'black' }} >
                            {`${overload_value.attribute}:`}
                        </span>
                        <span style={{ color: overload_line.level > 11 ? 'blue' : 'gray' }} >
                            {`${overload_value.level_values[overload_line.level]}% `}
                        </span>
                        <span style={{ fontWeight: 'bold', color: overload_line.level === 15 ? color_scheme[0] : 'black' }} >
                            {overload_line.level}
                        </span>
                    </div>
                </Button>
            }           
        </Popover>
    )
}

export default OverloadLineVisualization;