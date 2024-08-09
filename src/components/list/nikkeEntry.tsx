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
    const wide_layout: boolean = useSelector((state: RootState) => state.settings.wide_layout);
    const nikke_data: Nikke | undefined = nikke_investments.find((nikke) => nikke.id === nikke_static.id);

    const wide_layout_columns = "150px 150px 1fr 1fr 1fr 1fr 350px";
    const narrow_layout_columns = "150px 1fr 1fr 350px";
    
    return (
        <Card
            elevation={Elevation.TWO}
            style={{
                height: height,
                backgroundColor: index % 2 === 0 ? color_scheme[2] : color_scheme[1],
                display: 'grid',
                gridTemplateColumns: wide_layout ? wide_layout_columns : narrow_layout_columns,
                gridTemplateRows: wide_layout ? "210px 1fr" : "210px 100px 110px 1fr"
            }}
        >
            <div style={{
                gridColumn: "1 / 2",
                gridRow: wide_layout ? "1 / 3" : "1 / 3" 
            }}>
                <Profile nikke_static={nikke_static} nikke_data={nikke_data} recommendations={recommendation_data} />
            </div>          
            <div style={{
                gridColumn: wide_layout ? "2 / 3" : "1 / 2",
                gridRow: wide_layout ? "1 / 3" : "3 / 5"
            }} >
                {nikke_data && 
                    <CollectionItemVisualization nikke={nikke_data} nikke_static={nikke_static} recommendations={recommendation_data} />
                }
            </div>
            {nikke_data &&
                <div style={{
                    gridColumn: wide_layout ? "3 / 4" : "2 / 3",
                    gridRow: "1 / 2"
                }}>
                    <EquipmentColumn equipment_type={EquipmentType.helm} nikke={nikke_data} nikke_static={nikke_static} />
                </div>
            } {nikke_data &&
                <div style={{
                    gridColumn: wide_layout ? "4 / 5" : " 2 / 3",
                    gridRow: wide_layout ? "1 / 2" : "2 / 4"
                }}>
                    <EquipmentColumn equipment_type={EquipmentType.gloves} nikke={nikke_data} nikke_static={nikke_static} />
                </div>
            } {nikke_data &&
                <div style={{
                    gridColumn: wide_layout ? "5 / 6" : "3 / 4",
                    gridRow: "1 / 2"
                }}>
                    <EquipmentColumn equipment_type={EquipmentType.chest} nikke={nikke_data} nikke_static={nikke_static} />
                </div>
            } {nikke_data &&
                <div style={{
                    gridColumn: wide_layout ? "6 / 7" : "3 / 4",
                    gridRow: wide_layout ? "1 / 2" : "2 / 4"
                }}>
                    <EquipmentColumn equipment_type={EquipmentType.boots} nikke={nikke_data} nikke_static={nikke_static} />
                </div>
            }
            {recommendation_data &&
                <div style={{
                    gridColumn: wide_layout ? "7 / 8" : "4 / 5",
                    gridRow: wide_layout ? "1 / 3" : "1 / 5",
                    backgroundColor: color_scheme[4], color: color_scheme[0],
                    borderRadius: "20px"
                }}>
                    <OverloadRecommendationsList weapon_type={nikke_static.weapon_type} recommendation_data={recommendation_data} />
                </div>
            } {nikke_data &&
                <div style={{
                    gridColumn: wide_layout ? "3 / 7" : "2 / 4",
                    gridRow: wide_layout ? "2 / 3" : "4 / 5"
                }}>
                    <OverloadTotals nikke={nikke_data} />
                </div>
            }
        </Card>
    );
};

export default NikkeEntry;