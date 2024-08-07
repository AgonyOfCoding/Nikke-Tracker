import { NikkeStaticData, RecommendationData, Nikke, Burst } from "../types";
import { FilterOptions } from "../state/filterOptions";

export function nikkeListFilterer(
    list: NikkeStaticData[],
    recommendation_data: {[key: string]: RecommendationData},
    nikke_investment_data: Nikke[],
    filterState: FilterOptions
): NikkeStaticData[] {

    const filtered_static_data: NikkeStaticData[] = list.filter((nikke) =>
        nikke.id !== '' &&
        (filterState.burst === undefined || nikke.burst === filterState.burst || nikke.burst === Burst.Burst_Lambda) &&
        (filterState.role === undefined || nikke.role === filterState.role) &&
        (filterState.weapon === undefined || nikke.weapon_type === filterState.weapon) &&
        (filterState.manufacturer === undefined || nikke.manufacturer === filterState.manufacturer) &&
        (filterState.element === undefined || nikke.element === filterState.element) &&
        (filterState.nikke_rarity === undefined || nikke.rarity === filterState.nikke_rarity) &&
        (filterState.collection_item_rarity === undefined || 
            nikke_investment_data.find(n => n.id === nikke.id)?.collection_item?.rarity === filterState.collection_item_rarity)
    )

    return filtered_static_data;
}