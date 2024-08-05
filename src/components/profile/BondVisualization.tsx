import { Icon, NumericInput } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { modifyInvestment } from "../../state/investment";
import { Nikke, NikkeManufacturer, NikkeStaticData } from "../../types";

interface BondVisualizationProps {
    nikke_data: Nikke;
    nikke_static: NikkeStaticData;
}

const BondVisualization: React.FC<BondVisualizationProps> = ({ nikke_data, nikke_static }) => {
    const dispatch = useDispatch();
    const max_bond = nikke_data.core === 0 ? 10 :
        nikke_data.core === 1 ? 20 :
        nikke_data.core === 2 ? 30 :
        nikke_static.manufacturer === NikkeManufacturer.Pilgrim ? 40 : 30;

    const setBond = useCallback((new_bond: number) => {        
        const new_nikke: Nikke = {
            ...nikke_data,
            bond: new_bond
        }

        dispatch(modifyInvestment(new_nikke));
    }, [dispatch, nikke_data]);

    return (
        <div  
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 5fr',
                gridTemplateRows: 'repeat(2, auto)',
                margin: "5px"
            }}
        >
            <div style={{ gridColumn: '1 / 2' }} >
                <Icon icon="heart" style={{ color: "red" }} />
            </div>
            <div style={{ gridColumn: '2 / 3' }} >
                <NumericInput
                    value={nikke_data.bond}
                    min={0}
                    max={max_bond}
                    stepSize={1}
                    majorStepSize={10}
                    onValueChange={setBond}
                    allowNumericCharactersOnly
                    style={{ width: '40px' }}
                />
            </div>
        </div>
    )
}

export default BondVisualization;