import { Nikke, NikkeStaticData, RatingPrydwen, RecommendationData } from "../types";
import { collectionItemPriorityRanks } from "../components/profile/collectionItemVisualization";

const rarityOrder: {[key: string]: number} = {
    SSR: 0,
    SR: 1,
    R: 2
};

const ratingOrderPrydwen: {[key: string]: number} = {
    SSS: 0,
    SS: 1,
    S: 2,
    A: 3,
    B: 4,
    C: 5,
    D: 6,
    E: 7
};

function ratingSortPrydwen(nikke_static_a: NikkeStaticData, nikke_static_b: NikkeStaticData, rating_a: RatingPrydwen, rating_b: RatingPrydwen): number {
    const rating_value_a = ratingOrderPrydwen[rating_a];
    const rating_value_b = ratingOrderPrydwen[rating_b];
    if (rating_value_a < rating_value_b) return -1;
    if (rating_value_a > rating_value_b) return 1;
    return nikke_static_a.name.localeCompare(nikke_static_b.name);
}

const priorityOrder: {[key: string]: number} = {
    "Highest": 0,
    "High": 1,
    "Medium": 2,
    "Low to Medium": 3,
    "Low": 4,
    "Zero to Low": 5,
    "Zero": 6
};

const getPriorityValueSkyfall = (priority: string | undefined) => {
    if (!priority) return 999;
    const mainPriority: string | undefined = Object.keys(priorityOrder).find(p => priority.startsWith(p));
    return mainPriority ? priorityOrder[mainPriority] : 999;
};

export function nikkeListSorter(
    list: NikkeStaticData[],
    recommendation_data: {[key: string]: RecommendationData},
    nikke_investment_data: Nikke[],
    sort_option: string,
    inverted: boolean,
): NikkeStaticData[] {
    const sorted_list_before_inverting: NikkeStaticData[] = initialSorter(list, recommendation_data, nikke_investment_data, sort_option);
    return inverted ? sorted_list_before_inverting.reverse() : sorted_list_before_inverting;
}

function initialSorter(
    list: NikkeStaticData[],
    recommendation_data: {[key: string]: RecommendationData},
    nikke_investment_data: Nikke[],
    sort_option: string
): NikkeStaticData[] {

    switch (sort_option) {
        case "Rarity":
        default:
            return list.sort((nikke_static_a, nikke_static_b) => {
                if (rarityOrder[nikke_static_a.rarity] < rarityOrder[nikke_static_b.rarity]) return -1;
                if (rarityOrder[nikke_static_a.rarity] > rarityOrder[nikke_static_b.rarity]) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Name":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Collection Item Priority":
            return list.sort((nikke_static_a, nikke_static_b) => {
                if (collectionItemPriorityRanks[recommendation_data[nikke_static_a.id].skyfall.collection_item_priority] <
                    collectionItemPriorityRanks[recommendation_data[nikke_static_b.id].skyfall.collection_item_priority]) return -1;
                if (collectionItemPriorityRanks[recommendation_data[nikke_static_a.id].skyfall.collection_item_priority] >
                    collectionItemPriorityRanks[recommendation_data[nikke_static_b.id].skyfall.collection_item_priority]) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Rating (Story)[Nikke.gg]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const rating_a = recommendation_data[nikke_static_a.id].nikke_gg.ratings.story;
                const rating_b = recommendation_data[nikke_static_b.id].nikke_gg.ratings.story;
                if (rating_a < rating_b) return -1;
                if (rating_a > rating_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Rating (PVP)[Nikke.gg]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const rating_a = recommendation_data[nikke_static_a.id].nikke_gg.ratings.pvp;
                const rating_b = recommendation_data[nikke_static_b.id].nikke_gg.ratings.pvp;
                if (rating_a < rating_b) return -1;
                if (rating_a > rating_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Rating (Boss)[Nikke.gg]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const rating_a = recommendation_data[nikke_static_a.id].nikke_gg.ratings.boss;
                const rating_b = recommendation_data[nikke_static_b.id].nikke_gg.ratings.boss;
                if (rating_a < rating_b) return -1;
                if (rating_a > rating_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Rating (Story, low deficit)[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortPrydwen(nikke_static_a, nikke_static_b,
                    recommendation_data[nikke_static_a.id].prydwen.ratings.story_low_deficit,
                    recommendation_data[nikke_static_b.id].prydwen.ratings.story_low_deficit);
            })
        case "Rating (Story, high deficit)[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortPrydwen(nikke_static_a, nikke_static_b,
                    recommendation_data[nikke_static_a.id].prydwen.ratings.story_high_deficit,
                    recommendation_data[nikke_static_b.id].prydwen.ratings.story_high_deficit);
            })
        case "Rating (Boss, solo)[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortPrydwen(nikke_static_a, nikke_static_b,
                    recommendation_data[nikke_static_a.id].prydwen.ratings.boss_solo,
                    recommendation_data[nikke_static_b.id].prydwen.ratings.boss_solo);
            })
        case "Rating (Boss, adds)[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortPrydwen(nikke_static_a, nikke_static_b,
                    recommendation_data[nikke_static_a.id].prydwen.ratings.boss_adds,
                    recommendation_data[nikke_static_b.id].prydwen.ratings.boss_adds);
            })
        case "Rating (PVP)[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortPrydwen(nikke_static_a, nikke_static_b,
                    recommendation_data[nikke_static_a.id].prydwen.ratings.pvp,
                    recommendation_data[nikke_static_b.id].prydwen.ratings.pvp);
            })
        case "Priority[Skyfall]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const priority_a = getPriorityValueSkyfall(recommendation_data[nikke_static_a.id].skyfall.priority);
                const priority_b = getPriorityValueSkyfall(recommendation_data[nikke_static_b.id].skyfall.priority);
                if (priority_a < priority_b) return -1;
                if (priority_a > priority_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
    }
}