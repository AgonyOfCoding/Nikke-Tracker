import { Card, Elevation } from "@blueprintjs/core";
import { color_scheme, EquipmentType, Nikke, NikkeStaticData, OverloadAttribute, RecommendationData } from "../types";
import EquipmentColumn from "./equipment/equipmentColumn";
import OverloadRecommendationsList from "./recommendations/recommendationsColumn";
import Profile from "./profile/profile";
import OverloadTotal from "./equipment/overloadTotal";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

interface NikkeEntryProps {
    nikke_static: NikkeStaticData;
    recommendation_data: RecommendationData;
    index: number;
}

const NikkeEntry: React.FC<NikkeEntryProps> = ({ nikke_static, recommendation_data, index }) => {
    const nikke_investments: Nikke[] = useSelector((state: RootState) => state.investments.investments);
    const nikke_data: Nikke | undefined = nikke_investments.find((nikke) => nikke.id === nikke_static.id)
    
    return (
        <Card
            elevation={Elevation.TWO}
            style={{
                backgroundColor: index % 2 === 0 ? color_scheme[1] : color_scheme[2],
                color: color_scheme[4],
                display: 'grid',
                gridTemplateColumns: '1fr 2fr 2fr 2fr 2fr 2fr',
                gridTemplateRows: 'repeat(5, auto)'
            }}
        >
            <div style={{ gridColumn: '1 / 2' }}>
                <Profile nikke_static={nikke_static} nikke_data={nikke_data} />
            </div>
            {nikke_data &&
                <div style={{ gridColumn: '2 / 3' }}>
                    <EquipmentColumn equipment_type={EquipmentType.helm} nikke={nikke_data} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.atk} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.elemental_damage} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: '3 / 4' }}>
                    <EquipmentColumn equipment_type={EquipmentType.gloves} nikke={nikke_data} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.charge_speed} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.charge_damage} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: '4 / 5' }}>
                    <EquipmentColumn equipment_type={EquipmentType.chest} nikke={nikke_data} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.crit_rate} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.crit_damage} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: '5 / 6' }}>
                    <EquipmentColumn equipment_type={EquipmentType.boots} nikke={nikke_data} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.max_ammo} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.hit_rate} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.def} />
                </div>
            }
            {recommendation_data &&
                <div style={{ gridColumn: '6 / 7', backgroundColor: color_scheme[4], color: color_scheme[0] }}>
                    <OverloadRecommendationsList recommendation_data={recommendation_data} />
                </div>
            }
        </Card>
    );
};

export default NikkeEntry;