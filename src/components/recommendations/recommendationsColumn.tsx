import { RecommendationData } from "../../types"
import { RecommendationSource, RecommendationSourceState } from "../../state/recommendationSources";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import RecommendationVisualizationNikkeGG from "./recommendationVisualizationNikkeGG";
import RecommendationVisualizationPrydwen from "./recommendationVisualizationPrydwen";
import RecommendationVisualizationSkyfall from "./recommendationVisualizationSkyfall";

interface RecommendationsColumnProps {
    recommendation_data: RecommendationData;
}

const RecommendationsColumn: React.FC<RecommendationsColumnProps> = ({ recommendation_data }) => {
    const recommendationSourceState: RecommendationSourceState = useSelector((state: RootState) => state.recommendations);

    return (
        <div>
            {recommendationSourceState.source === RecommendationSource.nikke_gg &&
                <RecommendationVisualizationNikkeGG recommendations={recommendation_data.nikke_gg} />
            }
            {recommendationSourceState.source === RecommendationSource.prydwen &&
                <RecommendationVisualizationPrydwen recommendations={recommendation_data.prydwen} />
            }
            {recommendationSourceState.source === RecommendationSource.skyfall &&
                <RecommendationVisualizationSkyfall recommendations={recommendation_data.skyfall} />
            }
        </div>
    )
}

export default RecommendationsColumn;