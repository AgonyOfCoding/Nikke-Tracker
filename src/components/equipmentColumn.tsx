import React from "react"
import { color_scheme, EquipmentData, EquipmentType, NikkeStaticData } from "../types";
import OverloadLineVisualization from "./overloadLineVisualization";
import { Button, ButtonGroup, Popover } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css'; // Ensure Blueprint CSS is imported

interface EquipmentColumnProps {
    equipment_type: EquipmentType;
    equipment_data: EquipmentData | undefined;
    nikke_static: NikkeStaticData;
}


const EquipmentColumn: React.FC<EquipmentColumnProps> = ({ equipment_type, equipment_data, nikke_static }) => {
    const getEquipmentIcon = () => {
        if (!equipment_data) return '';
        try {
            return require(`../assets/equipment_icons/${equipment_data.manufacturer}_${nikke_static.role}_${equipment_data.type}_${equipment_data.level}.png`);
        } catch (err) {
            try {
                require(`../assets/equipment_icons/${equipment_data.manufacturer}_${nikke_static.role}_${equipment_data.type}_0.png`)
            } catch(err) {
                return '';
            }
        }
    };

    const getEquipmetnOptionIcon = (manufacturer: string) => {
        try {
            return require(`../assets/equipment_icons/${manufacturer}_${nikke_static.role}_${equipment_type}_0.png`);
        } catch(err) {
            return '';
        }
    };

    const equipmentSelector = () => {
        return <div style={{ backgroundColor: color_scheme[5] }}>
            <img src={getEquipmetnOptionIcon('standard')}
                alt='Icon not found'
                style={{ width: '100px', height: '100px' }}
            />
            <img src={getEquipmetnOptionIcon(nikke_static.manufacturer)}
                alt='Icon not found'
                style={{ width: '100px', height: '100px' }}
            />
            <img src={getEquipmetnOptionIcon('ol')}
                alt='Icon not found'
                style={{ width: '100px', height: '100px' }}
            />
        </div>
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 10 }} >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 3fr 1fr',
                    gridTemplateRows: 'repeat(3, auto)'
                }}
            >
                <div style={{ gridColumn: '1 / 2', placeContent: 'center'  }}>
                    <h3>{equipment_data?.level}</h3>
                </div>
                <div style={{ gridColumn: '2 / 3' }}>
                    <Popover minimal content={equipmentSelector()}>
                        <img src={getEquipmentIcon()}
                            alt={"Icon not found"} 
                            style={{ width: '100px', height: '100px' }}
                        />
                    </Popover>
                </div>
                <div style={{ gridColumn: '3 / 4', placeContent: 'center' }}>
                    <ButtonGroup vertical>
                        <Button icon='small-plus' small style={{ backgroundColor: color_scheme[0] }} />
                        <Button icon='small-minus' small style={{ backgroundColor: color_scheme[0] }} />
                    </ButtonGroup>
                </div>
            </div>
            <ButtonGroup vertical style={{ marginTop: '10px' }} >
                <OverloadLineVisualization overload_line={equipment_data?.overload_line_1} />
                <OverloadLineVisualization overload_line={equipment_data?.overload_line_2} />
                <OverloadLineVisualization overload_line={equipment_data?.overload_line_3} />
            </ButtonGroup>
        </div>
    )
}

export default EquipmentColumn;
