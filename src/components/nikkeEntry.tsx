import { Card, Elevation } from "@blueprintjs/core";
import { color_scheme, EquipmentType, Nikke, NikkeStaticData, OverloadAttribute, RecommendationData } from "../types";
import EquipmentColumn from "./equipment/equipmentColumn";
import OverloadRecommendationsList from "./recommendations/recommendationsColumn";
import Profile from "./profile/profile";
import OverloadTotal from "./equipment/overloadTotal";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import CollectionItemVisualization from "./profile/collectionItemVisualization";

interface NikkeEntryProps {
    nikke_static: NikkeStaticData;
    recommendation_data: RecommendationData;
    index: number;
}

const NikkeEntry: React.FC<NikkeEntryProps> = ({ nikke_static, recommendation_data, index }) => {
    const wide_layout: boolean = useSelector((state: RootState) => state.settings.wide_layout);
    const grid_index = wide_layout ? 3 : 2;
    const nikke_investments: Nikke[] = useSelector((state: RootState) => state.investments.investments);
    const nikke_data: Nikke | undefined = nikke_investments.find((nikke) => nikke.id === nikke_static.id);
    
    return (
        <Card
            elevation={Elevation.TWO}
            style={{
                backgroundColor: index % 2 === 0 ? color_scheme[1] : color_scheme[2],
                color: color_scheme[4],
                display: 'grid',
                gridTemplateColumns: wide_layout ? '1fr 1fr 2fr 2fr 2fr 2fr 2fr' : '1fr 2fr 2fr 2fr 2fr 2fr',
                gridTemplateRows: wide_layout ? 'repeat(7, auto)' : 'repeat(7, auto)'
            }}
        >
            <div style={{ gridColumn: '1 / 2' }}>
                <Profile nikke_static={nikke_static} nikke_data={nikke_data} recommendations={recommendation_data} />
            </div>
            {wide_layout &&
                <div style={{ gridColumn: "2 / 3" }} >
                    {nikke_data && 
                        <CollectionItemVisualization nikke={nikke_data} nikke_static={nikke_static} recommendations={recommendation_data} />
                    }
                </div>
            }
            {nikke_data &&
                <div style={{ gridColumn: `${grid_index} / ${grid_index + 1}` }}>
                    <EquipmentColumn equipment_type={EquipmentType.helm} nikke={nikke_data} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.atk} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.elemental_damage} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: `${grid_index + 1} / ${grid_index + 2}` }}>
                    <EquipmentColumn equipment_type={EquipmentType.gloves} nikke={nikke_data} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.charge_speed} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.charge_damage} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: `${grid_index + 2} / ${grid_index + 3}` }}>
                    <EquipmentColumn equipment_type={EquipmentType.chest} nikke={nikke_data} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.crit_rate} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.crit_damage} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: `${grid_index + 3} / ${grid_index + 4}` }}>
                    <EquipmentColumn equipment_type={EquipmentType.boots} nikke={nikke_data} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.max_ammo} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.hit_rate} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.def} />
                </div>
            }
            {recommendation_data &&
                <div style={{ gridColumn: `${grid_index + 4} / ${grid_index + 5}`, backgroundColor: color_scheme[4], color: color_scheme[0] }}>
                    <OverloadRecommendationsList weapon_type={nikke_static.weapon_type} recommendation_data={recommendation_data} />
                </div>
            }
        </Card>
    );
};

export default NikkeEntry;