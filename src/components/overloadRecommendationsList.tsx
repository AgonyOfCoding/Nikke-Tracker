import { color_scheme, RecommendationData } from "../types"

interface OverloadRecommendationsListProps {
    rec: RecommendationData | undefined;
}

const OverloadRecommendationsList: React.FC<OverloadRecommendationsListProps> = ({ rec }) => {
    if (!rec) return <b>No overload recommendations</b>

    const priorityColors: { [key: string]: string } = {
        essential: 'lightgreen',
        ideal: 'yellow',
        good: 'orange',
        fine: 'tan',
        passable: 'white',
        no: 'red'
    };

    return (
        <div>
            <b>Overload Recommendations</b>
            <div style={{ backgroundColor: color_scheme[4] }}>
                {rec.overloads.map((entry, index) => (
                    <p key={index} style={{ color: priorityColors[entry.priority], margin:0 }}>
                        {entry.count}x {entry.attribute}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default OverloadRecommendationsList;