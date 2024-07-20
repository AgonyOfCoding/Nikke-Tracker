import { Card, Colors, Elevation } from "@blueprintjs/core";
import { NikkeStaticData, RecommendationData } from "../types";
import { getNikkeData } from "../data/sampleData";
import EquipmentColumn from "./equipmentColumn";
import OverloadRecommendationsList from "./overloadRecommendationsList";

interface NikkeCardProps {
    nikke_static: NikkeStaticData;
    recommendations: RecommendationData[];
    index: number;
}

const NikkeCard: React.FC<NikkeCardProps> = ({ nikke_static, recommendations, index }) => {
    const nikke_data = getNikkeData(nikke_static.id);
    const nikke_recommendations: RecommendationData | undefined = recommendations.find((entry) => entry.id === nikke_static.id);

    if (nikke_data === undefined) return null;

    const getCoreIcon = (core: number): string => {
        try {
            return require(`../assets/misc/core_${core}.png`);
        } catch (err) {
            return '';
        }
    }

    const getNikkeIcon = (id: string) => {
        try {
            return require(`../assets/nikke_icons/${id}.png`);
        } catch (err) {
            return '';
        }
    }

    const priorityColors: { [key: string]: string } = {
        High: 'green',
        Medium: 'yellow',
        Low: 'red',
        PVP: 'magenta',
    };
    
    return (
        <Card
            interactive={true}
            elevation={Elevation.TWO}
            style={{
                backgroundColor: index % 2 === 0 ? Colors.GRAY4 : Colors.GRAY5,
                display: 'grid',
                gridTemplateColumns: '1fr 3fr 3fr 3fr 3fr 1fr',
                gridTemplateRows: 'repeat(5, auto)',
                gap: '8px', // Adjust as needed for spacing
            }}
        >
            <div style={{ gridColumn: '1 / 2' }}>
                <h3 style={{ margin:0 }}>{nikke_static.name}</h3>
                {nikke_recommendations?.priority && 
                    <p style={{ color: priorityColors[nikke_recommendations.priority], margin:0 }} >{nikke_recommendations.priority} priority</p>
                }
                <img src={getNikkeIcon(nikke_static.id)}
                     alt={nikke_static.name}
                     style={{ width: '128px', height: '128px' }}
                />
                <img src={getCoreIcon(nikke_data.core)}
                     alt="Core icon error"
                     style={{ width: '80px' }}
                />
                <b>{nikke_data.skill_levels[0]}/{nikke_data.skill_levels[1]}/{nikke_data.skill_levels[2]}</b>
                {nikke_recommendations?.skills && 
                    <p style={{ margin:0 }}>{nikke_recommendations.skills[0]}/{nikke_recommendations.skills[1]}/{nikke_recommendations.skills[2]}</p>
                }
            </div>
            <div style={{ gridColumn: '2 / 3' }}>
                <EquipmentColumn equipment_data={nikke_data.equipment.helm} nikke_static={nikke_static} />
            </div>
            <div style={{ gridColumn: '3 / 4' }}>
                <EquipmentColumn equipment_data={nikke_data.equipment.gloves} nikke_static={nikke_static} />
            </div>
            <div style={{ gridColumn: '4 / 5' }}>
                <EquipmentColumn equipment_data={nikke_data.equipment.chest} nikke_static={nikke_static} />
            </div>
            <div style={{ gridColumn: '5 / 6' }}>
                <EquipmentColumn equipment_data={nikke_data.equipment.boots} nikke_static={nikke_static} />
            </div>

            {/* Sixth column with one row */}
            <div style={{ gridColumn: '6 / 7' }}>
                <OverloadRecommendationsList rec={nikke_recommendations} />
            </div>
        </Card>
    );
};

export default NikkeCard;