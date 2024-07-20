import React from "react"
import { EquipmentData, NikkeStaticData } from "../types";
import OverloadLineVisualization from "./overloadLineVisualization";
import { ButtonGroup } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css'; // Ensure Blueprint CSS is imported

interface NikkeCardProps {
    equipment_data: EquipmentData | undefined;
    nikke_static: NikkeStaticData;
}


const EquipmentColumn: React.FC<NikkeCardProps> = ({ equipment_data, nikke_static }) => {
    const getEquipmentIcon = () => {
        if (!equipment_data) return '';
        try {
            return require(`../assets/equipment_icons/${equipment_data.manufacturer}_${nikke_static.role}_${equipment_data.type}_${equipment_data.level}.png`);
        } catch (err) {
            return '';
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <img src={getEquipmentIcon()}
                    alt={"No equipment"} 
                    style={{ width: '100px', height: '100px' }}
            />
            <ButtonGroup vertical style={{ marginTop: '10px' }} >
                <OverloadLineVisualization overload_line={equipment_data?.overload_line_1} />
                <OverloadLineVisualization overload_line={equipment_data?.overload_line_2} />
                <OverloadLineVisualization overload_line={equipment_data?.overload_line_3} />
            </ButtonGroup>
        </div>
    )
}

export default EquipmentColumn;
