import { Burst, NikkeElement, NikkeManufacturer, NikkeRarity, NikkeRole, NikkeStaticData, WeaponType } from "../types";

export const nikke_static_data: { [id: string]: NikkeStaticData } = {
    "2b": {
        "id": "2b",
        "name": "2B",
        "manufacturer": NikkeManufacturer.Abnormal,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
                "skill_1": {
                    "name": "Survival",
                    "description": "■ Activates when using Burst Skill. Affects self. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Max HP ▲ __% continuously. Twice: Max HP ▲ __% continuously. Three times: Max HP ▲ __% continuously.",
                    "values": {
                        "1": [5.92, 11.85, 34.13],
                        "2": [6.38, 12.76, 36.75],
                        "3": [6.84, 13.68, 39.38],
                        "4": [7.29, 14.59, 42],
                        "5": [7.75, 15.5, 44.63],
                        "6": [8.2, 16.41, 47.25],
                        "7": [8.66, 17.32, 49.88],
                        "8": [9.12, 18.24, 52.5],
                        "9": [9.57, 19.15, 55.13],
                        "10": [10.03, 20.06, 57.76]
                    }
                }, "skill_2": {
                "name": "Cluster Bomb",
                "description": "■ Activates after firing 300 time(s). Affects all enemies. Deals __% of final ATK as damage. ■ Activates when entering battle. Affects self. ATK ▲ __% of the caster's final Max HP continuously.",
                "values": {
                    "1": [98.94, 3.64],
                    "2": [106.56, 3.92],
                    "3": [114.17, 4.2],
                    "4": [121.78, 4.48],
                    "5": [129.39, 4.76],
                    "6": [137, 5.04],
                    "7": [144.61, 5.32],
                    "8": [152.22, 5.6],
                    "9": [159.84, 5.88],
                    "10": [167.45, 6.16]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Series of Attacks",
                "description": "■ Affects all enemies. Deals __% of final ATK as Distributed Damage. ■ Affects 1 enemy unit(s) with the highest Max HP. Deals __% of final ATK as damage.",
                "values": {
                    "1": [1441.44, 468],
                    "2": [1552.32, 504],
                    "3": [1663.2, 540],
                    "4": [1774.08, 576],
                    "5": [1884.96, 612],
                    "6": [1995.84, 648],
                    "7": [2106.72, 684],
                    "8": [2217.6, 720],
                    "9": [2328.48, 756],
                    "10": [2439.36, 792]
                }
            }
        }
    }, "a2": {
        "id": "a2",
        "name": "A2",
        "manufacturer": NikkeManufacturer.Abnormal,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Output Increased",
                "description": "■ Activates when using Burst Skill. Affects self. Charge Damage ▲ __% for 15 sec. Explosion Radius ▲ __% for 15 sec.",
                "values": {
                    "1": [66.81, 60.08],
                    "2": [71.66, 64.6],
                    "3": [76.5, 69.12],
                    "4": [81.35, 73.64],
                    "5": [86.2, 78.15],
                    "6": [91.05, 82.67],
                    "7": [95.9, 87.19],
                    "8": [100.75, 91.7],
                    "9": [105.6, 96.22],
                    "10": [110.44, 100.74]
                }
            }, "skill_2": {
                "name": "Slow Charge Attack",
                "description": "■ Activates when hitting a target with Full Charge. Affects the target. Deals __% of final ATK as additional damage. ■ Activates when hitting a target with Full Charge. Affects self. Damage to Parts ▲ __% for 3 sec.",
                "values": {
                    "1": [17.78, 24.16],
                    "2": [19.15, 26.02],
                    "3": [20.52, 27.87],
                    "4": [21.89, 29.73],
                    "5": [23.26, 31.59],
                    "6": [24.62, 33.45],
                    "7": [25.99, 35.31],
                    "8": [27.36, 37.17],
                    "9": [28.73, 39.03],
                    "10": [30.1, 40.88]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Mode B",
                "description": "■ Affects self. Mode B: Own HP decreases every second while ATK and Charge Speed increase. If own HP dips below 40%, Mode B is deactivated. Effect 1: Current HP ▼ __% every 1 sec. Effect 2: ATK ▲ __% Effect 3: Charge Speed ▲ __%.",
                "values": {
                    "1": [5.61, 9.36, 23.02],
                    "2": [5.43, 10, 24.45],
                    "3": [5.25, 10.65, 25.88],
                    "4": [5.07, 11.3, 27.31],
                    "5": [4.89, 11.95, 28.74],
                    "6": [4.71, 12.6, 30.17],
                    "7": [4.53, 13.24, 31.6],
                    "8": [4.35, 13.89, 33.02],
                    "9": [4.17, 14.54, 34.45],
                    "10": [3.99, 15.19, 35.88]
                }
            }
        }
    }, "ade": {
        "id": "ade",
        "name": "Ade",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Cleaning Time",
                "description": "■ Activates when entering battle. Affects all allies. Perfect Maid: Gain debuff immunity to 1 debuff(s), stacking up to 1 time(s) continuously. ■ Activates when own HP falls below 90%. Affects all allies. ATK ▲ __% of caster's ATK for 5 sec.",
                "values": {
                    "1": [3.29],
                    "2": [3.5],
                    "3": [3.71],
                    "4": [3.92],
                    "5": [4.13],
                    "6": [4.35],
                    "7": [4.56],
                    "8": [4.77],
                    "9": [4.98],
                    "10": [5.19]
                }
            }, "skill_2": {
                "name": "Rest Time",
                "description": "■ Activates after 420 normal attack(s). Affects all allies. Perfect Maid: Gain debuff immunity to 1 debuff(s), stacking up to 1 time(s) continuously. ■ Activates after 120 normal attack(s). Affects all allies. Max HP ▲ __% of caster's Max HP without restoring HP, lasts for 5 sec.",
                "values": {
                    "1": [8.78],
                    "2": [9.54],
                    "3": [10.3],
                    "4": [11.06],
                    "5": [11.82],
                    "6": [12.58],
                    "7": [13.34],
                    "8": [14.1],
                    "9": [14.86],
                    "10": [15.62]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Mealtime",
                "description": "■ Affects all allies. Max HP ▲ __% of caster's Max HP without restoring HP, lasts for 10 sec. ATK ▲ __% of caster's ATK for 10 sec.",
                "values": {
                    "1": [16.88, 6.58],
                    "2": [17.8, 6.98],
                    "3": [18.72, 7.38],
                    "4": [19.64, 7.77],
                    "5": [20.56, 8.17],
                    "6": [21.47, 8.56],
                    "7": [22.39, 8.96],
                    "8": [23.31, 9.36],
                    "9": [24.23, 9.75],
                    "10": [25.15, 10.15]
                }
            }
        }
    }, "admi": {
        "id": "admi",
        "name": "Admi",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Helping Hand",
                "description": "■ Activates when attacked 20 time(s). Affects all allies. Charge Damage Multiplier ▲ __% for 20 sec.",
                "values": {
                    "1": [4.8],
                    "2": [5.33],
                    "3": [5.86],
                    "4": [6.4],
                    "5": [6.93],
                    "6": [7.46],
                    "7": [8],
                    "8": [8.53],
                    "9": [9.06],
                    "10": [9.59]
                }
            }, "skill_2": {
                "cooldown": 20,
                "name": "Kitten's Breath",
                "description": "■ Affects 2 allies with the highest ATK. Damage Taken ▼ __% for 10 sec.",
                "values": {
                    "1": [14.32],
                    "2": [15.91],
                    "3": [17.51],
                    "4": [19.1],
                    "5": [20.69],
                    "6": [22.28],
                    "7": [23.87],
                    "8": [25.46],
                    "9": [27.06],
                    "10": [28.65]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Love Returned",
                "description": "■ Affects all allies. Reloading Speed ▲ __% for 10 sec. Critical Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [25.45, 14.17],
                    "2": [28.28, 15.74],
                    "3": [31.11, 17.32],
                    "4": [33.94, 18.89],
                    "5": [36.77, 20.46],
                    "6": [39.6, 22.04],
                    "7": [42.42, 23.61],
                    "8": [45.25, 25.19],
                    "9": [48.08, 26.76],
                    "10": [50.91, 28.34]
                }
            }
        }
    }, "alice": {
        "id": "alice",
        "name": "Alice",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Energizing Carrot",
                "description": "■ Activates when entering Full Burst. Affects 2 ally unit(s) with the highest ATK. Charge Speed ▲ __% of caster's Charge Speed for 10 sec. Charge Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [6.89, 4.13],
                    "2": [7.42, 4.45],
                    "3": [7.95, 4.77],
                    "4": [8.48, 5.09],
                    "5": [9.02, 5.41],
                    "6": [9.55, 5.73],
                    "7": [10.08, 6.04],
                    "8": [10.61, 6.36],
                    "9": [11.14, 6.68],
                    "10": [11.67, 7]
                }
            }, "skill_2": {
                "name": "Healthy Carrot",
                "description": "■ Affects self. Activates when above 80% HP. Gain continuous Pierce. ■ Affects self. Activates when HP falls below 80%. Continuously recover HP by __% of attack damage.",
                "values": {
                    "1": [2.45],
                    "2": [3.08],
                    "3": [3.71],
                    "4": [4.34],
                    "5": [4.97],
                    "6": [5.6],
                    "7": [6.23],
                    "8": [6.86],
                    "9": [7.49],
                    "10": [8.12]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Wonderland",
                "description": "■ Affects self. Charge Speed ▲ __% for 10 sec. ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [54.84, 14.62],
                    "2": [57.65, 19.12],
                    "3": [60.46, 23.62],
                    "4": [63.28, 28.12],
                    "5": [66.09, 32.62],
                    "6": [68.9, 37.12],
                    "7": [71.71, 41.62],
                    "8": [74.53, 46.12],
                    "9": [77.34, 50.62],
                    "10": [80.15, 55.12]
                }
            }
        }
    }, "alice_wonderland_bunny": {
        "id": "alice_wonderland_bunny",
        "name": "Alice: Wonderland Bunny",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Carrot and Bunny Party",
                "description": "■ Activates after landing 60 normal attack(s). Affects all allies. Recovers __% of caster's final Max HP as HP. Carrot Party: Damage to Interruption Parts ▲ __%, stacks up to 5 time(s) and lasts for 5 sec. ■ Activates after 90 normal attack(s). Affects all Water Code allies. ▲ stack count of buffs by 1.",
                "values": {
                    "1": [3.21, 0.89],
                    "2": [3.67, 1.02],
                    "3": [4.14, 1.14],
                    "4": [4.6, 1.26],
                    "5": [5.07, 1.39],
                    "6": [5.54, 1.51],
                    "7": [6, 1.63],
                    "8": [6.47, 1.76],
                    "9": [6.93, 1.88],
                    "10": [7.4, 2]
                }
            }, "skill_2": {
                "name": "More Carrots",
                "description": "■ Activates after Full Burst ends. Affects all allies. Burst Gauge filling speed ▲ __% for 5 sec. ■ Activates when entering Full Burst. Affects all allies. Max Ammunition Capacity ▲ __% for 15 sec. Reload __%.",
                "values": {
                    "1": [4.73, 10.57, 10.57],
                    "2": [5.32, 13.84, 13.84],
                    "3": [5.9, 17.11, 17.11],
                    "4": [6.49, 20.38, 20.38],
                    "5": [7.07, 23.65, 23.65],
                    "6": [7.66, 26.92, 26.92],
                    "7": [8.24, 30.19, 30.19],
                    "8": [8.83, 33.46, 33.46],
                    "9": [9.41, 36.73, 36.73],
                    "10": [10, 40, 40]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Precious Big Carrot",
                "description": "■ Affects all allies. Re-enter Burst Skill Stage 1. Recovers __% of caster's final Max HP as HP. ■ Activates when Carrot Party is fully stacked. Affects all allies. HP Potency ▲ __% for 15 sec.",
                "values": {
                    "1": [12.46, 74.2],
                    "2": [14.08, 82.62],
                    "3": [15.69, 91.05],
                    "4": [17.31, 99.47],
                    "5": [18.92, 107.89],
                    "6": [20.54, 116.31],
                    "7": [22.16, 124.73],
                    "8": [23.77, 133.16],
                    "9": [25.39, 141.58],
                    "10": [27, 150]
                }
            }
        }
    }, "anis_sparkling_summer": {
        "id": "anis_sparkling_summer",
        "name": "Anis: Sparkling Summer",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Sparkling Boost",
                "description": "■ Activates when entering Full Burst. Affects all Electric Code allies. ATK ▲ __% of caster's ATK for 10 sec. Reloading Speed ▲ __% for 10 sec.",
                "values": {
                    "1": [32.68, 29.12],
                    "2": [35.2, 31.36],
                    "3": [37.71, 33.6],
                    "4": [40.22, 35.84],
                    "5": [42.74, 38.08],
                    "6": [45.25, 40.32],
                    "7": [47.77, 42.56],
                    "8": [50.28, 44.8],
                    "9": [52.8, 47.04],
                    "10": [55.31, 49.28]
                }
            }, "skill_2": {
                "name": "Sparkling Missile",
                "description": "■ Activates when firing the last bullet. Affects 2 enemy unit(s) with the highest ATK. Deals __% of final ATK as damage. ■ Activates when firing the last bullet. Affects self. Damage to Interruption Parts ▲ __% for 10 sec.",
                "values": {
                    "1": [225.97, 4.08],
                    "2": [243.36, 4.4],
                    "3": [260.74, 4.71],
                    "4": [278.12, 5.02],
                    "5": [295.5, 5.34],
                    "6": [312.89, 5.65],
                    "7": [330.27, 5.97],
                    "8": [347.65, 6.28],
                    "9": [365.04, 6.6],
                    "10": [382.42, 6.91]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Sparkling Wave",
                "description": "■ Affects self. Max Ammunition Capacity ▼ __% for 10 sec. Reloading Speed ▲ __% for 10 sec. Damage as strong element ▲ __% for 10 sec.",
                "values": {
                    "1": [43.68, 16.38, 24.96],
                    "2": [47.04, 17.64, 26.88],
                    "3": [50.4, 18.9, 28.8],
                    "4": [53.76, 20.16, 30.72],
                    "5": [57.12, 21.42, 32.64],
                    "6": [60.48, 22.68, 34.56],
                    "7": [63.84, 23.94, 36.48],
                    "8": [67.2, 25.2, 38.4],
                    "9": [70.56, 26.46, 40.32],
                    "10": [73.92, 27.72, 42.24]
                }
            }
        }
    }, "anne_miracle_fairy": {
        "id": "anne_miracle_fairy",
        "name": "Anne: Miracle Fairy",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Fairy Dance",
                "description": "■ Affects all Supporter allies. Activates after 3 normal attack(s). Recover __% of attack damage as HP over 5 sec.",
                "values": {
                    "1": [3.33],
                    "2": [3.64],
                    "3": [3.94],
                    "4": [4.25],
                    "5": [4.55],
                    "6": [4.85],
                    "7": [5.16],
                    "8": [5.46],
                    "9": [5.76],
                    "10": [6.07]
                }
            }, "skill_2": {
                "name": "Fairy's Jest",
                "description": "■ Affects all allies. Activates when above 90% HP. HP Potency ▲ __%. ■ Activates when the last bullet hits the target while having over 90% HP. Affects all enemies. HP Potency ▼ __% for 10 sec.",
                "values": {
                    "1": [12.9, 43.41],
                    "2": [14.08, 47.36],
                    "3": [15.25, 51.3],
                    "4": [16.42, 55.25],
                    "5": [17.6, 59.2],
                    "6": [18.77, 63.14],
                    "7": [19.94, 67.09],
                    "8": [21.12, 71.04],
                    "9": [22.29, 74.98],
                    "10": [23.46, 78.93]
                }
            }, "burst_skill": {
                "cooldown": 60,
                "name": "Blue Butterfly Slumber",
                "description": "■ Affects all Attacker allies. Recovers __% of the caster's final Max HP as HP. ATK ▲ __% for 10 sec. ■ Affects 1 fallen Attacker ally unit(s) randomly. Resurrect with __% HP. Activates once per battle.",
                "values": {
                    "1": [21.23, 42.47, 54.45],
                    "2": [23.16, 46.33, 59.4],
                    "3": [25.09, 50.19, 64.35],
                    "4": [27.02, 54.05, 69.3],
                    "5": [28.95, 57.91, 74.25],
                    "6": [30.88, 61.77, 79.2],
                    "7": [32.81, 65.63, 84.15],
                    "8": [34.74, 69.49, 89.1],
                    "9": [36.67, 73.35, 94.05],
                    "10": [38.61, 77.22, 99]
                }
            }
        }
    }, "aria": {
        "id": "aria",
        "name": "Aria",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Allegro",
                "description": "■ Activates at the beginning of Full Burst. Affects all allies. Critical Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [13.49],
                    "2": [14.99],
                    "3": [16.49],
                    "4": [17.99],
                    "5": [19.49],
                    "6": [20.99],
                    "7": [22.49],
                    "8": [23.99],
                    "9": [25.49],
                    "10": [26.99]
                }
            }, "skill_2": {
                "name": "Lacrimoso",
                "description": "■ Activates when the last bullet hits the target. Affects all allies. Critical Rate ▲ __% for 5 sec.",
                "values": {
                    "1": [3.51],
                    "2": [3.9],
                    "3": [4.29],
                    "4": [4.68],
                    "5": [5.07],
                    "6": [5.46],
                    "7": [5.85],
                    "8": [6.24],
                    "9": [6.64],
                    "10": [7.03]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Da Capo Aria",
                "description": "■ Affects all allies. Generates a Shield with __% of the caster's final Max HP for 10 sec. ■ Affects self. Hit Rate ▲ __% for 15 sec.",
                "values": {
                    "1": [18.93, 15.18],
                    "2": [21.03, 16.87],
                    "3": [23.14, 18.56],
                    "4": [25.24, 20.25],
                    "5": [27.34, 21.93],
                    "6": [29.45, 23.62],
                    "7": [31.55, 25.31],
                    "8": [33.66, 27],
                    "9": [35.76, 28.68],
                    "10": [37.86, 30.37]
                }
            }
        }
    }, "asuka_shikinami_langley": {
        id: "asuka_shikinami_langley",
        name: "Asuka",
        manufacturer: NikkeManufacturer.Abnormal,
        role: NikkeRole.Attacker,
        weapon_type: WeaponType.AR,
        rarity: NikkeRarity.SSR,
        burst: Burst.Burst_III,
        element: NikkeElement.Fire,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Competitiveness",
                description: "■ Activates at the start of the battle. Affects self. Damage dealt to Shield ▲ __% continuously. ■ Activates when recovery takes effect. Affects self. ATK ▲ __% for 25 sec.",
                values: {
                    1: [404.65, 57.93],
                    2: [426.47, 62.27],
                    3: [448.29, 66.61],
                    4: [470.1, 70.94],
                    5: [491.92, 75.28],
                    6: [513.74, 79.62],
                    7: [535.56, 83.96],
                    8: [557.38, 88.3],
                    9: [579.2, 92.64],
                    10: [601.01, 96.98]
                }
            }, skill_2: {
                name: "Assault Tactics",
                description: "■ Activates when entering Full Burst. Affects self when in Shield status. Damage as strong element ▲ __% for 10 sec. ■ Activates when entering Full Burst. Affects all Fire Code allies. Damage dealt when attacking core ▲ __% for 10 sec.",
                values: {
                    1: [17.78, 33.19],
                    2: [19.14, 36.18],
                    3: [20.5, 39.17],
                    4: [21.86, 42.15],
                    5: [23.22, 45.14],
                    6: [24.58, 48.13],
                    7: [25.94, 51.11],
                    8: [27.3, 54.1],
                    9: [28.66, 57.09],
                    10: [30.02, 60.07]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Piercing Bullets",
                description: "■ Affects self. Gain Pierce for 25 sec. Attack damage ▲ __% for 10 sec. Recovers __% of attack damage as HP over 10 sec. Hit Rate ▲ __% for 10 sec.",
                values: {
                    1: [63.64, 1.87, 59.9],
                    2: [73.24, 2.01, 64.51],
                    3: [82.84, 2.16, 69.12],
                    4: [92.44, 2.3, 73.72],
                    5: [102.04, 2.44, 78.33],
                    6: [111.64, 2.59, 82.94],
                    7: [121.24, 2.73, 87.55],
                    8: [130.84, 2.88, 92.16],
                    9: [140.44, 3.02, 96.76],
                    10: [150.04, 3.16, 101.37]
                }
            }
        }
    }, "bay": {
        "id": "bay",
        "name": "Bay",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "You Can Do It",
                "description": "■ Activates if self survives when using Burst Skill. Affects all allies. Proportionally shares damage taken continuously. DEF ▲ __% of caster's DEF continuously.",
                "values": {
                    "1": [5.57],
                    "2": [6.08],
                    "3": [6.58],
                    "4": [7.09],
                    "5": [7.6],
                    "6": [8.11],
                    "7": [8.61],
                    "8": [9.12],
                    "9": [9.63],
                    "10": [10.13]
                }
            }, "skill_2": {
                "name": "Cheer Up Together",
                "description": "■ Activates if self survives when using Burst Skill. Affects all allies. Proportionally shares damage taken continuously. ■ Activates when Full Burst ends. Affects self. Constantly recovers Cover's HP by __% of caster's final Max HP every 1 sec for 5 sec.",
                "values": {
                    "1": [1.58],
                    "2": [1.72],
                    "3": [1.87],
                    "4": [2.01],
                    "5": [2.16],
                    "6": [2.3],
                    "7": [2.44],
                    "8": [2.59],
                    "9": [2.73],
                    "10": [2.88]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "First Winner",
                "description": "■ Affects self. Cover's Max HP ▲ __% of the caster's Max HP, lasts for 20 sec. ■ Affects all allies. Damage Taken ▼ __% for 10 sec.",
                "values": {
                    "1": [9.9, 4.87],
                    "2": [10.8, 5.32],
                    "3": [11.7, 5.76],
                    "4": [12.6, 6.2],
                    "5": [13.5, 6.65],
                    "6": [14.4, 7.09],
                    "7": [15.3, 7.53],
                    "8": [16.2, 7.98],
                    "9": [17.1, 8.42],
                    "10": [18, 8.87]
                }
            }
        }
    }, "biscuit": {
        "id": "biscuit",
        "name": "Biscuit",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Happy Puppy",
                "description": "■ Activates at the end of Full Burst. Affects all Attacker allies. Critical Rate of normal attack ▲ __% for 10 sec. Constantly recovers __% of caster's final Max HP every 1 sec for 10 sec.",
                "values": {
                    "1": [1.13, 1.05],
                    "2": [1.64, 1.1],
                    "3": [2.16, 1.16],
                    "4": [2.68, 1.21],
                    "5": [3.19, 1.26],
                    "6": [3.71, 1.32],
                    "7": [4.22, 1.37],
                    "8": [4.74, 1.42],
                    "9": [5.25, 1.48],
                    "10": [5.77, 1.53]
                }
            }, "skill_2": {
                "name": "Tug of War",
                "description": "■ Activates when a Defender ally's Hp falls below 50%. Affects the target Defender ally. Invincible for 5 sec. Activates 2 time(s) per battle. Recovers __% of caster's final Max HP. Activates 2 time(s) per battle.",
                "values": {
                    "1": [12.46],
                    "2": [13.66],
                    "3": [14.86],
                    "4": [16.06],
                    "5": [17.26],
                    "6": [18.46],
                    "7": [19.66],
                    "8": [20.86],
                    "9": [22.06],
                    "10": [23.26]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Walk Training",
                "description": "■ Affects 2 random ally unit(s) whose cover has been destroyed. Rebuild Cover with __% HP. ■ Affects all Supporter allies. ATK ▲ __% for 10 sec. Recovers __% of attack damage as HP over 10 sec.",
                "values": {
                    "1": [51.48, 17.42, 35.39],
                    "2": [56.16, 20.27, 37.62],
                    "3": [60.84, 23.12, 39.84],
                    "4": [65.52, 25.97, 42.07],
                    "5": [70.2, 28.82, 44.3],
                    "6": [74.88, 31.68, 46.53],
                    "7": [79.56, 34.53, 48.75],
                    "8": [84.24, 37.38, 50.98],
                    "9": [88.92, 40.23, 53.21],
                    "10": [93.6, 43.08, 55.44]
                }
            }
        }
    }, "blanc": {
        "id": "blanc",
        "name": "Blanc",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Lucky Guard",
                "description": "■ Activates after landing 120 normal attack(s). Creates a Shield equal to __% of the caster's final Max HP, which protects all allies from damage. Lasts for 5 sec.",
                "values": {
                    "1": [6.97],
                    "2": [7.51],
                    "3": [8.04],
                    "4": [8.58],
                    "5": [9.12],
                    "6": [9.65],
                    "7": [10.19],
                    "8": [10.73],
                    "9": [11.26],
                    "10": [11.8]
                }
            }, "skill_2": {
                "name": "Rabbit Twins W",
                "description": "■ Activates after Full Burst ends. Affects all allies. Constantly recovers __% of caster's final Max HP every 1 sec for 5 sec. ■ Activates when Full Burst ends with an ally from the same squad still on the battlefield. Affects self. Cooldown of Burst Skill ▼ 40.76 sec.",
                "values": {
                    "1": [1.78],
                    "2": [1.99],
                    "3": [2.2],
                    "4": [2.41],
                    "5": [2.62],
                    "6": [2.84],
                    "7": [3.05],
                    "8": [3.26],
                    "9": [3.47],
                    "10": [3.68]
                }
            }, "burst_skill": {
                "cooldown": 60,
                "name": "Showtime",
                "description": "■ Affects all allies. Constantly recovers __% of caster's final Max HP every 1 sec for 8 sec. ■ Affects 1 ally unit(s) with the lowest remaining HP (except caster). Gain Indomitability for 10 sec. Max HP ▲ __% for 10 sec. ■ Affects all enemies. Damage Taken ▲ __% for 10 sec.",
                "values": {
                    "1": [2.05, 18.72, 20.08],
                    "2": [2.25, 20.16, 22.21],
                    "3": [2.45, 21.6, 24.34],
                    "4": [2.65, 23.04, 26.48],
                    "5": [2.85, 24.48, 28.61],
                    "6": [3.04, 25.92, 30.74],
                    "7": [3.24, 27.36, 32.87],
                    "8": [3.44, 28.8, 35],
                    "9": [3.64, 30.24, 37.13],
                    "10": [3.84, 31.68, 39.26]
                }
            }
        }
    }, "brid": {
        "id": "brid",
        "name": "Brid",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Acceleration",
                "description": "■ Affects self. Activates after 30 normal attack(s). ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [10.94],
                    "2": [11.78],
                    "3": [12.63],
                    "4": [13.47],
                    "5": [14.31],
                    "6": [15.15],
                    "7": [16],
                    "8": [16.84],
                    "9": [17.68],
                    "10": [18.52]
                }
            }, "skill_2": {
                "cooldown": 10,
                "name": "Leak",
                "description": "■ Affects the enemy with the highest DEF. Deals __% of final ATK as damage.",
                "values": {
                    "1": [124.8],
                    "2": [134.4],
                    "3": [144],
                    "4": [153.6],
                    "5": [163.2],
                    "6": [172.8],
                    "7": [182.4],
                    "8": [192],
                    "9": [201.6],
                    "10": [211.2]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "AZX",
                "description": "■ Affects the enemy with the highest DEF. Deals __% of final ATK as damage. ■ Affects the same target when at Max HP. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [792, 792],
                    "2": [864, 864],
                    "3": [936, 936],
                    "4": [1008, 1008],
                    "5": [1080, 1080],
                    "6": [1152, 1152],
                    "7": [1224, 1224],
                    "8": [1296, 1296],
                    "9": [1368, 1368],
                    "10": [1440, 1440]
                }
            }
        }
    }, "centi": {
        "id": "centi",
        "name": "Centi",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Maintain Fortification",
                "description": "■ Activates when hitting a target with Full Charge. Affects self. Cooldown of Skill 2 ▼ __%.",
                "values": {
                    "1": [4.58],
                    "2": [5.09],
                    "3": [5.6],
                    "4": [6.11],
                    "5": [6.62],
                    "6": [7.12],
                    "7": [7.63],
                    "8": [8.14],
                    "9": [8.65],
                    "10": [9.16]
                }
            }, "skill_2": {
                "cooldown": 9,
                "name": "Field Discussion",
                "description": "■ Affects self. Creates a Shield, equivalent to __% of the caster's final Max HP, which protects all allies from damage. Lasts for 5 sec.",
                "values": {
                    "1": [3.19],
                    "2": [3.54],
                    "3": [3.89],
                    "4": [4.25],
                    "5": [4.6],
                    "6": [4.96],
                    "7": [5.31],
                    "8": [5.67],
                    "9": [6.02],
                    "10": [6.38]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Start Construction",
                "description": "■ Affects 5 enemy unit(s) with the lowest remaining HP. Deals __% of final ATK as damage. DEF ▼ __% for 10 sec.",
                "values": {
                    "1": [72.73, 7.27],
                    "2": [80.81, 8.08],
                    "3": [88.89, 8.88],
                    "4": [96.97, 9.69],
                    "5": [105.06, 10.5],
                    "6": [113.14, 11.31],
                    "7": [121.22, 12.12],
                    "8": [129.3, 12.93],
                    "9": [137.38, 13.73],
                    "10": [145.46, 14.54]
                }
            }
        }
    }, "clay": {
        "id": "clay",
        "name": "Clay",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "DON'T MISS!",
                "description": "■ Activates after landing 60 normal attack(s) during Full Burst Time. Affects all allies. Victorious Battle Cry: True Damage ▲ __%, stacks up to 3 time(s) and lasts for 6 sec. When attacking an enemy projectile, damage to that projectile ▲ __% for 6 sec.",
                "values": {
                    "1": [3.81, 28.81],
                    "2": [4.1, 30.61],
                    "3": [4.4, 32.42],
                    "4": [4.69, 34.22],
                    "5": [4.98, 36.02],
                    "6": [5.28, 37.83],
                    "7": [5.57, 39.63],
                    "8": [5.86, 41.44],
                    "9": [6.16, 43.24],
                    "10": [6.45, 45.05]
                }
            }, "skill_2": {
                "name": "WAKE UP!",
                "description": "■ Activates when entering Burst stage 1. Affects all allies. Immune to 1 debuff(s) for 10 sec. ■ Only activates when in Victorious Battle Cry status. Affects all allies. ATK ▲ __% of caster's ATK continuously.",
                "values": {
                    "1": [11.8],
                    "2": [12.72],
                    "3": [13.64],
                    "4": [14.56],
                    "5": [15.48],
                    "6": [16.39],
                    "7": [17.31],
                    "8": [18.23],
                    "9": [19.15],
                    "10": [20.07]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "GO! GO! VICTORY!",
                "description": "■ Affects all allies. True Damage ▲ __% for 10 sec. ■ Affects self. Normal attacks deal true damage for 10 sec.",
                "values": {
                    "1": [6.86],
                    "2": [7.49],
                    "3": [8.13],
                    "4": [8.76],
                    "5": [9.39],
                    "6": [10.03],
                    "7": [10.66],
                    "8": [11.29],
                    "9": [11.93],
                    "10": [12.56]
                }
            }
        }
    }, "cocoa": {
        "id": "cocoa",
        "name": "Cocoa",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "cooldown": 15,
                "name": "Professional Origami",
                "description": "■ Affects all allies. Recovers __% of Cover's HP. ■ Affects 2 random ally unit(s) with debuffs. Dispels 1 debuff(s).",
                "values": {
                    "1": [9.77],
                    "2": [10.66],
                    "3": [11.55],
                    "4": [12.43],
                    "5": [13.32],
                    "6": [14.21],
                    "7": [15.1],
                    "8": [15.99],
                    "9": [16.88],
                    "10": [17.76]
                }
            }, "skill_2": {
                "name": "Professional Tomato Sauce",
                "description": "■ Activates when attacking with Full Charge. Affects self. Professional Tomato Sauce: Damage Taken ▼ __%, stacks up to 15 time(s) and lasts for 5 sec.",
                "values": {
                    "1": [2.4],
                    "2": [2.62],
                    "3": [2.84],
                    "4": [3.06],
                    "5": [3.28],
                    "6": [3.5],
                    "7": [3.71],
                    "8": [3.93],
                    "9": [4.15],
                    "10": [4.37]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Professional Maid Leader",
                "description": "■ Affects all allies. Dispels 1 debuff(s). ■ Activates when Professional Tomato Sauce is fully stacked. Affects all enemies. ATK ▼ __% for 10 sec.",
                "values": {
                    "1": [7.47],
                    "2": [8.15],
                    "3": [8.83],
                    "4": [9.51],
                    "5": [10.19],
                    "6": [10.87],
                    "7": [11.55],
                    "8": [12.23],
                    "9": [12.91],
                    "10": [13.59]
                }
            }
        }
    }, "crow": {
        "id": "crow",
        "name": "Crow",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Killing Time",
                "description": "■ Affects all enemies. Activates when entering Full Burst. ATK ▼ __% for 10 sec.",
                "values": {
                    "1": [11.77],
                    "2": [12.68],
                    "3": [13.59],
                    "4": [14.49],
                    "5": [15.4],
                    "6": [16.31],
                    "7": [17.21],
                    "8": [18.12],
                    "9": [19.02],
                    "10": [19.93]
                }
            }, "skill_2": {
                "name": "Daredevil",
                "description": "■ Activates when the last bullet hits the target. Affects the target. Deals __% of final ATK as additional damage. ■ Activates when the last bullet hits the target. Affects self. DEF ▲ __% for 5 sec.",
                "values": {
                    "1": [52.65, 7.52],
                    "2": [56.7, 8.1],
                    "3": [60.75, 8.67],
                    "4": [64.8, 9.25],
                    "5": [68.85, 9.83],
                    "6": [72.9, 10.41],
                    "7": [76.95, 10.99],
                    "8": [81, 11.57],
                    "9": [85.05, 12.15],
                    "10": [89.09, 12.72]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "The Terrorist",
                "description": "■ Affects the enemy with the highest ATK. Deals __% of final ATK as damage.",
                "values": {
                    "1": [541.12],
                    "2": [582.75],
                    "3": [624.37],
                    "4": [666],
                    "5": [707.62],
                    "6": [749.25],
                    "7": [790.87],
                    "8": [832.5],
                    "9": [874.12],
                    "10": [915.75]
                }
            }
        }
    }, "crown": {
        "id": "crown",
        "name": "Crown",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "One for All",
                "description": "■ Activates at the start of Full Burst. Affects all allies who previously cast their Burst Skills. ATK ▲ __% of caster's ATK for 15 sec. Reloading Speed ▲ __% for 15 sec. ■ Affects all allies who did not previously cast their Burst Skills. DEF ▲ __% of caster's DEF for 15 sec. Reloading Speed ▲ __% for 15 sec.",
                "values": {
                    "1": [40.32, 27.72, 23.4, 27.72],
                    "2": [43, 29.56, 24.96, 29.56],
                    "3": [45.69, 31.41, 26.52, 31.41],
                    "4": [48.38, 33.26, 28.08, 33.26],
                    "5": [51.07, 35.11, 29.64, 35.11],
                    "6": [53.76, 36.96, 31.2, 36.96],
                    "7": [56.44, 38.8, 32.76, 38.8],
                    "8": [59.13, 40.65, 34.32, 40.65],
                    "9": [61.82, 42.5, 35.88, 42.5],
                    "10": [64.51, 44.35, 37.44, 44.35]
                }
            }, "skill_2": {
                "name": "Royal Attire",
                "description": "■ Activates after __ normal attack(s). Affects self. Relax: HP Potency ▲ __% continuously, stacks up to 20 time(s). ■ Activates when Relax is fully stacked. Affects self after the stacks are removed. Invulnerable for __ sec. Attract: Taunt all enemies for __ sec. Recovers __% of the caster’s final Max HP as HP. ■ Activates when recovery takes effect. Affects all allies. Attack Damage ▲ __% for 7 sec.",
                "values": {
                    "1": [65, 2.54, 2.57, 2.57, 3.27, 13.12],
                    "2": [62, 2.71, 2.84, 2.84, 3.49, 13.99],
                    "3": [59, 2.88, 3.11, 3.11, 3.7, 14.87],
                    "4": [56, 3.05, 3.38, 3.38, 3.92, 15.74],
                    "5": [53, 3.22, 3.65, 3.65, 4.14, 16.62],
                    "6": [51, 3.38, 3.92, 3.92, 4.36, 17.49],
                    "7": [49, 3.55, 4.19, 4.19, 4.58, 18.37],
                    "8": [47, 3.72, 4.46, 4.46, 4.8, 19.24],
                    "9": [45, 3.89, 4.73, 4.73, 5.01, 20.12],
                    "10": [43, 4.06, 5, 5, 5.23, 20.99]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Last Kingdom",
                "description": "■ Affects all allies. Attack Damage ▲ __% for 15 sec. Creates a Shield equal to __% of the caster’s final Max HP for 15 sec.",
                "values": {
                    "1": [22.65, 6.53],
                    "2": [24.16, 6.96],
                    "3": [25.67, 7.4],
                    "4": [27.18, 7.84],
                    "5": [28.69, 8.27],
                    "6": [30.2, 8.71],
                    "7": [31.71, 9.14],
                    "8": [33.22, 9.58],
                    "9": [34.73, 10.01],
                    "10": [36.24, 10.45]
                }
            }
        }
    }, "d": {
        "id": "d",
        "name": "D",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Vigorous Waves",
                "description": "■ Activates when entering Full Burst. Affects self. Damage as strong element ▲ __% for 15 sec. Recovers __% of attack damage as HP, lasts for 15 sec. ■ Affects self when first activated. Additionally recovers __% of ATK damage as HP, lasts for 15 sec.",
                "values": {
                    "1": [27.73, 2.08, 9.75],
                    "2": [29.86, 2.24, 10.5],
                    "3": [32, 2.4, 11.25],
                    "4": [34.13, 2.56, 12],
                    "5": [36.26, 2.72, 12.75],
                    "6": [38.4, 2.88, 13.5],
                    "7": [40.53, 3.04, 14.25],
                    "8": [42.66, 3.2, 15],
                    "9": [44.8, 3.36, 15.75],
                    "10": [46.93, 3.52, 16.5]
                }
            }, "skill_2": {
                "name": "Surprise Attack",
                "description": "■ Activates when the target appears. Affects all allies. Fills Burst Gauge by __%. Activates 1 time(s) per battle. Become immune to Stun for __ sec. ■ Activates when the target appears. Affects self. Damage as strong element ▲ __% for 15 sec.",
                "values": {
                    "1": [73.21, 19.44, 44.68],
                    "2": [76.03, 21.39, 49.84],
                    "3": [78.84, 23.33, 55],
                    "4": [81.66, 25.28, 60.15],
                    "5": [84.48, 27.22, 65.31],
                    "6": [87.29, 29.17, 70.46],
                    "7": [90.11, 31.11, 75.62],
                    "8": [92.92, 33.06, 80.78],
                    "9": [95.74, 35, 85.93],
                    "10": [98.56, 36.95, 91.09]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Chastisement",
                "description": "■ Affects all enemies. Deals __% of final ATK as damage. ■ Affects all Attacker allies. Damage to Parts ▲ __% for 15 sec. ■ Affects all allies if the caster has immunity to Stun. Full Burst Time ▲ 5.04 sec.",
                "values": {
                    "1": [138.52, 16.69],
                    "2": [170.49, 19.55],
                    "3": [202.46, 22.4],
                    "4": [234.43, 25.25],
                    "5": [266.4, 28.11],
                    "6": [298.36, 30.96],
                    "7": [330.33, 33.82],
                    "8": [362.3, 36.67],
                    "9": [394.27, 39.52],
                    "10": [426.24, 42.38]
                }
            }
        }
    }, "d_killer_wife": {
        "id": "d_killer_wife",
        "name": "D: Killer Wife",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Calm Sniping",
                "description": "■ Activates when attacking with Full Charge for 3 time(s). Affects self. Gain Pierce for 1 shot. ■ Activates when entering Full Burst. Affects all allies with a Sniper Rifle. Pierce Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [8],
                    "2": [8.62],
                    "3": [9.24],
                    "4": [9.85],
                    "5": [10.47],
                    "6": [11.08],
                    "7": [11.7],
                    "8": [12.32],
                    "9": [12.93],
                    "10": [13.55]
                }
            }, "skill_2": {
                "name": "Assault Formation",
                "description": "■ Activates when attacking with Full Charge for 8 time(s). Affects all allies. Cooldown of Burst Skill ▼ __ sec. ■ Activates when attacking with Full Charge for 5 time(s). Affects all allies. Attack damage ▲ __% for 10 sec.",
                "values": {
                    "1": [4.13, 2.99],
                    "2": [4.45, 3.22],
                    "3": [4.77, 3.45],
                    "4": [5.09, 3.68],
                    "5": [5.4, 3.91],
                    "6": [5.72, 4.14],
                    "7": [6.04, 4.37],
                    "8": [6.36, 4.6],
                    "9": [6.68, 4.83],
                    "10": [7, 5.06]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Kill the Target",
                "description": "■ Affects the enemy nearest to the crosshair. Deals __% of final ATK as additional damage. Inflicts Wipe Out on the target for 10 sec. ■ Activates when allies' normal attack hits a certain area of the target afflicted with Wipe Out. Affects allies. Buff takes effect depending on the area hit. Allies that hit parts: Damage dealt when attacking core ▲ __% for 10 sec. Allies that hit the body: ATK ▲ __% of caster's ATK for 10 sec.",
                "values": {
                    "1": [159.12, 9.6, 7.2],
                    "2": [171.36, 10.34, 7.76],
                    "3": [183.6, 11.08, 8.31],
                    "4": [195.84, 11.82, 8.87],
                    "5": [208.08, 12.56, 9.42],
                    "6": [220.32, 13.3, 9.97],
                    "7": [232.56, 14.04, 10.53],
                    "8": [244.8, 14.78, 11.08],
                    "9": [257.04, 15.52, 11.64],
                    "10": [269.28, 16.26, 12.19]
                }
            }
        }
    }, "diesel": {
        "id": "diesel",
        "name": "Diesel",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Wind,
        has_treasure: true,
        "skills": {
            "skill_1": {
                "name": "Strawberry Fields",
                "description": "■ Activates when entering Full Burst. Affects self. DEF ▲ __% for 10 sec. ■ Activates when attacked during Full Burst. Affects self. Recovers HP by __% of the caster's final Max HP.",
                "values": {
                    "1": [15.12, 7.56],
                    "2": [16.32, 8.16],
                    "3": [17.52, 8.76],
                    "4": [18.72, 9.36],
                    "5": [19.92, 9.96],
                    "6": [21.12, 10.56],
                    "7": [22.32, 11.16],
                    "8": [23.52, 11.76],
                    "9": [24.72, 12.36],
                    "10": [25.92, 12.96]
                }
            }, "skill_2": {
                "name": "Sweet Strawberry Goodness",
                "description": "■ Activates after landing 100 normal attack(s). Affects self. Strawberry Candy: Max Ammunition Capacity ▲ __%, stacks up to 10 time(s) and lasts for 10 sec. ■ Affects all allies when the caster reaches max stacks of Strawberry Candy. Activates after clearing stacks effect. Reload __% magazine(s).",
                "values": {
                    "1": [28.35, 43.31],
                    "2": [31.5, 48.12],
                    "3": [34.65, 52.93],
                    "4": [37.8, 57.75],
                    "5": [40.95, 62.56],
                    "6": [44.1, 67.37],
                    "7": [47.25, 72.18],
                    "8": [50.4, 77],
                    "9": [53.55, 81.81],
                    "10": [56.7, 86.62]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Strawberry Shock",
                "description": "■ Affects 5 enemy unit(s) with the highest ATK. Deals __% of final ATK as damage. Taunt for __ sec.",
                "values": {
                    "1": [154.19, 2.53],
                    "2": [170.36, 2.81],
                    "3": [186.52, 3.09],
                    "4": [202.68, 3.37],
                    "5": [218.85, 3.65],
                    "6": [235.01, 3.93],
                    "7": [251.17, 4.21],
                    "8": [267.34, 4.5],
                    "9": [283.5, 4.78],
                    "10": [299.66, 5.06]
                }
            }
        }
    }, "dolla": {
        "id": "dolla",
        "name": "Dolla",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "cooldown": 10,
                "name": "Entrepreneurship",
                "description": "■ Affects all allies. ATK ▲ __% for 5 sec.",
                "values": {
                    "1": [8.88],
                    "2": [9.69],
                    "3": [10.5],
                    "4": [11.31],
                    "5": [12.12],
                    "6": [12.93],
                    "7": [13.73],
                    "8": [14.54],
                    "9": [15.35],
                    "10": [16.16]
                }
            }, "skill_2": {
                "name": "Risk Sharing",
                "description": "■ Activates when entering Full Burst. Affects all allies. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Cooldown of Burst Skill ▼ 1.82 sec. Twice: Cooldown of Burst Skill ▼ 2.2 sec. Three times: Cooldown of Burst Skill ▼ 2.6 sec. ■ Activates when using Burst Skill. Affects all allies. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: ATK ▲ __% for 5 sec. Twice: Critical Rate ▲ __% for 5 sec. Three times: Critical Damage ▲ __% for 5 sec.",
                "values": {
                    "1": [1.18, 1.05, 3.85],
                    "2": [1.91, 1.4, 4.89],
                    "3": [2.64, 1.75, 5.93],
                    "4": [3.36, 2.1, 6.98],
                    "5": [4.09, 2.45, 8.02],
                    "6": [4.81, 2.8, 9.06],
                    "7": [5.54, 3.15, 10.1],
                    "8": [6.27, 3.5, 11.14],
                    "9": [6.99, 3.85, 12.18],
                    "10": [7.72, 4.21, 13.22]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "R&D Shot",
                "description": "■ Affects 1 enemy unit(s) with the highest DEF. Deals __% of final ATK as damage.",
                "values": {
                    "1": [404.08],
                    "2": [440.81],
                    "3": [477.55],
                    "4": [514.28],
                    "5": [551.02],
                    "6": [587.75],
                    "7": [624.48],
                    "8": [661.22],
                    "9": [697.95],
                    "10": [734.69]
                }
            }
        }
    }, "dorothy": {
        "id": "dorothy",
        "name": "Dorothy",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Holy Fire",
                "description": "■ Activates when firing the last bullet. Affects all allies. Cooldown of Burst Skill ▼ __ sec. ■ Activates when firing the last bullet during Manifestation. Affects all allies. Damage to Parts ▲ __% for 5 sec.",
                "values": {
                    "1": [0.97, 31.68],
                    "2": [1.04, 33.79],
                    "3": [1.1, 35.9],
                    "4": [1.17, 38.01],
                    "5": [1.23, 40.12],
                    "6": [1.3, 42.24],
                    "7": [1.36, 44.35],
                    "8": [1.43, 46.46],
                    "9": [1.49, 48.57],
                    "10": [1.56, 50.68]
                }
            }, "skill_2": {
                "cooldown": 20,
                "name": "Baptism",
                "description": "■ Affects all enemies. Scorch to Dust: Deals __% of final ATK as Distributed Damage.",
                "values": {
                    "1": [135],
                    "2": [144],
                    "3": [153],
                    "4": [162],
                    "5": [171],
                    "6": [180],
                    "7": [189],
                    "8": [198],
                    "9": [207],
                    "10": [216]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Paradise Lost",
                "description": "■ Affects self. Manifestation: Cooldown of Skill 2 ▼ 18 sec, lasts for 10 sec. Gain Pierce for 10 sec. ■ Affects a designated enemy. Brand: Accumulates total damage dealt to the designated enemy during the duration, and then deals that accumulated damage to all enemies as Distributed Damage once the duration ends. The maximum accumulated damage is __% of the caster's final ATK. Lasts for 10 sec.",
                "values": {
                    "1": [5563.01],
                    "2": [5933.88],
                    "3": [6304.75],
                    "4": [6675.62],
                    "5": [7046.49],
                    "6": [7417.35],
                    "7": [7788.22],
                    "8": [8159.09],
                    "9": [8529.96],
                    "10": [8900.83]
                }
            }
        }
    }, "drake": {
        "id": "drake",
        "name": "Drake",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Overcharge",
                "description": "■ Activates at the beginning of Full Burst. Affects all allies. Hit Rate ▲ __% for 10 sec. ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [7, 7],
                    "2": [7.54, 7.54],
                    "3": [8.08, 8.08],
                    "4": [8.62, 8.62],
                    "5": [9.15, 9.15],
                    "6": [9.69, 9.69],
                    "7": [10.23, 10.23],
                    "8": [10.77, 10.77],
                    "9": [11.31, 11.31],
                    "10": [11.85, 11.85]
                }
            }, "skill_2": {
                "name": "Thunderbolt",
                "description": " Activates after 10 attack(s). Affects 3 enemy unit(s) with the lowest remaining HP. Deals __% of final ATK as damage.",
                "values": {
                    "1": [58.24],
                    "2": [62.72],
                    "3": [67.19],
                    "4": [71.68],
                    "5": [76.16],
                    "6": [80.64],
                    "7": [85.11],
                    "8": [89.6],
                    "9": [94.07],
                    "10": [98.55]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Drake Special",
                "description": "■ Affects enemies within attack range. Deals __% of final ATK as damage. ■ Affects self. Max Ammunition Capacity ▲ __% for 10 sec.",
                "values": {
                    "1": [741, 42.65],
                    "2": [798, 45.93],
                    "3": [855, 49.21],
                    "4": [912, 52.5],
                    "5": [969, 55.78],
                    "6": [1026, 59.06],
                    "7": [1083, 62.34],
                    "8": [1140, 65.62],
                    "9": [1197, 68.9],
                    "10": [1254, 72.18]
                }
            }
        }
    }, "ein": {
        "id": "ein",
        "name": "Ein",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Feather Standby",
                "description": "■ Activates when entering battle. Affects self. Summons 4 Near Feathers. ■ Activates when entering Burst Skill Stage 3. Affects self. ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [41.18],
                    "2": [44.4],
                    "3": [47.61],
                    "4": [50.83],
                    "5": [54.04],
                    "6": [57.26],
                    "7": [60.48],
                    "8": [63.69],
                    "9": [66.91],
                    "10": [70.12]
                }
            }, "skill_2": {
                "name": "Feather Shot",
                "description": "■ Activates when Near Feather is summoned. Affects 1 random enemy unit(s). Near Feather Attack: Deals __% of final ATK as true damage. ■ Activates when attacking with Full Charge. Affects self. Charge Damage ▲ __% for 1 shot(s).",
                "values": {
                    "1": [59.01, 47.27],
                    "2": [62.54, 50.91],
                    "3": [66.08, 54.54],
                    "4": [69.61, 58.18],
                    "5": [73.15, 61.82],
                    "6": [76.68, 65.45],
                    "7": [80.21, 69.09],
                    "8": [83.75, 72.73],
                    "9": [87.28, 76.36],
                    "10": [90.81, 80]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Feather All-Range",
                "description": "■ Affects self. Summons 6 Near Feathers. True Damage ▲ __% for 10 sec. Charge Damage ▲ __% for 10 sec. ■ Affects 10 enemy unit(s) with the highest DEF. Deals __% of final ATK as true damage.",
                "values": {
                    "1": [31.2, 82.36, 170.32],
                    "2": [33.87, 88.84, 184.73],
                    "3": [36.55, 95.32, 199.14],
                    "4": [39.23, 101.8, 213.55],
                    "5": [41.91, 108.28, 227.96],
                    "6": [44.59, 114.76, 242.38],
                    "7": [47.27, 121.24, 256.79],
                    "8": [49.94, 127.72, 271.2],
                    "9": [52.62, 134.2, 285.61],
                    "10": [55.3, 140.68, 300.02]
                }
            }
        }
    }, "elegg": {
        "id": "elegg",
        "name": "Elegg",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Short Circuit",
                "description": "■ Activates when entering battle. Affects all allies. When attacking an enemy projectile, damage dealt to that projectile ▲ __% continuously. ■ Activates after landing 100 normal attack(s). Affects the target and 2 surrounding enemy unit(s) if the target is in BOOM Install. Deals __% of final ATK as Distributed Damage.",
                "values": {
                    "1": [35.25, 53.79],
                    "2": [37.96, 57.93],
                    "3": [40.67, 62.06],
                    "4": [43.38, 66.2],
                    "5": [46.1, 70.34],
                    "6": [48.81, 74.48],
                    "7": [51.52, 78.62],
                    "8": [54.23, 82.75],
                    "9": [56.94, 86.89],
                    "10": [59.66, 91.03]
                }
            }, "skill_2": {
                "name": "Fast Charge",
                "description": "■ Activates after landing 60 normal attack(s). Affects all allies if the target is in BOOM Install. ATK ▲ __% of caster's ATK for 5 sec. ■ Activates when the target appears. Affects all allies. Fills Burst Gauge by 100%. Activates once per battle.",
                "values": {
                    "1": [5.49],
                    "2": [6.33],
                    "3": [7.18],
                    "4": [8.02],
                    "5": [8.87],
                    "6": [9.71],
                    "7": [10.56],
                    "8": [11.4],
                    "9": [12.24],
                    "10": [13.09]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "BOOM Install",
                "description": "■ Affects all allies. Distributed Damage dealt ▲ __% for 10 sec. ■ Affects the enemy nearest to the crosshair. Deals __% of final ATK as damage. BOOM Install: DEF ▼ __% for 10 sec.",
                "values": {
                    "1": [22.46, 46.8, 21.06],
                    "2": [24.38, 50.4, 22.68],
                    "3": [26.3, 54, 24.3],
                    "4": [28.22, 57.6, 25.92],
                    "5": [30.14, 61.2, 27.54],
                    "6": [32.06, 64.8, 29.16],
                    "7": [33.98, 68.4, 30.78],
                    "8": [35.9, 72, 32.4],
                    "9": [37.82, 75.6, 34.02],
                    "10": [39.74, 79.2, 35.64]
                }
            }
        }
    }, "emilia": {
        "id": "emilia",
        "name": "Emilia",
        "manufacturer": NikkeManufacturer.Abnormal,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Lesser Spirit's Blessing",
                "description": "■ Activates when attacking with Full Charge. Affects self. Charge Speed ▲ __% for 1 round(s). Charge Damage ▲__% for every unit in the final Max Ammunition Capacity, lasts for 1 round(s).",
                "values": {
                    "1": [8.92, 1.39],
                    "2": [9.37, 1.46],
                    "3": [9.83, 1.53],
                    "4": [10.28, 1.6],
                    "5": [10.74, 1.67],
                    "6": [11.19, 1.74],
                    "7": [11.65, 1.81],
                    "8": [12.1, 1.88],
                    "9": [12.55, 1.95],
                    "10": [13.01, 2.01]
                }
            }, "skill_2": {
                "name": "Great Spirit's Mace",
                "description": "■ Activates when hitting a target with Full Charge. Affects target(s). Deals Fixed Damage to the main body equal to __% of the damage dealt by self. ■ Activates when entering Full Burst. Affects self. Max Ammunition Capacity ▲ __ round(s) for 10 sec.",
                "values": {
                    "1": [41.32, 1],
                    "2": [43.28, 1],
                    "3": [45.25, 1],
                    "4": [47.21, 2],
                    "5": [49.18, 2],
                    "6": [51.14, 2],
                    "7": [53.1, 3],
                    "8": [55.07, 3],
                    "9": [57.03, 3],
                    "10": [58.99, 3]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Freezing Witch",
                "description": "■ Affects self. Explosion Range ▲ __% for 10 sec. Freezing Witch Function: Decreases Charge Speed and increases Charge Damage for 1 shot(s). Effect 1: Charge Speed ▼ 300%. Effect 2: Charge Damage ▲ __%.",
                "values": {
                    "1": [59.82, 842.4],
                    "2": [64.42, 893.3],
                    "3": [69.03, 944.2],
                    "4": [73.63, 995.11],
                    "5": [78.23, 1046.01],
                    "6": [82.83, 1096.92],
                    "7": [87.43, 1147.82],
                    "8": [92.04, 1198.72],
                    "9": [96.64, 1249.63],
                    "10": [101.24, 1300.53]
                }
            }
        }
    }, "emma": {
        "id": "emma",
        "name": "Emma",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Cheerleading",
                "description": "■ There is a 5% chance to activate when attacked. Affects all allies. Recovers __% of the caster's final Max HP as HP.",
                "values": {
                    "1": [5.92],
                    "2": [6.46],
                    "3": [7],
                    "4": [7.54],
                    "5": [8.08],
                    "6": [8.62],
                    "7": [9.15],
                    "8": [9.69],
                    "9": [10.23],
                    "10": [10.77]
                }
            }, "skill_2": {
                "name": "Temptation",
                "description": "■ Activates when above 90% HP. Affects all allies. HP Recovery ▲ __% permanently.",
                "values": {
                    "1": [7.33],
                    "2": [8],
                    "3": [8.66],
                    "4": [9.33],
                    "5": [10],
                    "6": [10.66],
                    "7": [11.33],
                    "8": [12],
                    "9": [12.66],
                    "10": [13.33]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Altruism",
                "description": "■ Affects all allies. Recover HP equal to __% of the caster's final Max HP. Recover __% of attack damage as HP over 5 sec.",
                "values": {
                    "1": [21.78, 21.78],
                    "2": [23.76, 23.76],
                    "3": [25.74, 25.74],
                    "4": [27.72, 27.72],
                    "5": [29.7, 29.7],
                    "6": [31.68, 31.68],
                    "7": [33.66, 33.66],
                    "8": [35.64, 35.64],
                    "9": [37.62, 37.62],
                    "10": [39.6, 39.6]
                }
            }
        }
    }, "epinel": {
        "id": "epinel",
        "name": "Epinel",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Total Noob",
                "description": "■ Activates when killing an enemy. Affects self. Total Noob: ATK ▲ __%, stacks up to 5 time(s) and lasts for 15 sec.",
                "values": {
                    "1": [8.18],
                    "2": [8.82],
                    "3": [9.44],
                    "4": [10.08],
                    "5": [10.71],
                    "6": [11.34],
                    "7": [11.97],
                    "8": [12.6],
                    "9": [13.23],
                    "10": [13.86]
                }
            }, "skill_2": {
                "name": "Arachnid",
                "description": "■ Activates when the last bullet hits the target. Affects self. Critical Rate▲ __% for 5 sec. Critical Damage ▲ __% for 5 sec.",
                "values": {
                    "1": [2.98, 3.78],
                    "2": [3.21, 4.07],
                    "3": [3.44, 4.36],
                    "4": [3.67, 4.65],
                    "5": [3.9, 4.95],
                    "6": [4.13, 5.24],
                    "7": [4.36, 5.53],
                    "8": [4.59, 5.82],
                    "9": [4.82, 6.11],
                    "10": [5.05, 6.4]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "SAFE 50-50",
                "description": "■ Affects all enemies. Deals __% of final ATK as damage. ■ Activates when Total Noob is fully stacked. Affects the same target(s). Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [270.56, 270.56],
                    "2": [291.37, 291.37],
                    "3": [312.18, 312.18],
                    "4": [333, 333],
                    "5": [353.81, 353.81],
                    "6": [374.62, 374.62],
                    "7": [395.43, 395.43],
                    "8": [416.25, 416.25],
                    "9": [437.06, 437.06],
                    "10": [457.87, 457.87]
                }
            }
        }
    }, "eunhwa": {
        "id": "eunhwa",
        "name": "Eunhwa",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Ready and Able",
                "description": "■ Affects self. Activates after firing the last round. Charge Damage ▲ __% for 2 shots. Charge Speed ▲ __% for 2 rounds.",
                "values": {
                    "1": [18.64, 7.76],
                    "2": [20.71, 8.63],
                    "3": [22.78, 9.49],
                    "4": [24.85, 10.35],
                    "5": [26.92, 11.22],
                    "6": [29, 12.08],
                    "7": [31.07, 12.94],
                    "8": [33.14, 13.8],
                    "9": [35.21, 14.67],
                    "10": [37.28, 15.53]
                }
            }, "skill_2": {
                "name": "Achilles' Heel",
                "description": "■ Activates after firing the last bullet. Affects the target. DEF ▼ __% for 5 sec.",
                "values": {
                    "1": [14.5],
                    "2": [16.11],
                    "3": [17.72],
                    "4": [19.33],
                    "5": [20.94],
                    "6": [22.55],
                    "7": [24.16],
                    "8": [25.77],
                    "9": [27.38],
                    "10": [29]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Turning the Tide",
                "description": "■ Affects 10 enemy unit(s) with the highest ATK. Deals __% of final ATK as damage. DEF ▼ __% for 15 sec. ■ Affects all allies. Critical Rate ▲ __% for 15 sec.",
                "values": {
                    "1": [42.81, 1.21, 2.32],
                    "2": [47.57, 1.35, 2.58],
                    "3": [52.32, 1.48, 2.84],
                    "4": [57.08, 1.62, 3.1],
                    "5": [61.84, 1.75, 3.36],
                    "6": [66.6, 1.89, 3.62],
                    "7": [71.35, 2.02, 3.87],
                    "8": [76.11, 2.16, 4.13],
                    "9": [80.87, 2.29, 4.39],
                    "10": [85.62, 2.43, 4.65]
                }
            }
        }
    }, "exia": {
        "id": "exia",
        "name": "Exia",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Electric,
        has_treasure: true,
        "skills": {
            "skill_1": {
                "name": "Invasion",
                "description": "■ When the last round of ammunition hits, affects the target if the caster is in Collect Hacking Code. ATK ▼ __% for 5 sec. DEF ▼ __% for 5 sec.",
                "values": {
                    "1": [7.57, 7.57],
                    "2": [8.26, 8.26],
                    "3": [8.95, 8.95],
                    "4": [9.63, 9.63],
                    "5": [10.32, 10.32],
                    "6": [11.01, 11.01],
                    "7": [11.7, 11.7],
                    "8": [12.39, 12.39],
                    "9": [13.08, 13.08],
                    "10": [13.77, 13.77]
                }
            }, "skill_2": {
                "name": "Secret Code",
                "description": "■ Activates when the last round of ammunition hits. Affects self. Collect Hacking Code: ATK ▲ __%, stacks up to 5 time(s) and lasts for 15 sec.",
                "values": {
                    "1": [9.24],
                    "2": [10.08],
                    "3": [10.92],
                    "4": [11.76],
                    "5": [12.6],
                    "6": [13.44],
                    "7": [14.28],
                    "8": [15.12],
                    "9": [15.96],
                    "10": [16.8]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Partisan Protocol",
                "description": "■ Affects 10 enemy unit(s) with the highest DEF. Deals __% of final ATK as damage. DEF ▼ __% for 5 sec. ■ Activates when Collect Hacking Code is fully stacked. Affects the same target(s). Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [67.27, 1.49, 67.27],
                    "2": [73.39, 1.63, 73.39],
                    "3": [79.51, 1.76, 79.51],
                    "4": [85.62, 1.9, 85.62],
                    "5": [91.74, 2.03, 91.74],
                    "6": [97.86, 2.17, 97.86],
                    "7": [103.97, 2.31, 103.97],
                    "8": [110.09, 2.44, 110.09],
                    "9": [116.21, 2.58, 116.21],
                    "10": [122.32, 2.71, 122.32]
                }
            }
        }
    }, "folkwang": {
        "id": "folkwang",
        "name": "Folkwang",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "cooldown": 30,
                "name": "Starting Whistle",
                "description": "■ Affects 2 allies with the highest ATK. Gain a Shield equal to __% of the caster's final Max HP for 10 sec. HP Potency ▲ __% for 10 sec.",
                "values": {
                    "1": [6.85, 22.85],
                    "2": [7.61, 25.39],
                    "3": [8.37, 27.92],
                    "4": [9.14, 30.46],
                    "5": [9.9, 33],
                    "6": [10.66, 35.54],
                    "7": [11.42, 38.08],
                    "8": [12.18, 40.62],
                    "9": [12.94, 43.16],
                    "10": [13.71, 45.7]
                }
            }, "skill_2": {
                "cooldown": 20,
                "name": "Harder, Better, Faster",
                "description": "■ Affects the enemy with the highest ATK. Taunt for 5 sec. ■ Affects self. Max HP ▲ __% for 10 sec.",
                "values": {
                    "1": [22.92],
                    "2": [25.37],
                    "3": [27.82],
                    "4": [30.26],
                    "5": [32.71],
                    "6": [35.16],
                    "7": [37.61],
                    "8": [40.06],
                    "9": [42.51],
                    "10": [44.96]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Sprint",
                "description": "■ Affects 2 allies with the highest ATK. Gain a Shield equal to __% of the caster's final Max HP for 10 sec. Recovers __% of attack damage as HP over 10 sec.",
                "values": {
                    "1": [16.45, 32.9],
                    "2": [18.28, 36.56],
                    "3": [20.1, 40.21],
                    "4": [21.93, 43.87],
                    "5": [23.76, 47.53],
                    "6": [25.59, 51.18],
                    "7": [27.42, 54.84],
                    "8": [29.25, 58.5],
                    "9": [31.07, 62.15],
                    "10": [32.9, 65.81]
                }
            }
        }
    }, "frima": {
        "id": "frima",
        "name": "Frima",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Iron,
        has_treasure: true,
        "skills": {
            "skill_1": {
                "name": "... I want to sleep",
                "description": "■ Activates after landing 4 normal attack(s). Affects the target(s). DEF ▼ __% for 10 sec.",
                "values": {
                    "1": [9.35],
                    "2": [10.08],
                    "3": [10.8],
                    "4": [11.52],
                    "5": [12.24],
                    "6": [12.96],
                    "7": [13.68],
                    "8": [14.4],
                    "9": [15.12],
                    "10": [15.84]
                }
            }, "skill_2": {
                "name": "... Ah",
                "description": "■ Activates when attacking with Full Charge. Affects all allies. Max HP ▲ __% for 4 sec.",
                "values": {
                    "1": [3.6],
                    "2": [3.88],
                    "3": [4.15],
                    "4": [4.43],
                    "5": [4.71],
                    "6": [4.98],
                    "7": [5.26],
                    "8": [5.54],
                    "9": [5.82],
                    "10": [6.09]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "… Annoying",
                "description": "■ Affects 10 enemy unit(s) with the highest DEF. Deals __% of final ATK as damage. DEF ▼ __% for 10 sec. ■ Affects all allies. Max HP ▲ __% for 4 sec.",
                "values": {
                    "1": [60.07, 5.83, 17.88],
                    "2": [64.69, 6.27, 19.25],
                    "3": [69.31, 6.72, 20.63],
                    "4": [73.93, 7.17, 22],
                    "5": [78.56, 7.62, 23.38],
                    "6": [83.18, 8.07, 24.76],
                    "7": [87.8, 8.52, 26.13],
                    "8": [92.42, 8.97, 27.51],
                    "9": [97.04, 9.41, 28.88],
                    "10": [101.66, 9.86, 30.26]
                }
            }
        }
    }, "guillotine": {
        "id": "guillotine",
        "name": "Guillotine",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Residual Heat",
                "description": "■ Affects self. Activates after landing 30 normal attack(s). Critical Rate ▲ __% for 10 sec. HP ▼ 2.01%.",
                "values": {
                    "1": [6.28],
                    "2": [6.61],
                    "3": [6.95],
                    "4": [7.28],
                    "5": [7.62],
                    "6": [7.95],
                    "7": [8.28],
                    "8": [8.62],
                    "9": [8.95],
                    "10": [9.28]
                }
            }, "skill_2": {
                "name": "Shroud of Darkness",
                "description": "■ Activates after landing 150 normal attack(s). Affects self. Critical Damage ▲ __% for 5 sec. ■ Activates when HP falls below 70%. Affects self. ATK ▲ __% with every 1% of HP loss. This effect is active continuously.",
                "values": {
                    "1": [8.68, 0.56],
                    "2": [9.35, 0.61],
                    "3": [10.02, 0.65],
                    "4": [10.68, 0.69],
                    "5": [11.35, 0.74],
                    "6": [12.02, 0.78],
                    "7": [12.69, 0.82],
                    "8": [13.36, 0.87],
                    "9": [14.02, 0.91],
                    "10": [14.69, 0.96]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Dragon of the Deep",
                "description": "■ Affects the enemy with the highest ATK. Deals __% of final ATK as damage. ■ Affects the same target when the caster's HP falls below 50%. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [731.25, 731.25],
                    "2": [787.5, 787.5],
                    "3": [843.75, 843.75],
                    "4": [900, 900],
                    "5": [956.25, 956.25],
                    "6": [1012.5, 1012.5],
                    "7": [1068.75, 1068.75],
                    "8": [1125, 1125],
                    "9": [1181.25, 1181.25],
                    "10": [1237.5, 1237.5]
                }
            }
        }
    }, "guilty": {
        "id": "guilty",
        "name": "Guilty",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Mind If I Borrow This?",
                "description": "■ Activates after 6 normal attack(s). Affects self. Mind If I Borrow This?: Duplicate __% ATK of ally with the highest ATK, stacks up to 5 time(s) and lasts for 10 sec.",
                "values": {
                    "1": [4.4],
                    "2": [4.89],
                    "3": [5.38],
                    "4": [5.87],
                    "5": [6.36],
                    "6": [6.85],
                    "7": [7.34],
                    "8": [7.83],
                    "9": [8.32],
                    "10": [8.81]
                }
            }, "skill_2": {
                "name": "Time to play",
                "description": "■ Activates after 12 normal attack(s). Affects all Wind Code allies. Increases stack count of buffs by 1. ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [2.06],
                    "2": [2.29],
                    "3": [2.52],
                    "4": [2.75],
                    "5": [2.98],
                    "6": [3.21],
                    "7": [3.44],
                    "8": [3.67],
                    "9": [3.9],
                    "10": [4.13]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Gotcha...",
                "description": "■ Affects 1 enemy unit(s) with the highest DEF. Deals __% of final ATK as damage. ■ Affects the same target(s) when Mind If I Borrow This? is fully stacked. DEF ▼ __% for 5 sec. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [142.16, 10.12, 138.85],
                    "2": [157.95, 11.25, 154.28],
                    "3": [173.75, 12.37, 169.71],
                    "4": [189.55, 13.5, 185.14],
                    "5": [205.34, 14.62, 200.57],
                    "6": [221.14, 15.75, 216],
                    "7": [236.93, 16.87, 231.42],
                    "8": [252.73, 18, 246.85],
                    "9": [268.53, 19.12, 262.28],
                    "10": [284.32, 20.25, 277.71]
                }
            }
        }
    }, "harran": {
        "id": "harran",
        "name": "Harran",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Plague Transfer",
                "description": "■ There is a 25% chance of activating when attacking. Virus Transfer: Constantly deals __% of final ATK as damage every 1 sec for 5 sec. ■ Activates when an enemy afflicted with Virus Transfer is killed. Affects 2 nearest enemy unit(s). Virus Transfer: Constantly deals __% of final ATK as damage every 1 sec for 5 sec.",
                "values": {
                    "1": [10.8, 10.8],
                    "2": [11.52, 11.52],
                    "3": [12.24, 12.24],
                    "4": [12.96, 12.96],
                    "5": [13.68, 13.68],
                    "6": [14.4, 14.4],
                    "7": [15.12, 15.12],
                    "8": [15.84, 15.84],
                    "9": [16.56, 16.56],
                    "10": [17.28, 17.28]
                }
            }, "skill_2": {
                "name": "Predator",
                "description": "■ Activates when attacking with Full Charge. Affects self. Gain Pierce for 1 round(s). Critical Rate ▲ __% for 1 round(s). ■ Activates when killing an enemy. Affects self. ATK ▲ __%, stacks up to 15 time(s) and lasts for 10 sec.",
                "values": {
                    "1": [1.84, 1.89],
                    "2": [1.96, 2.01],
                    "3": [2.09, 2.14],
                    "4": [2.21, 2.26],
                    "5": [2.33, 2.39],
                    "6": [2.46, 2.52],
                    "7": [2.58, 2.64],
                    "8": [2.7, 2.77],
                    "9": [2.82, 2.89],
                    "10": [2.95, 3.02]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Death Scythe",
                "description": "■ Affects all enemies. Deals __% of final ATK as damage.",
                "values": {
                    "1": [624.37],
                    "2": [666],
                    "3": [707.62],
                    "4": [749.25],
                    "5": [790.87],
                    "6": [832.5],
                    "7": [874.12],
                    "8": [915.75],
                    "9": [957.37],
                    "10": [999]
                }
            }
        }
    }, "helm": {
        "id": "helm",
        "name": "Helm",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Frontline Command",
                "description": "■ Activates when the last bullet hits the target. Affects all allies. Critical Rate of normal attack ▲ __% for 5 sec.",
                "values": {
                    "1": [8.65],
                    "2": [9.31],
                    "3": [9.98],
                    "4": [10.64],
                    "5": [11.31],
                    "6": [11.98],
                    "7": [12.64],
                    "8": [13.31],
                    "9": [13.97],
                    "10": [14.64]
                }
            }, "skill_2": {
                "name": "Fire Away",
                "description": "■ Affects all allies. Damage to Interruption Parts ▲ __% permanently. ■ Activates when entering Full Burst. Affects all allies. Attack damage ▲ __% for 10 sec.",
                "values": {
                    "1": [1.82, 7],
                    "2": [1.96, 7.54],
                    "3": [2.1, 8.08],
                    "4": [2.24, 8.62],
                    "5": [2.38, 9.15],
                    "6": [2.52, 9.69],
                    "7": [2.66, 10.23],
                    "8": [2.8, 10.77],
                    "9": [2.94, 11.31],
                    "10": [3.08, 11.85]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Aegis Cannon",
                "description": "■ Affects the enemy with the highest ATK. Deals __% of final ATK as damage. ■ Affects all allies. Recovers __% of attack damage as HP over 10 sec.",
                "values": {
                    "1": [731.25, 32.17],
                    "2": [787.5, 34.65],
                    "3": [843.75, 37.12],
                    "4": [900, 39.6],
                    "5": [956.25, 42.07],
                    "6": [1012.5, 44.55],
                    "7": [1068.75, 47.02],
                    "8": [1125, 49.5],
                    "9": [1181.25, 51.97],
                    "10": [1237.5, 54.45]
                }
            }
        }
    }, "helm_aquamarine": {
        "id": "helm_aquamarine",
        "name": "Helm: Aquamarine",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Admire Accompaniment",
                "description": "■ Activates after landing 30 normal attack(s). Affects the target(s). Deals __% of final ATK as additional damage. ■ Activates when entering Full Burst. Affects all allies. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Cooldown of Burst Skill ▼ 1.82 sec. Twice: Cooldown of Burst Skill ▼ 2.2 sec. Three times: Cooldown of Burst Skill ▼ 2.6 sec.",
                "values": {
                    "1": [38.76],
                    "2": [49.05],
                    "3": [59.34],
                    "4": [69.61],
                    "5": [79.92],
                    "6": [90.19],
                    "7": [100.48],
                    "8": [110.76],
                    "9": [121.05],
                    "10": [131.34]
                }
            }, "skill_2": {
                "cooldown": 4,
                "name": "Aegis Cannon Suppression Fire",
                "description": "■ Affects 1 enemy unit(s) randomly. Deals __% of final ATK as damage. ■ Affects the same target(s) when they belong to Electric Code. Damage Taken ▲ __%, stacks up to 5 time(s) and lasts for 5 sec.",
                "values": {
                    "1": [62.38, 3.33],
                    "2": [67.2, 3.6],
                    "3": [71.98, 3.84],
                    "4": [76.79, 4.11],
                    "5": [81.59, 4.35],
                    "6": [86.39, 4.62],
                    "7": [91.18, 4.86],
                    "8": [95.98, 5.13],
                    "9": [100.8, 5.4],
                    "10": [105.58, 5.64]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Aegis Cannon Overload",
                "description": "■ Affects all enemies. Deals __% of final ATK as damage. ■ Affects the same target(s) when they belong to Electric Code. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [97.39, 97.39],
                    "2": [104.89, 104.89],
                    "3": [112.38, 112.38],
                    "4": [119.88, 119.88],
                    "5": [127.36, 127.36],
                    "6": [134.86, 134.86],
                    "7": [142.35, 142.35],
                    "8": [149.85, 149.85],
                    "9": [157.33, 157.33],
                    "10": [164.83, 164.83]
                }
            }
        }
    }, "isabel": {
        "id": "isabel",
        "name": "Isabel",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Marked Target",
                "description": "■ Activates when using Burst Skill. Affects self. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Marked Target 1 - Critical Rate ▲ __% for 45 sec. Twice: Marked Target 2 - Critical Damage ▲ __% for 45 sec. Three times: Marked Target 3 - ATK ▲ __% for 45 sec.",
                "values": {
                    "1": [3.91, 11.27, 10.8],
                    "2": [4.17, 12.02, 11.52],
                    "3": [4.43, 12.77, 12.24],
                    "4": [4.69, 13.52, 12.96],
                    "5": [4.95, 14.27, 13.68],
                    "6": [5.22, 15.03, 14.4],
                    "7": [5.48, 15.78, 15.12],
                    "8": [5.74, 16.53, 15.84],
                    "9": [6, 17.28, 16.56],
                    "10": [6.26, 18.03, 17.28]
                }
            }, "skill_2": {
                "cooldown": 15,
                "name": "Pointed Feather",
                "description": "■ Affects 5 enemy unit(s) with the highest DEF. Deals __% of final ATK as damage.",
                "values": {
                    "1": [106.61],
                    "2": [113.72],
                    "3": [120.83],
                    "4": [127.93],
                    "5": [135.04],
                    "6": [142.15],
                    "7": [149.26],
                    "8": [156.36],
                    "9": [163.47],
                    "10": [170.58]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Sonic Chaser",
                "description": "■ Affects all enemies. Deals __% of final ATK as damage. Additional effect(s) triggered according to the Marked Target's phase. Previous effects trigger repeatedly: Marked Target 1: Damage Taken ▲ __% for 5 sec. Marked Target 2: Deals __% of final ATK as additional damage. Marked Target 3: Deals __% of final ATK as additional damage. ■ Affects all allies. Full Burst Time ▼ 5 sec.",
                "values": {
                    "1": [93.65, 24.97, 187.31, 218.53],
                    "2": [99.9, 26.64, 199.8, 233.1],
                    "3": [106.14, 28.3, 212.28, 247.66],
                    "4": [112.38, 29.97, 224.77, 262.23],
                    "5": [118.63, 31.63, 237.26, 276.8],
                    "6": [124.87, 33.3, 249.75, 291.37],
                    "7": [131.11, 34.96, 262.23, 305.94],
                    "8": [137.36, 36.63, 274.72, 320.51],
                    "9": [143.6, 38.29, 287.21, 335.08],
                    "10": [149.85, 39.96, 299.7, 349.65]
                }
            }
        }
    }, "jackal": {
        "id": "jackal",
        "name": "Jackal",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Happy Jackal",
                "description": "■ Activates when attacked 10 time(s). Affects 1 enemy unit(s) with the highest Max HP. Damage Taken ▲ __% for 10 sec. ATK ▼ __% for 10 sec.",
                "values": {
                    "1": [5, 5],
                    "2": [5.45, 5.45],
                    "3": [5.9, 5.9],
                    "4": [6.36, 6.36],
                    "5": [6.81, 6.81],
                    "6": [7.27, 7.27],
                    "7": [7.72, 7.72],
                    "8": [8.18, 8.18],
                    "9": [8.63, 8.63],
                    "10": [9.09, 9.09]
                }
            }, "skill_2": {
                "name": "Jumpin' Jackal Flash",
                "description": "■ Activates when entering battle. Affects self and 2 ally unit(s) with the highest ATK. Equally shares damage taken for 120 sec. DEF ▲ __% for 120 sec.",
                "values": {
                    "1": [4.55],
                    "2": [4.96],
                    "3": [5.37],
                    "4": [5.79],
                    "5": [6.2],
                    "6": [6.61],
                    "7": [7.03],
                    "8": [7.44],
                    "9": [7.85],
                    "10": [8.27]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Crazy Jackal",
                "description": "■ Affects all allies. Burst Skill damage of skills with \"Affects 1 enemy unit(s)\" in the description (except additional damage) ▲ __% for 15 sec. DEF ▲ __% for 10 sec.",
                "values": {
                    "1": [21.4, 8.08],
                    "2": [23.35, 8.81],
                    "3": [25.29, 9.55],
                    "4": [27.24, 10.28],
                    "5": [29.18, 11.02],
                    "6": [31.13, 11.75],
                    "7": [33.08, 12.48],
                    "8": [35.02, 13.22],
                    "9": [36.97, 13.95],
                    "10": [38.91, 14.69]
                }
            }
        }
    }, "julia": {
        "id": "julia",
        "name": "Julia",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "cooldown": 20,
                "name": "Decrescendo",
                "description": "■ Affects self. Critical Rate▲ __% for 10 sec.",
                "values": {
                    "1": [15.38],
                    "2": [16.57],
                    "3": [17.75],
                    "4": [18.93],
                    "5": [20.12],
                    "6": [21.3],
                    "7": [22.48],
                    "8": [23.67],
                    "9": [24.85],
                    "10": [26.04]
                }
            }, "skill_2": {
                "name": "Crescendo",
                "description": "■ Activates when the last bullet hits the target. Affects self. Crescendo: Critical Damage ▲ __%, stacks up to 5 times and lasts for 15 sec.",
                "values": {
                    "1": [14.65],
                    "2": [15.78],
                    "3": [16.9],
                    "4": [18.03],
                    "5": [19.16],
                    "6": [20.29],
                    "7": [21.41],
                    "8": [22.54],
                    "9": [23.67],
                    "10": [24.79]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Climax",
                "description": "■ Affects 5 enemy unit(s) with the highest DEF. Deals __% of final ATK as damage. ■ Activates when Crescendo is fully stacked. Affects the same target(s). Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [321.75, 321.75],
                    "2": [346.5, 346.5],
                    "3": [371.25, 371.25],
                    "4": [396, 396],
                    "5": [420.75, 420.75],
                    "6": [445.5, 445.5],
                    "7": [470.25, 470.25],
                    "8": [495, 495],
                    "9": [519.75, 519.75],
                    "10": [544.5, 544.5]
                }
            }
        }
    }, "kilo": {
        "id": "kilo",
        "name": "Kilo",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Nano Coating",
                "description": "■ Activates when entering battle. Affects self. Nano Coating: Creates a Shield equal to __% of the caster's final Max HP continuously. ■ Activates when using Burst Skill. Affects self if not in Nano Coating status. Nano Coating: Creates a Shield equal to __% of the caster's final Max HP continuously.",
                "values": {
                    "1": [11.61, 11.61],
                    "2": [12.67, 12.67],
                    "3": [13.72, 13.72],
                    "4": [14.78, 14.78],
                    "5": [15.84, 15.84],
                    "6": [16.89, 16.89],
                    "7": [17.95, 17.95],
                    "8": [19, 19],
                    "9": [20.06, 20.06],
                    "10": [21.12, 21.12]
                }
            }, "skill_2": {
                "name": "Self-Repair",
                "description": "■ Activates when performing Normal Attack for 200 time(s) in Nano Coating status. Affects self. Recovers Shield HP equal to __% caster’s final Max HP. ■ Activates when using Burst Skill. Affects self if not in Nano Coating status. Effect changes according to the caster's status. Previous effects trigger repeatedly. Once: Next Shield's HP ▲ __% continuously. Twice: Next Shield's HP ▲ __% continuously. Three times: Next Shield's HP ▲ __% continuously.",
                "values": {
                    "1": [1.57, 9.76, 14.66, 19.54],
                    "2": [1.71, 10.65, 16, 21.32],
                    "3": [1.85, 11.54, 17.33, 23.1],
                    "4": [2, 12.42, 18.66, 24.87],
                    "5": [2.14, 13.32, 20, 26.66],
                    "6": [2.28, 14.2, 21.33, 28.43],
                    "7": [2.42, 15.09, 22.66, 30.2],
                    "8": [2.57, 15.98, 24, 31.99],
                    "9": [2.71, 16.86, 25.33, 33.76],
                    "10": [2.85, 17.75, 26.66, 35.53]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Assign Priority",
                "description": "■ Activates when in Nano Coating status. Affects all enemies. Deals damage equal to __% of the ATK, which is calculated from 5% of final Max HP. ■ Activates when not in Nano Coating status. Affects self. Max HP ▲ __% for 20 sec.",
                "values": {
                    "1": [632.96, 26.4],
                    "2": [690.5, 28.8],
                    "3": [748.05, 31.2],
                    "4": [805.59, 33.6],
                    "5": [863.13, 36],
                    "6": [920.67, 38.4],
                    "7": [978.22, 40.8],
                    "8": [1035.76, 43.2],
                    "9": [1093.3, 45.6],
                    "10": [1150.84, 48]
                }
            }
        }
    }, "laplace": {
        "id": "laplace",
        "name": "Laplace",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Iron,
        has_treasure: true,
        "skills": {
            "skill_1": {
                "name": "Hero Vision",
                "description": "■ Activates when attacking with Full Charge. Affects self. Hero Vision: Explosion Radius ▲ __%, stacks up to 5 time(s) and lasts for 5 sec.",
                "values": {
                    "1": [2.11],
                    "2": [2.27],
                    "3": [2.43],
                    "4": [2.6],
                    "5": [2.76],
                    "6": [2.92],
                    "7": [3.08],
                    "8": [3.25],
                    "9": [3.41],
                    "10": [3.57]
                }
            }, "skill_2": {
                "name": "Hero Bomber",
                "description": "■ Activates when the last bullet hits the target. Affects the target. Deals __% of final ATK as additional damage. ■ Activates when hitting the target's Parts. Affects the target. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [48.25, 8.73],
                    "2": [51.96, 9.4],
                    "3": [55.68, 10.08],
                    "4": [59.39, 10.75],
                    "5": [63.1, 11.42],
                    "6": [66.81, 12.09],
                    "7": [70.52, 12.76],
                    "8": [74.24, 13.44],
                    "9": [77.95, 14.11],
                    "10": [81.66, 14.78]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Laplace Buster",
                "description": "■ Affects self. Change the Weapon in use: First Damage: __% of final ATK Normal Damage: __% of final ATK Last for: 5 sec Additional Effect: Pierce Attention: Unable to take cover when using Burst Skill. ■ Affects the same enemy unit(s) when Hero Vision is fully stacked. Deals __% of final ATK as true damage.",
                "values": {
                    "1": [530.4, 8.58, 7.03],
                    "2": [571.2, 9.24, 7.57],
                    "3": [612, 9.9, 8.11],
                    "4": [652.8, 10.56, 8.65],
                    "5": [693.6, 11.22, 9.19],
                    "6": [734.4, 11.88, 9.73],
                    "7": [775.2, 12.54, 10.27],
                    "8": [816, 13.2, 10.81],
                    "9": [856.8, 13.86, 11.36],
                    "10": [897.6, 14.52, 11.9]
                }
            }
        }
    }, "leona": {
        "id": "leona",
        "name": "Leona",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Thunderous Roar",
                "description": "■ Activates after 5 normal attack(s). Affects all allies. Roar: Critical Rate ▲ __%, stacks up to 5 time(s) and lasts for 5 sec. ■ Activates after 15 normal attack(s). Affects all allies with a Shotgun. Maximum Effective Range ▲ 20% for 10 sec.",
                "values": {
                    "1": [1.38],
                    "2": [1.52],
                    "3": [1.65],
                    "4": [1.79],
                    "5": [1.93],
                    "6": [2.07],
                    "7": [2.2],
                    "8": [2.34],
                    "9": [2.48],
                    "10": [2.62]
                }
            }, "skill_2": {
                "name": "Courageous Look",
                "description": "■ Activates when entering Full Burst. Affects all allies. Hit Rate ▲ __% for 10 sec. ■ Activates when entering Full Burst. Affects 2 ally unit(s) with the highest ATK and a Shotgun. Increases number of pellets by __ for 10 sec.",
                "values": {
                    "1": [10.77, 3],
                    "2": [11.83, 3],
                    "3": [12.88, 3],
                    "4": [13.94, 4],
                    "5": [15, 4],
                    "6": [16.05, 4],
                    "7": [17.11, 5],
                    "8": [18.16, 5],
                    "9": [19.22, 5],
                    "10": [20.28, 5]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Lion's Heart",
                "description": "■ Affects all allies. Critical Damage ▲ __% for 10 sec. ■ Activates when the caster's Roar is fully stacked. Affects all allies with a Shotgun. Critical Rate ▲ __% for 10 sec.",
                "values": {
                    "1": [20.46, 12.6],
                    "2": [22.04, 13.57],
                    "3": [23.61, 14.54],
                    "4": [25.19, 15.51],
                    "5": [26.76, 16.48],
                    "6": [28.34, 17.44],
                    "7": [29.91, 18.41],
                    "8": [31.49, 19.38],
                    "9": [33.06, 20.35],
                    "10": [34.64, 21.32]
                }
            }
        }
    }, "liter": {
        "id": "liter",
        "name": "Liter",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Liter Boost",
                "description": "■ Activates when entering Full Burst. Affects all allies. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Cooldown of Burst Skill ▼ 2.34 sec. Twice: Cooldown of Burst Skill ▼ 2.7 sec. Three times: Cooldown of Burst Skill ▼ 3.17 sec. ■ Activates when using Burst Skill. Affects all allies. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Max Ammunition Capacity ▲ __% for 5 sec. Twice: Critical Damage ▲ __% for 5 sec. Three times: ATK ▲ __% for 5 sec.",
                "values": {
                    "1": [7.05, 3.36, 5.05],
                    "2": [11.29, 4.37, 6.09],
                    "3": [15.52, 5.38, 7.13],
                    "4": [19.76, 6.39, 8.17],
                    "5": [23.99, 7.4, 9.21],
                    "6": [28.23, 8.41, 10.25],
                    "7": [32.46, 9.42, 11.29],
                    "8": [36.7, 10.44, 12.33],
                    "9": [40.93, 11.45, 13.37],
                    "10": [45.17, 12.46, 14.42]
                }
            }, "skill_2": {
                "cooldown": 15,
                "name": "Volt Boost",
                "description": "■ Affects 2 ally unit(s) with the lowest cover HP. Cover's HP recovers by __%.",
                "values": {
                    "1": [28.87],
                    "2": [31.5],
                    "3": [34.12],
                    "4": [36.75],
                    "5": [39.37],
                    "6": [42],
                    "7": [44.62],
                    "8": [47.25],
                    "9": [49.87],
                    "10": [52.5]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Double Boost",
                "description": "■ Affects all allies. ATK ▲ __% for 5 sec.",
                "values": {
                    "1": [36.3],
                    "2": [39.6],
                    "3": [42.9],
                    "4": [46.2],
                    "5": [49.5],
                    "6": [52.8],
                    "7": [56.1],
                    "8": [59.4],
                    "9": [62.7],
                    "10": [66]
                }
            }
        }
    }, "ludmilla": {
        "id": "ludmilla",
        "name": "Ludmilla",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Noblesse Oblige",
                "description": "■ Activates when the last bullet hits the target. Affects the target. [Target] DEF ▼ __% for 10 sec. [Target] ATK ▼ __% for 10 sec.",
                "values": {
                    "1": [4.62, 4.62],
                    "2": [5.04, 5.04],
                    "3": [5.46, 5.46],
                    "4": [5.88, 5.88],
                    "5": [6.3, 6.3],
                    "6": [6.72, 6.72],
                    "7": [7.14, 7.14],
                    "8": [7.56, 7.56],
                    "9": [7.98, 7.98],
                    "10": [8.4, 8.4]
                }
            }, "skill_2": {
                "name": "Queenly Disposition",
                "description": "■ Activates when entering Full Burst. Affects all enemies. Attract: Taunt all enemies for 15.09 sec. ■ Activates when entering Full Burst. Affects self. Damage Taken ▼ __% for 15 sec.",
                "values": {
                    "1": [35.82],
                    "2": [38.27],
                    "3": [40.72],
                    "4": [43.17],
                    "5": [45.62],
                    "6": [48.07],
                    "7": [50.52],
                    "8": [52.97],
                    "9": [55.42],
                    "10": [57.86]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Snow Queen",
                "description": "■ Affects 10 enemy unit(s) with the highest ATK. Deals __% of final ATK as damage. ■ Activates when above 50% HP. Affects all allies. DEF ▲ __% for 10 sec.",
                "values": {
                    "1": [89.7, 7.11],
                    "2": [97.86, 7.75],
                    "3": [106.01, 8.4],
                    "4": [114.17, 9.05],
                    "5": [122.32, 9.69],
                    "6": [130.48, 10.34],
                    "7": [138.63, 10.99],
                    "8": [146.79, 11.63],
                    "9": [154.94, 12.28],
                    "10": [163.1, 12.93]
                }
            }
        }
    }, "ludmilla_winter_owner": {
        "id": "ludmilla_winter_owner",
        "name": "Ludmilla: Winter Owner",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "The Queen's Gaze",
                "description": "■ Activates when landing 60 normal attack(s). Affects the target. Damage Taken ▲ __% for 3 sec. Deals __% of final ATK as additional damage. ■ Activates when landing 60 normal attack(s). Affects self. Reloads __ round(s) of ammunition.",
                "values": {
                    "1": [7.42, 93.62, 11],
                    "2": [7.99, 100.82, 12],
                    "3": [8.56, 108.02, 13],
                    "4": [9.13, 115.22, 14],
                    "5": [9.7, 122.42, 15],
                    "6": [10.27, 129.62, 16],
                    "7": [10.84, 136.83, 17],
                    "8": [11.42, 144.03, 18],
                    "9": [11.99, 151.23, 19],
                    "10": [12.56, 158.43, 20]
                }
            }, "skill_2": {
                "name": "Snowstorm",
                "description": "■ Activates when hitting the Core for 60 time(s). Affects the target. Deals __% of final ATK as additional damage. ■ Activates at the beginning of Full Burst. Affects self. Critical Rate ▲ __% for 10 sec.",
                "values": {
                    "1": [64.79, 8.03],
                    "2": [69.77, 8.76],
                    "3": [74.75, 9.49],
                    "4": [79.74, 10.22],
                    "5": [84.72, 10.95],
                    "6": [89.71, 11.68],
                    "7": [94.69, 12.41],
                    "8": [99.67, 13.14],
                    "9": [104.66, 13.87],
                    "10": [109.64, 14.6]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Guiding Lantern",
                "description": "■ Affects self. ATK ▲ __% for 10 sec. Reloading Speed ▲ __% for 20 sec.",
                "values": {
                    "1": [36.96, 36.96],
                    "2": [39.8, 40.32],
                    "3": [42.64, 43.68],
                    "4": [45.49, 47.04],
                    "5": [48.33, 50.4],
                    "6": [51.17, 53.76],
                    "7": [54.01, 57.12],
                    "8": [56.86, 60.48],
                    "9": [59.7, 63.84],
                    "10": [62.54, 67.2]
                }
            }
        }
    }, "maiden": {
        "id": "maiden",
        "name": "Maiden",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Kotodama: Words of Skill",
                "description": "■ Activates when attacked 20 time(s). Affects self. Revenge: ATK ▲ __% for 20 sec.",
                "values": {
                    "1": [15.75],
                    "2": [16.96],
                    "3": [18.18],
                    "4": [19.39],
                    "5": [20.6],
                    "6": [21.81],
                    "7": [23.03],
                    "8": [24.24],
                    "9": [25.45],
                    "10": [26.66]
                }
            }, "skill_2": {
                "cooldown": 30,
                "name": "Kotodama: Words of Assault",
                "description": "■ Affects all enemies. Taunt for 10 sec. ■ Affects self. Critical Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [94.13],
                    "2": [100.65],
                    "3": [107.18],
                    "4": [113.7],
                    "5": [120.22],
                    "6": [126.75],
                    "7": [133.27],
                    "8": [139.79],
                    "9": [146.32],
                    "10": [152.84]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Kotodama: Words of Power",
                "description": "■ Affects all enemies. Deals __% of final ATK as damage. ■ Affects the same target(s) when in Revenge status. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [270.56, 270.56],
                    "2": [291.37, 291.37],
                    "3": [312.18, 312.18],
                    "4": [333, 333],
                    "5": [353.81, 353.81],
                    "6": [374.62, 374.62],
                    "7": [395.43, 395.43],
                    "8": [416.25, 416.25],
                    "9": [437.06, 437.06],
                    "10": [457.87, 457.87]
                }
            }
        }
    }, "makima": {
        "id": "makima",
        "name": "Makima",
        "manufacturer": NikkeManufacturer.Abnormal,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Show Me What You Got",
                "description": "■ Activates when attacked 20 time(s). Affects all allies. Reloading Speed ▲ __% for 10 sec. DEF ▲ __% for 10 sec.",
                "values": {
                    "1": [20.32, 8.13],
                    "2": [22.17, 8.87],
                    "3": [24.02, 9.6],
                    "4": [25.87, 10.34],
                    "5": [27.72, 11.08],
                    "6": [29.56, 11.82],
                    "7": [31.41, 12.56],
                    "8": [33.26, 13.3],
                    "9": [35.11, 14.04],
                    "10": [36.96, 14.78]
                }
            }, "skill_2": {
                "name": "Seems I've Been Noticed",
                "description": "■ Activates after landing 120 normal attack(s). Affects self. Attract: Taunt all enemies for 3 sec. ■ Activates when taking lethal damage. Affects self. Gain indomitability for 7 sec. Activates 1 time(s) per battle. Cooldown of Burst Skill ▼ __ sec.",
                "values": {
                    "1": [8.51],
                    "2": [8.85],
                    "3": [9.19],
                    "4": [9.53],
                    "5": [9.87],
                    "6": [10.21],
                    "7": [10.55],
                    "8": [10.89],
                    "9": [11.23],
                    "10": [11.58]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Can You Be Quiet?",
                "description": "■ Affects self. Gain Pierce for 10 sec. Recover __% of attack damage as HP over 10 sec. ■ Activates during indomitability. Affects self. HP Potency ▲ __% for 10 sec.",
                "values": {
                    "1": [17.82, 13.46],
                    "2": [19.62, 16.53],
                    "3": [21.42, 19.59],
                    "4": [23.22, 22.65],
                    "5": [25.02, 25.71],
                    "6": [26.82, 28.77],
                    "7": [28.62, 31.83],
                    "8": [30.42, 34.89],
                    "9": [32.22, 37.95],
                    "10": [34.02, 41.02]
                }
            }
        }
    }, "marciana": {
        "id": "marciana",
        "name": "Marciana",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Drone Supporter",
                "description": "■ Activates when the last bullet hits the target. Affects all allies. Recovers __% of attack damage as HP over 3 sec. ■ Activates when the last bullet hits the target. Affects 2 ally unit(s) with the highest ATK. HP Potency ▲ __% for 3 sec.",
                "values": {
                    "1": [6.47, 15.94],
                    "2": [6.97, 17.16],
                    "3": [7.47, 18.39],
                    "4": [7.96, 19.62],
                    "5": [8.46, 20.84],
                    "6": [8.96, 22.07],
                    "7": [9.46, 23.3],
                    "8": [9.96, 24.52],
                    "9": [10.46, 25.75],
                    "10": [10.95, 26.98]
                }
            }, "skill_2": {
                "name": "School Nurse",
                "description": "■ Activates when using Burst Skill. Affects all allies. Recovers __% of caster's final Max HP as HP.",
                "values": {
                    "1": [17.31],
                    "2": [18.51],
                    "3": [19.71],
                    "4": [20.91],
                    "5": [22.11],
                    "6": [23.31],
                    "7": [24.51],
                    "8": [25.71],
                    "9": [26.91],
                    "10": [28.11]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "A Teacher's Grace",
                "description": "■ Affects all allies. Storage: If the target obtained a healing effect that exceeds the character's Max HP, excess portion will be stored, up to __% of the caster's Max HP, lasts for 10 sec. DEF ▲ __% of the caster's DEF for 10 sec.",
                "values": {
                    "1": [16.47, 12.35],
                    "2": [17.74, 13.3],
                    "3": [19, 14.25],
                    "4": [20.27, 15.2],
                    "5": [21.54, 16.15],
                    "6": [22.8, 17.1],
                    "7": [24.07, 18.05],
                    "8": [25.34, 19],
                    "9": [26.61, 19.95],
                    "10": [27.87, 20.9]
                }
            }
        }
    }, "mari_makinami_illustrious": {
        id: "mari_makinami_illustrious",
        name: "Mari",
        manufacturer: NikkeManufacturer.Abnormal,
        role: NikkeRole.Supporter,
        weapon_type: WeaponType.SR,
        rarity: NikkeRarity.SSR,
        burst: Burst.Burst_II,
        element: NikkeElement.Electric,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Precision Sniping",
                description: "■ Activates when landing an attack with Full Charge. Affects all allies. Damage dealt to Shield ▲ __% for 3 sec. ■ Activates when hitting the target's core. Affects all allies. Pierce Damage ▲ __% for 10 sec.",
                values: {
                    1: [59.17, 24.25],
                    2: [63.72, 26.11],
                    3: [68.27, 27.97],
                    4: [72.81, 29.83],
                    5: [77.36, 31.69],
                    6: [81.9, 33.55],
                    7: [86.45, 35.41],
                    8: [91, 37.27],
                    9: [95.54, 39.13],
                    10: [100.09, 40.99]
                }
            }, skill_2: {
                cooldown: 10,
                name: "Full Focus",
                description: "■ Affects self. Gain Pierce for 5 sec. ATK ▲ __% for 5 sec. ■ Affects all allies. ATK ▲ __% of caster's ATK for 5 sec.",
                values: {
                    1: [17.98, 18.17],
                    2: [19.4, 19.57],
                    3: [20.82, 20.97],
                    4: [22.25, 22.37],
                    5: [23.67, 23.77],
                    6: [25.09, 25.17],
                    7: [26.52, 26.57],
                    8: [27.94, 27.98],
                    9: [29.36, 29.38],
                    10: [30.78, 30.78]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "GPS Guided Missile",
                description: "■ Affects all enemies. Deals __% of final ATK as damage. ■ Affects all allies. Attack damage ▲ __% for 10 sec.",
                values: {
                    1: [363.63, 24.25],
                    2: [394.27, 26.11],
                    3: [424.9, 27.97],
                    4: [455.54, 29.83],
                    5: [486.18, 31.69],
                    6: [516.81, 33.55],
                    7: [547.45, 35.41],
                    8: [578.08, 37.27],
                    9: [608.72, 39.13],
                    10: [639.36, 40.99]
                }
            }
        }
    }, "mary": {
        "id": "mary",
        "name": "Mary",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "CPR",
                "description": "■ Activates when the last bullet hits the target. Affects 1 ally unit(s) with the lowest HP percentage. Recovers __% of the caster's final Max HP as HP.",
                "values": {
                    "1": [4.62],
                    "2": [5.04],
                    "3": [5.46],
                    "4": [5.88],
                    "5": [6.3],
                    "6": [6.72],
                    "7": [7.14],
                    "8": [7.56],
                    "9": [7.98],
                    "10": [8.4]
                }
            }, "skill_2": {
                "name": "Nursing",
                "description": "■ Activates when entering Full Burst. Affects all allies. HP Potency ▲ __% for 15 sec.",
                "values": {
                    "1": [13.08],
                    "2": [14.27],
                    "3": [15.45],
                    "4": [16.64],
                    "5": [17.83],
                    "6": [19.02],
                    "7": [20.21],
                    "8": [21.4],
                    "9": [22.59],
                    "10": [23.78]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Angel in White",
                "description": "■ Affects all allies. Recovers __% of caster's final Max HP as HP. ■ Activates when above 50% HP. Affects all allies. DEF ▲ __% for 10 sec.",
                "values": {
                    "1": [21.78, 10.89],
                    "2": [23.76, 11.88],
                    "3": [25.74, 12.87],
                    "4": [27.72, 13.86],
                    "5": [29.7, 14.85],
                    "6": [31.68, 15.84],
                    "7": [33.66, 16.83],
                    "8": [35.64, 17.82],
                    "9": [37.62, 18.81],
                    "10": [39.6, 19.8]
                }
            }
        }
    }, "mary_bay_goddess": {
        "id": "mary_bay_goddess",
        "name": "Mary: Bay Goddess",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Seaside Sunshine",
                "description": "■ Activates when entering Full Burst. Affects all allies. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Recovers __% of caster's final Max HP every 1 sec for 5 sec. Twice: Recovers __% of caster's final Max HP every 1 sec for 5 sec. Three times: Recovers __% of caster's final Max HP every 1 sec for 5 sec.",
                "values": {
                    "1": [0.62, 2.18, 4.05],
                    "2": [0.67, 2.35, 4.36],
                    "3": [0.72, 2.52, 4.68],
                    "4": [0.76, 2.68, 4.99],
                    "5": [0.81, 2.85, 5.3],
                    "6": [0.86, 3.02, 5.61],
                    "7": [0.91, 3.19, 5.92],
                    "8": [0.96, 3.36, 6.24],
                    "9": [1, 3.52, 6.55],
                    "10": [1.05, 3.69, 6.86]
                }
            }, "skill_2": {
                "name": "Waves Kiss The Feet",
                "description": "■ Activates when using Burst Skill. Affects all Water Code allies. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Damage as strong element ▲ __% for 3 sec. Twice: Damage as strong element ▲ __% for 5 sec. Three times: Damage as strong element ▲ __% for 10 sec.",
                "values": {
                    "1": [3.43, 3.43, 2.97],
                    "2": [5.36, 4.59, 3.57],
                    "3": [7.3, 5.75, 4.17],
                    "4": [9.24, 6.91, 4.76],
                    "5": [11.17, 8.07, 5.36],
                    "6": [13.11, 9.24, 5.96],
                    "7": [15.04, 10.4, 6.56],
                    "8": [16.98, 11.56, 7.16],
                    "9": [18.92, 12.72, 7.76],
                    "10": [20.85, 13.88, 8.36]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Tranquil Waters",
                "description": "■ Affects all Water Code allies. ATK ▲ __% for 3 sec. ■ Affects all allies. Max HP ▲ __% of the caster's final Max HP for 10 sec.",
                "values": {
                    "1": [13.72, 16.47],
                    "2": [14.78, 17.74],
                    "3": [15.84, 19],
                    "4": [16.89, 20.27],
                    "5": [17.95, 21.54],
                    "6": [19, 22.8],
                    "7": [20.06, 24.07],
                    "8": [21.12, 25.34],
                    "9": [22.17, 26.61],
                    "10": [23.23, 27.87]
                }
            }
        }
    }, "mast": {
        "id": "mast",
        "name": "Mast",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Pirate's Grit",
                "description": "■ Activates when crit attack hits 2 time(s). Affects the target(s). Sea Breeze: DEF ▼ __% of the caster's DEF, stacks up to 50 time(s) and lasts for 3 sec. ■ Activates when HP falls below 70%. Affects self and 2 ally unit(s) with the highest ATK (except caster). Critical Damage ▲ __% continuously.",
                "values": {
                    "1": [1.12, 30.1],
                    "2": [1.2, 32.42],
                    "3": [1.29, 34.73],
                    "4": [1.38, 37.05],
                    "5": [1.46, 39.36],
                    "6": [1.55, 41.68],
                    "7": [1.64, 43.99],
                    "8": [1.72, 46.31],
                    "9": [1.81, 48.63],
                    "10": [1.9, 50.94]
                }
            }, "skill_2": {
                "name": "Pirate's Sight",
                "description": "■ Activates when entering battle. Affects self and 2 ally unit(s) with the highest ATK (except caster). Critical Rate ▲ __% for 30 sec.",
                "values": {
                    "1": [13.92],
                    "2": [14.99],
                    "3": [16.06],
                    "4": [17.14],
                    "5": [18.21],
                    "6": [19.28],
                    "7": [20.35],
                    "8": [21.42],
                    "9": [22.49],
                    "10": [23.56]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Sail Through the Tempest!",
                "description": "■ Affects self and 2 ally unit(s) with the highest ATK (except caster). Max HP ▲ __% of the caster's Max HP without restoring HP, lasts for 7 sec. Critical Damage ▲ __% for 7 sec. ■ Affects the target(s) afflicted with Sea Breeze. Storm: Deals __% of final ATK as damage. Mirrors the stack count of Sea Breeze every 1 sec for 7 sec.",
                "values": {
                    "1": [50.93, 14.88, 2.67],
                    "2": [54.85, 16.03, 2.88],
                    "3": [58.77, 17.17, 3.08],
                    "4": [62.69, 18.32, 3.29],
                    "5": [66.61, 19.46, 3.49],
                    "6": [70.53, 20.61, 3.7],
                    "7": [74.44, 21.75, 3.9],
                    "8": [78.36, 22.9, 4.11],
                    "9": [82.28, 24.04, 4.32],
                    "10": [86.2, 25.19, 4.52]
                }
            }
        }
    }, "maxwell": {
        "id": "maxwell",
        "name": "Maxwell",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Straight Shot",
                "description": "■ Activates when entering Full Burst. Affects 2 allies with the highest ATK. Charge Speed ▲ __% for 10 sec. ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [2.65, 25.46],
                    "2": [2.85, 27.42],
                    "3": [3.06, 29.38],
                    "4": [3.26, 31.34],
                    "5": [3.46, 33.3],
                    "6": [3.67, 35.26],
                    "7": [3.87, 37.22],
                    "8": [4.08, 39.18],
                    "9": [4.28, 41.14],
                    "10": [4.48, 43.1]
                }
            }, "skill_2": {
                "name": "Spark Shot",
                "description": "■ Activates when there are above 5 enemy unit(s), excluding Nikkes. Affects self. Critical Rate ▲ __%. Critical Damage ▲ __%.",
                "values": {
                    "1": [2.85, 8.22],
                    "2": [3.07, 8.85],
                    "3": [3.29, 9.48],
                    "4": [3.51, 10.12],
                    "5": [3.73, 10.75],
                    "6": [3.95, 11.38],
                    "7": [4.17, 12.01],
                    "8": [4.39, 12.65],
                    "9": [4.61, 13.28],
                    "10": [4.83, 13.91]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Pierce Shot",
                "description": "■ Affects self. Change the Weapon in use: Charge Time: 2 sec Damage: __% of final ATK Full Charge Damage: 300% of damage Max Ammunition Capacity: 1 round(s) Additional Effect: Pierce",
                "values": {
                    "1": [144.85],
                    "2": [219.14],
                    "3": [293.42],
                    "4": [367.71],
                    "5": [442],
                    "6": [516.28],
                    "7": [590.57],
                    "8": [664.85],
                    "9": [739.14],
                    "10": [813.42]
                }
            }
        }
    }, "mica_snow_buddy": {
        "id": "mica_snow_buddy",
        "name": "Mica: Snow Buddy",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Tidying Up",
                "description": "■ Activates when landing 120 normal attack(s). Affects all allies. Tidying Up: Damage Taken ▼ __%, stacks up to 10 time(s) and lasts for 15 sec. ■ Activates when the caster's Tidying Up is fully stacked. Affects all allies. Max Ammunition Capacity ▲ __% continuously.",
                "values": {
                    "1": [1.1, 22],
                    "2": [1.2, 24],
                    "3": [1.3, 26],
                    "4": [1.4, 28],
                    "5": [1.5, 30],
                    "6": [1.6, 32],
                    "7": [1.7, 34],
                    "8": [1.8, 36],
                    "9": [1.9, 38],
                    "10": [2, 40]
                }
            }, "skill_2": {
                "name": "Blessing Cannon",
                "description": "■ Activates when landing __ normal attack(s). Affects all allies. ▲ stack count of stackable buffs by 1. ■ Activates when entering battle. Affects self. Burst Gauge filling speed ▲ __% continuously.",
                "values": {
                    "1": [220, 120],
                    "2": [212, 140],
                    "3": [204, 160],
                    "4": [196, 180],
                    "5": [189, 200],
                    "6": [181, 220],
                    "7": [173, 240],
                    "8": [165, 260],
                    "9": [157, 280],
                    "10": [150, 300]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Snowfield Festival",
                "description": "■ Affects all allies. Dispels 1 debuff(s). ATK ▲ __% of caster's ATK for 5 sec.",
                "values": {
                    "1": [23.59],
                    "2": [25.41],
                    "3": [27.22],
                    "4": [29.04],
                    "5": [30.85],
                    "6": [32.67],
                    "7": [34.49],
                    "8": [36.3],
                    "9": [38.12],
                    "10": [39.93]
                }
            }
        }
    }, "milk": {
        "id": "milk",
        "name": "Milk",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "cooldown": 20,
                "name": "In It to Win It",
                "description": "■ Affects 2 allies with the highest ATK. ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [17.51],
                    "2": [19.1],
                    "3": [20.69],
                    "4": [22.28],
                    "5": [23.87],
                    "6": [25.46],
                    "7": [27.06],
                    "8": [28.65],
                    "9": [30.24],
                    "10": [31.83]
                }
            }, "skill_2": {
                "name": "Sugar Rush",
                "description": "■ Activates when above 80% HP. Affects all allies. Critical Damage ▲ __% permanently.",
                "values": {
                    "1": [6.12],
                    "2": [6.68],
                    "3": [7.23],
                    "4": [7.79],
                    "5": [8.35],
                    "6": [8.9],
                    "7": [9.46],
                    "8": [10.02],
                    "9": [10.57],
                    "10": [11.13]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Victory is Mine",
                "description": "■ Affects the enemy with the highest DEF. Deals __% of final ATK as damage. ■ Affects all allies. Recovers __% of attack damage as HP over 10 sec.",
                "values": {
                    "1": [202.04, 8.88],
                    "2": [220.4, 9.69],
                    "3": [238.77, 10.5],
                    "4": [257.14, 11.31],
                    "5": [275.51, 12.12],
                    "6": [293.87, 12.93],
                    "7": [312.24, 13.73],
                    "8": [330.61, 14.54],
                    "9": [348.97, 15.35],
                    "10": [367.34, 16.16]
                }
            }
        }
    }, "miranda": {
        "id": "miranda",
        "name": "Miranda",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Health up!",
                "description": "■ Activates after landing 30 normal attack(s). Affects all allies. Hit Rate ▲ __% for 5 sec. ■ Activates after landing 30 normal attack(s). Affects all allies with a Submachine Gun. Hit Rate ▲ __% for 5 sec.",
                "values": {
                    "1": [3.31, 2.09],
                    "2": [3.55, 2.28],
                    "3": [3.78, 2.47],
                    "4": [4.02, 2.66],
                    "5": [4.26, 2.85],
                    "6": [4.49, 3.03],
                    "7": [4.73, 3.22],
                    "8": [4.97, 3.41],
                    "9": [5.2, 3.6],
                    "10": [5.44, 3.79]
                }
            }, "skill_2": {
                "name": "Wake Up!",
                "description": "■ Activates at the beginning of Full Burst. Affects all allies. Critical Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [19.49],
                    "2": [20.99],
                    "3": [22.49],
                    "4": [23.99],
                    "5": [25.49],
                    "6": [26.99],
                    "7": [28.49],
                    "8": [29.99],
                    "9": [31.49],
                    "10": [32.99]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Powering up!",
                "description": "■ Affects 1 allies with the highest ATK (except caster). [Target] ATK ▲ __% for 10 sec. [Target] Critical Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [23.87, 33.22],
                    "2": [25.71, 35.78],
                    "3": [27.55, 38.34],
                    "4": [29.38, 40.89],
                    "5": [31.22, 43.45],
                    "6": [33.06, 46.01],
                    "7": [34.89, 48.56],
                    "8": [36.73, 51.12],
                    "9": [38.57, 53.67],
                    "10": [40.4, 56.23]
                }
            }
        }
    }, "modernia": {
        "id": "modernia",
        "name": "Modernia",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "High-Speed Evolution",
                "description": "■ Activates when normal attack hits. Affects the target(s). Deals __% of final ATK as additional damage. ■ Activates when normal attack hits 200 time(s). Affects self. Critical Damage ▲ __%, stacks up to 5 time(s) and lasts for 10 sec. Max Ammunition Capacity ▼ 5.04%, stacks up to 5 time(s) and lasts for 10 sec.",
                "values": {
                    "1": [1.9, 9.93],
                    "2": [2.03, 10.41],
                    "3": [2.16, 10.89],
                    "4": [2.29, 11.37],
                    "5": [2.41, 11.85],
                    "6": [2.54, 12.33],
                    "7": [2.67, 12.81],
                    "8": [2.8, 13.29],
                    "9": [2.92, 13.77],
                    "10": [3.05, 14.25]
                }
            }, "skill_2": {
                "name": "Giant Leap",
                "description": "■ Affects all allies. Activates when entering Full Burst. Hit Rate ▲ __% for 15 sec. ■ Affects self. Activates when normal attack hits 200 time(s) during increasing Hit Rate status. ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [5.35, 18.36],
                    "2": [5.7, 19.59],
                    "3": [6.06, 20.81],
                    "4": [6.42, 22.04],
                    "5": [6.77, 23.26],
                    "6": [7.13, 24.48],
                    "7": [7.49, 25.71],
                    "8": [7.84, 26.93],
                    "9": [8.2, 28.16],
                    "10": [8.56, 29.38]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "New World",
                "description": "■ Affects all allies. Full Burst Time ▲ 5 sec. ■ Affects self. Grants unlimited ammunition for 15 sec. Destroy Mode: Extending the line of sight and auto-aim at all enemies within fire range. Stage target will be recognized as a single enemy regardless of its interruption parts. Deals __% of final ATK as damage for 15 sec.",
                "values": {
                    "1": [1.52],
                    "2": [1.6],
                    "3": [1.68],
                    "4": [1.76],
                    "5": [1.84],
                    "6": [1.92],
                    "7": [2],
                    "8": [2.08],
                    "9": [2.16],
                    "10": [2.24]
                }
            }
        }
    }, "moran": {
        "id": "moran",
        "name": "Moran",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Bring It On!",
                "description": "■ Activates at the start of the battle. Affects self. DEF ▲ __% with every 1% of HP loss. This effect is active continuously. ■ Activates when landing 5 normal attack(s) when changing the weapon in use. Affects the target. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [1.93, 25.95],
                    "2": [2.1, 28.31],
                    "3": [2.28, 30.67],
                    "4": [2.45, 33.03],
                    "5": [2.63, 35.38],
                    "6": [2.81, 37.74],
                    "7": [2.98, 40.1],
                    "8": [3.16, 42.46],
                    "9": [3.33, 44.82],
                    "10": [3.51, 47.18]
                }
            }, "skill_2": {
                "name": "Leave It To Me!",
                "description": "■ Activates when firing the final bullet. Affects 3 enemy unit(s) with the highest ATK. Taunt for 4 sec. ■ Activates when HP falls below 20%. Affects self. Effect changes according to the number of activation time(s). Perseverance: Effect of each phase does not stack. Once: Max HP ▲ __% for 3 sec. Activates once per battle. Twice: Max HP ▲ __% for 3 sec. Activates once per battle. Three Times: Max HP ▲ __% for 3 sec. Activates once per battle.",
                "values": {
                    "1": [55, 36.09, 25.78],
                    "2": [59, 39.84, 28.59],
                    "3": [63, 43.59, 31.4],
                    "4": [67, 47.34, 34.21],
                    "5": [71, 51.09, 37.03],
                    "6": [75, 54.84, 39.84],
                    "7": [79, 58.59, 42.65],
                    "8": [83, 62.34, 45.46],
                    "9": [87, 66.09, 48.28],
                    "10": [91, 69.84, 51.09]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Fair and Square!",
                "description": "■ Affects self. Change the Weapon in use: Damage: __% of final ATK Lasts for: 10 sec Additional Effect(s): Recovers __% of attack damage as HP over 10 sec. Attract: Taunt all enemies for 10 sec. Note: Cannot take cover while casting Burst skill. ■ Affects all allies. Damage Taken ▼ __% for 10 sec. DEF ▲ __% of caster's DEF for 10 sec.",
                "values": {
                    "1": [11.46, 19.89, 21.78, 8.16],
                    "2": [11.82, 21.7, 23.26, 8.91],
                    "3": [12.18, 23.51, 24.75, 9.65],
                    "4": [12.54, 25.31, 26.23, 10.39],
                    "5": [12.9, 27.12, 27.72, 11.13],
                    "6": [13.26, 28.92, 29.2, 11.88],
                    "7": [13.62, 30.73, 30.69, 12.62],
                    "8": [13.98, 32.53, 32.17, 13.36],
                    "9": [14.34, 34.34, 33.66, 14.1],
                    "10": [14.7, 36.14, 35.14, 14.85]
                }
            }
        }
    }, "naga": {
        "id": "naga",
        "name": "Naga",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Guardian of Friendship",
                "description": "■ Activates after landing 12 normal attack(s). Affects all allies. Recovers __% of Cover's HP. ■ Activates when applying Shield. Affects all allies. Damage dealt when attacking core ▲ __% for 10 sec.",
                "values": {
                    "1": [8.61, 50.33],
                    "2": [9.27, 54.2],
                    "3": [9.93, 58.07],
                    "4": [10.6, 61.94],
                    "5": [11.26, 65.82],
                    "6": [11.92, 69.69],
                    "7": [12.59, 73.56],
                    "8": [13.25, 77.43],
                    "9": [13.91, 81.3],
                    "10": [14.57, 85.17]
                }
            }, "skill_2": {
                "name": "Support of Friendship",
                "description": "■ Activates after 5 normal attack(s). Affects 2 ally unit(s) with the highest ATK. Damage dealt when attacking core ▲ __% for 5 sec. ■ Activates after 5 normal attack(s). Affects 2 ally unit(s) with the lowest HP percentage. Recovers __% of the caster's final Max HP as HP.",
                "values": {
                    "1": [26.37, 5.58],
                    "2": [27.89, 6.03],
                    "3": [29.42, 6.47],
                    "4": [30.94, 6.92],
                    "5": [32.46, 7.36],
                    "6": [33.98, 7.8],
                    "7": [35.5, 8.25],
                    "8": [37.02, 8.69],
                    "9": [38.55, 9.14],
                    "10": [40.07, 9.58]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "As Long As We're With Friends",
                "description": "■ Affects self. Gain Pierce for 10 sec. ■ Affects all allies. ATK ▲ __% of caster's ATK for 10 sec. ■ Activates when applying Shield. Affects all allies. ATK ▲ __% of caster's ATK for 10 sec.",
                "values": {
                    "1": [9.56, 17.16],
                    "2": [10.29, 18.7],
                    "3": [11.03, 20.24],
                    "4": [11.76, 21.78],
                    "5": [12.5, 23.32],
                    "6": [13.24, 24.86],
                    "7": [13.97, 26.4],
                    "8": [14.71, 27.94],
                    "9": [15.44, 29.48],
                    "10": [16.18, 31.02]
                }
            }
        }
    }, "neon_blue_ocean": {
        "id": "neon_blue_ocean",
        "name": "Neon: Blue Ocean",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Upper Wave",
                "description": "■ Activates when using Burst Skill. Affects self. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Damage to Parts ▲ __% for 20 sec. Twice: Damage to Parts ▲ __% for 20 sec. Three times: Damage to Parts ▲ __% for 20 sec.",
                "values": {
                    "1": [5.2, 5.2, 5.2],
                    "2": [6, 6, 6],
                    "3": [6.8, 6.8, 6.8],
                    "4": [7.6, 7.6, 7.6],
                    "5": [8.4, 8.4, 8.4],
                    "6": [9.2, 9.2, 9.2],
                    "7": [10, 10, 10],
                    "8": [10.8, 10.8, 10.8],
                    "9": [11.6, 11.6, 11.6],
                    "10": [12.4, 12.4, 12.4]
                }
            }, "skill_2": {
                "name": "Water Jet",
                "description": "■ Activates when entering Burst stage 3. Affects self. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Damage as strong element ▲ __% for 10 sec. Twice: Damage as strong element ▲ __% for 10 sec. Three times: Damage as strong element ▲ __% for 10 sec.",
                "values": {
                    "1": [8.32, 8.32, 8.32],
                    "2": [9.68, 9.64, 9.64],
                    "3": [11.04, 10.96, 10.96],
                    "4": [12.4, 12.28, 12.28],
                    "5": [13.76, 13.6, 13.6],
                    "6": [15.12, 14.92, 14.92],
                    "7": [16.48, 16.24, 16.24],
                    "8": [17.84, 17.56, 17.56],
                    "9": [19.2, 18.88, 18.88],
                    "10": [20.56, 20.2, 20.2]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Full Hydro Shot",
                "description": "■ Affects self. Change the Weapon in use: Damage: __% of final ATK Last for: 7 sec ■ Affects the target(s) when they belong to Fire Code. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [19.5, 6.5],
                    "2": [21, 7],
                    "3": [22.5, 7.5],
                    "4": [24, 8],
                    "5": [25.5, 8.5],
                    "6": [27, 9],
                    "7": [28.5, 9.5],
                    "8": [30, 10],
                    "9": [31.5, 10.5],
                    "10": [33, 11]
                }
            }
        }
    }, "nero": {
        "id": "nero",
        "name": "Nero",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Cat's Repayment",
                "description": "■ Activates whenrecovery takes effect. Affects the target who cast the skill with recovery effect on Nero. Damage Taken ▼ __% for 5 sec. ■ Activates whenrecovery takes effect. Affects self. Cat's Repayment: Damage Taken ▼ __%, stacks up to 5 time(s) and lasts for 5 sec.",
                "values": {
                    "1": [8.07, 5.24],
                    "2": [8.74, 5.59],
                    "3": [9.42, 5.95],
                    "4": [10.09, 6.3],
                    "5": [10.77, 6.66],
                    "6": [11.44, 7.01],
                    "7": [12.12, 7.37],
                    "8": [12.79, 7.72],
                    "9": [13.47, 8.08],
                    "10": [14.14, 8.43]
                }
            }, "skill_2": {
                "name": "Lil' Paw",
                "description": "■ There is a 30% chance of activating when attacked. Affects the target. Damage Taken ▲ __% for 5 sec. ■ There is a 30% chance of activating when attacked in Grumpy Cat status. Affects the target. Deals __% of final ATK as damage. ■ Activates when entering battle. Affects self. Max HP ▲ __% continuously.",
                "values": {
                    "1": [5.33, 62.4, 38.68],
                    "2": [5.66, 73.02, 41.08],
                    "3": [5.98, 83.65, 43.48],
                    "4": [6.31, 94.28, 45.88],
                    "5": [6.63, 104.91, 48.28],
                    "6": [6.96, 115.54, 50.68],
                    "7": [7.28, 126.17, 53.08],
                    "8": [7.61, 136.8, 55.48],
                    "9": [7.94, 147.42, 57.88],
                    "10": [8.26, 158.05, 60.28]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Grumpy Cat",
                "description": "■ Affects 1 enemy unit(s) with the highest HP. Deals __% of final ATK as damage. ■ Affects self. Attract: Taunt all enemies for __ sec. ■ Activates when Cat's Repayment is fully stacked. Affects self. Grumpy Cat: HP Potency ▲ __% for 15 sec.",
                "values": {
                    "1": [975.31, 8, 38.48],
                    "2": [989.71, 8, 40.88],
                    "3": [1004.11, 8, 43.28],
                    "4": [1018.51, 10, 45.68],
                    "5": [1032.91, 10, 48.08],
                    "6": [1047.31, 10, 50.48],
                    "7": [1061.71, 15, 52.88],
                    "8": [1076.11, 15, 55.28],
                    "9": [1090.51, 15, 57.68],
                    "10": [1104.91, 15, 60.08]
                }
            }
        }
    }, "nihilister": {
        "id": "nihilister",
        "name": "Nihilister",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Burning Shot",
                "description": "■ Activates when attacking with Full Charge. Affects self. Gain Pierce for 1 round(s). Piercing Radius ▲ 50% for 1 round(s). ■ Activates when hits 2 or more enemies concurrently. Affects all enemies hit. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [11.28],
                    "2": [15.62],
                    "3": [19.95],
                    "4": [24.29],
                    "5": [28.63],
                    "6": [32.97],
                    "7": [37.31],
                    "8": [41.65],
                    "9": [45.99],
                    "10": [50.33]
                }
            }, "skill_2": {
                "cooldown": 10,
                "name": "Megiddo Flame",
                "description": "■ Affects enemies within attack range. Deals __% of final ATK as damage.",
                "values": {
                    "1": [66.56],
                    "2": [71.68],
                    "3": [76.79],
                    "4": [81.92],
                    "5": [87.04],
                    "6": [92.16],
                    "7": [97.27],
                    "8": [102.4],
                    "9": [107.52],
                    "10": [112.64]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Burning Scourge",
                "description": "■ Affects enemies within the attack range. Deals __% of final ATK as damage. Burn: Deals __% of final ATK as sustained damage every 1 sec for 10 sec. ■ Affects self. Max Ammunition Capacity ▲ __ round(s) for 15 sec.",
                "values": {
                    "1": [99.84, 7.48, 3],
                    "2": [106.36, 8.12, 4],
                    "3": [112.89, 8.75, 4],
                    "4": [119.42, 9.38,4],
                    "5": [125.95, 10.02, 4],
                    "6": [132.48, 10.65, 5],
                    "7": [139, 11.28, 5],
                    "8": [145.53, 11.92, 5],
                    "9": [152.06, 12.55, 6],
                    "10": [158.59, 13.19, 6]
                }
            }
        }
    }, "noah": {
        "id": "noah",
        "name": "Noah",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "This is Gonna Hurt",
                "description": "■ There is a 10% chance of activating when attacked. Affects all allies. Damage Taken ▼ __% for 10 sec.",
                "values": {
                    "1": [4.4],
                    "2": [4.8],
                    "3": [5.2],
                    "4": [5.6],
                    "5": [6],
                    "6": [6.4],
                    "7": [6.8],
                    "8": [7.2],
                    "9": [7.6],
                    "10": [8]
                }
            }, "skill_2": {
                "name": "Cruisin' for a Bruisin'",
                "description": "■ Activates when attacking with Full Charge. Affects the target(s). Taunt for 2 sec. ATK ▼ __% for 5 sec.",
                "values": {
                    "1": [9.35],
                    "2": [9.78],
                    "3": [10.22],
                    "4": [10.65],
                    "5": [11.09],
                    "6": [11.52],
                    "7": [11.95],
                    "8": [12.39],
                    "9": [12.82],
                    "10": [13.25]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "U Mad Bro?",
                "description": "■ Affects self. Attract: Taunt all enemies for 10 sec. ■ Affects all allies. Invulnerable for 3 sec. DEF ▲ __% for 10 sec.",
                "values": {
                    "1": [88.93],
                    "2": [93.88],
                    "3": [98.83],
                    "4": [103.78],
                    "5": [108.73],
                    "6": [113.68],
                    "7": [118.63],
                    "8": [123.58],
                    "9": [128.53],
                    "10": [133.48]
                }
            }
        }
    }, "noir": {
        "id": "noir",
        "name": "Noir",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Lucky Charm",
                "description": "■ Activates when above 70% HP. Affects all allies. ATK ▲ __% of caster's ATK constantly.",
                "values": {
                    "1": [8.32],
                    "2": [8.96],
                    "3": [9.6],
                    "4": [10.24],
                    "5": [10.88],
                    "6": [11.52],
                    "7": [12.16],
                    "8": [12.8],
                    "9": [13.44],
                    "10": [14.08]
                }
            }, "skill_2": {
                "name": "Rabbit Twins B",
                "description": "■ Activates when entering Full Burst. Affects all allies. Max Ammunition Capacity ▲ __ round(s) for 10 sec. Reload __% magazine(s).",
                "values": {
                    "1": [3, 26.02],
                    "2": [3, 27.56],
                    "3": [3, 29.1],
                    "4": [3, 30.64],
                    "5": [4, 32.18],
                    "6": [4, 33.72],
                    "7": [4, 35.26],
                    "8": [4, 36.8],
                    "9": [5, 38.34],
                    "10": [5, 39.88]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Finale",
                "description": "■ Affects all enemies. Deals __% of final ATK as damage. ■ Affects all allies with a Shotgun. Hit Rate ▲ __% for 10 sec. Damage to Interruption Parts ▲ __% for 10 sec. ■ Activates with an ally from the same squad still on the battlefield. Affects all allies. Hit Rate ▲ __% for 30 sec. Damage to Interruption Parts ▲ __% for 30 sec.",
                "values": {
                    "1": [207.79, 8.23, 13.72, 6.86, 11.44],
                    "2": [223.77, 8.87, 14.78, 7.39, 12.32],
                    "3": [239.76, 9.5, 15.84, 7.92, 13.2],
                    "4": [255.74, 10.13, 16.89, 8.44, 14.08],
                    "5": [271.72, 10.77, 17.95, 8.97, 14.96],
                    "6": [287.71, 11.4, 19, 9.5, 15.84],
                    "7": [303.69, 12.03, 20.06, 10.03, 16.72],
                    "8": [319.68, 12.67, 21.12, 10.56, 17.6],
                    "9": [335.66, 13.3, 22.17, 11.08, 18.48],
                    "10": [351.64, 13.93, 23.23, 11.61, 19.36]
                }
            }
        }
    }, "noise": {
        "id": "noise",
        "name": "Noise",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Chorus",
                "description": "■ Activates when attacked 20 time(s). Affects all allies. Damage Taken ▼ __% for 20 sec.",
                "values": {
                    "1": [5.86],
                    "2": [6.4],
                    "3": [6.93],
                    "4": [7.46],
                    "5": [8],
                    "6": [8.53],
                    "7": [9.06],
                    "8": [9.59],
                    "9": [10.13],
                    "10": [10.66]
                }
            }, "skill_2": {
                "name": "Sing Together",
                "description": "■ Affects the target(s) when attacking with full charge. Taunt for 2 sec. ■ Affects self. Max HP ▲ __% for 1.8 sec.",
                "values": {
                    "1": [17.54],
                    "2": [18.35],
                    "3": [19.16],
                    "4": [19.98],
                    "5": [20.79],
                    "6": [21.6],
                    "7": [22.42],
                    "8": [23.23],
                    "9": [24.04],
                    "10": [24.86]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Energetic Noise",
                "description": "■ Affects all allies. Constantly recovers __% of caster's final Max HP every 1 sec for 10 sec. Max HP ▲ __% for 10 sec.",
                "values": {
                    "1": [1.36, 27.22],
                    "2": [1.48, 29.7],
                    "3": [1.6, 32.17],
                    "4": [1.73, 34.65],
                    "5": [1.85, 37.12],
                    "6": [1.98, 39.6],
                    "7": [2.1, 42.07],
                    "8": [2.22, 44.55],
                    "9": [2.35, 47.02],
                    "10": [2.47, 49.5]
                }
            }
        }
    }, "novel": {
        "id": "novel",
        "name": "Novel",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "cooldown": 10,
                "name": "Something's Fishy Here",
                "description": "■ Affects 3 enemy unit(s) with the highest DEF. Deals __% of final ATK as damage. DEF ▼ __% for 5 sec.",
                "values": {
                    "1": [26.18, 3.52],
                    "2": [29.09, 3.91],
                    "3": [32, 4.31],
                    "4": [34.9, 4.7],
                    "5": [37.81, 5.09],
                    "6": [40.72, 5.48],
                    "7": [43.63, 5.87],
                    "8": [46.54, 6.26],
                    "9": [49.45, 6.66],
                    "10": [52.36, 7.05]
                }
            }, "skill_2": {
                "name": "Detective's Intuition",
                "description": "■ Activates after landing 100 normal attack(s). Affects self. Cornucopia: DEF ▲ __%, stacks up to 5 time(s) and lasts for 15 sec.",
                "values": {
                    "1": [6.75],
                    "2": [7.5],
                    "3": [8.25],
                    "4": [9],
                    "5": [9.75],
                    "6": [10.5],
                    "7": [11.25],
                    "8": [12],
                    "9": [12.75],
                    "10": [13.5]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Case Closed",
                "description": "■ Affects 1 enemy unit(s) with the highest ATK. Deals __% of final ATK as damage. ■ Activates when Cornucopia is fully stacked. Affects 1 enemy unit(s). Damage Taken ▲ __% for 5 sec.",
                "values": {
                    "1": [165.3, 33.75],
                    "2": [183.67, 37.5],
                    "3": [202.04, 41.25],
                    "4": [220.4, 45],
                    "5": [238.77, 48.75],
                    "6": [257.14, 52.5],
                    "7": [275.51, 56.25],
                    "8": [293.87, 60],
                    "9": [312.24, 63.75],
                    "10": [330.61, 67.5]
                }
            }
        }
    }, "pepper": {
        "id": "pepper",
        "name": "Pepper",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Refresh Heart",
                "description": "■ Activates when the last bullet hits the target. Affects 1 ally unit(s) with the lowest HP percentage. Restores HP equal to __% of the caster's final Max HP. ■ Activates when the last bullet hits the target. Affects all allies. Refresh Heart: HP Potency ▲ __%, stacks up to 5 time(s) and lasts for 15 sec.",
                "values": {
                    "1": [2.63, 3.86],
                    "2": [2.83, 4.15],
                    "3": [3.03, 4.45],
                    "4": [3.24, 4.75],
                    "5": [3.44, 5.04],
                    "6": [3.64, 5.34],
                    "7": [3.84, 5.64],
                    "8": [4.05, 5.94],
                    "9": [4.25, 6.23],
                    "10": [4.45, 6.53]
                }
            }, "skill_2": {
                "cooldown": 10,
                "name": "Vitamin Power",
                "description": "■ Affects 1 enemy unit(s) with the highest ATK. Deals __% of final ATK as damage. ATK ▼ __% for 5 sec.",
                "values": {
                    "1": [94.54, 2.1],
                    "2": [101.81, 2.26],
                    "3": [109.09, 2.42],
                    "4": [116.36, 2.58],
                    "5": [123.63, 2.74],
                    "6": [130.9, 2.9],
                    "7": [138.18, 3.07],
                    "8": [145.45, 3.23],
                    "9": [152.72, 3.39],
                    "10": [160, 3.55]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Pepper Therapy",
                "description": "■ Affects 1 enemy unit(s) with the highest ATK. Deals __% of final ATK as damage. ■ Affects all allies. Increases stack count of buffs by 1. ■ Activates when Refresh Heart is fully stacked. Affects all allies. Restores HP equal to __% of the caster's final Max HP.",
                "values": {
                    "1": [731.25, 16.08],
                    "2": [787.5, 17.32],
                    "3": [843.75, 18.56],
                    "4": [900,  19.8],
                    "5": [956.25, 21.03],
                    "6": [1012.5, 22.27],
                    "7": [1068.75, 23.51],
                    "8": [1125, 24.75],
                    "9": [1181.25, 25.98],
                    "10": [1237.5, 27.22]
                }
            }
        }
    }, "poli": {
        "id": "poli",
        "name": "Poli",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Brave Call",
                "description": "■ Activates after 5 normal attacks. Affects all allies. ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [2.73],
                    "2": [3.03],
                    "3": [3.33],
                    "4": [3.64],
                    "5": [3.94],
                    "6": [4.25],
                    "7": [4.55],
                    "8": [4.85],
                    "9": [5.16],
                    "10": [5.46]
                }
            }, "skill_2": {
                "cooldown": 20,
                "name": "That's a Good Boy",
                "description": "■ Affects self and 2 ally unit(s) with the lowest HP (except caster). DEF ▲ __% for 10 sec. Equally shares damage taken for 10 sec.",
                "values": {
                    "1": [11.75],
                    "2": [13.06],
                    "3": [14.36],
                    "4": [15.67],
                    "5": [16.97],
                    "6": [18.28],
                    "7": [19.59],
                    "8": [20.89],
                    "9": [22.2],
                    "10": [23.51]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Poli's Defense Line",
                "description": "■ Affects self. Creates a Shield, equivalent to __% of the caster's final Max HP, which protects all allies from damage. Lasts for 10 sec. ■ Affects all allies. ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [11.13, 22.27],
                    "2": [12.37, 24.75],
                    "3": [13.61, 27.22],
                    "4": [14.85, 29.7],
                    "5": [16.08, 32.17],
                    "6": [17.32, 34.65],
                    "7": [18.56, 37.12],
                    "8": [19.8, 39.6],
                    "9": [21.03, 42.07],
                    "10": [22.27, 44.55]
                }
            }
        }
    }, "power": {
        "id": "power",
        "name": "Power",
        "manufacturer": NikkeManufacturer.Abnormal,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Blood Fiend",
                "description": "■ Activates when attacking with Full Charge. Affects self. Blood Fiend: ATK ▲ __%, stacks up to 5 time(s) and lasts for 3 sec.",
                "values": {
                    "1": [3.78],
                    "2": [4.07],
                    "3": [4.36],
                    "4": [4.65],
                    "5": [4.94],
                    "6": [5.23],
                    "7": [5.52],
                    "8": [5.81],
                    "9": [6.1],
                    "10": [6.4]
                }
            }, "skill_2": {
                "name": "Blood Explosion",
                "description": "■ Activates when at Max Stacks of Blood Fiend after landing 18 normal attack(s). Affects self. Explosion Radius ▲ __% for 10 sec. Reload 100%. Activates 1 time(s) per battle.",
                "values": {
                    "1": [15.21],
                    "2": [17.81],
                    "3": [20.41],
                    "4": [23.01],
                    "5": [25.61],
                    "6": [28.21],
                    "7": [30.81],
                    "8": [33.41],
                    "9": [36.01],
                    "10": [38.61]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Blood Hammer",
                "description": "■ Affects 1 enemy unit(s) with the highest ATK. Deals __% of final ATK as damage. ■ Affects the same target(s) when at Max Stacks of Blood Fiend. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [936, 936],
                    "2": [1008, 1008],
                    "3": [1080, 1080],
                    "4": [1152, 1152],
                    "5": [1224, 1224],
                    "6": [1296, 1296],
                    "7": [1368, 1368],
                    "8": [1440, 1440],
                    "9": [1512, 1512],
                    "10": [1584, 1584]
                }
            }
        }
    }, "privaty": {
        "id": "privaty",
        "name": "Privaty",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "EX magazine",
                "description": "■ Affects all allies. Cast when entering Full Burst. ATK ▲ __% for 10 sec. Reloading Speed ▲ __% for 10 sec. Max Ammunition Capacity ▼ 50.66% for 10 sec.",
                "values": {
                    "1": [18.77, 22.88],
                    "2": [19.3, 26.02],
                    "3": [19.84, 29.16],
                    "4": [20.38, 32.3],
                    "5": [20.92, 35.45],
                    "6": [21.46, 38.59],
                    "7": [22, 41.73],
                    "8": [22.54, 44.88],
                    "9": [23.08, 48.02],
                    "10": [23.61, 51.16]
                }
            }, "skill_2": {
                "name": "LD Assault",
                "description": "■ Activates when the last bullet hits the target. Affects the target. Deals __% of final ATK as Additional Damage. ■ Affects the enemy hit by the last round of ammunition if they are Stunned. Deals __% of final ATK as Additional Damage.",
                "values": {
                    "1": [50.7, 643.5],
                    "2": [54.6, 693],
                    "3": [58.5, 742.5],
                    "4": [62.4, 792],
                    "5": [66.3, 841.5],
                    "6": [70.2, 891],
                    "7": [74.09, 940.5],
                    "8": [77.99, 990],
                    "9": [81.9, 1039.5],
                    "10": [85.79, 1089]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "AK Missile",
                "description": "■ Affects all enemies. Deals __% of final ATK as damage. Stun for 3 sec.",
                "values": {
                    "1": [270.56],
                    "2": [291.37],
                    "3": [312.18],
                    "4": [333],
                    "5": [353.81],
                    "6": [374.62],
                    "7": [395.43],
                    "8": [416.25],
                    "9": [437.06],
                    "10": [457.87]
                }
            }
        }
    }, "privaty_unkind_maid": {
        "id": "privaty_unkind_maid",
        "name": "Privaty: Unkind Maid",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Passionate Maid",
                "description": "■ Activates when hitting the target with 30 pellet(s). Affects 2 enemy unit(s) nearest to the crosshair. Deals __% of final ATK as damage.",
                "values": {
                    "1": [119.86],
                    "2": [129.08],
                    "3": [138.3],
                    "4": [147.52],
                    "5": [156.74],
                    "6": [165.96],
                    "7": [175.18],
                    "8": [184.4],
                    "9": [193.62],
                    "10": [202.84]
                }
            }, "skill_2": {
                "name": "Loving Maid",
                "description": "■ Activates when more than 5 pellet(s) hit with a single normal attack. Affects self. Reloading Speed ▲ __% for 2 sec. ■ Activates when hitting 30 time(s) using pellets during Full Burst Time. Affects self. Reload 1 round(s). ATK ▲ __%, stacks up to 5 time(s) and lasts for 2 sec.",
                "values": {
                    "1": [12.33, 6.63],
                    "2": [13.28, 7.14],
                    "3": [14.23, 7.65],
                    "4": [15.18, 8.16],
                    "5": [16.13, 8.67],
                    "6": [17.08, 9.18],
                    "7": [18.03, 9.69],
                    "8": [18.98, 10.2],
                    "9": [19.93, 10.71],
                    "10": [20.88, 11.22]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Your Bashful Maid!",
                "description": "■ Affects self. Attack damage ▲ __% for 10 sec. Critical Damage ▲ __% for 10 sec. ■ Affects all enemies. Deals __% of final ATK as damage.",
                "values": {
                    "1": [6.24, 52.1, 630.3],
                    "2": [6.72, 56.11, 678.78],
                    "3": [7.2, 60.12, 727.27],
                    "4": [7.68, 64.12, 775.75],
                    "5": [8.16, 68.13, 824.24],
                    "6": [8.64, 72.14, 872.72],
                    "7": [9.12, 76.15, 921.21],
                    "8": [9.6, 80.16, 969.69],
                    "9": [10.08, 84.16, 1018.18],
                    "10": [10.56, 88.17, 1066.66]
                }
            }
        }
    }, "quency": {
        "id": "quency",
        "name": "Quency",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "New Route",
                "description": "■ Activates after 60 normal attack(s). Affects self. Duplicate __% Max HP of Nikke with the highest Max HP, lasts for 10 sec.",
                "values": {
                    "1": [6.21],
                    "2": [6.9],
                    "3": [7.59],
                    "4": [8.28],
                    "5": [8.97],
                    "6": [9.66],
                    "7": [10.35],
                    "8": [11.04],
                    "9": [11.73],
                    "10": [12.42]
                }
            }, "skill_2": {
                "cooldown": 8,
                "name": "Hidden Accomplice",
                "description": "■ Affects 2 ally unit(s) with the highest ATK. ATK ▲ __% for 5 sec.",
                "values": {
                    "1": [8.05],
                    "2": [8.95],
                    "3": [9.84],
                    "4": [10.74],
                    "5": [11.63],
                    "6": [12.53],
                    "7": [13.42],
                    "8": [14.32],
                    "9": [15.21],
                    "10": [16.11]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "The Great Escape",
                "description": "■ Affects 2 ally unit(s) with the highest ATK. Max HP ▲ __% for 5 sec. Critical Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [21.93, 14.95],
                    "2": [24.37, 16.61],
                    "3": [26.81, 18.27],
                    "4": [29.25, 19.93],
                    "5": [31.68, 21.59],
                    "6": [34.12, 23.26],
                    "7": [36.56, 24.92],
                    "8": [39, 26.58],
                    "9": [41.43, 28.24],
                    "10": [43.87, 29.9]
                }
            }
        }
    }, "quiry": {
        "id": "quiry",
        "name": "Quiry",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Glance",
                "description": "■ Activates when hitting a target with Full Charge. Affects the target. ATK ▼ __% of caster's ATK for 3 sec. ■ Activates when attacking with Full Charge. Affects 2 Defender ally unit(s). ATK ▲ __% of caster's ATK for 3 sec.",
                "values": {
                    "1": [5.28, 3.43],
                    "2": [5.69, 3.7],
                    "3": [6.1, 3.96],
                    "4": [6.5, 4.23],
                    "5": [6.91, 4.49],
                    "6": [7.32, 4.75],
                    "7": [7.72, 5.02],
                    "8": [8.13, 5.28],
                    "9": [8.54, 5.55],
                    "10": [8.94, 5.81]
                }
            }, "skill_2": {
                "name": "Scrutiny",
                "description": "■ Activates when entering battle. Affects 2 Defender ally unit(s). Max HP ▲ __% continuously.",
                "values": {
                    "1": [6.87],
                    "2": [7.4],
                    "3": [7.93],
                    "4": [8.46],
                    "5": [8.98],
                    "6": [9.51],
                    "7": [10.04],
                    "8": [10.57],
                    "9": [11.1],
                    "10": [11.63]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Penetrating Stare",
                "description": "■ Affects all allies. Recovers __% of caster's final Max HP every 1 sec for 10 sec. ■ Affects all Defender allies. Critical Rate ▲ __% for 10 sec.",
                "values": {
                    "1": [4.11, 11.76],
                    "2": [4.43, 12.66],
                    "3": [4.75, 13.57],
                    "4": [5.06, 14.47],
                    "5": [5.38, 15.38],
                    "6": [5.7, 16.28],
                    "7": [6.01, 17.19],
                    "8": [6.33, 18.09],
                    "9": [6.65, 19],
                    "10": [6.96, 19.9]
                }
            }
        }
    }, "rapunzel": {
        "id": "rapunzel",
        "name": "Rapunzel",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Sacrifice",
                "description": "■ Activates when attacking with Full Charge. Affects 3 ally unit(s) with the lowest HP percentage. Recovers __% of the caster's final Max HP as HP.",
                "values": {
                    "1": [2.52],
                    "2": [2.68],
                    "3": [2.85],
                    "4": [3.02],
                    "5": [3.19],
                    "6": [3.36],
                    "7": [3.52],
                    "8": [3.69],
                    "9": [3.86],
                    "10": [4.03]
                }
            }, "skill_2": {
                "cooldown": 15,
                "name": "Divine Blessing",
                "description": "■ Affects 2 ally unit(s) with the highest ATK. Max HP ▲ __% for 15 sec. HP Potency ▲ __% for 15 sec.",
                "values": {
                    "1": [5.11, 8.53],
                    "2": [5.46, 9.09],
                    "3": [5.8, 9.66],
                    "4": [6.14, 10.23],
                    "5": [6.48, 10.8],
                    "6": [6.82, 11.37],
                    "7": [7.16, 11.94],
                    "8": [7.5, 12.51],
                    "9": [7.84, 13.08],
                    "10": [8.19, 13.65]
                }
            }, "burst_skill": {
                "cooldown": 60,
                "name": "Garden of Shangri-La",
                "description": "■ Affects all allies. Recovers __% of the caster's final Max HP as HP. ■ Affects 1 fallen ally unit(s) with the highest ATK. Resurrect with __% HP. ■ Activates when HP falls below 30%. Affects all enemies. Stun for 1 sec.",
                "values": {
                    "1": [18.56, 37.12],
                    "2": [21.03, 42.07],
                    "3": [23.51, 47.02],
                    "4": [25.98, 51.97],
                    "5": [28.46, 56.92],
                    "6": [30.93, 61.87],
                    "7": [33.41, 66.82],
                    "8": [35.88, 71.77],
                    "9": [38.36, 76.72],
                    "10": [40.83, 81.67]
                }
            }
        }
    }, "red_hood": {
        "id": "red_hood",
        "name": "Red Hood",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_Lambda,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Glaring Eyes",
                "description": "■ Activates when casting a normal attack. Affects self. Charge Speed ▲ __%, stacks up to 10 time(s) and lasts for 5 sec. ■ Activates when entering battle. Affects self. Convert excess value over 100% of Charge Speed to Charge Damage. Charge Damage ▲ 240% of the excess value continuously.",
                "values": {
                    "1": [2.28],
                    "2": [2.45],
                    "3": [2.62],
                    "4": [2.79],
                    "5": [2.96],
                    "6": [3.13],
                    "7": [3.3],
                    "8": [3.47],
                    "9": [3.64],
                    "10": [3.81]
                }
            }, "skill_2": {
                "name": "Wild Tooth",
                "description": "■ Activates when entering battle. Affects self. Gain Pierce continuously. ■ Activates during Beast Cage. Affects all allies. DEF ▲ __% of caster's DEF for 10 sec. ■ Activates during The Last Howl. Affects self. Recovers __% of attack damage as HP over 10 sec. ■ Activates when casting Red Wolf. Affects self. ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [31.68, 14.4, 44.64],
                    "2": [33.79, 15.36, 47.61],
                    "3": [35.9, 16.32, 50.59],
                    "4": [38.01, 17.28, 53.56],
                    "5": [40.12, 18.24, 56.54],
                    "6": [42.24, 19.2, 59.52],
                    "7": [44.35, 20.16, 62.49],
                    "8": [46.46, 21.12, 65.47],
                    "9": [48.57, 22.08, 68.44],
                    "10": [50.68, 23.04, 71.42]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Red Wolf",
                "description": "When used in Step 1: Beast Cage ■ Affects all allies. ATK ▲ __% of caster's ATK for 10 sec. ■ Affects self. Cooldown of Burst Skill ▼ 40 sec. Activates once per battle. When used in Step 2: The Last Howl ■ Affects self. Attract: Taunt all enemies for 10 sec. HP Potency ▲ __% for 10 sec. Cooldown of Burst Skill ▼ 40 sec. Activates once per battle. When used in Step 3: Red Wolf ■ Affects self. Change the Weapon in use: Damage: __% of final ATK Full Charge Damage: 250% of damage Last for: 10 sec Additional Effects: Expand Pierce range by 100% for 10 sec. Charge Speed ▲ 100.8% for undefined sec.",
                "values": {
                    "1": [48.47, 46.8, 37.02],
                    "2": [51.7, 49.92, 38.63],
                    "3": [54.93, 53.04, 40.23],
                    "4": [58.16, 56.16, 41.84],
                    "5": [61.39, 59.28, 43.44],
                    "6": [64.62, 62.4, 45.05],
                    "7": [67.85, 65.52, 46.65],
                    "8": [71.08, 68.64, 48.26],
                    "9": [74.32, 71.76, 49.86],
                    "10": [77.55, 74.88, 51.46]
                }
            }
        }
    }, "rei": {
        "id": "rei",
        "name": "Rei",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Senior Support",
                "description": "■ Activates after 60 normal attack(s). Affects all allies. Fills Burst Gauge by __%. ■ Affects decoy when decoy exists. Recovers HP by __% of the caster's final Max HP.",
                "values": {
                    "1": [1.35, 1.15],
                    "2": [1.48, 1.26],
                    "3": [1.6, 1.36],
                    "4": [1.72, 1.47],
                    "5": [1.85, 1.57],
                    "6": [1.97, 1.68],
                    "7": [2.09, 1.78],
                    "8": [2.22, 1.89],
                    "9": [2.34, 2],
                    "10": [2.47, 2.1]
                }
            }, "skill_2": {
                "name": "Senior Spirit",
                "description": "■ Activates when entering battle. Affects self. Decoy: Creates an Avatar with __% of caster's final Max HP for 240 sec.",
                "values": {
                    "1": [52.8],
                    "2": [57.6],
                    "3": [62.4],
                    "4": [67.2],
                    "5": [72],
                    "6": [76.8],
                    "7": [81.6],
                    "8": [86.4],
                    "9": [91.2],
                    "10": [96]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Model Senior Student",
                "description": "■ Affects self. Attract: Taunt all enemies for 5 sec. Damage Taken ▼ __% for 10 sec. ■ Affects decoy when decoy exists. Constantly recovers __% of caster's final Max HP every 1 sec for 10 sec.",
                "values": {
                    "1": [7.92, 1.61],
                    "2": [8.64, 1.68],
                    "3": [9.36, 1.76],
                    "4": [10.08, 1.83],
                    "5": [10.8, 1.91],
                    "6": [11.52, 1.98],
                    "7": [12.24, 2.05],
                    "8": [12.96, 2.13],
                    "9": [13.68, 2.2],
                    "10": [14.4, 2.27]
                }
            }
        }
    }, "rei_ayanami": {
        id: "rei_ayanami",
        name: "Rei",
        manufacturer: NikkeManufacturer.Abnormal,
        role: NikkeRole.Attacker,
        weapon_type: WeaponType.MG,
        rarity: NikkeRarity.SSR,
        burst: Burst.Burst_III,
        element: NikkeElement.Fire,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Preemptive Subdual",
                description: "■ Activates after 100 normal attack(s). Affects self. Damage as strong element ▲ __% for 3 sec. ■ Activates after landing 100 normal attack(s). Affects the enemy within attack range nearest to the crosshair. Deals __% of final ATK as damage.",
                values: {
                    1: [22.91, 73.32],
                    2: [23.72, 77.66],
                    3: [24.54, 82],
                    4: [25.35, 86.34],
                    5: [26.16, 90.68],
                    6: [26.98, 95.02],
                    7: [27.79, 99.36],
                    8: [28.61, 103.7],
                    9: [29.42, 108.04],
                    10: [30.23, 112.37]
                }
            }, skill_2: {
                name: "Attack Support",
                description: "■ Activates at the start of the battle. Affects self. Damage dealt to Shield ▲ __% continuously. ■ Activates when entering Burst stage 3. Affects all Fire Code allies. ATK ▲ __% of caster's ATK for 10 sec.",
                values: {
                    1: [472.72, 16.97],
                    2: [498.03, 17.86],
                    3: [523.34, 18.76],
                    4: [548.65, 19.66],
                    5: [573.96, 20.55],
                    6: [599.27, 21.45],
                    7: [624.58, 22.34],
                    8: [649.89, 23.24],
                    9: [675.2, 24.14],
                    10: [700.5, 25.03]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Annihilation: High Explosives",
                description: "■ Affects all Fire Code allies. Creates a Shield equal to __% of the caster's final Max HP for 10 sec. Attack damage ▲ __% for 10 sec. ■ Affects all enemies. Deals __% of final ATK as damage.",
                values: {
                    1: [9.98, 29.81, 654.54],
                    2: [10.36, 31.84, 691.84],
                    3: [10.75, 33.86, 729.13],
                    4: [11.13, 35.88, 766.43],
                    5: [11.52, 37.9, 803.72],
                    6: [11.9, 39.93, 841.02],
                    7: [12.28, 41.95, 878.32],
                    8: [12.67, 43.97, 915.61],
                    9: [13.05, 45.99, 952.91],
                    10: [13.44, 48.02, 990.2]
                }
            }
        }
    }, "rem": {
        "id": "rem",
        "name": "Rem",
        "manufacturer": NikkeManufacturer.Abnormal,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Leave it to Rem!",
                "description": "■ Activates after landing 15 normal attack(s) in Demon's Breath status. Affects self. ATK ▲ __%, stacks up to 30 time(s) and lasts for 10 sec. ■ Activates when using Burst Skill. Affects all allies. Equally shares HP recovery for 10 sec.",
                "values": {
                    "1": [2.49],
                    "2": [2.68],
                    "3": [2.88],
                    "4": [3.07],
                    "5": [3.26],
                    "6": [3.45],
                    "7": [3.64],
                    "8": [3.84],
                    "9": [4.03],
                    "10": [4.22]
                }
            }, "skill_2": {
                "name": "Rem the Healer",
                "description": "■ Activates when entering battle. Affects self. Recovers __% of attack damage as HP continuously. ■ Activates when entering battle. Affects self and 2 Rocket Launcher-wielding ally unit(s) with the highest ATK. Equally shares HP recovery continuously.",
                "values": {
                    "1": [24.96],
                    "2": [26.88],
                    "3": [28.8],
                    "4": [30.72],
                    "5": [32.64],
                    "6": [34.56],
                    "7": [36.48],
                    "8": [38.4],
                    "9": [40.32],
                    "10": [42.24]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "No Mercy from Rem",
                "description": "■ Affects self. Demon's Breath: Critical Rate ▲ __% for 10 sec. ■ Affects all allies with a Rocket Launcher. ATK ▲ __% of caster's ATK for 10 sec. Max Ammunition Capacity ▲ __ round(s) for 10 sec.",
                "values": {
                    "1": [7.4, 30.01, 3],
                    "2": [10.4, 32.31, 3],
                    "3": [13.76, 34.62, 4],
                    "4": [17.29, 36.93, 4],
                    "5": [20.37, 39.24, 4],
                    "6": [23.69, 41.55, 4],
                    "7": [27.25, 43.86, 5],
                    "8": [30.78, 46.17, 5],
                    "9": [33.6, 48.47, 5],
                    "10": [37.8, 50.78, 5]
                }
            }
        }
    }, "rosanna": {
        "id": "rosanna",
        "name": "Rosanna",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "On the Lam",
                "description": "■ Activates after landing 120 normal attack(s). Affects self. Concealment: Prevents self from being the target of single-target attacks for 10 sec. Loses effect when the caster takes damage. Critical Rate ▲ __% for 3 sec. ■ Activates after landing 10 normal attack(s). Affects 2 enemy unit(s) with the highest ATK. Dispels __ buff(s). Activates 1 time(s) per battle.",
                "values": {
                    "1": [8.98, 1],
                    "2": [10.13, 1],
                    "3": [11.28, 1],
                    "4": [12.43, 3],
                    "5": [13.59, 3],
                    "6": [14.74, 3],
                    "7": [15.89, 5],
                    "8": [17.04, 5],
                    "9": [18.19, 5],
                    "10": [19.34, 5]
                }
            }, "skill_2": {
                "name": "Capo dei Capi",
                "description": "■ Activates when entering battle. Affects self. Concealment: Prevents self from being the target of single-target attacks for 5 sec. Loses effect when the caster takes damage. ■ Activates when a Nikke is out of action. Affects self. Frenzy: ATK ▲ __%, stacks up to 10 time(s) and lasts for 30 sec. Fills Burst Gauge by __%.",
                "values": {
                    "1": [12.83, 20.54],
                    "2": [13.92, 22.32],
                    "3": [15.01, 24.09],
                    "4": [16.09, 25.87],
                    "5": [17.18, 27.65],
                    "6": [18.27, 29.43],
                    "7": [19.35, 31.2],
                    "8": [20.44, 32.98],
                    "9": [21.53, 34.76],
                    "10": [22.61, 36.54]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Vendetta",
                "description": "■ Prioritizes 2 Attacker enemy unit(s). Deals __% of final ATK as damage. ■ Affects the same target(s) when in Concealment status. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [720.72, 308.88],
                    "2": [786.24, 336.96],
                    "3": [851.76, 365.04],
                    "4": [917.28, 393.12],
                    "5": [982.8, 421.2],
                    "6": [1048.32, 449.28],
                    "7": [1113.84, 477.36],
                    "8": [1179.36, 505.44],
                    "9": [1244.88, 533.52],
                    "10": [1310.4, 561.6]
                }
            }
        }
    }, "rosanna_chic_ocean": {
        "id": "rosanna_chic_ocean",
        "name": "Rosanna: Chic Ocean",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Ferita",
                "description": "■ Activates when entering battle. Affects all allies. Damage to Parts ▲ __% for 15 sec. ■ Activates when an ally or self destroys an enemy's part. Affects all allies. ATK ▲ __% of caster's ATK, stacks up to 5 time(s) and lasts for 30 sec.",
                "values": {
                    "1": [14.33, 1.77],
                    "2": [15.44, 1.91],
                    "3": [16.54, 2.04],
                    "4": [17.64, 2.18],
                    "5": [18.74, 2.32],
                    "6": [19.85, 2.45],
                    "7": [20.95, 2.59],
                    "8": [22.05, 2.73],
                    "9": [23.16, 2.86],
                    "10": [24.26, 3]
                }
            }, "skill_2": {
                "cooldown": 30,
                "name": "Spina di Rosa",
                "description": "■ Affects all allies. Damage to Parts ▲ __% for 15 sec. ■ Affects the enemy nearest to the crosshair. Deals __% of final ATK as sustained damage every 1 sec for 15 sec.",
                "values": {
                    "1": [14.33, 41.6],
                    "2": [15.44, 44.8],
                    "3": [16.54, 48],
                    "4": [17.64, 51.2],
                    "5": [18.74, 54.4],
                    "6": [19.85, 57.6],
                    "7": [20.95, 60.8],
                    "8": [22.05, 64],
                    "9": [23.16, 67.2],
                    "10": [24.26, 70.4]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Onda Grande",
                "description": "■ Affects all allies. Sustained Damage ▲ __% for 10 sec. ■ Affects all enemies. Damage Taken ▲ __% for 10 sec.",
                "values": {
                    "1": [12.01, 19.04],
                    "2": [12.93, 20.51],
                    "3": [13.86, 21.97],
                    "4": [14.78, 23.44],
                    "5": [15.7, 24.9],
                    "6": [16.63, 26.37],
                    "7": [17.55, 27.83],
                    "8": [18.48, 29.3],
                    "9": [19.4, 30.76],
                    "10": [20.32, 32.23]
                }
            }
        }
    }, "rupee": {
        "id": "rupee",
        "name": "Rupee",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Prize",
                "description": "■ Activates after landing 100 normal attack(s). Affects all Iron Code allies. Increases stack count of buffs by 1. Critical Rate ▲ __% for 10 sec.",
                "values": {
                    "1": [1.23],
                    "2": [1.34],
                    "3": [1.45],
                    "4": [1.56],
                    "5": [1.68],
                    "6": [1.79],
                    "7": [1.9],
                    "8": [2.01],
                    "9": [2.13],
                    "10": [2.24]
                }
            }, "skill_2": {
                "name": "Mileage",
                "description": "■ Activates after 30 attack(s). Affects self. Mileage: ATK ▲ __%, stacks up to 5 time(s) and lasts for 15 sec.",
                "values": {
                    "1": [7.59],
                    "2": [8.28],
                    "3": [8.97],
                    "4": [9.66],
                    "5": [10.35],
                    "6": [11.04],
                    "7": [11.73],
                    "8": [12.42],
                    "9": [13.11],
                    "10": [13.8]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Single Payment",
                "description": "■ Affects enemies within attack range. Deals __% of final ATK as damage. ■ Activates when Mileage is fully stacked. Affects all allies. ATK ▲ __% for 5 sec.",
                "values": {
                    "1": [150.85, 10.89],
                    "2": [164.57, 11.88],
                    "3": [178.28, 12.87],
                    "4": [192, 13.86],
                    "5": [205.71, 14.85],
                    "6": [219.42, 15.84],
                    "7": [233.14, 16.83],
                    "8": [246.85, 17.82],
                    "9": [260.57, 18.81],
                    "10": [274.28, 19.8]
                }
            }
        }
    }, "rupee_winter_shopper": {
        "id": "rupee_winter_shopper",
        "name": "Rupee: Winter Shopper",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Winter Premium",
                "description": "■ Activates when the last bullet hits the target. Affects all allies. DEF ▲ __% for 5 sec.",
                "values": {
                    "1": [10.46],
                    "2": [11.41],
                    "3": [12.36],
                    "4": [13.31],
                    "5": [14.26],
                    "6": [15.21],
                    "7": [16.17],
                    "8": [17.12],
                    "9": [18.07],
                    "10": [19.02]
                }
            }, "skill_2": {
                "name": "VIP Gift",
                "description": "■ Affects all allies. Activates when any ally unit uses Burst Skills. Shopping: DEF ▲ __%, stacks up to 4 time(s), lasts for 20 sec. ■ Affects all allies. Activates when the caster reaches max stacks of Shopping at the end of Full Burst. Burst Gauge filling speed ▲ __% for 5 sec.",
                "values": {
                    "1": [0.73, 4.34],
                    "2": [0.8, 4.74],
                    "3": [0.86, 5.13],
                    "4": [0.93, 5.53],
                    "5": [0.99, 5.92],
                    "6": [1.06, 6.32],
                    "7": [1.13, 6.72],
                    "8": [1.2, 7.11],
                    "9": [1.26, 7.51],
                    "10": [1.33, 7.9]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Shopaholic Date",
                "description": "■ Affects self. Attract: Taunt all enemies for 5 sec. Recover __% of attack damage as HP over 10 sec. ■ Affects all allies. Reload Speed ▲ __% for 10 sec. Re-enter Burst Skill Stage 1.",
                "values": {
                    "1": [33.94, 20.74],
                    "2": [35.77, 25.45],
                    "3": [37.61, 30.17],
                    "4": [39.45, 34.88],
                    "5": [41.28, 39.6],
                    "6": [43.12, 44.31],
                    "7": [44.96, 49.02],
                    "8": [46.8, 53.74],
                    "9": [48.63, 58.45],
                    "10": [50.47, 63.17]
                }
            }
        }
    }, "sakura": {
        "id": "sakura",
        "name": "Sakura",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Cherry Blossom Tea",
                "description": "■ Activates after 3 normal attack(s). Affects all allies. Cherry Blossom Tea: __% of DEF, stacks up to 10 time(s) and lasts for 15 sec.",
                "values": {
                    "1": [4.81],
                    "2": [5.18],
                    "3": [5.55],
                    "4": [5.92],
                    "5": [6.29],
                    "6": [6.66],
                    "7": [7.04],
                    "8": [7.41],
                    "9": [7.78],
                    "10": [8.15]
                }
            }, "skill_2": {
                "name": "Falling Petals",
                "description": "■ Affects all allies. When attacking an enemy projectile, damage to that projectile ▲ __% continuously. ■ Activates when entering Full Burst. Affects all allies. Cooldown of Burst Skill ▼ __ sec.",
                "values": {
                    "1": [4.57, 2.86],
                    "2": [4.92, 3.08],
                    "3": [5.28, 3.3],
                    "4": [5.63, 3.52],
                    "5": [5.98, 3.74],
                    "6": [6.33, 3.96],
                    "7": [6.68, 4.18],
                    "8": [7.04, 4.4],
                    "9": [7.39, 4.62],
                    "10": [7.74, 4.84]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Resplendent Cherry Blossom",
                "description": "■ Affects all allies. Damage dealt by Wind Code enemies ▼ __% for 30 sec. Activates 1 time(s) per battle. ATK ▲ __% of caster's ATK for 10 sec. ■ Affects all allies when Cherry Blossom Tea is fully stacked. Damage to Interruption Parts ▲ __% for 30 sec.",
                "values": {
                    "1": [56.16, 12.35, 13.91],
                    "2": [60, 13.62, 14.98],
                    "3": [63.84, 14.88, 16.05],
                    "4": [67.68, 16.15, 17.12],
                    "5": [71.52, 17.42, 18.19],
                    "6": [75.36, 18.69, 19.26],
                    "7": [79.2, 19.95, 20.33],
                    "8": [83.04, 21.22, 21.4],
                    "9": [86.88, 22.49, 22.47],
                    "10": [90.72, 23.76, 23.54]
                }
            }
        }
    }, "sakura_bloom_in_summer": {
        "id": "sakura_bloom_in_summer",
        "name": "Sakura: Bloom in Summer",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Bloom",
                "description": "■ Activates at the start of the battle. Affects self. Forcefully uses Skill 2. ■ Activates when an ally or self destroys an enemy's part. Affects self. Sustained Damage ▲ __% for 30 sec. ■ Activates when an ally or self destroys an enemy's part. Affects self if in Dancing Flower status. Dancing Flower Duration ▲ __ sec. ■ Activates when an ally or self destroys an enemy's part. Affects all enemies who are in Sakura Petals status. Sakura Petals Duration ▲ __ sec.",
                "values": {
                    "1": [3.01, 5.92, 5.92],
                    "2": [3.24, 6.38, 6.38],
                    "3": [3.48, 6.84, 6.84],
                    "4": [3.71, 7.28, 7.28],
                    "5": [3.94, 7.74, 7.74],
                    "6": [4.17, 8.2, 8.2],
                    "7": [4.4, 8.66, 8.66],
                    "8": [4.64, 9.1, 9.1],
                    "9": [4.87, 9.56, 9.56],
                    "10": [5.1, 10.02, 10.02]
                }
            }, "skill_2": {
                "cooldown": 30,
                "name": "Full Glory",
                "description": "■ Affects self. Dancing Flower: Attack Damage ▲ __% for 15 sec. ■ Affects the enemy with the highest ATK. Sakura Petals: Deals __% of final ATK as sustained damage every 1 sec for 15 sec.",
                "values": {
                    "1": [9.24, 151.27],
                    "2": [9.95, 162.9],
                    "3": [10.66, 174.54],
                    "4": [11.37, 186.18],
                    "5": [12.08, 197.81],
                    "6": [12.8, 209.45],
                    "7": [13.51, 221.09],
                    "8": [14.22, 232.72],
                    "9": [14.93, 244.36],
                    "10": [15.64, 256]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Ephemeral Splendor",
                "description": "■ Affects random enemies. Deals __% of final ATK as damage. Attacks sequentially for 10 time(s). ■ Affects the same target(s). Deals __% of final ATK as sustained damage every 1 sec, stacks up to 10 time(s) and lasts for 10 sec.",
                "values": {
                    "1": [270.13, 20.77],
                    "2": [290.91, 22.37],
                    "3": [311.69, 23.97],
                    "4": [332.47, 25.57],
                    "5": [353.25, 27.17],
                    "6": [374.03, 28.77],
                    "7": [394.8, 30.36],
                    "8": [415.58, 31.96],
                    "9": [436.36, 33.56],
                    "10": [457.14, 35.16]
                }
            }
        }
    }, "scarlet": {
        "id": "scarlet",
        "name": "Scarlet",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Blood for Blood",
                "description": "■ Activates after landing 10 normal attack(s). Affects self. ATK ▲ __%, stacks up to 5 time(s) and lasts for 5 sec. Current HP ▼ 4.01%.",
                "values": {
                    "1": [17.48],
                    "2": [18.11],
                    "3": [18.74],
                    "4": [19.37],
                    "5": [20],
                    "6": [20.63],
                    "7": [21.26],
                    "8": [21.89],
                    "9": [22.52],
                    "10": [23.15]
                }
            }, "skill_2": {
                "name": "Zatoichi",
                "description": "■ Affects the attacker. 30% chance of casting when attacked. Deals __% of final ATK as damage. ■ Affects self. Activates when HP falls below 60%. Critical Damage ▲ __% continuously.",
                "values": {
                    "1": [86.39, 4.13],
                    "2": [92.15, 4.4],
                    "3": [97.91, 4.68],
                    "4": [103.68, 4.95],
                    "5": [109.44, 5.23],
                    "6": [115.2, 5.51],
                    "7": [120.96, 5.78],
                    "8": [126.72, 6.06],
                    "9": [132.48, 6.33],
                    "10": [138.24, 6.61]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Scarlet Flash",
                "description": "■ Affects self. Activates when HP falls below 50%. Critical Rate ▲ __% for 10 sec. ■ Affects all enemies. Deals __% of final ATK as damage.",
                "values": {
                    "1": [12.23, 530.71],
                    "2": [13.05, 566.1],
                    "3": [13.86, 601.48],
                    "4": [14.68, 636.86],
                    "5": [15.49, 672.24],
                    "6": [16.31, 707.62],
                    "7": [17.12, 743],
                    "8": [17.94, 778.38],
                    "9": [18.75, 813.76],
                    "10": [19.57, 849.15]
                }
            }
        }
    }, "scarlet_black_shadow": {
        "id": "scarlet_black_shadow",
        "name": "Scarlet: Black Shadow",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Fleetly Fading: Breakthrough",
                "description": "■ Activates when attacking with Full Charge. Effect changes according to the number of attack(s). Effect of each phase does not stack. Three times: Affects 1 enemy unit(s) with the lowest DEF. Deals __% of final ATK as damage. Six times: Affects enemies within attack range. Deals __% of final ATK as Distributed Damage. Nine times: Affects all enemies. Deals __% of final ATK as Distributed Damage.",
                "values": {
                    "1": [193.33, 328.57, 390.47],
                    "2": [199.68, 347.61, 430.47],
                    "3": [206.03, 366.66, 470.47],
                    "4": [212.38, 385.71, 510.47],
                    "5": [218.73, 404.76, 550.47],
                    "6": [225.07, 423.8, 590.47],
                    "7": [231.42, 442.85, 630.47],
                    "8": [237.77, 461.9, 670.47],
                    "9": [244.12, 480.95, 710.47],
                    "10": [250.47, 500, 750.47]
                }
            }, "skill_2": {
                "name": "Fleetly Fading: Asura",
                "description": "■ Activates when entering Full Burst. Affects self. Max Ammunition Capacity ▲ __% for 10 sec. Reload __% of the magazine(s).",
                "values": {
                    "1": [40, 30],
                    "2": [42.22, 30],
                    "3": [44.44, 30],
                    "4": [46.66, 60],
                    "5": [48.88, 60],
                    "6": [51.1, 60],
                    "7": [53.32, 100],
                    "8": [55.54, 100],
                    "9": [57.76, 100],
                    "10": [60, 100]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Fleetly Fading: Strike",
                "description": "■ Affects self. Changes Full Charge attack count required for Skill 1 to 1 time/2 times/3 times for 10 sec. ATK ▲ __% for 10 sec. Charge Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [17.28, 85.32],
                    "2": [28.15, 92.52],
                    "3": [39.02, 99.72],
                    "4": [49.89, 106.92],
                    "5": [60.76, 114.12],
                    "6": [71.64, 121.32],
                    "7": [82.51, 128.52],
                    "8": [93.38, 135.72],
                    "9": [104.25, 142.92],
                    "10": [115.12, 150.12]
                }
            }
        }
    }, "signal": {
        "id": "signal",
        "name": "Signal",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Attack Signal",
                "description": "■ Activates after landing 60 normal attack(s). Affects the target(s). DEF ▼ __% for 5 sec. ATK ▼ __% for 5 sec.",
                "values": {
                    "1": [2.97, 2.97],
                    "2": [3.3, 3.3],
                    "3": [3.63, 3.63],
                    "4": [3.96, 3.96],
                    "5": [4.29, 4.29],
                    "6": [4.62, 4.62],
                    "7": [4.95, 4.95],
                    "8": [5.28, 5.28],
                    "9": [5.61, 5.61],
                    "10": [5.94, 5.94]
                }
            }, "skill_2": {
                "name": "Waiting for Signal",
                "description": "■ Affects self. Activates when entering Full Burst. Recover __% of attack damage as HP over 10 sec.",
                "values": {
                    "1": [22.04],
                    "2": [24.48],
                    "3": [26.93],
                    "4": [29.38],
                    "5": [31.83],
                    "6": [34.28],
                    "7": [36.73],
                    "8": [39.18],
                    "9": [41.63],
                    "10": [44.08]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Emergency Signal",
                "description": "■ Affects enemies within attack range. Deals __% of final ATK as damage. DEF ▼ __% for 10 sec.",
                "values": {
                    "1": [114.61, 6.17],
                    "2": [127.34, 6.85],
                    "3": [140.08, 7.54],
                    "4": [152.81, 8.22],
                    "5": [165.55, 8.91],
                    "6": [178.28, 9.6],
                    "7": [191.02, 10.28],
                    "8": [203.75, 10.97],
                    "9": [216.48, 11.65],
                    "10": [229.22, 12.34]
                }
            }
        }
    }, "sin": {
        "id": "sin",
        "name": "Sin",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Full Stop",
                "description": "■ Activates when firing the last bullet. Affects self. Duplicate __% Max HP of ally with the highest Max HP, lasts for 5 sec. Attract: Taunt all enemies for 5 sec.",
                "values": {
                    "1": [7.94],
                    "2": [8.72],
                    "3": [9.51],
                    "4": [10.3],
                    "5": [11.09],
                    "6": [11.88],
                    "7": [12.66],
                    "8": [13.45],
                    "9": [14.24],
                    "10": [15.03]
                }
            }, "skill_2": {
                "name": "Hurry Up",
                "description": "■ Activates after Full Burst ends. Affects self. Burst Gauge filling speed ▲ __% for 5 sec. ■ Activates when using Burst Skill. Affects self. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Recover __% of attack damage as HP, lasts for 5 sec. Twice: HP Potency ▲ __% for 5 sec. Three times: DEF ▲ __% for 5 sec.",
                "values": {
                    "1": [8.08, 7.65, 25.5, 21.6],
                    "2": [8.98, 8.5, 28.33, 24],
                    "3": [9.88, 9.35, 31.16, 26.4],
                    "4": [10.78, 10.2, 34, 28.8],
                    "5": [11.67, 11.05, 36.83, 31.2],
                    "6": [12.57, 11.9, 39.66, 33.6],
                    "7": [13.47, 12.75, 42.5, 36],
                    "8": [14.37, 13.6, 45.33, 38.4],
                    "9": [15.27, 14.45, 48.16, 40.8],
                    "10": [16.17, 15.3, 51, 43.2]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Words can Kill",
                "description": "■ Activates when enemy unit(s) (excluding Nikkes) are more than 4. Affects all enemies. Damage Taken ▲ __% for 5 sec. ■ Affects enemies within attack range. Deals __% of final ATK as damage.",
                "values": {
                    "1": [6.11, 88.16],
                    "2": [6.79, 97.95],
                    "3": [7.47, 107.75],
                    "4": [8.15, 117.55],
                    "5": [8.83, 127.34],
                    "6": [9.51, 137.14],
                    "7": [10.19, 146.93],
                    "8": [10.87, 156.73],
                    "9": [11.55, 166.53],
                    "10": [12.23, 176.32]
                }
            }
        }
    }, "snow_white": {
        "id": "snow_white",
        "name": "Snow White",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Determination",
                "description": "■ Activates when normal attack hits 30 time(s). Affects the target(s). Deals __% of final ATK as additional damage. ■ Activates when normal attack hits 30 time(s). Affects self. ATK ▲ __% for 5 sec.",
                "values": {
                    "1": [51.75, 5.17],
                    "2": [55.2, 5.52],
                    "3": [58.65, 5.86],
                    "4": [62.1, 6.21],
                    "5": [65.55, 6.55],
                    "6": [69, 6.9],
                    "7": [72.45, 7.24],
                    "8": [75.9, 7.59],
                    "9": [79.35, 7.93],
                    "10": [82.8, 8.28]
                }
            }, "skill_2": {
                "cooldown": 15,
                "name": "Seven Dwarves: V&VI",
                "description": "■ Affects enemies within the attack range. Deals __% of final ATK as damage. ■ Activates when attacking during Full Burst Time. Affects self. Critical Rate ▲ __% for 10 sec.",
                "values": {
                    "1": [90.46, 16.31],
                    "2": [96.49, 17.4],
                    "3": [102.52, 18.48],
                    "4": [108.55, 19.57],
                    "5": [114.58, 20.66],
                    "6": [120.61, 21.75],
                    "7": [126.64, 22.83],
                    "8": [132.67, 23.92],
                    "9": [138.7, 25.01],
                    "10": [144.73, 26.1]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Seven Dwarves: I",
                "description": "■ Affects self. Change the Weapon in use: Charge Time: 5 sec Damage: __% of final ATK Full Charge Damage: 1000% of damage Max Ammunition Capacity: 1 round(s) Additional Effect: Pierce",
                "values": {
                    "1": [124.87],
                    "2": [166.5],
                    "3": [208.12],
                    "4": [249.75],
                    "5": [291.37],
                    "6": [333],
                    "7": [374.62],
                    "8": [416.25],
                    "9": [457.87],
                    "10": [499.5]
                }
            }
        }
    }, "snow_white_innocent_days": {
        "id": "snow_white_innocent_days",
        "name": "Snow White: Innocent Days",
        "manufacturer": NikkeManufacturer.Pilgrim,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Seven Dwarves V&VI",
                "description": "■ Activates after landing 30 normal attack(s). Affects self. Max Ammunition Capacity ▲ __%, stacks up to 5 time(s) and lasts for 5 sec. ■ Activates after landing 30 normal attack(s). Affects enemies within attack range. Deals __% of final ATK as damage.",
                "values": {
                    "1": [15.16, 129.1],
                    "2": [16.33, 135.72],
                    "3": [17.5, 142.34],
                    "4": [18.66, 148.96],
                    "5": [19.83, 155.58],
                    "6": [21, 162.2],
                    "7": [22.16, 168.82],
                    "8": [23.33, 175.44],
                    "9": [24.5, 182.06],
                    "10": [25.66, 188.68]
                }
            }, "skill_2": {
                "name": "Seven Dwarves IV",
                "description": "■ Activates when landing 50 normal attack(s). Affects all enemies. Deals __% of final ATK as damage. ■ Activates when using Burst Skill. Affects self. Attack damage ▲ __% for 10 sec.",
                "values": {
                    "1": [36.45, 12.48],
                    "2": [39.25, 13.44],
                    "3": [42.06, 14.4],
                    "4": [44.86, 15.36],
                    "5": [47.67, 16.32],
                    "6": [50.47, 17.28],
                    "7": [53.28, 18.24],
                    "8": [56.08, 19.2],
                    "9": [58.88, 20.16],
                    "10": [61.69, 21.12]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Seven Dwarves III",
                "description": "■ Affects self. Hit count required for Skill 2 ▼ 20 time(s) for 10 sec. ATK ▲ __% for 10 sec. Grants unlimited ammunition for 10 sec.",
                "values": {
                    "1": [32.4],
                    "2": [39.6],
                    "3": [46.8],
                    "4": [54],
                    "5": [61.2],
                    "6": [68.4],
                    "7": [75.6],
                    "8": [82.8],
                    "9": [90],
                    "10": [97.2]
                }
            }
        }
    }, "soda": {
        "id": "soda",
        "name": "Soda",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.MG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Spotless Chair",
                "description": "■ Activates after 180 normal attack(s). Affects self. Maid Spirit: Max HP ▲ __%, stacks up to 5 time(s) and lasts for 10 sec.",
                "values": {
                    "1": [7.15],
                    "2": [7.8],
                    "3": [8.45],
                    "4": [9.1],
                    "5": [9.75],
                    "6": [10.4],
                    "7": [11.05],
                    "8": [11.7],
                    "9": [12.35],
                    "10": [13]
                }
            }, "skill_2": {
                "cooldown": 12,
                "name": "Squeaky Clean Floor",
                "description": "■ Affects all allies. Recovers HP by __% of caster's final Max HP. ■ Activates when Maid Spirit is fully stacked. Affects all allies. Recovers HP by __% of caster's final Max HP.",
                "values": {
                    "1": [2.04, 5.37],
                    "2": [2.17, 6.19],
                    "3": [2.3, 7],
                    "4": [2.43, 7.82],
                    "5": [2.57, 8.63],
                    "6": [2.7, 9.45],
                    "7": [2.83, 10.26],
                    "8": [2.96, 11.08],
                    "9": [3.1, 11.89],
                    "10": [3.23, 12.71]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Spring Cleaning",
                "description": "■ Affects 2 enemy unit(s) randomly. Deals __% of final ATK as damage. Stun for 1 sec. ■ Affects all Fire Code allies. Stack count of buffs ▲ 1.",
                "values": {
                    "1": [110.68],
                    "2": [134.08],
                    "3": [157.48],
                    "4": [180.88],
                    "5": [204.28],
                    "6": [227.68],
                    "7": [251.08],
                    "8": [274.48],
                    "9": [297.88],
                    "10": [321.28]
                }
            }
        }
    }, "soda_twinkling_bunny": {
        "id": "soda_twinkling_bunny",
        "name": "Soda: Twinkling Bunny",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Lucky Golden Chip",
                "description": "■ Activates at the start of the battle. Affects self. Number of Golden Chip stacks ▲ __. ■ Activates after casting 3 normal attack(s) during Full Burst Time. Affects self. Golden Chip: Critical damage ▲ __% continuously, stacks up to 50 time(s). ■ Activates after casting 3 normal attack(s) during Full Burst Time. Affects self and 1 ally unit(s) with the highest ATK (except caster). Attack damage ▲ __% for 2 sec.",
                "values": {
                    "1": [40, 1.24, 7.42],
                    "2": [40, 1.25, 7.77],
                    "3": [40, 1.25, 8.11],
                    "4": [45, 1.26, 8.45],
                    "5": [45, 1.27, 8.8],
                    "6": [45, 1.28, 9.14],
                    "7": [50, 1.29, 9.48],
                    "8": [50, 1.3, 9.82],
                    "9": [50, 1.31, 10.17],
                    "10": [50, 1.32, 10.51]
                }
            }, "skill_2": {
                "name": "Beginner's Rewards",
                "description": "■ Activates when entering Burst stage 3. Affects all allies. Additional effects triggered according to the number of Golden Chip stacks. Previous effects trigger repeatedly: Stage 1: Golden Chip 10 stack(s) and above. Time Extension I: Full Burst Time Duration▲ 2 sec. Active during Full Burst Time. Stage 2: Golden Chip 20 stack(s) and above. Time Extension II: Full Burst Time Duration▲ 3 sec. Active during Full Burst Time. ■ Activates when casting a normal attack during Full Burst Time. Affects 1 enemy unit(s) nearest to the crosshair. Additional effects triggered according to Time Extension state. Previous effects trigger repeatedly: Stage 1: When in Time Extension I state. Deals __% of final ATK as damage. Stage 2: When in Time Extension II state. Deals __% of final ATK as damage.",
                "values": {
                    "1": [27.63, 45.97],
                    "2": [30.35, 50.31],
                    "3": [33.06, 54.64],
                    "4": [35.77, 58.98],
                    "5": [38.48, 63.32],
                    "6": [41.19, 67.66],
                    "7": [43.91, 72],
                    "8": [46.62, 76.34],
                    "9": [49.33, 80.68],
                    "10": [52.04, 85.02]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Onward, Soda!",
                "description": "■ Activates when using Onward, Soda! Additional effects triggered according to the number of Golden Chip stacks. Previous effects trigger repeatedly. Number of Golden Chip stacks ▼ 17 after the effect applied. Stage 1: Affects all enemies. Deals __% of final ATK as damage. Stage 2: Activates when number of Golden Chip stacks is 20 and above. Affects self. Hit Rate ▲ __% for 15 sec. Stage 3: Activates when number of Golden Chip stacks is 30 and above. Affects self. ATK ▲ __% for 15 sec.",
                "values": {
                    "1": [484.84, 12.64, 30.23],
                    "2": [500.83, 15.56, 34.12],
                    "3": [516.81, 18.48, 38.01],
                    "4": [532.8, 21.4, 41.9],
                    "5": [548.78, 24.32, 45.79],
                    "6": [564.76, 27.24, 49.68],
                    "7": [580.75, 30.16, 53.58],
                    "8": [596.73, 33.08, 57.47],
                    "9": [612.72, 36, 61.36],
                    "10": [628.7, 38.91, 65.25]
                }
            }
        }
    }, "soline": {
        "id": "soline",
        "name": "Soline",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "On the Ball!",
                "description": "■ Activates after 40 basic attack(s). Affects self. Attack Speed ▲ __% for 3 sec.",
                "values": {
                    "1": [4.29],
                    "2": [4.62],
                    "3": [4.95],
                    "4": [5.28],
                    "5": [5.61],
                    "6": [5.94],
                    "7": [6.27],
                    "8": [6.59],
                    "9": [6.92],
                    "10": [7.26]
                }
            }, "skill_2": {
                "name": "Grow up!",
                "description": "■ Only affects self at Max HP. Critical Rate ▲ __% permanently. Critical Damage ▲ __% permanently.",
                "values": {
                    "1": [12.77, 36.79],
                    "2": [13.76, 39.62],
                    "3": [14.74, 42.45],
                    "4": [15.72, 45.28],
                    "5": [16.71, 48.11],
                    "6": [17.69, 50.94],
                    "7": [18.67, 53.77],
                    "8": [19.66, 56.61],
                    "9": [20.64, 59.44],
                    "10": [21.62, 62.27]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "My Word, My Bond!",
                "description": "■ Affects enemies within attack range. Deals __% of final ATK as damage. ■ Affects the same target(s) when at Max HP. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [234, 546],
                    "2": [252, 588],
                    "3": [270, 630],
                    "4": [288, 672],
                    "5": [306, 714],
                    "6": [324, 756],
                    "7": [342, 798],
                    "8": [360, 840],
                    "9": [378, 882],
                    "10": [396, 924]
                }
            }
        }
    }, "sugar": {
        "id": "sugar",
        "name": "Sugar",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Black Typhoon",
                "description": "■ Affects self. 20% chance of casting when Cover is under attack. Critical Damage ▲ __% for 10 sec. Reloading Speed ▲ __% for 10 sec.",
                "values": {
                    "1": [9.68, 7.16],
                    "2": [10.43, 7.71],
                    "3": [11.17, 8.26],
                    "4": [11.92, 8.82],
                    "5": [12.66, 9.37],
                    "6": [13.41, 9.92],
                    "7": [14.15, 10.47],
                    "8": [14.9, 11.02],
                    "9": [15.64, 11.57],
                    "10": [16.39, 12.12]
                }
            }, "skill_2": {
                "name": "Noire Sensor",
                "description": "■ Affects self. Cast when entering Full Burst. Critical Rate ▲ __% for 10 sec. ■ Affects all allies with a Shotgun. Cast when entering Full Burst. Max Ammunition Capacity ▲ __% for 10 sec.",
                "values": {
                    "1": [7.69, 49.52],
                    "2": [8.28, 53.33],
                    "3": [8.87, 57.14],
                    "4": [9.46, 60.95],
                    "5": [10.06, 64.76],
                    "6": [10.65, 68.57],
                    "7": [11.24, 72.38],
                    "8": [11.83, 76.19],
                    "9": [12.42, 80],
                    "10": [13.02, 83.8]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Trouble Shooter",
                "description": "■ Affects self. Attack Speed ▲ __% for 15 sec. Hit Rate ▲ __% for 15 sec.",
                "values": {
                    "1": [39, 19.5],
                    "2": [42, 21],
                    "3": [45, 22.5],
                    "4": [48, 24],
                    "5": [51, 25.5],
                    "6": [54, 27],
                    "7": [57, 28.5],
                    "8": [60, 30],
                    "9": [63, 31.5],
                    "10": [66, 33]
                }
            }
        }
    }, "tia": {
        "id": "tia",
        "name": "Tia",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Reptile Lover",
                "description": "■ Activates when recovering Cover's HP. Affects self. Cooldown of Burst Skill ▼ __ sec, stacks up to 2 time(s) and lasts for 12 sec. ■ Activates when recovering Cover's HP. Affects all allies. Attack damage ▲ __% for 10 sec.",
                "values": {
                    "1": [7, 17.46],
                    "2": [7, 19.08],
                    "3": [7, 20.71],
                    "4": [10, 22.34],
                    "5": [10, 23.97],
                    "6": [10, 25.6],
                    "7": [13, 27.23],
                    "8": [13, 28.85],
                    "9": [13, 30.48],
                    "10": [13, 32.11]
                }
            }, "skill_2": {
                "name": "Chameleon Invisibility",
                "description": "■ Activates after landing 5 normal attack(s). Affects self. Cover's Max HP ▲ __% of the caster's Max HP, lasts for 5 sec. Attract: Taunt all enemies for 5 sec. ■ Activates when using Burst Skill. Affects self. Recovers Cover's HP by __% of caster's final Max HP. Recovers __% of attack damage as HP over 10 sec.",
                "values": {
                    "1": [19.35, 10.5, 18.03],
                    "2": [20.84, 11.71, 18.47],
                    "3": [22.33, 12.92, 18.91],
                    "4": [23.82, 14.14, 19.34],
                    "5": [25.31, 15.35, 19.78],
                    "6": [26.79, 16.56, 20.22],
                    "7": [28.28, 17.77, 20.65],
                    "8": [29.77, 18.98, 21.09],
                    "9": [31.26, 20.2, 21.53],
                    "10": [32.75, 21.41, 21.96]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Lizard's Protection",
                "description": "■ Affects self. Generates a Shield with __% of the caster's final Max HP for 10 sec. ■ Affects all allies (except self). Generates a Shield with __% of the caster's final Max HP for 10 sec. ■ Affects all allies. Re-enter Burst Skill Stage 1.",
                "values": {
                    "1": [20.72, 6.03],
                    "2": [22.32, 6.49],
                    "3": [23.91, 6.96],
                    "4": [25.5, 7.42],
                    "5": [27.1, 7.89],
                    "6": [28.69, 8.35],
                    "7": [30.29, 8.81],
                    "8": [31.88, 9.28],
                    "9": [33.48, 9.74],
                    "10": [35.07, 10.21]
                }
            }
        }
    }, "tove": {
        "id": "tove",
        "name": "Tove",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.AR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Emergency-Crafted Bullets",
                "description": "■ There is a __% chance of activating when attacking. Affects self. Emergency-Crafted Bullets: Reload __% of the magazine(s). ■ Activates during Emergency-Crafted Bullets. Affects all allies. Temporary Modification: Max Ammunition Capacity ▲ __, stacks up to 3 time(s) and lasts for 5 sec. Critical Damage ▲ __% for 5 sec.",
                "values": {
                    "1": [2, 3.13, 1, 2.96],
                    "2": [2, 3.37, 1, 3.21],
                    "3": [3, 3.62, 1, 3.47],
                    "4": [3, 3.86, 1, 3.72],
                    "5": [3, 4.1, 1, 3.97],
                    "6": [4, 4.34, 2, 4.23],
                    "7": [4, 4.58, 2, 4.48],
                    "8": [4, 4.82, 2, 4.73],
                    "9": [5, 5.06, 2, 4.99],
                    "10": [5, 5.31, 2, 5.24]
                }
            }, "skill_2": {
                "name": "Modification Successful",
                "description": "■ Only activates when Temporary Modification is fully stacked. Affects all allies. Critical Rate ▲ __% continuously. ■ Only activates when Temporary Modification is fully stacked. Affects all allies with a Shotgun. Attack Speed ▲ __% continuously.",
                "values": {
                    "1": [1.96, 24.96],
                    "2": [2.11, 26.88],
                    "3": [2.26, 28.8],
                    "4": [2.41, 30.72],
                    "5": [2.57, 32.64],
                    "6": [2.72, 34.56],
                    "7": [2.87, 36.48],
                    "8": [3.02, 38.4],
                    "9": [3.17, 40.32],
                    "10": [3.32, 42.24]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Miracle of Makeshifts",
                "description": "■ Affects all allies. Miracle of Makeshifts: ATK ▲ __% of caster's ATK. Mirrors the stack count of Temporary Modification. This effect lasts for 10 sec. ■ Affects all allies with a Shotgun. Miracle of Makeshifts: ATK ▲ __% of caster's ATK. Mirrors the stack count of Temporary Modification. This effect lasts for 10 sec.",
                "values": {
                    "1": [1.37, 14.31],
                    "2": [1.47, 15.41],
                    "3": [1.58, 16.51],
                    "4": [1.68, 17.61],
                    "5": [1.79, 18.71],
                    "6": [1.9, 19.81],
                    "7": [2, 20.91],
                    "8": [2.11, 22.01],
                    "9": [2.21, 23.11],
                    "10": [2.32, 24.21]
                }
            }
        }
    }, "trony": {
        "id": "trony",
        "name": "Trony",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "T.Rony Bomber",
                "description": "■ Activates when hitting a target with Full Charge. Affects 1 enemy unit nearest to the crosshair if there are no enemies in T.Rony Bomber status. Cumulative Damage Skill active for 5 sec. Function: Accumulates a fraction of the caster's inflicted damage. Upon reaching the maximum accumulated damage, deals damage to enemies before ending. Effect 1: Maximum Accumulated Damage is __% of the caster's final ATK. Effect 2: Accumulates 50% of the caster's ATK damage. Effect 3: Deals Distributed Damage to enemies within the attack range when Cumulative Damage Skill explodes.",
                "values": {
                    "1": [907.63],
                    "2": [977.45],
                    "3": [1047.27],
                    "4": [1117.09],
                    "5": [1186.9],
                    "6": [1256.72],
                    "7": [1326.54],
                    "8": [1396.36],
                    "9": [1466.18],
                    "10": [1536]
                }
            }, "skill_2": {
                "name": "Efficiency Increase",
                "description": "■ Activates when attacking with Full Charge for 5 time(s). Affects self. Distributed Damage ▲ __% for 10 sec. ■ Activates when hitting the target with Full Charge for 5 time(s). Affects the target. DEF ▼ __% for 10 sec.",
                "values": {
                    "1": [30.63, 5.67],
                    "2": [32.98, 6.1],
                    "3": [35.34, 6.54],
                    "4": [37.7, 6.98],
                    "5": [40.05, 7.41],
                    "6": [42.41, 7.85],
                    "7": [7.85, 8.29],
                    "8": [47.12, 8.72],
                    "9": [49.48, 9.16],
                    "10": [51.84, 9.59]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Mega T.Rony",
                "description": "■ Affects self. ATK ▲ __% for 10 sec. Accumulated damage ratio of the Cumulative Damage Skill ▲ __% for 10 sec.",
                "values": {
                    "1": [59.9, 37.12],
                    "2": [64.51, 39.98],
                    "3": [69.12, 42.84],
                    "4": [73.72, 45.69],
                    "5": [78.33, 48.55],
                    "6": [82.94, 51.4],
                    "7": [87.55, 54.26],
                    "8": [92.16, 57.12],
                    "9": [96.76, 59.97],
                    "10": [101.37, 62.83]
                }
            }
        }
    }, "vesti": {
        "id": "vesti",
        "name": "Vesti",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Water,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Dreams Do Come True",
                "description": "■ Activates when hitting a target with Full Charge. Affects self. Explosion Radius ▲ __% for 10 sec.",
                "values": {
                    "1": [8.87],
                    "2": [9.55],
                    "3": [10.23],
                    "4": [10.92],
                    "5": [11.6],
                    "6": [12.28],
                    "7": [12.96],
                    "8": [13.65],
                    "9": [14.33],
                    "10": [15.01]
                }
            }, "skill_2": {
                "name": "Survival Instinct",
                "description": "■ Activates when using Burst Skill. Affects self. Additional effects triggered according to the number of activation time(s). Previous effects trigger repeatedly: Once: Survival Instinct 1 - ATK ▲ __% for 45 sec. Twice: Survival Instinct 2 - Critical Damage ▲ __% for 45 sec. Three times: Survival Instinct 3 - Critical Rate ▲ __% for 45 sec.",
                "values": {
                    "1": [3.16, 13.2, 9.17],
                    "2": [3.4, 14.21, 9.87],
                    "3": [3.64, 15.23, 10.58],
                    "4": [3.89, 16.24, 11.28],
                    "5": [4.13, 17.26, 11.99],
                    "6": [4.37, 18.27, 12.69],
                    "7": [4.62, 19.29, 13.4],
                    "8": [4.86, 20.31, 14.1],
                    "9": [5.1, 21.32, 14.81],
                    "10": [5.35, 22.34, 15.51]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Justifiable Defense",
                "description": "■ Affects self. Takes out two Missile Containers, dealing __% of final ATK as damage to the enemy with the lowest remaining HP every 1 sec for 18 sec. ■ Affects all enemies. Additional effects triggered according to the Survival Instinct's phase. Previous effects trigger repeatedly: Survival Instinct 1: Deals __% of final ATK as damage. Survival Instinct 2: Deals __% of final ATK as damage. Survival Instinct 3: Deals __% of final ATK as damage. ■ Affects all allies. Full Burst Time ▼ 5 sec.",
                "values": {
                    "1": [9.19, 124.45, 146.1, 178.57],
                    "2": [9.9, 134.03, 157.34, 192.3],
                    "3": [10.61, 143.6, 168.58, 206.04],
                    "4": [11.32, 153.18, 179.82, 219.78],
                    "5": [12.02, 162.75, 191.05, 233.51],
                    "6": [12.73, 172.32, 202.29, 247.25],
                    "7": [13.44, 181.9, 213.53, 260.98],
                    "8": [14.15, 191.47, 224.77, 274.72],
                    "9": [14.86, 201.04, 236.01, 288.46],
                    "10": [15.56, 210.62, 247.25, 302.19]
                }
            }
        }
    }, "viper": {
        "id": "viper",
        "name": "Viper",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Water,
        has_treasure: true,
        "skills": {
            "skill_1": {
                "name": "Snake Sense",
                "description": "■ Activates when the target appears. Affects all allies. ATK ▲ __% for 10 sec. Hit Rate ▲ __% for 10 sec.",
                "values": {
                    "1": [12.99, 5.56],
                    "2": [14.43, 6.18],
                    "3": [15.88, 6.8],
                    "4": [17.32, 7.42],
                    "5": [18.76, 8.04],
                    "6": [20.21, 8.66],
                    "7": [21.65, 9.28],
                    "8": [23.1, 9.9],
                    "9": [24.54, 10.51],
                    "10": [25.98, 11.13]
                }
            }, "skill_2": {
                "name": "Snake Scale",
                "description": "■ Affects self. Hit Rate ▲ __% continuously. ■ Activates when entering Full Burst. Affects self. Vamp: Prevents self from being the target of single-target attacks for 10 sec. Loses effect when the caster takes damage. Invulnerable for 1 sec.",
                "values": {
                    "1": [1.71],
                    "2": [1.9],
                    "3": [2.1],
                    "4": [2.29],
                    "5": [2.48],
                    "6": [2.67],
                    "7": [2.86],
                    "8": [3.05],
                    "9": [3.24],
                    "10": [3.43]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Snake Bite",
                "description": "■ Affects 1 designated enemy unit(s). Deals __% of final ATK as damage. ■ Activates when the designated enemy unit(s) include the stage target. Affects the same enemy unit(s). DEF ▼ __% for 10 sec.",
                "values": {
                    "1": [231.42, 9.91],
                    "2": [257.14, 11.02],
                    "3": [282.85, 12.12],
                    "4": [308.57, 13.22],
                    "5": [334.28, 14.32],
                    "6": [360, 15.42],
                    "7": [385.71, 16.53],
                    "8": [411.42, 17.63],
                    "9": [437.14, 18.73],
                    "10": [462.85, 19.83]
                }
            }
        }
    }, "volume": {
        "id": "volume",
        "name": "Volume",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SMG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Wind,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Freestyle",
                "description": "■ Affects self when killing an enemy. ATK ▲ __% for 5 sec.",
                "values": {
                    "1": [6.93],
                    "2": [7.56],
                    "3": [8.18],
                    "4": [8.82],
                    "5": [9.44],
                    "6": [10.08],
                    "7": [10.71],
                    "8": [11.34],
                    "9": [11.97],
                    "10": [12.6]
                }
            }, "skill_2": {
                "name": "Drop the Beat",
                "description": "■ Activates when entering Full Burst. Affects all allies. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Cooldown of Burst Skill ▼ 2.34 sec. Twice: Cooldown of Burst Skill ▼ 2.7 sec. Three times: Cooldown of Burst Skill ▼ 3.17 sec. ■ Activates when using Burst Skill. Affects all allies. Effect changes according to the number of activation time(s). Previous effects trigger repeatedly: Once: Critical Damage ▲ __% for 5 sec. Twice: Critical Damage ▲ __% for 5 sec. Three times: Critical Damage ▲ __% for 5 sec.",
                "values": {
                    "1": [1.68, 3.36, 5.05],
                    "2": [2.69, 4.37, 6.09],
                    "3": [3.7, 5.38, 7.13],
                    "4": [4.71, 6.39, 8.17],
                    "5": [5.72, 7.4, 9.21],
                    "6": [6.73, 8.41, 10.25],
                    "7": [7.74, 9.42, 11.29],
                    "8": [8.75, 10.44, 12.33],
                    "9": [9.76, 11.45, 13.37],
                    "10": [10.77, 12.46, 14.42]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Turn up the volume!",
                "description": "■ Affects all allies. Critical Rate ▲ __% for 5 sec.",
                "values": {
                    "1": [17.54],
                    "2": [19.14],
                    "3": [20.73],
                    "4": [22.33],
                    "5": [23.92],
                    "6": [25.52],
                    "7": [27.11],
                    "8": [28.71],
                    "9": [30.3],
                    "10": [31.9]
                }
            }
        }
    }, "yan": {
        "id": "yan",
        "name": "Yan",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Struck Dumb",
                "description": "■ Activates at the beginning of Full Burst. Affects all allies. Charge Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [11.85],
                    "2": [12.93],
                    "3": [14],
                    "4": [15.08],
                    "5": [16.16],
                    "6": [17.24],
                    "7": [18.31],
                    "8": [19.39],
                    "9": [20.47],
                    "10": [21.55]
                }
            }, "skill_2": {
                "name": "The More, the Merrier",
                "description": "■ Activates when attacking with Full Charge. Affects all allies. ATK ▲ __% for 5 sec. Critical Rate ▲ __% for 5 sec.",
                "values": {
                    "1": [1.52, 0.73],
                    "2": [1.66, 0.8],
                    "3": [1.8, 0.87],
                    "4": [1.94, 0.93],
                    "5": [2.07, 1],
                    "6": [2.21, 1.07],
                    "7": [2.35, 1.13],
                    "8": [2.49, 1.2],
                    "9": [2.63, 1.27],
                    "10": [2.77, 1.33]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Fat Cat",
                "description": "■ Affects enemies within attack range. Deals __% of final ATK as damage. Forced movement toward the center of attack range, lasts for 2 sec.",
                "values": {
                    "1": [172.4],
                    "2": [192],
                    "3": [211.59],
                    "4": [231.18],
                    "5": [250.77],
                    "6": [270.36],
                    "7": [289.95],
                    "8": [309.55],
                    "9": [329.14],
                    "10": [348.73]
                }
            }
        }
    }, "yulha": {
        "id": "yulha",
        "name": "Yulha",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Attacker,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_III,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Tough Leadership",
                "description": "■ Activates when attacked 30 time(s). Affects self. Calm: Critical Rate ▲ __% for 20 sec.",
                "values": {
                    "1": [14.5],
                    "2": [15.61],
                    "3": [16.73],
                    "4": [17.84],
                    "5": [18.96],
                    "6": [20.07],
                    "7": [21.19],
                    "8": [22.3],
                    "9": [23.42],
                    "10": [24.53]
                }
            }, "skill_2": {
                "cooldown": 30,
                "name": "The Weakener",
                "description": "■ Affects all allies. ATK ▲ __% for 5 sec. Equally shares damage taken for 10 sec.",
                "values": {
                    "1": [53.62],
                    "2": [57.75],
                    "3": [61.87],
                    "4": [66],
                    "5": [70.12],
                    "6": [74.25],
                    "7": [78.37],
                    "8": [82.5],
                    "9": [86.62],
                    "10": [90.75]
                }
            }, "burst_skill": {
                "cooldown": 40,
                "name": "Busy Bee",
                "description": "■ Affects all enemies. Deals __% of final ATK as damage. ■ Affects the same target(s) when in Calm status. Deals __% of final ATK as additional damage.",
                "values": {
                    "1": [270.56, 270.56],
                    "2": [291.37, 291.37],
                    "3": [312.18, 312.18],
                    "4": [333, 333],
                    "5": [353.81, 353.81],
                    "6": [374.62, 374.62],
                    "7": [395.43, 395.43],
                    "8": [416.25, 416.25],
                    "9": [437.06, 437.06],
                    "10": [457.87, 457.87]
                }
            }
        }
    }, "yuni": {
        "id": "yuni",
        "name": "Yuni",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Fire,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "DMNS",
                "description": "■ Affects all allies. Activates when entering Full Burst. Charge Speed ▲ __% for 10 sec.",
                "values": {
                    "1": [4.93],
                    "2": [5.38],
                    "3": [5.83],
                    "4": [6.28],
                    "5": [6.73],
                    "6": [7.18],
                    "7": [7.63],
                    "8": [8.08],
                    "9": [8.53],
                    "10": [8.97]
                }
            }, "skill_2": {
                "name": "SDS",
                "description": "■ Activates when attacking with Full Charge. Affects all allies. DEF ▲ __% for 10 sec. Restores __% of attack damage as HP over 10 sec. Max Ammunition Capacity ▲ 1 round(s) for 5 sec.",
                "values": {
                    "1": [1.52, 1.52],
                    "2": [1.66, 1.66],
                    "3": [1.8, 1.8],
                    "4": [1.94, 1.94],
                    "5": [2.07, 2.07],
                    "6": [2.21, 2.21],
                    "7": [2.35, 2.35],
                    "8": [2.49, 2.49],
                    "9": [2.63, 2.63],
                    "10": [2.77, 2.77]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "BDG",
                "description": "■ Affects enemies within attack range. Deals __% of final ATK as damage. Immobilizes the target(s) for 5 sec.",
                "values": {
                    "1": [172.4],
                    "2": [192],
                    "3": [211.59],
                    "4": [231.18],
                    "5": [250.77],
                    "6": [270.36],
                    "7": [289.95],
                    "8": [309.55],
                    "9": [329.14],
                    "10": [348.73]
                }
            }
        }
    }, "zwei": {
        "id": "zwei",
        "name": "Zwei",
        "manufacturer": NikkeManufacturer.Elysion,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SG,
        "rarity": NikkeRarity.SSR,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Pierce Equation",
                "description": "■ Activates when entering Full Burst. Affects all allies. Pierce Damage ▲ __% for 1 shot(s). Pierce Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [11.89, 5.94],
                    "2": [12.81, 6.4],
                    "3": [13.72, 6.86],
                    "4": [14.64, 7.32],
                    "5": [15.55, 7.77],
                    "6": [16.47, 8.23],
                    "7": [17.38, 8.69],
                    "8": [18.3, 9.15],
                    "9": [19.21, 9.6],
                    "10": [20.13, 10.06]
                }
            }, "skill_2": {
                "name": "Frame Analysis",
                "description": "■ Activates after landing 5 normal attack(s). Affects all allies. Recovers __% of Cover's HP. ■ Activates when entering Full Burst. Affects all allies. Critical Rate ▲ __% for 5 sec.",
                "values": {
                    "1": [4.38, 11.01],
                    "2": [4.73, 11.86],
                    "3": [5.08, 12.7],
                    "4": [5.43, 13.55],
                    "5": [5.78, 14.4],
                    "6": [6.13, 15.25],
                    "7": [6.48, 16.09],
                    "8": [6.83, 16.94],
                    "9": [7.17, 17.79],
                    "10": [7.52, 18.63]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Overcharge Formula",
                "description": "■ Affects self. Change the Weapon in use: Charge Time: 1.5 sec Damage: __% of final ATK Full Charge Damage: 300% of damage Max Ammunition Capacity: 1 round(s) Additional Effect: Pierce ■ Affects all allies. Pierce Damage ▲ __% for 10 sec.",
                "values": {
                    "1": [29.95, 9.15],
                    "2": [32.26, 9.85],
                    "3": [34.56, 10.56],
                    "4": [36.86, 11.26],
                    "5": [39.17, 11.96],
                    "6": [41.47, 12.67],
                    "7": [43.78, 13.37],
                    "8": [46.08, 14.08],
                    "9": [48.38, 14.78],
                    "10": [50.69, 15.48]
                }
            }
        }
    }, "anchor": {
        id: "anchor",
        name: "Anchor",
        manufacturer: NikkeManufacturer.Elysion,
        role: NikkeRole.Defender,
        weapon_type: WeaponType.RL,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_I,
        element: NikkeElement.Wind,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "GS",
                description: "■ Activates when the last bullet hits the target. Affects the target. Taunt for 5 sec. ■ Activates when the last bullet hits the target. Affects self. DEF ▲ __% for 5 sec.",
                values: {
                    1: [10.42],
                    2: [11.91],
                    3: [13.39],
                    4: [14.88],
                    5: [16.37],
                    6: [17.86],
                    7: [19.35],
                    8: [20.84],
                    9: [22.33],
                    10: [23.82]
                }
            }, skill_2: {
                name: "MDS",
                description: "■ Activates when entering battle. Affects self. When attacking an enemy projectile, damage dealt to that projectile ▲ __% continuously.",
                values: {
                    1: [11.2],
                    2: [12.8],
                    3: [14.4],
                    4: [16],
                    5: [17.6],
                    6: [19.2],
                    7: [20.8],
                    8: [22.4],
                    9: [24],
                    10: [25.6]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "CIWS",
                description: "■ Affects all enemies. Deals __% of final ATK as damage. ",
                values: {
                    1: [133.2],
                    2: [152.22],
                    3: [171.25],
                    4: [190.28],
                    5: [209.31],
                    6: [228.34],
                    7: [247.37],
                    8: [266.4],
                    9: [285.42],
                    10: [304.45]
                }
            }
        }
    }, "anis": {
        "id": "anis",
        "name": "Anis",
        "manufacturer": NikkeManufacturer.Tetra,
        "role": NikkeRole.Defender,
        "weapon_type": WeaponType.RL,
        "rarity": NikkeRarity.SR,
        "burst": Burst.Burst_II,
        "element": NikkeElement.Iron,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "D.H. Formation",
                "description": "■ Activates when attacked 40 time(s). Affects self. DEF ▲ __% for 10 sec.",
                "values": {
                    "1": [52.5],
                    "2": [60],
                    "3": [67.5],
                    "4": [75],
                    "5": [82.5],
                    "6": [90],
                    "7": [97.5],
                    "8": [105],
                    "9": [112.5],
                    "10": [120]
                }
            }, "skill_2": {
                "cooldown": 30,
                "name": "C.H. Formation",
                "description": "■ Affects self and 2 allies with the highest ATK (except caster). DEF ▲ __% for 5 sec. Equally shares damage taken for 10 sec.",
                "values": {
                    "1": [35],
                    "2": [40],
                    "3": [45],
                    "4": [50],
                    "5": [55],
                    "6": [60],
                    "7": [65],
                    "8": [70],
                    "9": [75],
                    "10": [80]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Pinpoint Missile",
                "description": "■ Affects enemies within attack range. Deals __% of final ATK as damage. DEF ▼ __% for 5 sec.",
                "values": {
                    "1": [68.57, 14],
                    "2": [78.36, 16],
                    "3": [88.16, 18],
                    "4": [97.95, 20],
                    "5": [107.75, 22],
                    "6": [117.55, 24],
                    "7": [127.34, 26],
                    "8": [137.14, 28],
                    "9": [146.93, 30],
                    "10": [156.73, 32]
                }
            }
        }
    }, "belorta": {
        id: "belorta",
        name: "Belorta",
        manufacturer: NikkeManufacturer.Tetra,
        role: NikkeRole.Attacker,
        weapon_type: WeaponType.RL,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_II,
        element: NikkeElement.Electric,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Surprise",
                description: "■ Activates when hitting a target with Full Charge. Affects self. Explosion Radius ▲ __% for 5 sec.",
                values: {
                    1: [3.41],
                    2: [4.09],
                    3: [4.77],
                    4: [5.46],
                    5: [6.14],
                    6: [6.82],
                    7: [7.5],
                    8: [8.18],
                    9: [8.87],
                    10: [9.55]
                }
            }, skill_2: {
                name: "Greed",
                description: "■ Activates when an attack hits more than 4 enemy unit(s). Affects the target(s). DEF ▼ __% for 5 sec. Deals __% of final ATK as additional damage.",
                values: {
                    1: [1.25, 5.34],
                    2: [1.51, 6.41],
                    3: [1.76, 7.48],
                    4: [2.01, 8.55],
                    5: [2.26, 9.61],
                    6: [2.51, 10.68],
                    7: [2.77, 11.75],
                    8: [3.02, 12.82],
                    9: [3.27, 13.89],
                    10: [3.52, 14.96]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "Tricky Bomber",
                description: "■ Affects enemies within attack range. Deals __% of final ATK as damage. ■ Affects all allies. Charge Speed ▲ __% for 10 sec.",
                values: {
                    1: [68.57, 1.01],
                    2: [82.28, 1.21],
                    3: [95.99, 1.41],
                    4: [109.71, 1.61],
                    5: [123.42, 1.81],
                    6: [137.14, 2.02],
                    7: [150.85, 2.22],
                    8: [164.57, 2.42],
                    9: [178.28, 2.62],
                    10: [192, 2.82]
                }
            }
        }
    }, "delta": {
        id: "delta",
        name: "Delta",
        manufacturer: NikkeManufacturer.Elysion,
        role: NikkeRole.Defender,
        weapon_type: WeaponType.SR,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_II,
        element: NikkeElement.Wind,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Recollection",
                description: "■ Activates when hitting a target with Full Charge. Affects self. Max HP ▲ __% for 10 sec.",
                values: {
                    1: [3.15],
                    2: [3.78],
                    3: [4.41],
                    4: [5.04],
                    5: [5.67],
                    6: [6.3],
                    7: [6.93],
                    8: [7.56],
                    9: [8.18],
                    10: [8.82]
                }
            }, skill_2: {
                name: "Last Memory",
                description: "■ Activates when using Burst Skills. Affects self. DEF ▲ __% for 20 sec.",
                values: {
                    1: [18.36],
                    2: [22.04],
                    3: [25.71],
                    4: [29.38],
                    5: [33.06],
                    6: [36.73],
                    7: [40.4],
                    8: [44.08],
                    9: [47.75],
                    10: [51.42]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Remember Me",
                description: "■ Affects self. Decoy: Creates an Avatar with __% of caster's final Max HP for 10 sec. Attract: Taunt all enemies for 10 sec.",
                values: {
                    1: [41.06],
                    2: [46.68],
                    3: [52.31],
                    4: [57.93],
                    5: [63.56],
                    6: [69.18],
                    7: [74.81],
                    8: [80.43],
                    9: [86.06],
                    10: [91.68]
                }
            }
        }
    }, "ether": {
        id: "ether",
        name: "Ether",
        manufacturer: NikkeManufacturer.Missilis,
        role: NikkeRole.Defender,
        weapon_type: WeaponType.SG,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_I,
        element: NikkeElement.Electric,
        has_treasure: false,
        skills: {
            skill_1: {
                cooldown: 15,
                name: "Corrosive Bullets",
                description: "■ Affects 1 allies with the lowest remaining HP. Damage Taken ▼ __% for 5 sec.",
                values: {
                    1: [22.96],
                    2: [26.25],
                    3: [29.53],
                    4: [32.81],
                    5: [36.09],
                    6: [39.37],
                    7: [42.65],
                    8: [45.93],
                    9: [49.21],
                    10: [52.5]
                }
            }, skill_2: {
                cooldown: 13,
                name: "Prognostic Response Experiment",
                description: "■ Affects 3 enemy unit(s) with the highest DEF. Deals __% of final ATK as damage. ■ Affects the same enemy unit(s). Activates during Full Burst. DEF ▼ __% for 6 sec.",
                values: {
                    1: [24.64, 4.1],
                    2: [28.16, 4.69],
                    3: [31.68, 5.28],
                    4: [35.2, 5.86],
                    5: [38.72, 6.45],
                    6: [42.24, 7.04],
                    7: [45.76, 7.62],
                    8: [49.28, 8.21],
                    9: [52.8, 8.8],
                    10: [56.32, 9.38]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Colossal Single Cell",
                description: "■ Affects 3 ally unit(s) with the lowest remaining HP. Creates a Shield equal to 96% of the caster's final Max HP for 5 sec.",
                values: {
                    1: [42],
                    2: [48],
                    3: [54],
                    4: [60],
                    5: [66],
                    6: [72],
                    7: [78],
                    8: [84],
                    9: [90],
                    10: [96]
                }
            }
        }
    }, "himeno": {
        id: "himeno",
        name: "Himeno",
        manufacturer: NikkeManufacturer.Abnormal,
        role: NikkeRole.Supporter,
        weapon_type: WeaponType.SR,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_II,
        element: NikkeElement.Wind,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Weak Spot Attack",
                description: "■ Activates when hitting a target with Full Charge. Affects the target. DEF ▼ __% for 3 sec.",
                values: {
                    1: [3.03],
                    2: [3.47],
                    3: [3.9],
                    4: [4.33],
                    5: [4.77],
                    6: [5.2],
                    7: [5.64],
                    8: [6.07],
                    9: [6.5],
                    10: [6.94]
                }
            }, skill_2: {
                cooldown: 20,
                name: "Invisible Hand",
                description: "■ Affects all allies with sniper rifles. ATK ▲ __% for 10 sec. Max Ammunition Capacity ▲ 2 round(s) for 10 sec.",
                values: {
                    1: [1.47],
                    2: [2.53],
                    3: [3.59],
                    4: [4.64],
                    5: [5.7],
                    6: [6.75],
                    7: [7.81],
                    8: [8.87],
                    9: [9.92],
                    10: [10.98]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "Ghost",
                description: "■ Affects 1 ally unit(s) with the highest ATK. Charge Damage ▲ __% for 10 sec. Critical Rate ▲ __% for 10 sec.",
                values: {
                    1: [7.56, 8.52],
                    2: [9.36, 9.36],
                    3: [11.16, 10.26],
                    4: [12.96, 11.13],
                    5: [14.76, 12],
                    6: [16.56, 12.87],
                    7: [18.36, 13.74],
                    8: [20.16, 14.61],
                    9: [21.96, 15.48],
                    10: [23.76, 16.35]
                }
            }
        }
    }, "mica": {
        id: "mica",
        name: "Mica",
        manufacturer: NikkeManufacturer.Tetra,
        role: NikkeRole.Supporter,
        weapon_type: WeaponType.RL,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_I,
        element: NikkeElement.Wind,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Wonderous Star",
                description: "■ Activates when attacked 20 time(s). Affects self. DEF ▲ __% for 10S.",
                values: {
                    1: [17.14],
                    2: [19.59],
                    3: [22.04],
                    4: [24.48],
                    5: [26.93],
                    6: [29.38],
                    7: [31.83],
                    8: [34.28],
                    9: [36.73],
                    10: [39.18]
                }
            }, skill_2: {
                cooldown: 20,
                name: "Brave Star",
                description: "■ Affects 2 allies with the highest ATK. Max Ammunition Capacity ▲ 2 round(s) for 10 sec. DEF ▲ __% for 10 sec.",
                values: {
                    1: [5.57],
                    2: [7.16],
                    3: [8.75],
                    4: [10.34],
                    5: [11.93],
                    6: [13.53],
                    7: [15.12],
                    8: [16.71],
                    9: [18.3],
                    10: [19.89]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "Sparkling Star",
                description: "■ Affects all enemies. Deals __% of final ATK as damage. DEF ▼ __% for 5 sec.",
                values: {
                    1: [66.6, 5.82],
                    2: [76.11, 6.66],
                    3: [85.62, 7.49],
                    4: [95.14, 8.32],
                    5: [104.65, 9.15],
                    6: [114.17, 9.99],
                    7: [123.68, 10.82],
                    8: [133.2, 11.65],
                    9: [142.71, 12.48],
                    10: [152.22, 13.32]
                }
            }
        }
    }, "mihara": {
        id: "mihara",
        name: "Mihara",
        manufacturer: NikkeManufacturer.Missilis,
        role: NikkeRole.Attacker,
        weapon_type: WeaponType.AR,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_III,
        element: NikkeElement.Water,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Endure",
                description: "■ Activates when the last bullet hits the target. Affects self. Critical Damage ▲ __% for 10 sec.",
                values: {
                    1: [8.18],
                    2: [9.35],
                    3: [10.52],
                    4: [11.69],
                    5: [12.85],
                    6: [14.02],
                    7: [15.19],
                    8: [16.36],
                    9: [17.53],
                    10: [18.7]
                }
            }, skill_2: {
                name: "Highway to Hell",
                description: "■ Activates when using Burst Skill. Affects self. Additional effects triggered according to the number of activation time(s). Previous effects trigger repeatedly: Once: Highway to Hell 1 - ATK ▲ __% for 45 sec. Twice: Highway to Hell 2 - Critical Rate ▲ __% for 45 sec.",
                values: {
                    1: [6.81, 4.93],
                    2: [7.78, 5.46],
                    3: [8.75, 6.34],
                    4: [9.72, 7.05],
                    5: [10.7, 7.75],
                    6: [11.67, 8.46],
                    7: [12.64, 9.17],
                    8: [13.62, 9.87],
                    9: [14.59, 10.58],
                    10: [15.56, 11.28]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Sense Sharing",
                description: "■ Affects all allies. Full Burst Time ▼ 5 sec. ■ Affects all enemies. Deals __% of final ATK as damage. ■ Activates during Highway to Hell 2. Affects all enemies. Deals __% of final ATK as additional damage.",
                values: {
                    1: [174.82, 116.55],
                    2: [199.8, 133.2],
                    3: [224.77, 149.85],
                    4: [249.75, 166.5],
                    5: [274.72, 183.15],
                    6: [299.7, 199.8],
                    7: [324.67, 216.45],
                    8: [349.65, 233.1],
                    9: [374.62, 249.75],
                    10: [399.6, 266.4]
                }
            }
        }
    }, "misato_katsuragi": {
        id: "misato_katsuragi",
        name: "Misato",
        manufacturer: NikkeManufacturer.Abnormal,
        role: NikkeRole.Supporter,
        weapon_type: WeaponType.SMG,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_I,
        element: NikkeElement.Iron,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Shooting Manual",
                description: "■ Activates after landing 60 normal attack(s). Affects self. Shooting Manual: Hit Rate ▲ __%, stacks up to 3 time(s) and lasts for 5 sec. ■ Activates after landing 120 normal attack(s). Affects 1 ally unit(s) with the lowest HP percentage. Recovers __% of the caster's final Max HP as HP.",
                values: {
                    1: [2.52, 4.02],
                    2: [2.8, 4.47],
                    3: [3.08, 4.91],
                    4: [3.36, 5.36],
                    5: [3.64, 5.81],
                    6: [3.92, 6.25],
                    7: [4.2, 6.7],
                    8: [4.48, 7.15],
                    9: [4.76, 7.6],
                    10: [5.04, 8.04]
                }
            }, skill_2: {
                name: "Recovery Assistant",
                description: "■ Only activates when in Shooting Manual status. Affects all allies. Damage dealt to Shield ▲ __% continuously. ■ Only activates when Shooting Manual is fully stacked. Affects self. HP Potency ▲ __% continuously.",
                values: {
                    1: [75, 15.02],
                    2: [83.33, 16.69],
                    3: [91.66, 18.36],
                    4: [100, 20.03],
                    5: [108.33, 21.7],
                    6: [116.66, 23.37],
                    7: [125, 25.04],
                    8: [133.33, 26.71],
                    9: [141.66, 28.38],
                    10: [150, 30.05]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Command to Rest",
                description: "■ Affects all allies. Recovers __% of caster's final Max HP every 1 sec for 5 sec continuously.",
                values: {
                    1: [2.42],
                    2: [2.71],
                    3: [3],
                    4: [3.3],
                    5: [3.59],
                    6: [3.88],
                    7: [4.18],
                    8: [4.47],
                    9: [4.76],
                    10: [5.06]
                }
            }
        }
    }, "n102": {
        id: "n102",
        name: "N102",
        manufacturer: NikkeManufacturer.Missilis,
        role: NikkeRole.Supporter,
        weapon_type: WeaponType.RL,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_I,
        element: NikkeElement.Water,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Written Memories",
                description: "■ Affects 1 allies with the highest ATK. Activates when attacking during Full Charge. [Target] Max Ammunition Capacity ▲ 3 shots for 10 sec. [Target] Critical Damage ▲ __% for 10 sec.",
                values: {
                    1: [2.45],
                    2: [3.33],
                    3: [4.2],
                    4: [5.08],
                    5: [5.96],
                    6: [6.83],
                    7: [7.71],
                    8: [8.59],
                    9: [9.46],
                    10: [10.34]
                }
            }, skill_2: {
                cooldown: 15,
                name: "Impaired Memory",
                description: "■ Affects 1 ally unit(s) with the highest HP. Charge Damage ▲ __% for 5 sec.",
                values: {
                    1: [11.3],
                    2: [12.92],
                    3: [14.53],
                    4: [16.15],
                    5: [17.76],
                    6: [19.38],
                    7: [21],
                    8: [22.61],
                    9: [24.23],
                    10: [25.84]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "Memories of Blue Butterflies",
                description: "■ Affects all allies. ATK ▲ __% for 10 sec.",
                values: {
                    1: [11.31],
                    2: [12.93],
                    3: [14.54],
                    4: [16.16],
                    5: [17.77],
                    6: [19.39],
                    7: [21.01],
                    8: [22.62],
                    9: [24.24],
                    10: [25.86]
                }
            }
        }
    }, "neon": {
        id: "neon",
        name: "Neon",
        manufacturer: NikkeManufacturer.Elysion,
        role: NikkeRole.Supporter,
        weapon_type: WeaponType.SG,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_I,
        element: NikkeElement.Fire,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Neon's Special Bullet",
                description: "■ Affects 2 ally unit(s) with the highest ATK. Activates when killing an enemy. Critical Rate ▲ __% for 5 sec.",
                values: {
                    1: [1.78],
                    2: [1.97],
                    3: [2.17],
                    4: [2.37],
                    5: [2.57],
                    6: [2.77],
                    7: [2.96],
                    8: [3.16],
                    9: [3.36],
                    10: [3.56]
                }
            }, skill_2: {
                name: "Viva Firepower!",
                description: "■ Activates at the beginning of Full Burst. Affects all allies. Critical Rate ▲ __% for 2 shots.",
                values: {
                    1: [22.96],
                    2: [25.52],
                    3: [28.07],
                    4: [30.62],
                    5: [33.17],
                    6: [35.72],
                    7: [38.28],
                    8: [40.83],
                    9: [43.38],
                    10: [45.93]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "Firepower Rules!",
                description: "■ Affects 1 enemy unit(s) with the highest DEF. Deals __% of final ATK as damage. ■ Affects all allies with a Shotgun. Max Ammunition Capacity ▲ 3 round(s) for 10 sec.",
                values: {
                    1: [198.36],
                    2: [235.1],
                    3: [271.83],
                    4: [308.57],
                    5: [345.3],
                    6: [382.04],
                    7: [418.77],
                    8: [455.51],
                    9: [492.24],
                    10: [528.97]
                }
            }
        }
    }, "neve": {
        id: "neve",
        name: "neve",
        manufacturer: NikkeManufacturer.Tetra,
        role: NikkeRole.Attacker,
        weapon_type: WeaponType.SG,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_III,
        element: NikkeElement.Water,
        has_treasure: false,
        skills: {
            skill_1: {
                cooldown: 10,
                name: "Bear Power",
                description: "■ Affects 1 enemy unit(s) with the lowest remaining HP. Deals __% of final ATK as damage.",
                values: {
                    1: [63.63],
                    2: [72.72],
                    3: [81.81],
                    4: [90.9],
                    5: [100],
                    6: [109.09],
                    7: [118.18],
                    8: [127.27],
                    9: [136.36],
                    10: [145.45]
                }
            }, skill_2: {
                name: "Hibernation",
                description: "■ Activates when entering Full Burst. Affects self. Deals for Pierce for 2 round(s). ATK ▲ __% for 2 round(s).",
                values: {
                    1: [16.8],
                    2: [28.8],
                    3: [40.8],
                    4: [52.8],
                    5: [64.8],
                    6: [76.8],
                    7: [88.8],
                    8: [100.8],
                    9: [112.8],
                    10: [124.8]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Roar",
                description: "■ Affects self. Critical Rate ▲ __% for 20 sec. Hit Rate ▲ __% for 20 sec.",
                values: {
                    1: [13.98, 9.64],
                    2: [15.97, 11.02],
                    3: [17.97, 12.39],
                    4: [19.97, 13.77],
                    5: [21.97, 15.15],
                    6: [23.96, 16.53],
                    7: [25.96, 17.9],
                    8: [27.96, 19.28],
                    9: [29.96, 20.66],
                    10: [31.95, 22.04]
                }
            }
        }
    }, "pascal": {
        id: "pascal",
        name: "Pascal",
        manufacturer: NikkeManufacturer.Abnormal,
        role: NikkeRole.Supporter,
        weapon_type: WeaponType.RL,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_I,
        element: NikkeElement.Iron,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Watch Out!",
                description: "■ Activates after firing 10 time(s). Affects 1 ally unit(s) with the highest DEF. Recovers __% of the caster's final Max HP as HP.",
                values: {
                    1: [3.14],
                    2: [3.49],
                    3: [3.84],
                    4: [4.18],
                    5: [4.53],
                    6: [4.88],
                    7: [5.23],
                    8: [5.58],
                    9: [5.93],
                    10: [6.28]
                }
            }, skill_2: {
                name: "I'll Do My Best",
                description: "■ Activates when entering Burst stage 1. Affects 3 ally unit(s) with the lowest HP. HP Potency ▲ __% for 10 sec.",
                values: {
                    1: [19.2],
                    2: [21.33],
                    3: [23.46],
                    4: [25.6],
                    5: [27.73],
                    6: [29.86],
                    7: [32],
                    8: [34.13],
                    9: [36.26],
                    10: [38.4]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Stay Safe, Everyone!",
                description: "■ Affects 3 ally unit(s) with the lowest HP. Recovers __% of the caster's final Max HP as HP.",
                values: {
                    1: [27.64],
                    2: [30.72],
                    3: [33.79],
                    4: [36.86],
                    5: [39.93],
                    6: [43],
                    7: [46.08],
                    8: [49.15],
                    9: [52.22],
                    10: [55.29]
                }
            }
        }
    }, "ram": {
        id: "ram",
        name: "ram",
        manufacturer: NikkeManufacturer.Abnormal,
        role: NikkeRole.Defender,
        weapon_type: WeaponType.SR,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_I,
        element: NikkeElement.Wind,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Fura",
                description: "■ Activates after landing 5 normal attack(s). Affects the target(s). ATK ▼ __% for 5 sec. ■ Activates when Full Burst ends with an ally from the same squad still on the battlefield. Affects self. Cooldown of Burst Skill ▼ 20.16 sec.",
                values: {
                    1: [3.77],
                    2: [4.23],
                    3: [4.7],
                    4: [5.16],
                    5: [5.63],
                    6: [6.09],
                    7: [6.56],
                    8: [7.02],
                    9: [7.49],
                    10: [7.95]
                }
            }, skill_2: {
                cooldown: 15,
                name: "Sister's Authority",
                description: "■ Affects self. Max HP ▲ __% without restoring HP for 10 sec. ■ Affects 2 ally unit(s) with the lowest remaining HP. DEF ▲ __% of caster's DEF for 5 sec.",
                values: {
                    1: [20.36, 5.67],
                    2: [22.62, 6.3],
                    3: [24.88, 6.93],
                    4: [27.15, 7.56],
                    5: [29.41, 8.19],
                    6: [31.67, 8.82],
                    7: [33.93, 9.45],
                    8: [36.2, 10.08],
                    9: [38.46, 10.71],
                    10: [40.72, 11.34]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Don't Bother Ram",
                description: "■ Affects all allies. Generates a Shield with __% of the caster's final Max HP for 10 sec.",
                values: {
                    1: [5.04],
                    2: [5.6],
                    3: [6.16],
                    4: [6.72],
                    5: [7.28],
                    6: [7.84],
                    7: [8.4],
                    8: [8.96],
                    9: [9.52],
                    10: [10.08]
                }
            }
        }
    }, "rapi": {
        id: "rapi",
        name: "Rapi",
        manufacturer: NikkeManufacturer.Elysion,
        role: NikkeRole.Attacker,
        weapon_type: WeaponType.AR,
        rarity: NikkeRarity.SR,
        burst: Burst.Burst_III,
        element: NikkeElement.Fire,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "FF Formation",
                description: "■ Activates when attacked 20 time(s). Affects self. ATK ▲ __% for 20 sec.",
                values: {
                    1: [10.9],
                    2: [12.12],
                    3: [13.33],
                    4: [14.54],
                    5: [15.75],
                    6: [16.96],
                    7: [18.18],
                    8: [19.39],
                    9: [20.6],
                    10: [21.81]
                }
            }, skill_2: {
                cooldown: 20,
                name: "Missile",
                description: "■ Affects 1 enemy unit(s) with the highest ATK. Deals __% of final ATK as damage. Taunt for 5 sec.",
                values: {
                    1: [308.57],
                    2: [333.06],
                    3: [357.55],
                    4: [382.04],
                    5: [406.53],
                    6: [431.02],
                    7: [455.51],
                    8: [480],
                    9: [504.48],
                    10: [528.97]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Warhead Volley",
                description: "■ Affects 1 enemy unit(s) with the highest ATK. Deals __% of final ATK as damage. ■ Affects self. ATK ▲ __% for 10 sec.",
                values: {
                    1: [328.86, 30.37],
                    2: [365.4, 33.75],
                    3: [401.94, 37.12],
                    4: [438.48, 40.5],
                    5: [474.02, 43.87],
                    6: [511.56, 47.25],
                    7: [548.1, 50.62],
                    8: [584.64, 54],
                    9: [621.18, 57.37],
                    10: [657.72, 60.75]
                }
            }
        }
    }, "product_08": {
        "id": "product_08",
        "name": "Product 08",
        "manufacturer": NikkeManufacturer.Missilis,
        "role": NikkeRole.Supporter,
        "weapon_type": WeaponType.SR,
        "rarity": NikkeRarity.R,
        "burst": Burst.Burst_I,
        "element": NikkeElement.Electric,
        has_treasure: false,
        "skills": {
            "skill_1": {
                "name": "Tactic: Enhance Armor",
                "description": "■ When a normal attack hits, there is a 20% chance of affecting 1 ally unit(s) with the lowest remaining HP. DEF ▲ __% for 5 sec.",
                "values": {
                    "1": [2.27],
                    "2": [3.03],
                    "3": [3.78],
                    "4": [4.54],
                    "5": [5.3],
                    "6": [6.06],
                    "7": [6.81],
                    "8": [7.57],
                    "9": [8.33],
                    "10": [9.09]
                }
            }, "skill_2": {
                "cooldown": 17,
                "name": "Tactic: Crack Shot",
                "description": "■ Affects 1 ally unit(s) with the highest ATK. Critical Rate ▲ __% for 5 sec.",
                "values": {
                    "1": [5.74],
                    "2": [7.66],
                    "3": [9.58],
                    "4": [11.49],
                    "5": [13.41],
                    "6": [15.32],
                    "7": [17.24],
                    "8": [19.16],
                    "9": [21.07],
                    "10": [22.99]
                }
            }, "burst_skill": {
                "cooldown": 20,
                "name": "Tactic: Power Boost",
                "description": "■ Affects all allies. ATK ▲ __% for 10 sec.",
                "values": {
                    "1": [4.84],
                    "2": [6.46],
                    "3": [8.08],
                    "4": [9.69],
                    "5": [11.31],
                    "6": [12.93],
                    "7": [14.54],
                    "8": [16.16],
                    "9": [17.77],
                    "10": [19.39]
                }
            }
        }
    }, "product_12": {
        id: "product_12",
        name: "Product 12",
        manufacturer: NikkeManufacturer.Missilis,
        role: NikkeRole.Attacker,
        weapon_type: WeaponType.MG,
        rarity: NikkeRarity.R,
        burst: Burst.Burst_III,
        element: NikkeElement.Fire,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Action: Increase ATK",
                description: "■ Affects self. Activates after 200 normal attack(s). ATK ▲ __% for 5 sec.",
                values: {
                    1: [2.07],
                    2: [2.76],
                    3: [3.45],
                    4: [4.14],
                    5: [4.83],
                    6: [5.52],
                    7: [6.21],
                    8: [6.9],
                    9: [7.59],
                    10: [8.28]
                }
            }, skill_2: {
                cooldown: 10,
                name: "Action: Focus Fire",
                description: "■ Affects 1 enemy unit(s) with the lowest remaining HP. Deals __% of final ATK as damage.",
                values: {
                    1: [27.27],
                    2: [36.36],
                    3: [45.45],
                    4: [54.54],
                    5: [63.63],
                    6: [72.72],
                    7: [81.81],
                    8: [90.9],
                    9: [100],
                    10: [109.09]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Action: Precision Strike",
                description: "■ Affects enemies within attack range. Deals __% of final ATK as damage.",
                values: {
                    1: [180],
                    2: [240],
                    3: [300],
                    4: [360],
                    5: [420],
                    6: [480],
                    7: [540],
                    8: [600],
                    9: [660],
                    10: [720]
                }
            }
        }
    }, "product_23": {
        id: "product_23",
        name: "Product 23",
        manufacturer: NikkeManufacturer.Missilis,
        role: NikkeRole.Supporter,
        weapon_type: WeaponType.SG,
        rarity: NikkeRarity.R,
        burst: Burst.Burst_II,
        element: NikkeElement.Wind,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Order: Power Boost",
                description: "■ Activates when the last bullet hits the target. Affects self. DEF ▲ __% for 10 sec.",
                values: {
                    1: [0.81],
                    2: [1.62],
                    3: [2.43],
                    4: [3.24],
                    5: [4.05],
                    6: [4.86],
                    7: [5.67],
                    8: [6.48],
                    9: [7.29],
                    10: [8.1]
                }
            }, skill_2: {
                cooldown: 15,
                name: "Order: Emergency Measures",
                description: "■ Affects self. Recover __% of attack damage as HP over 10 sec.",
                values: {
                    1: [1.61],
                    2: [3.23],
                    3: [4.84],
                    4: [6.46],
                    5: [8.07],
                    6: [9.69],
                    7: [11.3],
                    8: [12.92],
                    9: [14.53],
                    10: [16.15]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "Order: Special Bullets",
                description: "■ Affects 2 enemy unit(s) with the highest ATK. DEF ▼ __% for 5 sec.",
                values: {
                    1: [4.87],
                    2: [9.75],
                    3: [14.62],
                    4: [19.5],
                    5: [24.37],
                    6: [29.25],
                    7: [34.12],
                    8: [39],
                    9: [43.87],
                    10: [48.75]
                }
            }
        }
    }, "soldier_eg": {
        id: "soldier_eg",
        name: "Soldier EG",
        manufacturer: NikkeManufacturer.Elysion,
        role: NikkeRole.Attacker,
        weapon_type: WeaponType.AR,
        rarity: NikkeRarity.R,
        burst: Burst.Burst_III,
        element: NikkeElement.Electric,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Eagle Eye",
                description: "■ When a normal attack hits, there is a 5% chance of affecting self. ATK ▲ __% for 5 sec.",
                values: {
                    1: [1.98],
                    2: [2.64],
                    3: [3.3],
                    4: [3.96],
                    5: [4.62],
                    6: [5.28],
                    7: [5.94],
                    8: [6.59],
                    9: [7.26],
                    10: [7.92]
                }
            }, skill_2: {
                cooldown: 9,
                name: "Eagle's Gambit",
                description: "■ Affects self. Max Ammunition Capacity ▲ __% for 5 sec.",
                values: {
                    1: [28.19],
                    2: [37.59],
                    3: [46.99],
                    4: [56.38],
                    5: [65.78],
                    6: [75.18],
                    7: [84.58],
                    8: [93.98],
                    9: [103.37],
                    10: [112.77]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Eagle Shot",
                description: "■ Affects enemies within attack range. Deals __% of final ATK as damage.",
                values: {
                    1: [180],
                    2: [240],
                    3: [300],
                    4: [360],
                    5: [420],
                    6: [480],
                    7: [540],
                    8: [600],
                    9: [660],
                    10: [720]
                }
            }
        }
    }, "soldier_fa": {
        id: "soldier_fa",
        name: "Soldier FA",
        manufacturer: NikkeManufacturer.Elysion,
        role: NikkeRole.Defender,
        weapon_type: WeaponType.SG,
        rarity: NikkeRarity.R,
        burst: Burst.Burst_II,
        element: NikkeElement.Iron,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Falcon Wings",
                description: "■ There is a 10% chance of activating when attacked. Affects self. DEF ▲ __% for 10 sec.",
                values: {
                    1: [0.9],
                    2: [1.81],
                    3: [2.72],
                    4: [3.63],
                    5: [4.54],
                    6: [5.45],
                    7: [6.36],
                    8: [7.27],
                    9: [8.18],
                    10: [9.09]
                }
            }, skill_2: {
                cooldown: 15,
                name: "Falcon Nest",
                description: "■ Affects self. Recover __% of attack damage as HP over 8 sec.",
                values: {
                    1: [2.01],
                    2: [4.03],
                    3: [6.05],
                    4: [8.07],
                    5: [10.09],
                    6: [12.11],
                    7: [14.13],
                    8: [16.15],
                    9: [18.17],
                    10: [20.19]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "Falcon Boost",
                description: "■ Affects self. Max HP ▲ __% for 10 sec.",
                values: {
                    1: [11.25],
                    2: [22.5],
                    3: [33.75],
                    4: [45],
                    5: [56.25],
                    6: [67.5],
                    7: [78.75],
                    8: [90],
                    9: [101.25],
                    10: [112.5]
                }
            }
        }
    }, "soldier_ow": {
        id: "soldier_ow",
        name: "Soldier OW",
        manufacturer: NikkeManufacturer.Elysion,
        role: NikkeRole.Supporter,
        weapon_type: WeaponType.SMG,
        rarity: NikkeRarity.R,
        burst: Burst.Burst_I,
        element: NikkeElement.Fire,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Owl's Claw",
                description: "■ There is a 10% chance of activating after casting normal attack(s). Affects the target(s). Deals __% of final ATK as additional damage.",
                values: {
                    1: [18.9],
                    2: [25.2],
                    3: [31.5],
                    4: [37.8],
                    5: [44.1],
                    6: [50.4],
                    7: [56.7],
                    8: [63],
                    9: [69.3],
                    10: [75.6]
                }
            }, skill_2: {
                cooldown: 10,
                name: "Owl Wind",
                description: "■ Affects 3 ally unit(s) with the highest ATK. Cover's DEF ▲ __% for 5 sec.",
                values: {
                    1: [32.14],
                    2: [42.85],
                    3: [53.57],
                    4: [64.28],
                    5: [75],
                    6: [85.71],
                    7: [96.42],
                    8: [107.14],
                    9: [117.85],
                    10: [128.57]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "Owl Feather",
                description: "■ Affects all Fire Code allies. Max Ammunition Capacity ▲ __% for 10 sec.",
                values: {
                    1: [70],
                    2: [93.33],
                    3: [116.66],
                    4: [140],
                    5: [163.33],
                    6: [186.66],
                    7: [210],
                    8: [233.33],
                    9: [256.66],
                    10: [280]
                }
            }
        }
    }, "idoll_flower": {
        id: "idoll_flower",
        name: "iDoll Flower",
        manufacturer: NikkeManufacturer.Tetra,
        role: NikkeRole.Defender,
        weapon_type: WeaponType.RL,
        rarity: NikkeRarity.R,
        burst: Burst.Burst_I,
        element: NikkeElement.Wind,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Perennial Leaf",
                description: "■ Activates when the last bullet hits the target. Affects the target. ATK ▼ __% for 5 sec.",
                values: {
                    1: [4.13],
                    2: [5.5],
                    3: [6.88],
                    4: [8.26],
                    5: [9.63],
                    6: [11.01],
                    7: [12.39],
                    8: [13.77],
                    9: [15.14],
                    10: [16.52]
                }
            }, skill_2: {
                cooldown: 15,
                name: "Hue of the Perennial",
                description: "■ Affects 1 enemy unit(s) with the highest ATK. ATK ▼ __% for 5 sec.",
                values: {
                    1: [9.84],
                    2: [13.12],
                    3: [16.4],
                    4: [19.68],
                    5: [22.96],
                    6: [26.25],
                    7: [29.53],
                    8: [32.81],
                    9: [36.09],
                    10: [39.37]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "Perennial Perfume",
                description: "■ Affects 1 enemy unit(s) with the highest ATK. Deals __% of final ATK as damage. Taunt for 2 sec.",
                values: {
                    1: [110.2],
                    2: [134.69],
                    3: [159.18],
                    4: [183.67],
                    5: [208.16],
                    6: [232.65],
                    7: [257.14],
                    8: [281.63],
                    9: [306.12],
                    10: [330.61]
                }
            }
        }
    }, "idoll_ocean": {
        id: "idoll_ocean",
        name: "iDoll Ocean",
        manufacturer: NikkeManufacturer.Tetra,
        role: NikkeRole.Supporter,
        weapon_type: WeaponType.SMG,
        rarity: NikkeRarity.R,
        burst: Burst.Burst_I,
        element: NikkeElement.Water,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Ocean Shower",
                description: "■ Activates when the last bullet hits the target. Affects 1 ally unit(s) with the lowest HP percentage. Recovers __% of the caster's final Max HP as HP.",
                values: {
                    1: [1.21],
                    2: [1.62],
                    3: [2.02],
                    4: [2.43],
                    5: [2.83],
                    6: [3.24],
                    7: [3.64],
                    8: [4.05],
                    9: [4.45],
                    10: [4.86]
                }
            }, skill_2: {
                cooldown: 15,
                name: "Ocean Cleansing",
                description: "■ Affects 1 ally unit(s) with the lowest HP percentage. Recovers __% of the caster's final Max HP as HP.",
                values: {
                    1: [2.42],
                    2: [3.23],
                    3: [4.03],
                    4: [4.84],
                    5: [5.65],
                    6: [6.46],
                    7: [7.26],
                    8: [8.07],
                    9: [8.88],
                    10: [9.69]
                }
            }, burst_skill: {
                cooldown: 20,
                name: "Ocean Dive",
                description: "■ Affects all allies. Recovers __% of caster's final Max HP as HP.",
                values: {
                    1: [7.42],
                    2: [9.9],
                    3: [12.37],
                    4: [14.85],
                    5: [17.32],
                    6: [19.8],
                    7: [22.27],
                    8: [24.75],
                    9: [27.22],
                    10: [29.7]
                }
            }
        }
    }, "idoll_sun": {
        id: "idoll_sun",
        name: "iDoll Sun",
        manufacturer: NikkeManufacturer.Tetra,
        role: NikkeRole.Supporter,
        weapon_type: WeaponType.AR,
        rarity: NikkeRarity.R,
        burst: Burst.Burst_III,
        element: NikkeElement.Iron,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "Sunshine",
                description: "■ Affects self. Activates after landing 10 normal attack(s). DEF ▲ __% for 5 sec.",
                values: {
                    1: [1.89],
                    2: [2.52],
                    3: [3.15],
                    4: [3.78],
                    5: [4.41],
                    6: [5.04],
                    7: [5.67],
                    8: [6.3],
                    9: [6.93],
                    10: [7.56]
                }
            }, skill_2: {
                name: "Sunlight",
                description: "■ There is a 20% chance to activate when attacked. ATK ▲ __% for 5 sec.",
                values: {
                    1: [2.27],
                    2: [3.03],
                    3: [3.78],
                    4: [4.54],
                    5: [5.3],
                    6: [6.06],
                    7: [6.81],
                    8: [7.57],
                    9: [8.33],
                    10: [9.09]
                }
            }, burst_skill: {
                cooldown: 40,
                name: "Sunset",
                description: "■ Affects self. Max Ammunition Capacity ▲ __% for 10 sec.",
                values: {
                    1: [196.87],
                    2: [262.5],
                    3: [328.12],
                    4: [393.75],
                    5: [459.37],
                    6: [525],
                    7: [590.62],
                    8: [656.25],
                    9: [721.87],
                    10: [787.5]
                }
            }
        }
    }, "template": {
        id: "",
        name: "",
        manufacturer: NikkeManufacturer.Abnormal,
        role: NikkeRole.Attacker,
        weapon_type: WeaponType.AR,
        rarity: NikkeRarity.SSR,
        burst: Burst.Burst_III,
        element: NikkeElement.Electric,
        has_treasure: false,
        skills: {
            skill_1: {
                name: "",
                description: "",
                values: {
                    1: [],
                    2: [],
                    3: [],
                    4: [],
                    5: [],
                    6: [],
                    7: [],
                    8: [],
                    9: [],
                    10: []
                }
            }, skill_2: {
                name: "",
                description: "",
                values: {
                    1: [],
                    2: [],
                    3: [],
                    4: [],
                    5: [],
                    6: [],
                    7: [],
                    8: [],
                    9: [],
                    10: []
                }
            }, burst_skill: {
                cooldown: 40,
                name: "",
                description: "",
                values: {
                    1: [],
                    2: [],
                    3: [],
                    4: [],
                    5: [],
                    6: [],
                    7: [],
                    8: [],
                    9: [],
                    10: []
                }
            }
        }
    }
}