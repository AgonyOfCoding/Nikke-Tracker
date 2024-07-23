import React from "react"
import { color_scheme, OverloadLine, OverloadValue } from "../types";
import { overload_data } from "../data/overloadData";
import { Button, Menu, MenuItem, Popover } from "@blueprintjs/core";

interface OverloadLineVisualizationProps {
    overload_line: OverloadLine | undefined;
}


const OverloadLineVisualization: React.FC<OverloadLineVisualizationProps> = ({ overload_line }) => {
    const overload_value: OverloadValue | undefined = overload_data.find((value) => value.attribute === overload_line?.attribute );

    const overloadMenu = () => {
        return <Menu>
            <MenuItem text="Effect not obtained" />
            {overload_data.map((attribute, index) => {
                return (
                    <MenuItem key={index} text={attribute.attribute} >
                        {Object.entries(attribute.level_values).map(([level, value]) => (
                            <MenuItem key={value} text={value} />
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
                        <span>
                            {`${overload_value.attribute}:`}
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