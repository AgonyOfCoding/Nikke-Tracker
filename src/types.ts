
export const color_scheme = ["#D1E1FF", "#B2ADED", "#927CCF", "#764EA2", "#5C255C"];

//// Enums

// Nikke

export enum Burst {
    Burst_I = "Burst I",
    Burst_II = "Burst II",
    Burst_III = "Burst III",
    Burst_Lambda = "Burst Lambda"
}

export enum NikkeRole {
    Attacker = "Attacker",
    Defender = "Defender",
    Supporter = "Supporter"
}

export enum NikkeElement {
    Electric = "Electric",
    Fire = "Fire",
    Iron = "Iron",
    Water = "Water",
    Wind = "Wind"
}

export enum NikkeManufacturer {
    Elysion = "Elysion",
    Missilis = "Missilis",
    Tetra = "Tetra",
    Pilgrim = "Pilgrim",
    Abnormal = "Abnormal"
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

// Equipment

export enum EquipmentType {
    helm = "helm",
    gloves = "gloves",
    chest = "chest",
    boots = "boots"
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

export type AllManufacturers = NikkeManufacturer | EquipmentManufacturer;

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

// Harmony Cubes

export enum CubeName {
    Adjutant = "Adjutant",
    Assault = "Assault",
    Bastion = "Bastion",
    Endurance = "Endurance",
    Healing = "Healing",
    Onslaught = "Onslaught",
    Quantum = "Quantum",
    Resilience = "Resilience",
    Tempering = "Tempering",
    Vigor = "Vigor",
    Wingman = "Wingman"
}

// Collection Items

export enum CollectionItemRarity {
    R = "R",
    SR = "SR",
    SSR = "SSR"
}

// Recommendations

export enum Priority {
    High = "High",
    Medium = "Medium",
    Low = "Low",
    Zero = "Zero"
}

export enum RatingPrydwen {
    SSS = "SSS",
    SS = "SS",
    S = "S",
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E"
}

//// Interfaces

// Nikke Investment

export interface Nikke {
    id: string;
    core: number;
    equipment: Equipment;
    skill_levels: number[];
    collection_item: CollectionItem | undefined;
}

// Nikke static data

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

// Skills

export interface NikkeSkills {
    skill_1: NikkeSkill;
    skill_2: NikkeSkill;
    burst_skill: NikkeSkill
}

export interface NikkeSkill {
    name: string;
    description: string;
    values: Record<number, number[]>;
    cooldown?: number;
}

// Equipment

export interface Equipment {
    helm: EquipmentData | undefined;
    gloves: EquipmentData | undefined;
    chest: EquipmentData | undefined;
    boots: EquipmentData | undefined;
}

export interface EquipmentData {
    type: EquipmentType;
    manufacturer: AllManufacturers;
    level: number;
    overload_line_1: OverloadLine | undefined;
    overload_line_2: OverloadLine | undefined;
    overload_line_3: OverloadLine | undefined;
}

export interface OverloadLine {
    attribute: OverloadAttribute;
    level: number;
}

export interface OverloadValues {
    attribute: OverloadAttribute;
    level_values: Record<number, number>;
}

// Collection Items

export interface CollectionItem {
    rarity: CollectionItemRarity;
    type: WeaponType | string;
    phase: number;
}

// Recommendations

export interface RecommendationData {
    nikke_gg: RecommendationsNikkeGG;
    prydwen: RecommendationsPrydwen;
    skyfall: RecommendationsSkyfall;
}

export interface RecommendationsNikkeGG {
    ratings: RatingsNikkeGG;
    skills: SkillsNikkeGG;
    overloads: OverloadsNikkeGG;
    cube: CubeNikkeGG;
}

export interface RatingsNikkeGG {
    story: number;
    pvp: number;
    boss: number;
    notes: string;
}

export interface SkillsNikkeGG {
    priority: Priority;
    budget: string;
    recommended: string;
    notes: string;
}

export interface OverloadsNikkeGG {
    elemental_damage: number,
    hit_rate: number,
    max_ammo: number,
    atk: number,
    charge_damage: number,
    charge_speed: number,
    crit_damage: number,
    crit_rate: number,
    def: number
}

export interface CubeNikkeGG {
    cube: CubeName[];
    notes: string;
}

export interface RecommendationsPrydwen {
    ratings: RatingsPrydwen;
    skills: SkillsPrydwen;
    overloads: OverloadsPrydwen;
    cube: CubePrydwen;
}

export interface RatingsPrydwen {
    story_low_deficit: RatingPrydwen;
    story_high_deficit: RatingPrydwen;
    boss_solo: RatingPrydwen;
    boss_adds: RatingPrydwen;
    pvp: RatingPrydwen;
}

export interface SkillsPrydwen {
    priority: Priority;
    pve: string;
    pvp: string;
}

export interface OverloadsPrydwen {
    priority: Priority,
    essential: string[];
    ideal: string[];
    passable: string[];
    notes: string;
}

export interface CubePrydwen {
    pre_overload: CubeName[];
    post_overload: CubeName[];
    notes: string;
}

export interface RecommendationsSkyfall {
    priority: Priority;
    skills: string[];
    overloads: OverloadsSkyfall;
    cube: CubeSkyfall;
    notes: string;
}

export interface OverloadsSkyfall {
    priority: Priority;
    ideal: string[];
    good: string[];
    fine: string[];
    passable: string[];
    no: string[];
    notes: string;
}

export interface CubeSkyfall {
    cube: CubeName[];
    notes: string;
}