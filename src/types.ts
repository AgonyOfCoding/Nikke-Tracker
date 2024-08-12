
export const color_scheme = ["#C5CBD3", "#ABB3BF", "#8F99A8", "#738091", "#5F6B7C"];
// export const color_scheme = ["#D1E1FF", "#B2ADED", "#927CCF", "#764EA2", "#5C255C"];

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
    Adjutant = "adjutant",
    Assault = "assault",
    Bastion = "bastion",
    Endurance = "endurance",
    Healing = "healing",
    Onslaught = "onslaught",
    Quantum = "quantum",
    Resilience = "resilience",
    Tempering = "tempering",
    Vigor = "vigor",
    Wingman = "wingman"
}

// Collection Items

export enum CollectionItemRarity {
    R = "R",
    SR = "SR",
    SSR = "SSR"
}

//// Interfaces

// Nikke Investment

export interface Nikke {
    id: string;
    core: number;
    bond: number;
    equipment: Equipment;
    skill_levels: number[];
    collection_item: CollectionItem | undefined;
    favorite: boolean;
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

// Teams

export interface TeamsData {
    campaign: Team[];
    solo_raid: Team[];
    tribe_tower: Team[];
    pvp: Team[];
    custom: Team[];
}

export interface Team {
    name: string;
    nikke_1: string | undefined;
    cube_1: CubeName | undefined;
    nikke_2: string | undefined;
    cube_2: CubeName | undefined;
    nikke_3: string | undefined;
    cube_3: CubeName | undefined;
    nikke_4: string | undefined;
    cube_4: CubeName | undefined;
    nikke_5: string | undefined;
    cube_5: CubeName | undefined;
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
    overloads: OverloadsNikkeGG | undefined;
    cube: CubeNikkeGG;
}

export interface RatingsNikkeGG {
    story: number;
    pvp: number;
    boss: number;
    notes: string;
}

export interface SkillsNikkeGG {
    priority: string;
    budget: string;
    recommended: string;
    notes: string[];
}

export interface OverloadsNikkeGG {
    priority: string,
    priority_rank: number;
    elemental_damage: OverloadLineNikkeGG,
    hit_rate: OverloadLineNikkeGG,
    max_ammo: OverloadLineNikkeGG,
    atk: OverloadLineNikkeGG,
    charge_damage: OverloadLineNikkeGG,
    charge_speed: OverloadLineNikkeGG,
    crit_damage: OverloadLineNikkeGG,
    crit_rate: OverloadLineNikkeGG,
    def: OverloadLineNikkeGG,
    notes: string
}

export interface OverloadLineNikkeGG {
    priority: number;
    recommended: string;
    notes: string;
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
    with_treasure: RecommendationsPrydwen | undefined;
}

export interface RatingsPrydwen {
    story_low_deficit: string;
    story_high_deficit: string;
    boss_solo: string;
    boss_adds: string;
    pvp: string;
}

export interface SkillsPrydwen {
    priority: string;
    pve: string;
    pvp: string;
}

export interface OverloadsPrydwen {
    priority: string,
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
    priority: string;
    collection_item_priority: string;
    skills: string[];
    overloads: OverloadsSkyfall;
    cube: CubeSkyfall;
    notes: string[];
}

export interface OverloadsSkyfall {
    ideal: string[];
    good: string[];
    fine: string[];
    passable: string[];
    no: string[];
}

export interface CubeSkyfall {
    cube: CubeName[];
    notes: string;
}