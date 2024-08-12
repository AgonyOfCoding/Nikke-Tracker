import { CubeName, RecommendationsSkyfall } from "../types";

export const recommendation_data_skyfall: {[nikke: string]: RecommendationsSkyfall} = {
    "2b": {        
        priority: "Low",
        collection_item_priority: "element_advantage",
        skills: ["7-10", "4-7-10", "4-7-10"],
        overloads: {
            ideal: ["4x Elemental Damage"],
            good: ["0-4x Crit Rate", "0-4x Crit Damage", "0-4x ATK", "0-2x Max Ammo"],
            fine: [],
            passable: ["0-4x Hit Rate"],
            no: []
        },
        cube: {
            cube: [CubeName.Vigor, CubeName.Bastion],
            notes: ""
        },
        notes: ["2B gets too much ATK buff from her skill 2 that ATK% isn't as high of a priority. It's still good but just not gonna see as much dividend compared to other units. Crit ends up being a more valuable stat due to this. Her reload time isn't as long so she doesn't require a lot of max ammo if at all.",
            "Her priority/niche nowadays is using her as a tank to soak up some damage for certain bosses where her Skill 1 can be taken advantage of (increasing HP is pseudo heal). Some bosses target highest attack units with certain mechanics and 2B is almost always guaranteed to be highest attack (if lower core, might need to ramp up a bit with a few bursts)."]
    },
    "a2": {
        priority: "Low",
        collection_item_priority: "element_advantage",
        skills: ["5-10", "4-10", "7-10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage"],
            good: ["0-4x Charge Speed", "0-2x Max Ammo"],
            fine: ["0-4x Charge Damage"],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion, CubeName.Resilience, CubeName.Adjutant],
            notes: "With enough ammo, she can have unlimited ammo with Liter/Noir"
        },
        notes: ["Level 7 skill 1 is likely enough for most AOE purposes. Any further is more just bonus damage. Higher burst level allows easier time to upkeep her burst buff.",
            "Don't need much max ammo since it takes time for her to use up her bullets and her reload time isn't as much as other SR/RL's. With Bastion and Noir, you could have infinite ammo for A2. Higher Charge Speed may want more Max Ammo."]
    },
    "ade": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "admi": {
        priority: "Zero",
        collection_item_priority: "ignore_for_now",
        skills: ["1-4", "4", "4-7"],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: ["0-4x ATK", "0-4x Max Ammo", "0-4x Charge Speed"],
            no: []
        },
        cube: {
            cube: [CubeName.Quantum, CubeName.Resilience],
            notes: ""
        },
        notes: ["An outdated unit. Don't upgrade now in this day and age. Not Recommended to OL. Primarily here for skill suggestion. Admi is usually paired with Privaty and so her burst usually is enough low levels since you can make your DPS wear Resilience and achieve 100% reload speed. Skill 1 almost never triggers in real battle."]
    },
    "alice": {
        priority: "High",
        collection_item_priority: "highest",
        skills: ["10", "4-7", "10"],
        overloads: {
            ideal: ["1-2x Charge Speed", "2-4x Max Ammo", "3-4x ATK", "3-4x Elemental Damage"],
            good: [],
            fine: [],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage", "0-4x Charge Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Bastion],
            notes: "Bastion if with Liter & Noir and high ammo capacity (3 high rolls or 4 rolls of max ammo)"
        },
        notes: ["Charge Speed allows Alice to have 99~100% Charge Speed when she bursts. With 98.88% Charge Speed, she can full charge within frame 1 and thus releasing full charge quickly. If you pair her with Maxwell, she only needs 1 line of it. Requires 2 lines if you don't use Maxwell with her. Lately we've been using her without Maxwell more so it's recommended to go 2 lines of Charge Speed (total of 7.06% or higher Charge Speed within 2 lines).",
            "Max Ammo is necessity especially since you run her typically with Privaty which has Max Ammo reduction or Noir which has Ammo Refresh. Fast Shooting is her typical gameplay which means she uses up ammo fast so Max Ammo and Resilience Cube are necessary. You can have entire ammo capacity shooting without reloading with Bastion during burst if you have have enough Ammo capacity with Liter+Noir"]
    },
    "alice_wonderland_bunny": {
        priority: "Low",
        collection_item_priority: "useful_but_not_priority",
        skills: ["4", "4-10", "4"],
        overloads: {
            ideal: ["3x+ Max Ammo", "0-4x Elemental Damage", "0-4x ATK"],
            good: [],
            fine: [],
            passable: ["0-4x Hit Rate", "0-4x Crit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion],
            notes: ""
        },
        notes: ["Upgrade skill 1 and burst for more healing as needed, but very optional and would recommend to keep at minimal investment. Upgrade Skill 2 for more ammo.",
            "Recommended to just 1 tap the OLs without rerolling."]
    },
    "anis_sparkling_summer": {
        priority: "High",
        collection_item_priority: "high",
        skills: ["7-10", "7-10", "9-10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage"],
            good: [],
            fine: [],
            passable: ["0-4x Hit Rate", "0-4x Crit Rate", "0-4x Crit Damage"],
            no: ["0x Max Ammo"]
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["Level 9 on her Burst allows her to be ran without privaty and maintain 1 bullet during her burst. Higher skill 1 and Burst level allows her to do 15-16 shots during burst when Privaty isn't there.",
            "Make sure 0 Ammo OL so she can proc skill 2 more often. Make it a priority that you don't have any Max Ammo"]
    },
    "anne_miracle_fairy": {
        priority: "Low",
        collection_item_priority: "ignore_for_now",
        skills: ["4", "4", "4-10"],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: ["0-4x Charge Speed", "0-2x Max Ammo", "0-4x ATK"],
            no: []
        },
        cube: {
            cube: [CubeName.Quantum, CubeName.Resilience],
            notes: ""
        },
        notes: ["Not Recommended to OL unless PvP. Primarily here for skill suggestion.",
            "Primarily used for her burst buff or revive. OL and Cube for Energy Generation. Not putting too much on Max Ammo in case you need to utilize the skill 2 debuff."]
    },
    "aria": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "bay": {
        priority: "",
        collection_item_priority: "pvp",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "biscuit": {
        priority: "Low to Medium",
        collection_item_priority: "pvp",
        skills: ["4+ (low priority)", "4", "4-10"],
        overloads: {
            ideal: ["0-4x ATK", "0-4x Elemental Damage"],
            good: ["0-4x Max Ammo", "0-4x Charge Speed"],
            fine: ["0-4x Charge Damage"],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["Biscuit's skill investment is more for solo raid purposes. Skill 1 helps privaty stay alive but it's a low priority. Her Burst is more of the priority for more DPS to Support DPS units like Dorothy and Summer Anis.",
            "Having at least 2x Max Ammo is pretty useful for burst energy generation for Solo Raid so that you can get yourself to full burst before needing to reload.",
            "For PvP, she's used more for the base functionality of keeping defender alive so she's fine being kept at 4/4/4. Having Charge Speed could help gain energy faster in some situations for fast bursting."]
    },
    "blanc": {
        priority: "High (with Noir)",
        collection_item_priority: "pvp",
        skills: ["4-7", "4-7", "10"],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: ["0-4x ATK", "0-4x Max Ammo", "0-4x Elemental Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Quantum, CubeName.Resilience, CubeName.Bastion],
            notes: "Quantum is useful especially if no fast charge units (SR/RL/SG)"
        },
        notes: ["Her burst matter a lot (primarily combined with Noir). Her heal is insanely good that can make her a sole healer for the team (requires Noir).",
            "Would OL her gears but not really reroll for CP (PvP)"]
    },
    "brid": {
        priority: "",
        collection_item_priority: "element_advantage",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "centi": {
        priority: "",
        collection_item_priority: "pvp",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "clay": {
        priority: "",
        collection_item_priority: "not_rated",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "cocoa": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "crow": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "crown": {
        priority: "Highest",
        collection_item_priority: "high",
        skills: ["10*", "10", "10"],
        overloads: {
            ideal: ["1-4x Max Ammo", "0-4x ATK", "0-4x Elemental Damage"],
            good: [],
            fine: [],
            passable: ["0-4x Crit Damage", "0-4x Crit Rate"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["*Skill 1 is higher priority than Skill 2 and if you have to divert resources, prioritize maxing Skill 1 first. But all skills are still recommended to be level 10.",
            "Standard MG overload recommendation. Ammo isn't as necessary as like compared to other MGs due to her skill 1 reload buff that works well with Resilience but it is still nonetheless one of the better upgrade options."]
    },
    "d": {
        priority: "",
        collection_item_priority: "element_advantage",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "d_killer_wife": {
        priority: "High",
        collection_item_priority: "priority_stats",
        skills: ["4-10*", "7-10", "4-10"],
        overloads: {
            ideal: ["1-3x Max Ammo", "0-4x ATK", "0-4x Elemental Damage"],
            good: ["0-4x Charge Speed"],
            fine: [],
            passable: ["0-4x Charge Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["*Keep skill 1 low level if using without other Piercing Snipers, otherwise it's a high priority (similar to skill 2).",
            "At least 1x Max Ammo so you have enough ammo per full reload to do cooldown reduction. More Ammo helps if you want to fast charge some after shooting 8 full charges. (solo fast charger) Charge speed is quality of life to reduce charge cancels."]
    },
    "diesel": {
        priority: "",
        collection_item_priority: "treasure",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "dorothy": {
        priority: "High",
        collection_item_priority: "priority_rest",
        skills: ["10", "7-10", "7-10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage"],
            good: ["0-4x Crit Rate", "0-4x Crit Damage"],
            fine: [],
            passable: ["0-4x Hit Rate"],
            no: ["0x Max Ammo"]
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["Absolutely make sure to not get Max Ammo so she can keep casting skill 1. Roll out of it immediately if you get Ammo line.",
            "One of the supports that is also a DPS so getting ATK is good. Not having much DPS scaling options, Elemental Damage is one of the better options for her to increase her overall DPS."]
    },
    "drake": {
        priority: "Low",
        collection_item_priority: "useful_but_not_priority",
        skills: ["4-7", "4", "4"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage"],
            good: ["0-3x Max Ammo"],
            fine: [],
            passable: ["0-4x Crit Rate", "0-4x Hit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion, CubeName.Resilience, CubeName.Quantum],
            notes: "Quantum is good if your team has low burst energy generation (no SR/RL)"
        },
        notes: ["Standard DPS Lines for OL. Drake is more of a sub-DPS so there's less emphasis on having good lines with her. Settle with any half-decent lines.",
            "Elemental Damage to flex her on Bosses and put her in a higher priority consideration when team building. Hit Rate increases likelihood of hitting core damage or just hitting the boss in general which will make her worth choosing in case of Wind Bosses and synergize with Elemental Damage flex."]
    },
    "ein": {
        priority: "Medium",
        collection_item_priority: "not_rated",
        skills: ["7-10", "7-10", "4-10"],
        overloads: {
            ideal: ["4x Elemental Damage", "4x ATK", "1-2x Max Ammo"],
            good: ["0-3x Crit Rate", "0-3x Charge Speed"],
            fine: [],
            passable: ["0-3x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["Highest Priority: 4x Elemental Medium: 4x ATK, 1x Ammo, Low: Crit Rate, Charge Speed, 1x more Ammo Fast Charge Gameplay is more beneficial"]
    },
    "elegg": {
        priority: "Low",
        collection_item_priority: "useful_but_not_priority",
        skills: ["4+", "4 or 7+", "7-10"],
        overloads: {
            ideal: ["2-4x Max Ammo", "0-4x ATK", "0-4x Elemental Damage"],
            good: [],
            fine: [],
            passable: ["0-4x Hit Rate", "0-4x Crit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion, CubeName.Resilience],
            notes: "Resilience if low ammo OL"
        },
        notes: ["Main use of her is her distributed damage buff (burst). More Ammo lines increases her skill 1&2 uptime.",
            "Skill 1 upgrade barely saw an upgrade on Elegg's damage. Skill 2's overall effect is smaller for major DPS's who have decent attack buffs (especially during their burst). So skill 1 and skill 2's effects feel marginal increase compared to burst's overall increase."]
    },
    "emilia": {
        priority: "Low (PVE), High (PVP)",
        collection_item_priority: "pvp",
        skills: ["4-7(pve)-10(pvp)", "4-10", "4-10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage", "1-2x Max Ammo"],
            good: ["0-3x Charge Speed"],
            fine: ["0-4x Crit Rate", "0-4x Crit Damage"],
            passable: [],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion],
            notes: ""
        },
        notes: ["Aim for at least 1x Max Ammo (10+ total ammo) to work out well with Bastion. Charge speed is optional but good for PvP.",
            "Highest skill priority is skill 2 at max level for PvE (auto play). Can be low investment on all skills if only using her as a fast energy generation for PvP. But if using as main PVP DPS, then all other skills becomes a priority."]
    },
    "emma": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "epinel": {
        priority: "",
        collection_item_priority: "maybe_someday",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "eunhwa": {
        priority: "",
        collection_item_priority: "maybe_someday",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "exia": {
        priority: "Low to Medium (with Treasure)",
        collection_item_priority: "treasure",
        skills: ["4+", "7-10", "10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage"],
            good: ["0-4x Charge Speed"],
            fine: [],
            passable: ["0-4x Charge Damage"],
            no: ["0x Max Ammo"]
        },
        cube: {
            cube: [CubeName.Quantum, CubeName.Resilience],
            notes: "Quantum ideal when there's 2+ reload speed buffers and not phase 3. Resilience if only one reload speed buffer"
        },
        notes: ["Hidden Gem SubDPS + Support Electric. With good Elemental OLs she can be a threat to other Electric DPS units with her Treasure. Don't use her without Phase 2 Treasure. Phase 3 Treasure is more for luxury but not necessary to utilize her properly."]
    },
    "folkwang": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "frima": {
        priority: "Low to Medium (with Treasure)",
        collection_item_priority: "treasure",
        skills: ["4+", "7-10", "10"],
        overloads: {
            ideal: ["0-4x ATK", "0-4x Elemental Damage"],
            good: ["1-4x Max Ammo", "0-4x Charge Speed"],
            fine: [],
            passable: ["0-4x Charge Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["Pending"]
    },
    "guillotine": {
        priority: "Low",
        collection_item_priority: "maybe_someday",
        skills: ["4", "7-10", "4-10"],
        overloads: {
            ideal: ["4x Elemental Damage", "2-4x Max Ammo", "0-4x ATK"],
            good: ["0-4x Crit Damage", "0-4x Crit Rate"],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion, CubeName.Resilience],
            notes: "Resilience can be used with low ammo and reload speed buffer (Summer Anis/Privaty)"
        },
        notes: ["Standard DPS lines and MG setup. Similar to Scarlet notes"]
    },
    "guilty": {
        priority: "Low",
        collection_item_priority: "element_advantage",
        skills: ["7-10", "4+", "1-4"],
        overloads: {
            ideal: ["4x Elemental Damage", "4x ATK", "2-4x Max Ammo"],
            good: ["0-4x Crit Rate", "0-4x Crit Damage"],
            fine: [],
            passable: ["0-4x Hit Rate"],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion, CubeName.Resilience],
            notes: "Bastion with ammo OLs"
        },
        notes: ["Standard DPS OL lines. Elemental Damage to flex her on Bosses and put her in a higher priority consideration when team building. Crit Rate / Crit Damage for SG Crit team with Leona (with Guilty being off-burst DPS)"]
    },
    "harran": {
        priority: "",
        collection_item_priority: "maybe_someday",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "helm": {
        priority: "Medium",
        collection_item_priority: "useful_but_not_priority",
        skills: ["4-10", "4-10", "4-7"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage"],
            good: ["0-1x Max Ammo"],
            fine: [],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["Most of Helm's usage is for healing so low investment skill is enough and no OL. If you OL, ideally 0 Max Ammo lines for her skill 1 trigger but having 1 Max Ammo line is OK too for Manual situations where she's the sole energy charger (fast shooting). This does come in often enough to warrant an OK if it's just 1. Rest are standard DPS Lines for OL.",
            "Helm's skills can be low investment and do well. Can skill her up more if you use her a lot."]
    },
    "helm_aquamarine": {
        priority: "Low",
        collection_item_priority: "useful_but_not_priority",
        skills: ["1-4", "4-10", "1-4"],
        overloads: {
            ideal: ["4x Elemental Damage", "4x ATK"],
            good: ["0-4x Max Ammo"],
            fine: [],
            passable: ["0-4x Hit Rate", "0-4x Crit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Bastion, CubeName.Quantum],
            notes: "Quantum is useful especially if no fast charge units (SR/RL/SG)"
        },
        notes: ["Niche character against Electric enemies. Her primary use is skill 2 at low investment against Electric enemies and cooldown reduction (CDR). The CDR doesn't scale based off level investment so no need to invest on skill 1 that much. Might provide decent DPS but requires more skill investment on skill 1 and burst. Just skilling up skill 2 is typically enough for her."]
    },
    "isabel": {
        priority: "",
        collection_item_priority: "maybe_someday",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "jackal": {
        priority: "",
        collection_item_priority: "pvp",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "julia": {
        priority: "",
        collection_item_priority: "maybe_someday",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "kilo": {
        priority: "",
        collection_item_priority: "pvp",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "laplace": {
        priority: "Low to Medium (with Treasure)",
        collection_item_priority: "priority_treasure",
        skills: ["1-4", "4-10", "4-10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage", "0-4x Charge Speed", "0-2x Max Ammo"],
            good: [],
            fine: [],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage", "0-4x Charge Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["Laplace falls short from other DPS unless she has treasure but even then, she's currently lacking good synergistic buffers (aside from Rem).",
            "Charge Speed to trigger Full Charge effects as much as possible from skill 2. Max Ammo starts being useful with her Treasure now."]
    },
    "leona": {
        priority: "Low to Medium (with Tove)",
        collection_item_priority: "useful_but_not_priority",
        skills: ["4-10", "7", "4-10"],
        overloads: {
            ideal: ["0-4x ATK", "0-4x Elemental Damage", "1-4x Max Ammo"],
            good: ["0-4x Hit Rate", "0-4x Crit Rate", "0-4x Crit Damage"],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Bastion],
            notes: ""
        },
        notes: ["SG Comps Support. SG just has an inherent high attack so similar to Naga, she should do some decent damage if her shots hit. Ammo for skill 1 uptime, Hit Rate just good in general for SG, and Crit Rate/Crit Damage for non-core shots.",
            "Skill 2 at level 7 to support Maid Privaty but otherwise not largely necessary"]
    },
    "liter": {
        priority: "Highest",
        collection_item_priority: "priority_stats",
        skills: ["10", "4-7", "10"],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: ["0-4x ATK", "0-4x Elemental Damage", "0-4x Max Ammo", "0-4x Hit Rate", "0-4X DEF"],
            no: []
        },
        cube: {
            cube: [CubeName.Quantum],
            notes: ""
        },
        notes: ["OL lines are to help energy generation. Liter is commonly used for Campaign Progression so OL on her is actually not bad for CP Padding. However, you don't really need a particular line. Just get the OL for CP stats. Increase skill 2 for CP Padding."]
    },
    "ludmilla": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "ludmilla_winter_owner": {
        priority: "High",
        collection_item_priority: "priority_stats",
        skills: ["10", "4-10", "6-10"],
        overloads: {
            ideal: ["2-3× Max Ammo", "4× ATK", "4× Elemental Damage"],
            good: [],
            fine: ["0-4x Crit Rate", "0-4x Crit Damage"],
            passable: [],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion, CubeName.Resilience],
            notes: "Varying based on reload timing/team"
        },
        notes: ["The skill minimum is 10/4/6 to get the most value out of Ludmilla and anything more is for more damage.",
            "For Bastion or Resilience, test different teams out and whether she bursts 1st or 2nd on the B3 position to see a good sweet spot where she reloads while she has buff on. This is where having at least 2 Max Ammo line is ideal. Crit lines are there as complement after the other major lines are there (ammo/atk/ele)."]
    },
    "maiden": {
        priority: "",
        collection_item_priority: "pvp",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "makima": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "marciana": {
        priority: "",
        collection_item_priority: "useful_but_not_priority",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "mary": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "mary_bay_goddess": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "mast": {
        priority: "Low",
        collection_item_priority: "maybe_someday",
        skills: ["4-10", "4-7", "4-10"],
        overloads: {
            ideal: ["0-4x Critical Rate", "0-4x ATK", "0-4x Elemental Damage"],
            good: ["0-4x Max Ammo"],
            fine: [],
            passable: ["0-4x Crit Damage", "0-4x Hit Rate"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["Crit Rate, Max Ammo, and Resilience helps on keeping her DEF stacks uptime. Note that DEF% OL doesn't increase her defense debuff so you don't need to have it."]
    },
    "maxwell": {
        priority: "High",
        collection_item_priority: "high",
        skills: ["10", "1", "10"],
        overloads: {
            ideal: ["4x Elemental Damage", "0-4x ATK"],
            good: ["0-4x Charge Damage", "1-2x Max Ammo"],
            fine: ["0-4x Crit Rate", "0-4x Crit Damage"],
            passable: ["0-4x Charge Speed"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["ATK and Elemental Damage are the main targets. Aim at least one or both on each OL gear piece. The rest are secondary. ATK can be a bit lesser priority so she can act more as a buffer to other two DPS by making her have less ATK than the other two DPS.",
            "Max Ammo for Energy Generation Uptime. A necessity especially when she's the only unit that can be fast charged in your team. Charge Damage is fairly decent stat for Maxwell compared to other units mainly because she has high ATK multiplier during her burst which complements her having higher Charge Damage. Fast Shooting is her typical gameplay which means she uses up ammo fast so Max Ammo and Resilience Cube are necessary.",
            "Her Burst has high ATK scaling so investing on Crit Rate, Crit Damage, or Charge Damage actually isn't bad Charge Speed is for Energy Generation if you don't control her"]
    },
    "mica_snow_buddy": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "milk": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "miranda": {
        priority: "Low to Medium",
        collection_item_priority: "useful_but_not_priority",
        skills: ["1-4", "4-10", "4-10"],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: ["0-4x ATK", "0-4x Max Ammo", "0-4x Hit Rate", "0-4x Elemental Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Quantum, CubeName.Resilience, CubeName.Bastion],
            notes: "Use Quantum if you have a cooldown reduction unit, else use Resilience or Bastion"
        },
        notes: ["Not recommended to OL. Primarily here for skill suggestion. Primarily used for solo raid."]
    },
    "modernia": {
        priority: "High",
        collection_item_priority: "priority_stats",
        skills: ["10", "10", "7-10"],
        overloads: {
            ideal: ["0-1x Hit Rate", "2-4x Max Ammo", "3-4x ATK", "3-4x Elemental Damage"],
            good: ["0-4x Crit Rate"],
            fine: [],
            passable: ["0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion],
            notes: "Assault if no Blanc&Noir or no Hit Rate OL"
        },
        notes: ["Hit Rate allows you to have better uptime on her ATK buff but can be ignored if you use Blanc&Noir.",
            "If you rolled Max Ammo first on your first OL on her, it's fine to keep it that way and don't need to pursue having Hit Rate. Max Ammo Capacity improves Modernia's damage greatly and scales well with Bastion Cube. Having 2 is enough if you burst with her but ideally more is better specially since she is better when she doesn't burst. Switching to Bastion Level 3 (refund 2 bullets per 10 hit) is equivalent multiplier to 1.25x your bullets so at 1 OL where you have Hit Rate line but no Max Ammo, switching to using Bastion Cube is equivalent to having a 25% max ammo capacity (300+76 bullets). Bastion Level 7 (refund 3 bullets) is roughly 1.43x multiplier.",
            "Depending on your rolls, you might end up needing Hit Rate line by second or third OL gear. As a side note, at around 140% Max Ammo with Bastion Level 3 (or 105% Max Ammo with Bastion Level 7) which is essentially 900-1000 effective bullets, you can loop Modernia's burst without reloading when using a Cooldown Reduction Unit (e.g. Liter).",
            "Crit Rate balances well with Modernia having huge Crit Damage buff on herself"]
    },
    "moran": {
        priority: "",
        collection_item_priority: "pvp",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "naga": {
        priority: "High",
        collection_item_priority: "high",
        skills: ["10", "7-10", "7-10"],
        overloads: {
            ideal: ["0-4x ATK", "0-4x Elemental Damage"],
            good: ["1-4x Max Ammo"],
            fine: [],
            passable: ["0-4x Hit Rate", "0-4x Crit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Bastion, CubeName.Quantum],
            notes: ""
        },
        notes: ["*If you don't have Tia and have Crown, Naga's Burst can be put in a lower priority as Crown+Naga Combo doesn't need Naga to Burst.",
            "Naga's DPS is up there amongst supports (half of a main DPS). So investing in her overload is good. Her Burst also scales with ATK so overloading at least Helmet/Gloves/Armor is a must.",
            "You don't need to roll ATK% to increase the amount of her buff to teammates but ATK% is her BiS since she's a support and likely going to be used in many different boss elements.",
            "Max Ammo for heal/buff uptime. Everything else is just for more damage."]
    },
    "neon_blue_ocean": {
        priority: "",
        collection_item_priority: "maybe_someday",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "nero": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "nihilister": {
        priority: "Zero",
        collection_item_priority: "maybe_someday",
        skills: ["4-10", "4-7", "4-6-9"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage", "2-4x Charge Speed", "0-4x Max Ammo"],
            good: ["0-4x Charge Damage"],
            fine: [],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Bastion, CubeName.Adjutant],
            notes: ""
        },
        notes: ["An outdated unit. Don't upgrade now in this day and age.",
            "There's no stacks to upkeep on Nihilister but she still needs full charge shots so Charge Speed is necessary to have high uptime of skill 1 which is where a bigger portion of her kit and high scaling is emphasized.",
            "Unlike other DPS, Nihilister is more used on campaign or other mob stages so there's less importance on Elemental Damage and also there's less priority on upgrading skills (for bossing). But if you choose to make her be a mainstay in your campaign pushing, then upgrading skills is a must in order to pad CP. Note that there's ammo breakpoints at burst level 6 and level 9.",
            "A big warning beforehand that due to lack of resources union raid chips, it'll take a while before we get duplicates of her so she will be at a disadvantage on CP for campaign pushing."]
    },
    "noah": {
        priority: "",
        collection_item_priority: "pvp",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "noir": {
        priority: "High (with Blanc)",
        collection_item_priority: "high",
        skills: ["10", "5 or 9+*", "4-7"],
        overloads: {
            ideal: ["4x Elemental Damage"],
            good: ["0-4x ATK"],
            fine: ["0-4x Max Ammo"],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage", "0-4x Hit Rate"],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion, CubeName.Quantum],
            notes: "Quantum is good if your team has low burst energy generation (no SR/RL)"
        },
        notes: ["Noir's reload speed is so fast that Resilience is not really that necessary on her.",
            "Skill 2 should be either level 5 or level 9 to get the bonus max ammo round threshold. Leveling Up Burst is primarily if you plan to use her on SG teams.",
            "Sometimes ATK% might mess with buffs for other DPS units (e.g. Maxwell buffs highest 2 attack, Noir could end up being one of the receivers for this due to her typing as an Attacker). So careful consideration of her ATK% is something to pay attention to.",
            "Crit Stats and Hit Rate are generally helpful for SG."]
    },
    "noise": {
        priority: "Low",
        collection_item_priority: "pvp",
        skills: ["4+", "4+", "4+"],
        overloads: {
            ideal: ["0-4x Charge Speed", "0-4x Max Ammo", "0-4x DEF"],
            good: [],
            fine: [],
            passable: ["0-4x ATK", "0-4x Elemental Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Quantum, CubeName.Resilience, CubeName.Adjutant],
            notes: ""
        },
        notes: ["Not Recommended to OL unless you have spare resources for PVP. Primarily here for skill suggestion.",
            "Tank/Taunt/Heal unit so she needs these OL stats. Don't need a lot of investment but if you use her on PvP and want to be active on it, you can level skills up more."]
    },
    "novel": {
        priority: "Low",
        collection_item_priority: "useful_but_not_priority",
        skills: ["1-4", "1-4", "7-10"],
        overloads: {
            ideal: ["2-4x Max Ammo"],
            good: [],
            fine: [],
            passable: ["0-4x ATK", "0-4x Elemental Damage", "0-4x Hit Rate"],
            no: []
        },
        cube: {
            cube: [CubeName.Quantum, CubeName.Bastion, CubeName.Resilience],
            notes: "Quantum is useful especially if no fast charge units (SR/RL/SG). Since she can maintain her stacks with or without Bastion/Resilience, Quantum is a good default cube"
        },
        notes: ["Her burst needs high investment before you start seeing huge difference. You can make her get max stacks (within 30 seconds) without reloading with 193%+ Max Ammo and Bastion"]
    },
    "pepper": {
        priority: "Low",
        collection_item_priority: "pvp",
        skills: ["4-7", "1-4", "4-10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage"],
            good: [],
            fine: [],
            passable: ["0-4x Hit Rate", "0-4x Crit Rate", "0-4x Crit Damage"],
            no: ["0x Max Ammo"]
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["Pepper could dish out decent damage so having DPS lines is good on her. Make sure she doesn't get Max Ammo so she can keep healing with skill 1. Her heals might need more investment to fully support the team sometimes since she's not as good as Rapunzel."]
    },
    "poli": {
        priority: "Low",
        collection_item_priority: "ignore_for_now",
        skills: ["4+", "4", "4-10"],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: ["0-4x ATK", "0-4x Max Ammo", "0-4x Hit Rate"],
            no: []
        },
        cube: {
            cube: [CubeName.Quantum, CubeName.Bastion, CubeName.Resilience],
            notes: ""
        },
        notes: ["Not Recommended to OL. Primarily here for skill suggestion.",
            "Skills have low scaling so you can stay at lower levels. Cube options are for skill 1 uptime and energy generation."]
    },
    "power": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "privaty": {
        priority: "Medium",
        collection_item_priority: "useful_but_not_priority",
        skills: ["7-10", "1-4", "1-4"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage"],
            good: [],
            fine: [],
            passable: ["0-4x Hit Rate", "0-4x Crit Rate", "0-4x Crit Damage"],
            no: ["0x Max Ammo"]
        },
        cube: {
            cube: [CubeName.Resilience],
            notes: ""
        },
        notes: ["Privaty's low priority in a sense that she's fine being 7/1/1 on skill investment and no OL. OL is not necessary to make the best use of her (ATK Buffer/ Ammo Reduction / Stun).",
            "Don't have Max Ammo lines for her skill 2 trigger. Rest are standard DPS Lines for OL. Privaty is primarily used for her buff skill 1. Her damage is not typically notable so rerolling her OL isn't a big priority."]
    },
    "privaty_unkind_maid": {
        priority: "Low to Medium (with Tove)",
        collection_item_priority: "priority_solo_raid",
        skills: ["7-10", "1-4* or 7-10", "7-10"],
        overloads: {
            ideal: ["1-2x Max Ammo", "4x Elemental Damage", "4x ATK"],
            good: ["0-3x Crit Rate", "0-3x Crit Damage"],
            fine: [],
            passable: ["0-3x Hit Rate"],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion, CubeName.Resilience],
            notes: "Bastion primarily, Resilience OK with Summer Anis"
        },
        notes: ["At least 1x Max Ammo to allow proper ramping up of accuracy prior to burst and have enough ammo in the duration of full burst. 2 is good QOL for more consistency.",
            "Skills are evenly good if you have at least either Tove or Leona. *If you don't have both, then skill 2 can be less priority. If you have at least one, then all skills do increase damage similarly so leveling them evenly is good"]
    },
    "quency": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "quiry": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "rapunzel": {
        priority: "Low",
        collection_item_priority: "pvp",
        skills: ["4-7", "4", "4"],
        overloads: {
            ideal: ["0-4x Charge Speed", "0-4x Max Ammo"],
            good: [],
            fine: [],
            passable: ["0-4x ATK", "0-4X DEF", "0-4x Elemental Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Vigor, CubeName.Quantum, CubeName.Resilience],
            notes: ""
        },
        notes: ["Ammo and Charge Speed for less gap between heals. Don't need a lot of investment for heals. If you end up needing more heals, it's usually a level problem. OL is useful for Campaign pushing or PVP."]
    },
    "red_hood": {
        priority: "Highest",
        collection_item_priority: "highest",
        skills: ["10", "10", "10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage", "0-4x Charge Speed"],
            good: ["1x Max Ammo"],
            fine: ["additional 0-3x Max Ammo", "0-4x Charge Damage"],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Bastion],
            notes: ""
        },
        notes: ["Burst highest priority for most damage. Then Skill 1, and then Skill 2.",
            "More Charge Speed for more damage. Playstyle might change depending on number of charge speed vs ammo. With more Charge Speed, it's better to full charge shots rather than quick firing 1x Ammo is good quality of life for quick firing to help with burst generation when manual using her and she's the sole sniper/rocket launcher. Any more is nice but not extremely necessary."]
    },
    "rei": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "rem": {
        priority: "Low",
        collection_item_priority: "element_advantage",
        skills: ["7-10", "4+ (low priority)", "4-10"],
        overloads: {
            ideal: ["2-4x Max Ammo", "4x Elemental Damage", "4x ATK"],
            good: ["0-4x Crit Damage"],
            fine: [],
            passable: ["0-4x Crit Rate"],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion, CubeName.Resilience],
            notes: "Resilience if 0x ammo OL (with Privaty)"
        },
        notes: ["Strong DPS+Healer. Good to have DPS OL lines for her. Buff for rocket launcher is a bonus (currently).",
            "Aim for minimum of 2x Max Ammo. Ideally 3x. After 2x Max Ammo, you can balance out obtaining Max Ammo & Atk OL lines. Elemental Damage also to help out prioritizing Elemental Team choices for Union Raid. Max Ammo is extremely good for Machine guns.",
            "Max out skill 1 as high priority. Keeping burst at level 7 is a good middle ground while we wait for better & new rocket launcher units to buff. Upgrade skill 2 last (after maxing out skill 1 and burst and upgrading gears+getting optimal overload) if you see the healing is not enough."]
    },
    "rosanna": {
        priority: "",
        collection_item_priority: "pvp",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "rosanna_chic_ocean": {
        priority: "Medium (with Liter)",
        collection_item_priority: "not_rated",
        skills: ["4++", "4+", "10"],
        overloads: {
            ideal: ["0-4x ATK", "0-4x Elemental Damage"],
            good: [],
            fine: [],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage", "0-4x Max Ammo"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Bastion, CubeName.Quantum],
            notes: "(highest ATK)"
        },
        notes: ["OL is not necessary due to low value scaling of skill 1 buff. Budget can stay at level 4 on both skill 1 and skill 2 to save materials. Skill 1 > Skill 2 if you have to select. Burst highest priority."]
    },
    "rupee": {
        priority: "Zero",
        collection_item_priority: "maybe_someday",
        skills: ["4", "4-7", "4-10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage", "2-4x Max Ammo"],
            good: [],
            fine: [],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage", "0-4x Hit Rate"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Bastion],
            notes: ""
        },
        notes: ["An outdated unit. Don't upgrade now in this day and age.",
            "Standard DPS OL lines. Her skill 1's crit scaling is bad so it's not enough to skew higher priority on crit rate and crit damage. Elemental Damage to flex her on Bosses and put her in a higher priority consideration when team building."]
    },
    "rupee_winter_shopper": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "sakura": {
        priority: "",
        collection_item_priority: "maybe_someday",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "sakura_bloom_in_summer": {
        priority: "Medium",
        collection_item_priority: "not_rated",
        skills: ["4-5", "4-10", "7-10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage"],
            good: [],
            fine: ["0-4x Crit Rate", "0-4x Crit Damage"],
            passable: ["0-4x Max Ammo"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Bastion, CubeName.Quantum],
            notes: "(highest ATK)"
        },
        notes: ["Can keep skill 1 to around level 4~5 for buff uptime (but requires 2 parts destruction every 30 seconds). Higher level for skill 1 is more for flexibility for other bosses. Burst gives most damage and skill 2 also give decent damage increase.",
            "ATK & Ele as highest priority for OL and 3rd line is extremely low priority."]
    },
    "scarlet": {
        priority: "Medium",
        collection_item_priority: "priority_rest",
        skills: ["10", "4+", "7-10"],
        overloads: {
            ideal: ["3-4x Max Ammo", "4x Elemental Damage", "0-4x ATK"],
            good: ["0-4x Crit Damage", "0-4x Crit Rate"],
            fine: ["0-4x Hit Rate"],
            passable: [],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Bastion],
            notes: "Resilience synregizes better with Summer Anis / Privaty and also makes you get caught off guard less during boss mechanics (QTE's)"
        },
        notes: ["Skill 2 can be higher if you're big on PVP.",
            "Max Ammo Capacity improves her damage the greatest. Having 2 lines of Ammo is OK if you run her with Summer Anis. More lines is good if you don't run with Summer Anis.",
            "Scarlet has high ATK multiplier from her skill, so it's not as necessary (it's still the third best in slot). Thus Elemental Damage is higher priority than ATK for her if you have to choose between the two. But both are still good for her.",
            "Crit Damage balances well with Scarlet having Crit Rate buff on herself Crit Rate is still a good line since Scarlet is not always in a low HP status so she may not have the self Crit Rate buff anyways Scarlet relies a lot on auto attack and thus having higher Hit Rate to be more likely to do core shots increases her damage."]
    },
    "scarlet_black_shadow": {
        priority: "Highest",
        collection_item_priority: "highest",
        skills: ["10", "7", "10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage", "1x Max Ammo", "1-3x Charge Speed"],
            good: ["0-4x Charge Damage", "0-4x Crit Rate"],
            fine: [],
            passable: ["0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion, CubeName.Onslaught],
            notes: "Bastion primarily, Onslaught ig you can handle infinite ammo"
        },
        notes: ["1x Max Ammo is good to be able to use SBS in variety of teams but if you're just using her with bunnies, then having 0 Max Ammo is fine.",
            "More Charge Speed allows more hits during full burst which allows more skill 1 proc. With Alice, you can get 17 shots (with high probability) and getting 1 Charge Speed line can get it to 18 shots (more consistently).",
            "Charge Damage and Crit Rate are roughly the same. Crit is not bad because her skill 1 procs don't get core damage bonus and doesn't get diluted with the formula in the multiplier."]
    },
    "signal": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "sin": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "snow_white": {
        priority: "Low to Medium",
        collection_item_priority: "priority_solo_raid",
        skills: ["4", "4-10", "10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage"],
            good: ["0-4x Crit Rate", "0-3x Charge Speed"],
            fine: [],
            passable: ["0-2x Max Ammo", "0-4x Crit Damage", "0-4x Charge Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Bastion, CubeName.Adjutant],
            notes: "Any works. Highest level for ATK stat stick or Elemental Damage Bonus sub skills. Resilience/Bastion to help with Energy Generation and shooting and skill uptime. Adjutant if you plan to use her with Liter and have no Charge Speed on her overloads."
        },
        notes: ["ATK and Elemental Damage are the main targets. Aim at least one or both on each OL gear piece. The rest are secondary.",
            "Crit Rate is a huge Quality of Life stat for Snow White; while you can just keep retrying for crit bursts to happen, it overall saves you time and more consistency on your runs.",
            "Charge Speed is primarily important when use Snow White with Liter, otherwise not necessary. You need about 2 Charge Speed lines + Maxwell with extremely fast activation between Liter and Snow White Burst to reach 1000%. About 3-4 if you want it to be comfy. Each 1% Charge Speed adds about 10% charge on SW Burst speed.",
            "Charge Damage sucks for her but I wouldn't sweat it as a 3rd line (it's additive to the 1000% charge bar of her burst). Max Ammo helps with Energy Generation and boss mechanics quality of life but overall not the biggest necessity."]
    },
    "snow_white_innocent_days": {
        priority: "",
        collection_item_priority: "maybe_someday",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "soda": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "soda_twinkling_bunny": {
        priority: "Medium (with Tove)",
        collection_item_priority: "priority_solo_raid",
        skills: ["(4 or 7)-10", "7-10", "(4 or 7)-10"],
        overloads: {
            ideal: ["1-2x Max Ammo", "4x Elemental Damage", "4x ATK"],
            good: ["0-3x Crit Rate", "0-3x Hit Rate", "0-3x Crit Damage"],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion],
            notes: ""
        },
        notes: ["for budget, keeping skill 1 and burst at level 4 is okay if you have Tove. Without Tove, it's recommended to get skill 1 and burst at level 7. Highest Priority is Skill 2 and biggest damage increase."]
    },
    "soline": {
        priority: "",
        collection_item_priority: "element_advantage",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "sugar": {
        priority: "Low",
        collection_item_priority: "element_advantage",
        skills: ["4", "4-10", "7-10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage", "1-3x Max Ammo", "0-4x Hit Rate"],
            good: ["0-4x Crit Damage", "0-4x Crit Rate"],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion, CubeName.Resilience],
            notes: "Bastion > Resilience, With enough Ammo or Manual Play, Bastion can allow you to last the entire duration of Full Burst without reloading"
        },
        notes: ["Max Ammo so that you don't reload during her burst. Hit Rate takes advantage of synergy with her burst and allows you to reach a high enough hit rate to do core shots as a shotgun with synergy on other support units.",
            "Crit Damage synergizes with her skill 2 self crit buff. Crit Rate is there for the off chance of skill 1 triggering, but more so due to you likely rolling Crit Damage also on other overload lines."]
    },
    "tia": {
        priority: "High (with Naga)",
        collection_item_priority: "useful_but_not_priority",
        skills: ["10", "4", "4"],
        overloads: {
            ideal: ["0-4x ATK", "0-4x Elemental Damage", "0-4x Max Ammo", "0-4x DEF"],
            good: ["0-4x Charge Speed"],
            fine: [],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Quantum],
            notes: ""
        },
        notes: ["Not necessary to OL but worth considering for campaign pushing CP Padding. Just roll gears once and call it a day. Other units better off using rocks.",
            "All the lines are optional if we're being very specific about it. ATK for more personal heal. DEF could be argued it's not necessary at high end campaign, Max Ammo or Charge Speed could be argued that she will taunt more often and causing herself to heal. But you could also use the Max Ammo for better energy generation."]
    },
    "tove": {
        priority: "Medium (with Bunny Soda)",
        collection_item_priority: "useful_but_not_priority",
        skills: ["9", "4 or 7 or 10", "4-10"],
        overloads: {
            ideal: ["2-4x Max Ammo", "0-4x ATK", "0-4x Elemental Damage"],
            good: ["0-4x Hit Rate"],
            fine: [],
            passable: ["0-4x Crit Rate", "0-4x Crit Damage"],
            no: []
        },
        cube: {
            cube: [CubeName.Bastion],
            notes: ""
        },
        notes: ["SG Comps Support. She outperforms Liter in an SG team even without CDR.",
            "For Skill 2, breakpoints for attack speed for SGs are level 4, level 7 or level 10. Don't keep the skills in between.",
            "More Ammo is more likelihood of uptime of buffs. With about 200% Ammo (3 lines of Tier 11 Max Ammo), you roughly reload once per minute. At around 275% ammo, you could do a full 3 minute run without reloading. I would at least aim for 100% ammo.",
            "Upgrade burst as high as wanted. Higher level for more damage."]
    },
    "trony": {
        priority: "",
        collection_item_priority: "not_rated",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "vesti": {
        priority: "",
        collection_item_priority: "maybe_someday",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "viper": {
        priority: "",
        collection_item_priority: "treasure",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "volume": {
        priority: "Medium",
        collection_item_priority: "useful_but_not_priority",
        skills: ["1-4", "4-7-10", "4-7-10"],
        overloads: {
            ideal: ["4x ATK", "4x Elemental Damage", "0-4x Crit Rate", "4x Crit Damage"],
            good: ["0-4x Max Ammo"],
            fine: [],
            passable: ["0-4x Hit Rate"],
            no: []
        },
        cube: {
            cube: [CubeName.Quantum],
            notes: ""
        },
        notes: ["Not Recommended to OL. Primarily here for skill suggestion.",
            "Can push s2 and burst to level 10 for top 50 Solo Raid Rankers. If nothing else to spend on and want to minmax, more competitive people stop at level 7. Otherwise works just fine at 1/4/4 and is mainly used for her cooldown reduction."]
    },
    "yan": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "yulha": {
        priority: "Low to Medium",
        collection_item_priority: "useful_but_not_priority",
        skills: ["1", "10", "1"],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: ["1x Max Ammo"],
            no: []
        },
        cube: {
            cube: [CubeName.Resilience, CubeName.Quantum],
            notes: "Resilience if manual, Quantum if auto"
        },
        notes: ["Skill recommendation for snow white support for solo or union raid.",
            "Max Ammo to help with fast charging in situations where she's the sole SR/RL in the team (e.g. No Dolla / Helm)"]
    },
    "yuni": {
        priority: "",
        collection_item_priority: "ignore_for_now",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "zwei": {
        priority: "",
        collection_item_priority: "not_rated",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "anis": {
        priority: "",
        collection_item_priority: "pvp",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "product_08": {
        priority: "",
        collection_item_priority: "dont_bother",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    },
    "template": {
        priority: "",
        collection_item_priority: "",
        skills: ["", "", ""],
        overloads: {
            ideal: [],
            good: [],
            fine: [],
            passable: [],
            no: []
        },
        cube: {
            cube: [],
            notes: ""
        },
        notes: [""]
    }
}