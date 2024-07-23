import { Card, Elevation } from "@blueprintjs/core";
import { color_scheme, EquipmentType, Nikke, NikkeStaticData, OverloadAttribute, RecommendationData } from "../types";
import EquipmentColumn from "./equipmentColumn";
import OverloadRecommendationsList from "./overloadRecommendationsList";
import ProfileColumn from "./profileCloumn";
import OverloadTotal from "./overloadTotal";
import { getNikkeData } from "../data/sampleData";

interface NikkeEntryProps {
    nikke_static: NikkeStaticData;
    recommendations: RecommendationData[];
    index: number;
}

const NikkeEntry: React.FC<NikkeEntryProps> = ({ nikke_static, recommendations, index }) => {
    const nikke_data: Nikke | undefined = getNikkeData(nikke_static.id);

    const nikke_recommendations: RecommendationData | undefined = recommendations.find((entry) => entry.id === nikke_static.id);
    
    return (
        <Card
            elevation={Elevation.TWO}
            style={{
                backgroundColor: index % 2 === 0 ? color_scheme[1] : color_scheme[2],
                display: 'grid',
                gridTemplateColumns: '1fr 3fr 3fr 3fr 3fr 1fr',
                gridTemplateRows: 'repeat(5, auto)',
                gap: '8px'
            }}
        >
            <div style={{ gridColumn: '1 / 2' }}>
                <ProfileColumn nikke_recommendations={nikke_recommendations} nikke_static={nikke_static} nikke_data={nikke_data} />
            </div>
            {nikke_data &&
                <div style={{ gridColumn: '2 / 3' }}>
                    <EquipmentColumn equipment_type={EquipmentType.helm} equipment_data={nikke_data.equipment.helm} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.atk} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.elemental_damage} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: '3 / 4' }}>
                    <EquipmentColumn equipment_type={EquipmentType.gloves} equipment_data={nikke_data.equipment.gloves} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.charge_speed} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.charge_damage} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: '4 / 5' }}>
                    <EquipmentColumn equipment_type={EquipmentType.chest} equipment_data={nikke_data.equipment.chest} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.crit_rate} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.crit_damage} />
                </div>
            } {nikke_data &&
                <div style={{ gridColumn: '5 / 6' }}>
                    <EquipmentColumn equipment_type={EquipmentType.boots} equipment_data={nikke_data.equipment.boots} nikke_static={nikke_static} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.max_ammo} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.hit_rate} />
                    <OverloadTotal nikke={nikke_data} attribute={OverloadAttribute.def} />
                </div>
            }
            <div style={{ gridColumn: '6 / 7' }}>
                <OverloadRecommendationsList rec={nikke_recommendations} />
            </div>
        </Card>
    );
};

export default NikkeEntry;