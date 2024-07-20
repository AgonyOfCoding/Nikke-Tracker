import React from "react"
import { OverloadLine, OverloadValue } from "../types";
import { overload_data } from "../data/overloadData";
import { Button, Menu, MenuItem, Popover } from "@blueprintjs/core";

interface OverloadLineVisualizationProps {
    overload_line: OverloadLine | undefined;
}


const OverloadLineVisualization: React.FC<OverloadLineVisualizationProps> = ({ overload_line }) => {
    const overload_value: OverloadValue | undefined = overload_data.find((value) => value.attribute_id === overload_line?.attribute_id );
    if (!overload_value || !overload_line) {
        return <Button
            text='Effect not obtained'
        />
    }

    const overloadMenu = () => {
        return <Menu>
            <MenuItem text="Effect not obtained" />
            {overload_data.map((attribute, index) => {
                return (
                    <MenuItem key={index} text={attribute.attribute_name} >
                        {Object.entries(attribute.level_values).map(([level, value]) => (
                            <MenuItem text={value} />
                        ))}
                    </MenuItem>
                )
            })}
        </Menu>
    };

    return (
        <Popover content={overloadMenu()} >
            {!overload_value || !overload_line ? 
                <Button fill text='Effect not obtained' /> :
                <Button
                    fill
                    style={{
                        backgroundColor: overload_line.level === 15 ? 'black' : 'white'
                    }}
                >
                    <div 
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}
                    >
                        <span>
                            {`${overload_value.attribute_name}:`}
                        </span>
                        <span style={{ color: overload_line.level > 11 ? 'lightblue' : 'gray' }}>
                            {`${overload_value.level_values[overload_line.level]}% `}
                        </span>
                        <span style={{ fontWeight: 'bold' }}>
                            {overload_line.level}
                        </span>
                    </div>
                </Button>
            }           
        </Popover>
    )
}

export default OverloadLineVisualization;