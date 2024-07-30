import { Button, Popover } from "@blueprintjs/core";
import { getMiscIcon } from "../../utility/iconGetters";
import { color_scheme, Nikke } from "../../types";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { modifyInvestment } from "../../state/investment";

interface CoreVisualizationProps {
    nikke_data: Nikke;
}

const CoreVisualization: React.FC<CoreVisualizationProps> = ({ nikke_data }) => {
    const dispatch = useDispatch();
    const [popover_open, setPopoverOpen] = useState(false);

    const modifyCore = useCallback((change: number) => {
        const new_core = nikke_data.core + change;
        if (new_core > 10 || new_core < 0)
            return;
        
        const new_nikke: Nikke = {
            id: nikke_data.id,
            core: new_core,
            equipment: nikke_data.equipment,
            skill_levels: nikke_data.skill_levels,
            collection_item: nikke_data.collection_item
        }

        dispatch(modifyInvestment(new_nikke));
    }, [dispatch, nikke_data]);

    const setCore = useCallback((core: number) => {
        const new_nikke: Nikke = {
            id: nikke_data.id,
            core: core,
            equipment: nikke_data.equipment,
            skill_levels: nikke_data.skill_levels,
            collection_item: nikke_data.collection_item
        }

        dispatch(modifyInvestment(new_nikke));
        setPopoverOpen(false)
    }, [dispatch, nikke_data]);

    const coreSelector = () => {
        return (
            <div style={{ backgroundColor: color_scheme[0] }} >
                {Array.from({ length: 11 }, (_, core) => (
                    <div key={core} >
                        <img
                            src={getMiscIcon("core", String(core))}
                            alt="Icon not found"
                            style={{ width: '80px' }}
                            onClick={() => setCore(core)}
                        />
                    </div>
                ))}
            </div>
        )
    };

    return (
        <div  
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: 'repeat(3, auto)'
            }}
        >
            <div style={{ gridColumn: '1 / 2' }} >
                <Button 
                    small
                    icon='small-minus'
                    style={{ backgroundColor: color_scheme[0] }}
                    onClick={() => modifyCore(-1)}
                />
            </div>
            <div style={{ gridColumn: '2 / 3' }} >
                <Popover
                    minimal
                    interactionKind='click'
                    isOpen={popover_open}
                    onInteraction={(state) => setPopoverOpen(state)}
                    content={coreSelector()}
                >
                    <img 
                        src={getMiscIcon("core", String(nikke_data.core))}
                        alt="Icon not found"
                        style={{ width: '80px' }}
                    />
                </Popover>
            </div>
            <div style={{ gridColumn: '3 / 4' }} >
                <Button
                    small
                    icon='small-plus'
                    style={{ backgroundColor: color_scheme[0] }}
                    onClick={() => modifyCore(1)}
                />
            </div>
        </div>
    )
}

export default CoreVisualization;