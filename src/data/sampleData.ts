import { Nikke } from '../types';

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
                type: 'helm',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'atk', level: 5},
                overload_line_2: {attribute_id: 'charge_speed', level: 10},
                overload_line_3: undefined
            },
            gloves: {
                type: 'gloves',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'max_ammo', level: 8},
                overload_line_2: {attribute_id: 'atk', level: 2},
                overload_line_3: {attribute_id: 'hit_rate', level: 6}
            },
            chest: {
                type: 'chest',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'charge_speed', level: 11},
                overload_line_2: {attribute_id: 'hit_rate', level: 11},
                overload_line_3: {attribute_id: 'atk', level: 11}
            },
            boots: {
                type: 'boots',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'atk', level: 11},
                overload_line_2: {attribute_id: 'charge_speed', level: 11},
                overload_line_3: undefined
            }
        },
        skill_levels: [10, 10, 10],
        collection_item: {
            rarity: 'SR',
            phase: 5
        }
    },{
        id: 'modernia',
        core: 3,
        equipment: {
            helm: {
                type: 'helm',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'atk', level: 5},
                overload_line_2: {attribute_id: 'charge_speed', level: 10},
                overload_line_3: undefined
            },
            gloves: {
                type: 'gloves',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'max_ammo', level: 8},
                overload_line_2: {attribute_id: 'atk', level: 2},
                overload_line_3: {attribute_id: 'hit_rate', level: 6}
            },
            chest: {
                type: 'chest',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'charge_speed', level: 11},
                overload_line_2: {attribute_id: 'hit_rate', level: 11},
                overload_line_3: {attribute_id: 'atk', level: 11}
            },
            boots: {
                type: 'boots',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'atk', level: 11},
                overload_line_2: {attribute_id: 'charge_speed', level: 11},
                overload_line_3: undefined
            }
        },
        skill_levels: [10, 10, 10],
        collection_item: {
            rarity: 'SR',
            phase: 5
        }
    },{
        id: 'snow_white',
        core: 6,
        equipment: {
            helm: {
                type: 'helm',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'atk', level: 5},
                overload_line_2: {attribute_id: 'charge_speed', level: 10},
                overload_line_3: undefined
            },
            gloves: {
                type: 'gloves',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'max_ammo', level: 8},
                overload_line_2: {attribute_id: 'atk', level: 2},
                overload_line_3: {attribute_id: 'hit_rate', level: 6}
            },
            chest: {
                type: 'chest',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'charge_speed', level: 11},
                overload_line_2: {attribute_id: 'hit_rate', level: 11},
                overload_line_3: {attribute_id: 'atk', level: 11}
            },
            boots: {
                type: 'boots',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'atk', level: 11},
                overload_line_2: {attribute_id: 'charge_speed', level: 11},
                overload_line_3: undefined
            }
        },
        skill_levels: [10, 10, 10],
        collection_item: {
            rarity: 'SR',
            phase: 5
        }
    },{
        id: 'scarlet',
        core: 1,
        equipment: {
            helm: {
                type: 'helm',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'atk', level: 5},
                overload_line_2: {attribute_id: 'charge_speed', level: 10},
                overload_line_3: undefined
            },
            gloves: {
                type: 'gloves',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'max_ammo', level: 8},
                overload_line_2: {attribute_id: 'atk', level: 2},
                overload_line_3: {attribute_id: 'hit_rate', level: 6}
            },
            chest: {
                type: 'chest',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'charge_speed', level: 11},
                overload_line_2: {attribute_id: 'hit_rate', level: 11},
                overload_line_3: {attribute_id: 'atk', level: 11}
            },
            boots: {
                type: 'boots',
                manufacturer: 'ol',
                level: 5,
                overload_line_1: {attribute_id: 'atk', level: 11},
                overload_line_2: {attribute_id: 'charge_speed', level: 11},
                overload_line_3: undefined
            }
        },
        skill_levels: [10, 10, 10],
        collection_item: {
            rarity: 'SR',
            phase: 5
        }
    },
    
];
