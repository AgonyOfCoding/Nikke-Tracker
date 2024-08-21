import { CollectionItemRarity, Nikke, NikkeStaticData } from "../types";
import { collectionItemPriorityRanks } from "../components/collectionItem/collectionItemVisualization";
import { recommendation_data_skyfall } from "../data/recommendationsSkyfall";
import { recommendation_data_nikke_gg } from "../data/recommendationsNikkeGG";
import { recommendation_data_prydwen } from "../data/recommendationsPrydwen";
import { recommendation_data_keripo } from "../data/recommendationsKeripo";

const rarityOrder: {[key: string]: number} = {
    SSR: 0,
    SR: 1,
    R: 2
};

const ratingOrder: {[key: string]: number} = {
    SSS: 0,
    SS: 1,
    S: 2,
    A: 3,
    B: 4,
    C: 5,
    D: 6,
    E: 7
};

function ratingSortNikkGG(nikke_static_a: NikkeStaticData, nikke_static_b: NikkeStaticData, rating_a: number, rating_b: number): number {
    if (rating_a < rating_b) return 1;
    if (rating_a > rating_b) return -1;
    return nikke_static_a.name.localeCompare(nikke_static_b.name);
}

function ratingSortPrydwen(nikke_static_a: NikkeStaticData, nikke_static_b: NikkeStaticData, rating_a: string, rating_b: string): number {
    const rating_value_a = ratingOrder[rating_a];
    const rating_value_b = ratingOrder[rating_b];
    if (rating_value_a < rating_value_b) return -1;
    if (rating_value_a > rating_value_b) return 1;
    return nikke_static_a.name.localeCompare(nikke_static_b.name);
}

const priorityOrder: {[key: string]: number} = {
    "Highest": 0,
    "Meta": 0,
    "High": 1,
    "Medium": 2,
    "PVP": 3,
    "Low to Medium": 3,
    "Lowest": 5,
    "Low": 4,
    "Zero to Low": 5,
    "Very Low": 5,
    "Zero": 6,
    "-": 7
};

const getPriorityValue = (priority: string | undefined) => {
    if (!priority) return 999;
    const mainPriority: string | undefined = Object.keys(priorityOrder).find(p => priority.startsWith(p));
    return mainPriority ? priorityOrder[mainPriority] : 999;
};

const tierOrder: {[key: string]: number} = {
    "S+": 0,
    "S": 1,
    "S-": 2,
    "A+": 3,
    "(A+)": 3,
    "A": 4,
    "A-": 5,
    "(A-)": 5,
    "B+": 6,
    "B": 7,
    "B-": 8,
    "C": 9,
    "D": 10,
    "(D)": 10,
    "Burst": 11,
    "Special": 12
};

const getTierValue = (tier: string | undefined) => {
    if (!tier) return 999;
    return tierOrder[tier];
};

export function nikkeListSorter(
    list: NikkeStaticData[],
    nikke_investment_data: Nikke[],
    sort_option: string,
    inverted: boolean,
): NikkeStaticData[] {
    const sorted_list_before_inverting: NikkeStaticData[] = initialSorter(list, nikke_investment_data, sort_option);
    return inverted ? sorted_list_before_inverting.reverse() : sorted_list_before_inverting;
}

function initialSorter(
    list: NikkeStaticData[],
    nikke_investment_data: Nikke[],
    sort_option: string
): NikkeStaticData[] {

    switch (sort_option) {
        case "Rarity":
        default:
            return list.sort((nikke_static_a, nikke_static_b) => {
                const rarity_order_a = rarityOrder[nikke_static_a.rarity];
                const rarity_order_b = rarityOrder[nikke_static_b.rarity];
                if (rarity_order_a < rarity_order_b) return -1;
                if (rarity_order_a > rarity_order_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Name":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Collection Item Priority":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const rank_a =collectionItemPriorityRanks[recommendation_data_skyfall[nikke_static_a.id].collection_item_priority];
                const rank_b =collectionItemPriorityRanks[recommendation_data_skyfall[nikke_static_b.id].collection_item_priority];
                if (rank_a < rank_b) return -1;
                if (rank_a > rank_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Collection Item Phase":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const rarity_a: CollectionItemRarity | undefined = nikke_investment_data.find(nikke => nikke.id === nikke_static_a.id)?.collection_item?.rarity;
                const rarity_b: CollectionItemRarity | undefined = nikke_investment_data.find(nikke => nikke.id === nikke_static_b.id)?.collection_item?.rarity;
                const rarity_value_a = rarity_a ? rarityOrder[rarity_a] : 999;
                const rarity_value_b = rarity_b ? rarityOrder[rarity_b] : 999;
                if (rarity_value_a < rarity_value_b) return -1;
                if (rarity_value_a > rarity_value_b) return 1;
                const phase_a: number = nikke_investment_data.find(nikke => nikke.id === nikke_static_a.id)?.collection_item?.phase || -1;
                const phase_b: number = nikke_investment_data.find(nikke => nikke.id === nikke_static_b.id)?.collection_item?.phase || -1;
                if (phase_a < phase_b) return 1;
                if (phase_a > phase_b) return -1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Rating (Story)[Nikke.gg]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortNikkGG(nikke_static_a, nikke_static_b,
                    recommendation_data_nikke_gg[nikke_static_a.id].ratings.story,
                    recommendation_data_nikke_gg[nikke_static_b.id].ratings.story
                )
            })
        case "Rating (PVP)[Nikke.gg]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortNikkGG(nikke_static_a, nikke_static_b,
                    recommendation_data_nikke_gg[nikke_static_a.id].ratings.pvp,
                    recommendation_data_nikke_gg[nikke_static_b.id].ratings.pvp
                )
            })
        case "Rating (Boss)[Nikke.gg]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortNikkGG(nikke_static_a, nikke_static_b,
                    recommendation_data_nikke_gg[nikke_static_a.id].ratings.boss,
                    recommendation_data_nikke_gg[nikke_static_b.id].ratings.boss
                )
            })
        case "Skill Investment Priority[Nikke.gg]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const priority_a = getPriorityValue(recommendation_data_nikke_gg[nikke_static_a.id].skills.priority);
                const priority_b = getPriorityValue(recommendation_data_nikke_gg[nikke_static_b.id].skills.priority);
                if (priority_a < priority_b) return -1;
                if (priority_a > priority_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Overload Investment Priority[Nikke.gg]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const priority_a = getPriorityValue(recommendation_data_nikke_gg[nikke_static_a.id].overloads?.priority);
                const priority_b = getPriorityValue(recommendation_data_nikke_gg[nikke_static_b.id].overloads?.priority);
                if (priority_a < priority_b) return -1;
                if (priority_a > priority_b) return 1;
                const priority_rank_a = recommendation_data_nikke_gg[nikke_static_a.id].overloads?.priority_rank || 999;
                const priority_rank_b = recommendation_data_nikke_gg[nikke_static_b.id].overloads?.priority_rank || 999;
                if (priority_rank_a < priority_rank_b) return -1;
                if (priority_rank_a > priority_rank_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Rating (Story, low deficit)[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortPrydwen(nikke_static_a, nikke_static_b,
                    recommendation_data_prydwen[nikke_static_a.id].ratings.story_low_deficit,
                    recommendation_data_prydwen[nikke_static_b.id].ratings.story_low_deficit);
            })
        case "Rating (Story, high deficit)[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortPrydwen(nikke_static_a, nikke_static_b,
                    recommendation_data_prydwen[nikke_static_a.id].ratings.story_high_deficit,
                    recommendation_data_prydwen[nikke_static_b.id].ratings.story_high_deficit);
            })
        case "Rating (Boss, solo)[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortPrydwen(nikke_static_a, nikke_static_b,
                    recommendation_data_prydwen[nikke_static_a.id].ratings.boss_solo,
                    recommendation_data_prydwen[nikke_static_b.id].ratings.boss_solo);
            })
        case "Rating (Boss, adds)[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortPrydwen(nikke_static_a, nikke_static_b,
                    recommendation_data_prydwen[nikke_static_a.id].ratings.boss_adds,
                    recommendation_data_prydwen[nikke_static_b.id].ratings.boss_adds);
            })
        case "Rating (PVP)[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                return ratingSortPrydwen(nikke_static_a, nikke_static_b,
                    recommendation_data_prydwen[nikke_static_a.id].ratings.pvp,
                    recommendation_data_prydwen[nikke_static_b.id].ratings.pvp);
            })
        case "Skill Investment Priority[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const priority_a = getPriorityValue(recommendation_data_prydwen[nikke_static_a.id].skills.priority);
                const priority_b = getPriorityValue(recommendation_data_prydwen[nikke_static_b.id].skills.priority);
                if (priority_a < priority_b) return -1;
                if (priority_a > priority_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Overload Investment Priority[Prydwen]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const priority_a = getPriorityValue(recommendation_data_prydwen[nikke_static_a.id].overloads.priority);
                const priority_b = getPriorityValue(recommendation_data_prydwen[nikke_static_b.id].overloads.priority);
                if (priority_a < priority_b) return -1;
                if (priority_a > priority_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Priority[Skyfall]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const priority_a = getPriorityValue(recommendation_data_skyfall[nikke_static_a.id].priority);
                const priority_b = getPriorityValue(recommendation_data_skyfall[nikke_static_b.id].priority);
                if (priority_a < priority_b) return -1;
                if (priority_a > priority_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
        case "Tier[Keripo]":
            return list.sort((nikke_static_a, nikke_static_b) => {
                const tier_a = getTierValue(recommendation_data_keripo[nikke_static_a.id]?.tier || undefined);
                const tier_b = getTierValue(recommendation_data_keripo[nikke_static_b.id]?.tier || undefined);
                if (tier_a < tier_b) return -1;
                if (tier_a > tier_b) return 1;
                return nikke_static_a.name.localeCompare(nikke_static_b.name);
            })
    }
}