import { CollectionItemRarity, EquipmentManufacturer, EquipmentType, Nikke, OverloadAttribute } from '../types';

export const nikkeTemplate = (id: string): Nikke => {
    return {
        id: id, 
        core: 0,
        equipment: {
            helm: undefined,
            gloves: undefined,
            chest: undefined,
            boots: undefined
        },
        skill_levels: [1, 1, 1],
        collection_item: undefined
    }
}

export const getNikkeData = (id: string): Nikke | undefined => {
    return sampleCharacters.find((nikke) => nikke.id === id);
}

const sampleCharacters: Nikke[] = [
    {
        id: 'red_hood',
        core: 4,
        equipment: {
            helm: {
                type: EquipmentType.helm,
                manufacturer: EquipmentManufacturer.ol,
                level: 5,
                overload_line_1: {attribute: OverloadAttribute.atk, level: 5},
                overload_line_2: {attribute: OverloadAttribute.charge_speed, level: 10},
                overload_line_3: undefined
            },
            gloves: {
                type: EquipmentType.gloves,
                manufacturer: EquipmentManufacturer.ol,
                level: 5,
                overload_line_1: {attribute: OverloadAttribute.max_ammo, level: 8},
                overload_line_2: {attribute: OverloadAttribute.atk, level: 2},
                overload_line_3: {attribute: OverloadAttribute.hit_rate, level: 6}
            },
            chest: {
                type: EquipmentType.chest,
                manufacturer: EquipmentManufacturer.ol,
                level: 5,
                overload_line_1: {attribute: OverloadAttribute.charge_speed, level: 11},
                overload_line_2: {attribute: OverloadAttribute.hit_rate, level: 11},
                overload_line_3: {attribute: OverloadAttribute.atk, level: 11}
            },
            boots: {
                type: EquipmentType.helm,
                manufacturer: EquipmentManufacturer.ol,
                level: 5,
                overload_line_1: {attribute: OverloadAttribute.atk, level: 11},
                overload_line_2: {attribute: OverloadAttribute.charge_speed, level: 11},
                overload_line_3: undefined
            }
        },
        skill_levels: [10, 10, 10],
        collection_item: {
            rarity: CollectionItemRarity.SR,
            phase: 5
        }
    }, {
        id: '2b',
        core: 3,
        equipment: {
            helm: {
                type: EquipmentType.helm,
                manufacturer: EquipmentManufacturer.ol,
                level: 5,
                overload_line_1: {attribute: OverloadAttribute.atk, level: 5},
                overload_line_2: {attribute: OverloadAttribute.charge_speed, level: 10},
                overload_line_3: undefined
            },
            gloves: {
                type: EquipmentType.gloves,
                manufacturer: EquipmentManufacturer.ol,
                level: 5,
                overload_line_1: {attribute: OverloadAttribute.max_ammo, level: 8},
                overload_line_2: {attribute: OverloadAttribute.atk, level: 2},
                overload_line_3: {attribute: OverloadAttribute.hit_rate, level: 6}
            },
            chest: {
                type: EquipmentType.chest,
                manufacturer: EquipmentManufacturer.ol,
                level: 5,
                overload_line_1: {attribute: OverloadAttribute.charge_speed, level: 11},
                overload_line_2: {attribute: OverloadAttribute.hit_rate, level: 11},
                overload_line_3: {attribute: OverloadAttribute.atk, level: 11}
            },
            boots: {
                type: EquipmentType.helm,
                manufacturer: EquipmentManufacturer.ol,
                level: 5,
                overload_line_1: {attribute: OverloadAttribute.atk, level: 11},
                overload_line_2: {attribute: OverloadAttribute.charge_speed, level: 11},
                overload_line_3: undefined
            }
        },
        skill_levels: [1, 1, 1],
        collection_item: undefined
    }
];
