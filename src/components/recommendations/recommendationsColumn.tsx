import { RecommendationData, WeaponType } from "../../types"
import { RecommendationSource, RecommendationSourceState } from "../../state/recommendationSources";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import RecommendationVisualizationNikkeGG from "./recommendationVisualizationNikkeGG";
import RecommendationVisualizationPrydwen from "./recommendationVisualizationPrydwen";
import RecommendationVisualizationSkyfall from "./recommendationVisualizationSkyfall";

interface RecommendationsColumnProps {
    recommendation_data: RecommendationData;
    weapon_type: WeaponType;
}

const RecommendationsColumn: React.FC<RecommendationsColumnProps> = ({ recommendation_data, weapon_type }) => {
    const recommendationSourceState: RecommendationSourceState = useSelector((state: RootState) => state.recommendations);

    return (
        <div>
            {recommendationSourceState.source === RecommendationSource.nikke_gg &&
                <RecommendationVisualizationNikkeGG weapon_type={weapon_type} recommendations={recommendation_data.nikke_gg} />
            }
            {recommendationSourceState.source === RecommendationSource.prydwen &&
                <RecommendationVisualizationPrydwen recommendations={recommendation_data.prydwen} />
            }
            {recommendationSourceState.source === RecommendationSource.prydwen &&  recommendation_data.prydwen.with_treasure &&
                <div>
                    <h2>With treasure</h2>
                    <RecommendationVisualizationPrydwen recommendations={recommendation_data.prydwen.with_treasure} />
                </div>
            }
            {recommendationSourceState.source === RecommendationSource.skyfall &&
                <RecommendationVisualizationSkyfall recommendations={recommendation_data.skyfall} />
            }
        </div>
    )
}

export default RecommendationsColumn;