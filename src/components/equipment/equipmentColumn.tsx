import React, { useCallback, useState } from "react"
import { AllManufacturers, color_scheme, Equipment, EquipmentData, EquipmentManufacturer, EquipmentType, Nikke, NikkeStaticData } from "../../types";
import OverloadLineVisualization from "./overloadLineVisualization";
import { Button, ButtonGroup, Popover } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css'; // Ensure Blueprint CSS is imported
import { getEmptyEquipmentIcon, getEquipmentIcon } from "../../utility/iconGetters";
import { useDispatch } from "react-redux";
import { modifyInvestment } from "../../state/investment";

interface EquipmentColumnProps {
    equipment_type: EquipmentType;
    nikke: Nikke;
    nikke_static: NikkeStaticData;
}


const EquipmentColumn: React.FC<EquipmentColumnProps> = ({ equipment_type, nikke, nikke_static }) => {
    const equipment_data: EquipmentData | undefined = nikke.equipment[equipment_type]
    const dispatch = useDispatch();
    const [popover_open, setPopoverOpen] = useState(false);
    
    const setEquipment = useCallback((manufacturer: AllManufacturers, level: number) => {
        if (level < 0 || level > 5)
            return;

        const new_equipment_data: EquipmentData = {
            type: equipment_type,
            manufacturer: manufacturer,
            level: level,
            overload_line_1: manufacturer === equipment_data?.manufacturer ? equipment_data.overload_line_1 : undefined,
            overload_line_2: manufacturer === equipment_data?.manufacturer ? equipment_data.overload_line_2 : undefined,
            overload_line_3: manufacturer === equipment_data?.manufacturer ? equipment_data.overload_line_3 : undefined
        }
        const new_equipment: Equipment = {
            ...nikke.equipment,
            [equipment_type]: new_equipment_data
        }
        const new_nikke: Nikke = {
            ...nikke,
            equipment: new_equipment
        };
        dispatch(modifyInvestment(new_nikke));
        setPopoverOpen(false)
    }, [
        dispatch,
        nikke,
        equipment_type,
        equipment_data?.manufacturer,
        equipment_data?.overload_line_1,
        equipment_data?.overload_line_2,
        equipment_data?.overload_line_3
    ]);

    const removeEquipment = useCallback(() => {
        const new_equipment: Equipment = {
            ...nikke.equipment,
            [equipment_type]: undefined
        }
        const new_nikke: Nikke = {
            ...nikke,
            equipment: new_equipment
        };
        dispatch(modifyInvestment(new_nikke));
        setPopoverOpen(false)
    }, [
        dispatch,
        nikke,
        equipment_type
    ]);

    const equipmentSelector = () => {
    return (
        <div style={{ backgroundColor: color_scheme[0] }}>
            {[EquipmentManufacturer.standard, nikke_static.manufacturer, EquipmentManufacturer.ol].map((manufacturer) => (
                manufacturer !== equipment_data?.manufacturer && (
                    <img
                        key={manufacturer}
                        src={getEquipmentIcon(manufacturer, nikke_static.role, equipment_type, 0)}
                        alt="Icon not found"
                        style={{ width: '100px', height: '100px' }}
                        onClick={() => setEquipment(manufacturer, 0)}
                    />
                )
            ))}
            {equipment_data &&
                <img
                    src={getEmptyEquipmentIcon(equipment_type)}
                    alt="Icon not found"
                    style={{ width: '100px', height: '100px' }}
                    onClick={() => removeEquipment()}
                />
            }
        </div>
    );
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
                <div style={{ gridColumn: '1 / 2', placeContent: 'center'  }} >
                    <h3>{equipment_data?.level}</h3>
                </div>
                <div style={{ gridColumn: '2 / 3' }} >
                    <Popover
                        interactionKind='click'
                        isOpen={popover_open}
                        onInteraction={(state) => setPopoverOpen(state)}
                        minimal
                        content={equipmentSelector()}
                    >
                        {equipment_data && 
                            <img src={getEquipmentIcon(equipment_data.manufacturer, nikke_static.role, equipment_type, equipment_data.level)}
                                alt={"Icon not found"} 
                                style={{ width: '100px', height: '100px' }}
                            />
                        }
                        {!equipment_data && 
                            <img src={getEmptyEquipmentIcon(equipment_type)}
                                alt={"Icon not found"} 
                                style={{ width: '100px', height: '100px' }}
                            />
                        }
                    </Popover>
                </div>
                <div style={{ gridColumn: '3 / 4', placeContent: 'center' }} >
                    {equipment_data &&
                        <ButtonGroup vertical>
                            <Button
                                icon='small-plus'
                                small
                                style={{ backgroundColor: color_scheme[0] }}
                                onClick={() => setEquipment(equipment_data.manufacturer, equipment_data.level + 1)}
                            />
                            <Button
                                icon='small-minus'
                                small
                                style={{ backgroundColor: color_scheme[0] }}
                                onClick={() => setEquipment(equipment_data.manufacturer, equipment_data.level - 1)}
                            />
                        </ButtonGroup>
                    }
                </div>
            </div>
            {equipment_data?.manufacturer === 'ol' &&
                <ButtonGroup vertical style={{ marginTop: '10px' }} >
                    <OverloadLineVisualization
                        overload_line={equipment_data?.overload_line_1}
                        line_number={1}
                        equipment_type={equipment_type}
                        equipment_data={equipment_data}
                        nikke={nikke}
                    />
                    <OverloadLineVisualization
                        overload_line={equipment_data?.overload_line_2}
                        line_number={2}
                        equipment_type={equipment_type}
                        equipment_data={equipment_data}
                        nikke={nikke}
                    />
                    <OverloadLineVisualization
                        overload_line={equipment_data?.overload_line_3}
                        line_number={3}
                        equipment_type={equipment_type}
                        equipment_data={equipment_data}
                        nikke={nikke}
                    />
                </ButtonGroup>
            }
        </div>
    )
}

export default EquipmentColumn;
