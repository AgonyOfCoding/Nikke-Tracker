import { RecommendationData } from "../types"

interface OverloadRecommendationsListProps {
    rec: RecommendationData | undefined;
}

const OverloadRecommendationsList: React.FC<OverloadRecommendationsListProps> = ({ rec }) => {
    if (!rec) return <p>No overload recommendations</p>

    const priorityColors: { [key: string]: string } = {
        essential: 'magenta',
        ideal: 'green',
        good: 'lightgreen',
        fine: 'yellow',
        passable: 'black',
        no: 'red'
    };

    return (
        <div>
            {rec.overloads.map((entry, index) => (
                <p key={index} style={{ color: priorityColors[entry.priority], margin:0 }}>
                    {entry.count}x {entry.attribute}
                </p>
            ))}
        </div>
    )
}

export default OverloadRecommendationsList;