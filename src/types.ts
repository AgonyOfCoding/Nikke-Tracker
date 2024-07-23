
export const color_scheme = ["#D1E1FF", "#B2ADED", "#927CCF", "#764EA2", "#5C255C"];

export interface OverloadLine {
    attribute: OverloadAttribute;
    level: number;
}

export enum OverloadAttribute {
    elemental_damage = "Increase Element Damage Dealt",
    hit_rate = "Increase Hit Rate",
    max_ammo = "Increase Max Ammunition Capacity",
    atk = "Increase ATK",
    charge_damage = "Increase Charge Damage",
    charge_speed = "Increase Charge Speed",
    crit_damage = "Increase Critical Damage",
    crit_rate = "Increase Critical Rate",
    def = "Increase DEF"
}

export interface OverloadValue {
    attribute: OverloadAttribute;
    level_values: Record<number, number>;
}

export interface OverloadRecommendation {
    attribute: string;
    priority: OverloadPriority;
    count: string;
}

export interface Equipment {
    helm: EquipmentData | undefined;
    gloves: EquipmentData | undefined;
    chest: EquipmentData | undefined;
    boots: EquipmentData | undefined;
}

export enum EquipmentType {
    helm = "helm",
    gloves = "gloves",
    chest = "chest",
    boots = "boots"
}

export enum NikkeManufacturer {
    Elysion = "Elysion",
    Missilis = "Missilis",
    Tetra = "Tetra",
    Pilgrim = "Pilgrim",
    Abnormal = "Abnormal"
}

export enum EquipmentManufacturer {
    Elysion = "Elysion",
    Missilis = "Missilis",
    Tetra = "Tetra",
    Pilgrim = "Pilgrim",
    Abnormal = "Abnormal",
    standard = "standard",
    ol = "ol"
}

export interface EquipmentData {
    type: EquipmentType;
    manufacturer: EquipmentManufacturer;
    level: number;
    overload_line_1: OverloadLine | undefined;
    overload_line_2: OverloadLine | undefined;
    overload_line_3: OverloadLine | undefined;
}

export enum Burst {
    Burst_I = "Burst I",
    Burst_II = "Burst II",
    Burst_III = "Burst III"
}

export enum NikkeRole {
    Attacker = "Attacker",
    Supporter = "Supporter",
    Defender = "Defender"
}

export enum NikkePriority {
    High = "High",
    Medium = "Medium",
    Low = "Low",
    PVP = "PVP"
}

export enum OverloadPriority {
    essential = "essential",
    ideal = "ideal",
    good = "good",
    fine = "fine",
    passable = "passable",
    no = "no"
}

export enum WeaponType {
    AR = "AR",
    MG = "MG",
    RL = "RL",
    SG = "SG",
    SMG = "SMG",
    SR = "SR"
}

export enum NikkeRarity {
    R = "R",
    SR = "SR",
    SSR = "SSR"
}

export enum NikkeElement {
    Fire = "Fire",
    Wind = "Wind",
    Water = "Water",
    Electric = "Electric",
    Iron = "Iron"
}

export interface NikkeSkill {
    name: string;
    description: string;
    values: Record<number, number[]>;

}

export interface NikkeSkills {
    skill_1: NikkeSkill;
    skill_2: NikkeSkill;
    burst_skill: NikkeSkill
}

export interface NikkeStaticData {
    id: string;
    name: string;
    manufacturer: NikkeManufacturer;
    role: NikkeRole;
    weapon_type: WeaponType;
    rarity: NikkeRarity;
    burst: Burst;
    element: NikkeElement;
    skills: NikkeSkills;
}

export interface NikkeStaticList {
    id: NikkeStaticData;
}

export enum CollectionItemRarity {
    R = "R",
    SR = "SR",
    SSR = "SSR"
}

export interface CollectionItem {
    rarity: CollectionItemRarity;
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
    priority: NikkePriority;
    skills: string[];
    overloads: OverloadRecommendation[];
    notes: string;
}
  