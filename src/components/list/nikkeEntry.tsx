import { Card, Elevation } from "@blueprintjs/core";
import { color_scheme, EquipmentType, Nikke, NikkeStaticData, RecommendationData } from "../../types";
import EquipmentColumn from "../equipment/equipmentColumn";
import OverloadRecommendationsList from "../recommendations/recommendationsColumn";
import Profile from "../profile/profile";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import CollectionItemVisualization from "../profile/collectionItemVisualization";
import OverloadTotals from "../equipment/overloadTotals";

interface NikkeEntryProps {
    nikke_static: NikkeStaticData;
    recommendation_data: RecommendationData;
    index: number;
    height: number;
}

const NikkeEntry: React.FC<NikkeEntryProps> = ({ nikke_static, recommendation_data, index, height }) => {
    const nikke_investments: Nikke[] = useSelector((state: RootState) => state.investments.investments);
    const nikke_data: Nikke | undefined = nikke_investments.find((nikke) => nikke.id === nikke_static.id);
    
    return (
        <Card
            elevation={Elevation.TWO}
            style={{
                height: height,
                backgroundColor: index % 2 === 0 ? color_scheme[2] : color_scheme[1],
                display: 'grid',
                gridTemplateColumns: '150px 150px 1fr 1fr 1fr 1fr 350px',
                gridTemplateRows: '1fr 1fr'
            }}
        >
            <div style={{ gridColumn: "1 / 2", gridRow: "1 / 3" }}>
                <Profile nikke_static={nikke_static} nikke_data={nikke_data} recommendations={recommendation_data} />
            </div>            
            <div style={{ gridColumn: "2 / 3", gridRow: "1 / 3"  }} >
                {nikke_data && 
                    <CollectionItemVisualization nikke={nikke_data} nikke_static={nikke_static} recommendations={recommendation_data} />
                }
            </div>
            {nikke_data &&
                <div style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
                    <EquipmentColumn equipment_type={EquipmentType.helm} nikke={nikke_data} nikke_static={nikke_static} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}>
                    <EquipmentColumn equipment_type={EquipmentType.gloves} nikke={nikke_data} nikke_static={nikke_static} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: "5 / 6", gridRow: "1 / 2" }}>
                    <EquipmentColumn equipment_type={EquipmentType.chest} nikke={nikke_data} nikke_static={nikke_static} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: "6 / 7", gridRow: "1 / 2" }}>
                    <EquipmentColumn equipment_type={EquipmentType.boots} nikke={nikke_data} nikke_static={nikke_static} />
                </div>
            }
            {recommendation_data &&
                <div style={{ gridColumn: "7 / 8", gridRow: "1 / 3", backgroundColor: color_scheme[4], color: color_scheme[0] }}>
                    <OverloadRecommendationsList weapon_type={nikke_static.weapon_type} recommendation_data={recommendation_data} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: "3 / 7", gridRow: "2 / 3" }}>
                    <OverloadTotals nikke={nikke_data} />
                </div>
            }
        </Card>
    );
};

export default NikkeEntry;