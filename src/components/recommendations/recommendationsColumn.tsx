import { WeaponType } from "../../types"
import { RecommendationSource, RecommendationSourceState } from "../../state/recommendationSources";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import RecommendationVisualizationNikkeGG from "./recommendationVisualizationNikkeGG";
import RecommendationVisualizationPrydwen from "./recommendationVisualizationPrydwen";
import RecommendationVisualizationSkyfall from "./recommendationVisualizationSkyfall";
import RecommendationVisualizationKeripo from "./recommendationsVisualizationKeripo";

interface RecommendationsColumnProps {
    nikke_id: string
    weapon_type: WeaponType;
    has_treasure: boolean;
}

const RecommendationsColumn: React.FC<RecommendationsColumnProps> = ({ nikke_id, weapon_type, has_treasure }) => {
    const recommendationSourceState: RecommendationSourceState = useSelector((state: RootState) => state.recommendations);

    return (
        <div>
            {recommendationSourceState.source === RecommendationSource.nikke_gg &&
                <RecommendationVisualizationNikkeGG nikke_id={nikke_id} weapon_type={weapon_type} />
            }
            {recommendationSourceState.source === RecommendationSource.prydwen &&
                <RecommendationVisualizationPrydwen nikke_id={nikke_id} />
            }
            {recommendationSourceState.source === RecommendationSource.prydwen && has_treasure &&
                <div>
                    <div style={{ height: "1px", backgroundColor: "black" }} />
                    <h2>With treasure</h2>
                    <RecommendationVisualizationPrydwen nikke_id={nikke_id} treasure />
                </div>
            }
            {recommendationSourceState.source === RecommendationSource.skyfall &&
                <RecommendationVisualizationSkyfall nikke_id={nikke_id} />
            }
            {recommendationSourceState.source === RecommendationSource.keripo &&
                <RecommendationVisualizationKeripo nikke_id={nikke_id} />
            }
        </div>
    )
}

export default RecommendationsColumn;