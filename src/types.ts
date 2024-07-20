
export interface OverloadLine {
    attribute_id: string;
    level: number;
}

export type OverloadLevelValues = Record<number, number>;

export interface OverloadValue {
    attribute_id: string;
    attribute_name: string;
    level_values: OverloadLevelValues;
}

export interface OverloadRecommendation {
    attribute: string;
    priority: string;
    count: string;
}

export interface Equipment {
    helm: EquipmentData | undefined;
    gloves: EquipmentData | undefined;
    chest: EquipmentData | undefined;
    boots: EquipmentData | undefined;
}

export type EquipmentType = 'helm' | 'gloves' | 'chest' | 'boots';

export type NikkeManufacturer = 'Elysion' | 'Missilis'| 'Tetra' | 'Pilgrim' | 'Abnormal';

export type EquipmentManufacturer = NikkeManufacturer | 'standard' | 'ol';

export interface EquipmentData {
    type: EquipmentType;
    manufacturer: EquipmentManufacturer;
    level: number;
    overload_line_1: OverloadLine | undefined;
    overload_line_2: OverloadLine | undefined;
    overload_line_3: OverloadLine | undefined;
}

export type NikkeRole = 'Attacker' | 'Supporter' | 'Defender';

export const character_priorities: string[] = [
    'High', 'Medium', 'Low', 'PVP'
]

export const overload_priorities: string[] = [
    'essential', 'ideal', 'good', 'fine', 'passable', 'no'
]

export interface NikkeStaticData {
    id: string;
    name: string;
    manufacturer: NikkeManufacturer;
    role: NikkeRole;
}

export type Rarity = 'R' | 'SR' | 'Treasure';

export interface CollectionItem {
    rarity: Rarity;
    phase: number;
}

export interface Nikke {
    id: string;
    core: number;
    equipment: Equipment;
    skill_levels: number[];
    collection_item: CollectionItem | undefined;
}

export interface RecommendationData {
    id: string;
    priority: string;
    skills: string[];
    overloads: OverloadRecommendation[];
    notes: string;
}
  