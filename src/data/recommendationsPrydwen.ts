import { CubeName, RecommendationsPrydwen } from "../types";

export const recommendation_data_prydwen: {[nikke: string]: RecommendationsPrydwen} = {
    "2b": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "S",
            "boss_adds": "A",
            "pvp": "SS"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/7/7 → 7/10/10 (→ 10/10/10)",
            "pvp": "1/1/1 → 4/7/7 → 4/10/10 (→ 7/10/10)"
        }, "overloads": {
            "priority": "Medium",
            "essential": [],
            "ideal": ["4x Elemental Damage", "4x Critical Rate", "4x Critical Damage"],
            "passable": ["4x ATK"],
            "notes": "Niche for Fire Weak Bosses in Solo Raids, benefits greatly from Crit Rate and Crit Damage since ATK is extremely diluted. 2B is also used in PvP as a nuker, where elemental damage can allow her to nuke high hp Wind Element units."
        }, "cube": {
            "pre_overload": [CubeName.Vigor],
            "post_overload": [CubeName.Vigor],
            "notes": "After the introduction of Vigor Cube (Increased Max HP), this cube is the best for her. Put it if you plan to invest in 2B."
        }
    }, "a2": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "S",
            "boss_solo": "A",
            "boss_adds": "S",
            "pvp": "S"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/4/4 → 7/7/7 (→ 10/10/10)",
            "pvp": "1/1/1 → 4/1/4 → 7/4/7 (→ 10/4/10)"
        }, "overloads": {
            "priority": "Low",
            "essential": [],
            "ideal": ["4x Elemental Damage", "4x ATK", "4x Charge Speed"],
            "passable": ["1-2x Max Ammo"],
            "notes": "Niche for Bosses with parts in Solo Raids, can also be used in Campaign. A2 is also used in PvP, mostly for Burst Generation, where Charge Speed OL can help her greatly."
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Adjutant],
            "post_overload": [CubeName.Resilience, CubeName.Adjutant],
            "notes": "Resilience is preferred if no Max Ammo OL. Otherwise, just use your highest-level cube for more attack and elemental damage bonuses. Adjutant might actually be the best in slot but more testing needs to be done."
        }
    }, "ade": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "B",
            "boss_solo": "B",
            "boss_adds": "B",
            "pvp": "C"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 1/5/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": ["4x Max Ammo"],
            "passable": [],
            "notes": "Cleanse Mechanic can come into play in Tribe Tower"
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Both Bastion and Resilience would serve her well for PvE purposes for more reliable Reset Time (Skill 2) stacking. Bastion > Resilience for Ade."
        }
    }, "admi": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "B",
            "boss_adds": "B",
            "pvp": "C"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 1/1/5",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Onslaught],
            "post_overload": [CubeName.Resilience, CubeName.Onslaught],
            "notes": "Admi doesn't really have anything in her kit that warrants the use of other than the generic damage increase cubes for an SR wielder."
        }
    }, "alice": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "SSS",
            "boss_solo": "SSS",
            "boss_adds": "SSS",
            "pvp": "SS"
        }, "skills": {
            "priority": "Meta (Late Game)",
            "pve": "1/1/1 → 10/4/10",
            "pvp": "1/1/1 → 10/4/10"
        }, "overloads": {
            "priority": "Meta",
            "essential": ["2x Charge Speed", "2x Max Ammo"],
            "ideal": ["3-4x ATK", "1x Max Ammo", "3-4x Elemental Damage"],
            "passable": [],
            "notes": "Ideally reach >99% Charge Speed in total from her Skill1 + Burst Skill + OL rolls. Alice reloads a lot due to her high rate of fire during her burst, and to minimise this problem we need Max Ammo OL on her. If you use Alice in infinite reload comps such as one with Crown+Privaty or with Blanc+Noir, 2 Ammo rolls can suffice. However, if you plan to use Alice elsewhere, it is ideal to have 3 Ammo Rolls for Alice."
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Bastion],
            "notes": "Bastion and Resilience provide quite the same \"effective\" ammo increased, so you just need to put the highest level cube on her. After overload, when you have enough ammo OL, she prefers bastion over resilience."
        }
    }, "alice_wonderland_bunny": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "SS",
            "boss_solo": "SS",
            "boss_adds": "S",
            "pvp": "C"
        }, "skills": {
            "priority": "High",
            "pve": "1/1/1 → 4/4/4 → 7/7/4 (→ 7/10/4)",
            "pvp": "1/1/1 → 4/4/4"
        }, "overloads": {
            "priority": "Medium (PVE)",
            "essential": [],
            "ideal": ["1-3x Max Ammo"],
            "passable": [],
            "notes": "Ammo OL for Alice helps increases uptime/consistency of Tove's S2."
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Bastion theoretically has slightly more uptime than Resilience because of reload animation delay (built-in on all characters), but Resilience will also do just fine."
        }
    }, "anis_sparkling_summer": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "S",
            "boss_solo": "SS",
            "boss_adds": "SS",
            "pvp": "SSS"
        }, "skills": {
            "priority": "High",
            "pve": "4/4/5 → 7/7/9 → 10/10/9 (→ 10/10/10)",
            "pvp": "4/4/5 → 7/7/9 → 10/10/9"
        }, "overloads": {
            "priority": "Meta",
            "essential": ["MUST NOT HAVE MAX AMMO"],
            "ideal": ["4x Elemental Damage", "4x ATK"],
            "passable": ["4x Hit Rate", "4x Crit Rate", "4x Crit Damage"],
            "notes": "Anis: Sparkling Summer has last bullet mechanics, which is why she should NOT have Max Ammo OL on any piece no matter what! Anis is also a PvP unit, where ATK is better than Elemental Damage."
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Resilience is the best cube you can use on Summer Anis."
        }
    }, "anne_miracle_fairy": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "B",
            "boss_adds": "B",
            "pvp": "SS"
        }, "skills": {
            "priority": "PVP",
            "pve": "1/1/1 → 4/4/4 (→ 4/4/7)",
            "pvp": "1/1/1 → 4/4/4 → 4/4/7 (→ 4/4/10)"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": ["4x Charge Speed"],
            "passable": ["4x ATK", "4x Elemental Damage", "4x DEF"],
            "notes": "CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Adjutant, CubeName.Resilience, CubeName.Wingman],
            "post_overload": [CubeName.Adjutant, CubeName.Resilience, CubeName.Wingman],
            "notes": "XAnee cube of choice depends on how you use her - if you can make sure she will stay above 90% HP for her S2 to trigger, use Adjutant Cube on her. Otherwise, go with the generic Resilience or Wingman Cubes."
        }
    }, "aria": {
        "ratings": {
            "story_low_deficit": "D",
            "story_high_deficit": "C",
            "boss_solo": "B",
            "boss_adds": "C",
            "pvp": "D"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Despite being an MG user, Aria wants to empty her mag as fast as possible, so the usual MG Cubes aren't good for her. That's why Resilience Cube with the reload speed boost is what works on her best."
        }
    }, "asuka_shikinami_langley": {
        ratings: {
            story_low_deficit: "SS",
            story_high_deficit: "SS",
            boss_solo: "SSS",
            boss_adds: "SSS",
            pvp: "A"
        }, skills: {
            priority: "Meta",
            pve: "1/1/1 → 4/4/7 → 7/7/7 (→ 10/10/10)",
            pvp: "1/1/1 → 4/4/7 "
        }, overloads: {
            priority: "Meta",
            essential: ["2-3x Max Ammo"],
            ideal: ["4x Elemental DMG", "1-2x Max Ammo", "4x ATK"],
            passable: [],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience, CubeName.Bastion],
            post_overload: [CubeName.Resilience, CubeName.Bastion],
            notes: "With Reload Speed buffers, opt for Resilience. Without, use Bastion (Lv 7+ highly recommended)."
        }
    }, "bay": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "C",
            "boss_solo": "B",
            "boss_adds": "C",
            "pvp": "S"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": ["4x Charge Speed"],
            "passable": ["4x ATK", "4x Elemental Damage", "4x DEF"],
            "notes": "CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Vigor],
            "post_overload": [CubeName.Vigor],
            "notes": "Since Bay is a Defender with damage share effect, the only cube for her will be Vigor - which increases her Max HP, allowing her to soak even more damage."
        }
    }, "biscuit": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "S",
            "boss_adds": "A",
            "pvp": "SSS"
        }, "skills": {
            "priority": "Medium",
            "pve": "1/1/1 → 4/4/4 → 4/4/7 (→ 4/4/10)",
            "pvp": "1/1/1 → 4/4/4 → 4/4/7 (→ 4/4/10)"
        }, "overloads": {
            "priority": "Medium",
            "essential": ["1-2x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK", "2-3x Charge Speed"],
            "passable": [],
            "notes": "Max Ammo rolls are required for Burst Gen. Biscuit is also a unit for PvP, hence she can benefit greatly from Charge Speed OL. Only OL if you plan to use her with S.Anis in Raids or for PvP"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Vigor, CubeName.Adjutant],
            "post_overload": [CubeName.Resilience, CubeName.Vigor, CubeName.Adjutant],
            "notes": "For PVE, Resilience Cube are the best on Biscuit because she tends to go with Privaty-Sanis team. For PVP, you really want the Adjutant Cube as there you race to use your Bursts before the enemy. Or it can even be a Vigor to stay alive from Scarlet's burst."
        }
    }, "blanc": {
        "ratings": {
            "story_low_deficit": "SSS",
            "story_high_deficit": "SS",
            "boss_solo": "SS",
            "boss_adds": "SS",
            "pvp": "SS"
        }, "skills": {
            "priority": "Meta",
            "pve": "1/1/4 → 4/4/7 → 4/4/10",
            "pvp": "1/1/4 → 4/4/7 → 4/4/10"
        }, "overloads": {
            "priority": "Medium",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Vigor, CubeName.Bastion],
            "post_overload": [CubeName.Resilience, CubeName.Vigor, CubeName.Bastion],
            "notes": "Vigor cube helps her healing ability. Both Ammo Refill and Reload Speed help her with Skill 1 uptime."
        }
    }, "brid": {
        "ratings": {
            "story_low_deficit": "D",
            "story_high_deficit": "D",
            "boss_solo": "D",
            "boss_adds": "D",
            "pvp": "B"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Resilience and Bastion Cubes work best on most AR wielders and she isn't an exception."
        }
    }, "centi": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "S",
            "boss_solo": "B",
            "boss_adds": "S",
            "pvp": "SS"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4"
        }, "overloads": {
            "priority": "Medium (PVP)",
            "essential": [],
            "ideal": ["4x Charge Speed", "4x Elemental Damage", "4x ATK"],
            "passable": ["4x DEF"],
            "notes": "CP Padding. Elemental damage is highly appreciated on PvP Iron Units."
        }, "cube": {
            "pre_overload": [CubeName.Quantum],
            "post_overload": [CubeName.Quantum],
            "notes": "Centi's position in both PVE and PVP is Burst Gen Battery (in PVE she has a very good shield too). Hence allowing her to shoot as much as you can first round matters the most in PVE. For PVP, she's one of the Holy Trinity that requires Quantum cube to push your Burst timing faster."
        }
    }, "clay": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "D",
            "boss_solo": "B",
            "boss_adds": "B",
            "pvp": "C"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Depends. Without Max Ammo OL, Resilience is better than Bastion because that will enable her to land 180 shots within 10s during Full Burst (for 3 stacks of S1), but there is barely any leeway. Bastion would only work if she never reloads during Full Burst at all, which requires Max Ammo and preemptive reloading."
        }
    }, "cocoa": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "B",
            "boss_adds": "C",
            "pvp": "C"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Adjutant, CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Adjutant, CubeName.Resilience, CubeName.Bastion],
            "notes": "Adjutant Cube is the clear winner for Cocoa as it will let her stack the S2 buff on herself faster, but Resiliance Cube with the Reload Speed boost also works well on her."
        }
    }, "crow": {
        "ratings": {
            "story_low_deficit": "D",
            "story_high_deficit": "D",
            "boss_solo": "D",
            "boss_adds": "D",
            "pvp": "C"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Last bullet abusing SMG characters really just care about reload speed."
        }
    }, "crown": {
        "ratings": {
            "story_low_deficit": "SSS",
            "story_high_deficit": "SSS",
            "boss_solo": "SSS",
            "boss_adds": "SSS",
            "pvp": "B"
        }, "skills": {
            "priority": "Meta",
            "pve": "4/4/4 → 7/7/7 → 10/10/10",
            "pvp": "4/4/4 → 7/4/7 → 10/4/10"
        }, "overloads": {
            "priority": "High",
            "essential": [],
            "ideal": ["2x Max Ammo", "4x Elemental Damage", "4x ATK"],
            "passable": ["2x Max Ammo"],
            "notes": "Her reload speed eases off pressure of needing Ammo"
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Since she is an MG, Bastion would always be good, but don't be fooled! Crown also grants herself Reload Speed, so Resilience is actually very strong on her due to the lack of winding up. Always use Resilience cube on Crown!"
        }
    }, "d": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "C"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Assault, CubeName.Resilience],
            "post_overload": [CubeName.Assault, CubeName.Resilience],
            "notes": "Assault Cube helps SMG wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "d_killer_wife": {
        "ratings": {
            "story_low_deficit": "SSS",
            "story_high_deficit": "SSS",
            "boss_solo": "SSS",
            "boss_adds": "SSS",
            "pvp": "C"
        }, "skills": {
            "priority": "Meta",
            "pve": "4/4/4 → 4/7/4 → 7/7/4 (→ 10/10/7)",
            "pvp": "4/4/4"
        }, "overloads": {
            "priority": "Medium (PVE)",
            "essential": ["1x Max Ammo"],
            "ideal": [],
            "passable": [],
            "notes": "1 Ammo helps stabilise her CDR rotations, since it takes 8 ammo for one CDR proc from her Skill 2 and she has 6 base ammo."
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Resilience, CubeName.Bastion],
            "notes": "With a minimum of one Max Ammo line, Resilience is best in helping make S2 triggers more uniform. Bastion can be used as an alternative if slots are full or if you have tons of Max Ammo. With no Max Ammo lines, however, you can select Wingman (min. level 7). Not 7 yet? Use Resilience for now."
        }
    }, "diesel": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "A",
            "boss_solo": "B",
            "boss_adds": "A",
            "pvp": "B"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 4/4/4 (→ 4/10/4)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Low (PVE)",
            "essential": [],
            "ideal": ["3-4x Max Ammo"],
            "passable": [],
            "notes": "Ammo buffer for MG Units in Raids. Diesel needs Bastion Cube lv 7 + 180% Ammo Bonus from Overload gear to ensure she never reloads. If the MGs running with her also have Bastion Cube lv 7 + 180% Ammo on their Overload gear, they also will never reload!"
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience, CubeName.Wingman],
            "post_overload": [CubeName.Bastion, CubeName.Resilience, CubeName.Wingman],
            "notes": "MG goes brrr. Bastion Cube will allow her to shoot for longer, but if you don't have it upgraded, Resilience or Wingman Cubes are a better choice."
        },
        "with_treasure": {
            "ratings": {
                "story_low_deficit": "S",
                "story_high_deficit": "A",
                "boss_solo": "S",
                "boss_adds": "S",
                "pvp": "B"
            }, "skills": {
                "priority": "Medium",
                "pve": "1/1/1 → 1/4/4 → 1/7/4 (→ 4/10/7)",
                "pvp": "1/1/1 → 1/4/4 → 1/7/4 (→ 4/10/7)"
            }, "overloads": {
                "priority": "Medium",
                "essential": [],
                "ideal": ["2-3x Max Ammo"],
                "passable": [],
                "notes": "Diesel only requires Max Ammo, the value of which depends on your Treasure's Phase. The amount of ammo will vary from 700 to 490, which is 133% ~ 88% ammo up. If we consider mid-value Ammo lines, with the help of a lvl7 Bastion cube, Diesel's ideal OL gear will need 2-3 Ammo."
            }, "cube": {
                "pre_overload": [CubeName.Bastion],
                "post_overload": [CubeName.Bastion],
                "notes": "MGs love the bastion cube! If you haven't reached 700+ Ammo, slap Bastion on her. But, depending on your Favorite Item Progression and Ammo lines (700+ Ammo in Phase 1/2), she will never reload so you can slap Vigor cube on her (Max HP up) to make her survive better during taunting."
            }
        }
    }, "dolla": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "S",
            "boss_solo": "S",
            "boss_adds": "S",
            "pvp": "D"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/4/4 (→ 7/7/4)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Low (PVE)",
            "essential": [],
            "ideal": ["1x Max Ammo"],
            "passable": [],
            "notes": "1 Max Ammo Roll can help with Burst Generation in Raids, but not recommended to reroll this character."
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Onslaught],
            "post_overload": [CubeName.Resilience, CubeName.Onslaught],
            "notes": "Dolla doesn't really have anything in her kit that warrants the use of other than the generic damage increase cubes for an SR wielder."
        }
    }, "dorothy": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "SS",
            "boss_solo": "SS",
            "boss_adds": "SS",
            "pvp": "B"
        }, "skills": {
            "priority": "High",
            "pve": "4/4/4 → 7/4/7 → 10/4/10 (→ 10/7/10)",
            "pvp": "4/4/4"
        }, "overloads": {
            "priority": "Medium (PVE)",
            "essential": ["MUST NOT HAVE MAX AMMO"],
            "ideal": ["4x ATK", "4x Elemental Damage"],
            "passable": [],
            "notes": "Dorothy has last bullet mechanics, which is why she should NOT have Max Ammo OL on any piece no matter what!"
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "There's no other choice for Dorothy besides the Resilience Cube. You want to empty the magazine as fast as possible, so avoid Wingman."
        }
    }, "drake": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "B",
            "boss_adds": "B",
            "pvp": "S"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4"
        }, "overloads": {
            "priority": "Medium (PVP)",
            "essential": [],
            "ideal": ["4x ATK"],
            "passable": ["4x Elemental Damage"],
            "notes": "CP Padding + Small boost in ATK buff received"
        }, "cube": {
            "pre_overload": [CubeName.Assault, CubeName.Resilience],
            "post_overload": [CubeName.Assault, CubeName.Resilience],
            "notes": "Assault Cube helps Shotgun wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "ein": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "S",
            "boss_solo": "SS",
            "boss_adds": "S",
            "pvp": "S"
        }, "skills": {
            "priority": "Medium",
            "pve": "1/1/1 → 4/4/4 → 7/7/7 (→ 10/10/10)",
            "pvp": "1/1/1 → 4/4/4 → 7/7/7 (→ 10/10/10)"
        }, "overloads": {
            "priority": "Medium",
            "essential": [],
            "ideal": ["4x Elemental Damage", "4x ATK", "1-2x Max Ammo"],
            "passable": ["Max Ammo, Charge Speed, CRIT Rate, CRIT DMG"],
            "notes": "Consider OL-ing her only after you finish building the meta ones."
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "With Reload Speed team, Resilience is the best. Otherwise, Bastion is the best if you have at least 1x Max Ammo, else use Resilience for more comfortable magazine handling."
        }
    }, "elegg": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "A",
            "boss_adds": "A",
            "pvp": "C"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/4/4 → 4/4/7 (→ 7/7/10)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Medium (PVE)",
            "essential": ["2-3x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK"],
            "passable": [],
            "notes": "Niche for Electric Weak Bosses in Solo Raids"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Resilience, CubeName.Bastion],
            "notes": "You need to make sure that Elegg takes less time to reload. As a support, this is trivial, but as a DPS, it creates a noticeable difference. In most teams, Bastion is obviously the better choice. However, in reload speed teams (SAnis + Privaty), you need to do some testing first. Either Resilience or Bastion would fit your situation better, depending on Privaty's S1 investment as well as the number of OL lines. Boot into Shooting Range without equipping any cube and do normal rotations. Just before Full Burst ends, force-reload Elegg. Now, keep shooting until you reach the next Full Burst. Here are several outcomes: If Elegg reloads outside Full Burst, use Bastion. If you still need to reload, get 1 Max Ammo line and try again. Or, you can try to time your reload so that it starts before Privaty's buff disappears and finishes after Privaty's debuff disappears. This way, Elegg reloads to her full ammo capacity. If Elegg does not reload outside Full Burst, you can use either cube, but Resilience can save you ~11 frames per reload by reaching the >109% threshold. Do provide some leeway. For instance, having ±30 ammo when Full Burst begins is too tight. You can always get more Max Ammo lines, but it may not be efficient. For both cases above, you need to make sure that Elegg does not lose fire rate when reloading by making sure Privaty's S1 is invested well enough. No, it doesn't have to be >100% or >109%. Without sufficient reload speed, reloads will cause uncomfortable hiccups during Full Burst. If this occurs, use Resilience instead and reload outside Full Burst (still reload at the end of Full Burst), or obtain Max Ammo lines. That being said, we do recommend minimum 1-2 Max Ammo lines as a DPS."
        }
    }, "emilia": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "SS",
            "boss_solo": "A",
            "boss_adds": "S",
            "pvp": "SSS"
        }, "skills": {
            "priority": "Medium (PVP)",
            "pve": "1/1/1 → 4/4/7 → 4/7/7 (→ 7/10/7)",
            "pvp": "1/1/1 → 4/4/7 → 4/7/7 (→ 7/10/10)"
        }, "overloads": {
            "priority": "High (PVP)",
            "essential": [],
            "ideal": ["2-4x Charge Speed", "4x ATK", "4x Elemental Damage"],
            "passable": ["2-4x Max Ammo"],
            "notes": "Emilia is the only pvp unit which we feel all players should reroll on. It is a very critical gameplay change for PvP, since she can become the highest Burst Gen provider, even higher than jackal! Ideally reach >21% Charge Speed with her Skill 1 + OL rolls added together. Emilia is not only a unit for PvP, but also Niche for Bosses with parts in Solo Raids, or even Campaign. Hence, she can benefit from ATK and Elemental OL rolls. Max Ammo recommended to prioritize for when uptime is concerned."
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience, CubeName.Quantum],
            "post_overload": [CubeName.Bastion, CubeName.Resilience, CubeName.Quantum],
            "notes": "In PvE, the primary cubes are always Bastion and Resilience because they provide the highest uptime bonus. Since Emilia also scales with Max Ammo, you can also consider Wingman if highly leveled, which will make her S1 more effective. In PvP, you can additionally consider Vigor for increased survival, Adjutant if that helps with reaching the breakpoint informed in Gear Investments section, or Quantum for bonus burst gen."
        }
    }, "emma": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "D",
            "boss_adds": "C",
            "pvp": "A"
        }, "skills": {
            "priority": "PVP",
            "pve": "1/1/1",
            "pvp": "1/1/1 → 4/4/4 (→ 7/4/4)"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "CP Padding + Small Boost in Survivability + Heals"
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Vigor],
            "post_overload": [CubeName.Bastion, CubeName.Vigor],
            "notes": "It's very hard to trigger Emma's S1 in PVE, because it requires her to be hit, hence you may want to use Bastion there. But for PVP, especially in early stage when everyone lack core characters for PVP, Vigor Emma will make their life suffer even more with her near invincible regen."
        }
    }, "epinel": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "C",
            "boss_adds": "B",
            "pvp": "D"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": ["4x ATK", "4x Elemental Damage"],
            "passable": [],
            "notes": "AoE for Missilis Tribe Tower"
        }, "cube": {
            "pre_overload": [CubeName.Assault, CubeName.Resilience],
            "post_overload": [CubeName.Assault, CubeName.Resilience],
            "notes": "Assault Cube helps SMG wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "eunhwa": {
        "ratings": {
            "story_low_deficit": "D",
            "story_high_deficit": "D",
            "boss_solo": "D",
            "boss_adds": "D",
            "pvp": "D"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Resilience Cube helps her with the last bullet mechanic."
        }
    }, "exia": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "C",
            "boss_solo": "D",
            "boss_adds": "D",
            "pvp": "D"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Resilience Cube helps her with the last bullet mechanic."
        }, "with_treasure": {
            "ratings": {
                "story_low_deficit": "A",
                "story_high_deficit": "A",
                "boss_solo": "S",
                "boss_adds": "S",
                "pvp": "C"
            }, "skills": {
                "priority": "Medium",
                "pve": "1/1/1 → 1/7/4 → 1/10/7 (→ 1/10/10)",
                "pvp": "1/1/1"
            }, "overloads": {
                "priority": "Medium",
                "essential": ["MUST NOT HAVE MAX AMMO"],
                "ideal": ["4x Elemental Damage", "4x ATK"],
                "passable": ["4x Charge Speed"],
                "notes": "Elemental Damage and ATK better her DPS performance. Niche DPS+Support for Electric Weak Raids. Last bullet effect means she does not want Max Ammo effect on OL gear! If she has Max Ammo on her gear, you cannot Full Auto her. Charge Speed is a passable effect that helps her if you want to auto her."
            }, "cube": {
                "pre_overload": [CubeName.Resilience],
                "post_overload": [CubeName.Resilience],
                "notes": "Resilience Cube should be the best option for Exia. Adjutant cube can be a viable replacement if one does not have enough slots for Resilience cube."
            }
        }
    }, "folkwang": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "B",
            "boss_adds": "C",
            "pvp": "A"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Resilience and Bastion Cubes work best on most AR wielders and she isn't an exception."
        }
    }, "frima": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "D",
            "boss_adds": "C",
            "pvp": "C"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Adjutant],
            "post_overload": [CubeName.Adjutant],
            "notes": "Charge Speed increase helps with both S1 and S2."
        }, with_treasure: {
            "ratings": {
                "story_low_deficit": "C",
                "story_high_deficit": "C",
                "boss_solo": "A",
                "boss_adds": "B",
                "pvp": "C"
            }, "skills": {
                "priority": "Medium",
                "pve": "1/1/1 → 1/4/4 → 1/7/7 (→ 1/10/10)",
                "pvp": "1/1/1"
            }, "overloads": {
                "priority": "Low (PVE)",
                "essential": [],
                "ideal": ["1-2x Max Ammo", "4x Charge Speed"],
                "passable": [],
                "notes": "Frima does not require Overload Gear to function. However, if you do Overload her, the following Priority can be followed:"
            }, "cube": {
                "pre_overload": [CubeName.Bastion],
                "post_overload": [CubeName.Bastion],
                "notes": "Bastion Cube should be the best cube for Frima. Resilience cube should be the 2nd best cube for Frima, followed by Adjutant or Wingman Cubes."
            }
        }
    }, "guillotine": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "A",
            "boss_adds": "A",
            "pvp": "C"
        }, "skills": {
            "priority": "Medium",
            "pve": "1/1/1 → 4/7/4 (→ 4/10/4)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Medium (PVE)",
            "essential": ["3x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK", "1x Max Ammo"],
            "passable": ["4x Crit Rate"],
            "notes": "Niche for Electric Weak Bosses in Solo Raids. Highly diluted ATK so aim for Ammo and Ele first"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Before OL, when you can't access Ammo Increased, a Resilience Cube with Privaty/Summer Anis will actually help her more than Bastion, but it requires you manually playing her (force reload during buff). Post OL, you can roll a lot of ammo on her, thus reduce the depending on Reload comp. Still, Resilience + Privaty are a good combo in Elysion tower."
        }
    }, "guilty": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "A",
            "boss_adds": "B",
            "pvp": "B"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 7/1/1 (→ 10/4/4)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Low (PVE)",
            "essential": ["1-2x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK"],
            "passable": [],
            "notes": "Extreme Niche for Wind Weak Bosses in Solo Raids"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Resilience, CubeName.Bastion, CubeName.Assault],
            "notes": "Guilty needs to shoot a lot to increase/maintain her stacks, which makes Bastion/Resilience a much better choice on her. But when you can roll a lot of Ammo Increased and Hit Rate on her, an Assault Cube is actually not bad considering you need to put Bastion/Resilience on more meta Nikkes."
        }
    }, "harran": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "A",
            "boss_solo": "C",
            "boss_adds": "A",
            "pvp": "A"
        }, "skills": {
            "priority": "Very Low (PVP)",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4 → 4/4/7 (→ 4/4/10)"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": ["4x ATK", "4x Charge Speed", "4x Elemental Damage"],
            "passable": [],
            "notes": "Increased damage of AoE Nuke, however she is not widely used"
        }, "cube": {
            "pre_overload": [CubeName.Onslaught, CubeName.Resilience, CubeName.Wingman],
            "post_overload": [CubeName.Onslaught, CubeName.Resilience, CubeName.Wingman],
            "notes": "Onslaught and Resilience Cube both work really well on Harran, while Wingman is trailing behind them, but still being a viable option."
        }
    }, "helm": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "S",
            "boss_adds": "A",
            "pvp": "B"
        }, "skills": {
            "priority": "Medium",
            "pve": "1/1/4 → 4/4/4 → 4/4/7 (→ 7/7/7)",
            "pvp": "1/1/4"
        }, "overloads": {
            "priority": "Medium (PVE)",
            "essential": [],
            "ideal": ["1x Max Ammo"],
            "passable": [],
            "notes": "1 Max Ammo Roll can help with Burst Generation in Raids, but not recommended to reroll this character. Only go for Max Ammo if you do Manual Quick Scopes because she has last bullet ability."
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Resilience Cube helps her with the last bullet mechanic."
        }
    }, "helm_aquamarine": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "S",
            "boss_solo": "S",
            "boss_adds": "S",
            "pvp": "D"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 1/4/1 → 4/7/4 (→ 4/10/4)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "For Tribe Tower CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Resilience and Bastion Cubes work best on most AR wielders and she isn't an exception."
        }
    }, "isabel": {
        "ratings": {
            "story_low_deficit": "D",
            "story_high_deficit": "D",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "C"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Assault, CubeName.Resilience],
            "post_overload": [CubeName.Assault, CubeName.Resilience],
            "notes": "Assault Cube helps Shotgun wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "jackal": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "C",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "SSS"
        }, "skills": {
            "priority": "PVP",
            "pve": "1/1/1",
            "pvp": "1/1/1 → 4/4/4"
        }, "overloads": {
            "priority": "Medium (PVP)",
            "essential": [],
            "ideal": ["4x Charge Speed", "4x Elemental Damage", "4x ATK"],
            "passable": [],
            "notes": "CP Padding. Elemental damage is highly appreciated on PvP Iron Units."
        }, "cube": {
            "pre_overload": [CubeName.Quantum, CubeName.Vigor],
            "post_overload": [CubeName.Quantum, CubeName.Vigor],
            "notes": "Jackal is the best tank + burst battery in PVP/PVE, and Vigor will make her survive even longer. Quantum Cube should be the best on her."
        }
    }, "julia": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "D",
            "boss_solo": "D",
            "boss_adds": "D",
            "pvp": "C"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Resilience Cube is the best choice for anyone with the last bullet mechanism."
        }
    }, "kilo": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "B",
            "boss_solo": "C",
            "boss_adds": "A",
            "pvp": "SS"
        }, "skills": {
            "priority": "Very Low (PVP)",
            "pve": "1/1/1 → 4/4/4 → 4/4/7",
            "pvp": "1/1/1 → 4/4/7 → 4/4/10"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": ["4x Elemental Damage"],
            "passable": ["4x Crit Damage", "4x Crit Damage"],
            "notes": "Small boost in HP and elemental rolls allow for increased damage of AoE nuke. Her nuke only benefits from Crit OL and Ele OL sadly."
        }, "cube": {
            "pre_overload": [CubeName.Vigor],
            "post_overload": [CubeName.Vigor],
            "notes": ""
        }
    }, "laplace": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "B",
            "boss_adds": "A",
            "pvp": "A"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": ["4x ATK", "4x Elemental Damage"],
            "passable": ["4x Charge Speed"],
            "notes": "Can act as a mid tier DPS / PvP CP Padding / Missilis Tribe Tower"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Onslaught],
            "post_overload": [CubeName.Resilience, CubeName.Onslaught],
            "notes": "She doesn't really have anything in her kit that warrants the use of other than the generic damage increase cubes for an RL wielder."
        },
        "with_treasure": {
            "ratings": {
                "story_low_deficit": "SS",
                "story_high_deficit": "SS",
                "boss_solo": "SS",
                "boss_adds": "SS",
                "pvp": "SS"
            }, "skills": {
                "priority": "High",
                "pve": "1/1/1 → 4/4/7 → 4/7/10 (→ 4/10/10)",
                "pvp": "1/1/1 → 4/4/7 → 4/7/7 (→ 4/10/10)"
            }, "overloads": {
                "priority": "High",
                "essential": [],
                "ideal": ["4x Elemental Damage", "4x ATK", "1-2x Max Ammo"],
                "passable": ["4x Charge Speed"],
                "notes": "Elemental Damage and ATK are the basic food of any good DPS in Nikke. 1-2x Max Ammo are good to reduce the number of Reloads Laplace does. Meanwhile, if you manage to obtain 21%+ Charge Speed through Overload Gear, she can provide extremely high Burst Generation for your team in PvP. This can possibly increase her rank in the Burst Generation up to the Top 5, right above Clip Shotguns!"
            }, "cube": {
                "pre_overload": [CubeName.Resilience],
                "post_overload": [CubeName.Resilience],
                "notes": "Resilience Cube should be the best option for Laplace in PvE content. In PvP, she can make good use of the Charge Speed Cube as well."
            }
        }
    }, "leona": {
        "ratings": {
            "story_low_deficit": "D",
            "story_high_deficit": "D",
            "boss_solo": "S",
            "boss_adds": "A",
            "pvp": "D"
        }, "skills": {
            "priority": "High (Late Game)",
            "pve": "1/1/1 → 4/7/4 → 7/7/7",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Medium (PVE)",
            "essential": ["1-2x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK"],
            "passable": [],
            "notes": "Max Ammo helps make S1 Damage Distance buff more consistent. Niche DPS for Water Weak Bosses in Solo Raids."
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Resilience, CubeName.Bastion],
            "notes": "She needs to maintain her S1 stacks as long as she can, so a faster reload (Resilience) or longer shooting (Bastion) is welcome here."
        }
    }, "liter": {
        "ratings": {
            "story_low_deficit": "SSS",
            "story_high_deficit": "SSS",
            "boss_solo": "SSS",
            "boss_adds": "SSS",
            "pvp": "A"
        }, "skills": {
            "priority": "Meta",
            "pve": "4/4/4 → 7/4/7 → 7/4/10 (→ 10/4/10)",
            "pvp": "4/4/4 → 4/4/7 → 7/4/10 (→ 10/4/10)"
        }, "overloads": {
            "priority": "Medium",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Assault, CubeName.Wingman],
            "post_overload": [CubeName.Resilience, CubeName.Assault, CubeName.Wingman],
            "notes": "Assault Cube helps SMG wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful). Wingman is a good alternative to both."
        }
    }, "ludmilla": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "A"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 1/4/1",
            "pvp": "1/1/1 → 1/4/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "A SMG wielder with the last bullet mechanic really needs the Resilience Cube."
        }
    }, "ludmilla_winter_owner": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "S",
            "boss_solo": "SSS",
            "boss_adds": "SS",
            "pvp": "D"
        }, "skills": {
            "priority": "High",
            "pve": "4/4/4 → 7/4/5 → 10/4/10 (→ 10/7/10)",
            "pvp": "4/4/4"
        }, "overloads": {
            "priority": "Meta",
            "essential": ["2x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK"],
            "passable": ["2x Max Ammo", "2x Crit Rate", "2x Crit Damage"],
            "notes": "Ideally have a total of 120% Ammo from OL gear."
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience],
            "post_overload": [CubeName.Resilience, CubeName.Bastion],
            "notes": "We recommend Bastion for starters. If you have uninvested Burst and have insufficient Max Ammo OL to back it up, Bastion will improve her uptime by up to 172% alone (S1 level 10, Bastion level 7+). You can also place her in Liter/Blanc/Noir team for effortless ammo retaining. Once her Burst is invested and you acquire 2 Max Ammo lines, feel free to move her out and slap Resilience. This will reduce or eliminate the downtime incurred by reloading, thus increasing the total damage output over long periods. The minimum Burst level for usability is at least 5, but we recommend 6 or higher. It will feel much smoother at level 10."
        }
    }, "maiden": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "B",
            "boss_adds": "B",
            "pvp": "SS"
        }, "skills": {
            "priority": "PVP",
            "pve": "1/1/1",
            "pvp": "1/1/1 → 4/1/4 → 7/1/7 (→ 7/4/10)"
        }, "overloads": {
            "priority": "Medium (PVP)",
            "essential": [],
            "ideal": ["4x ATK", "4x Elemental Damage"],
            "passable": [],
            "notes": "Strengthens AoE Nuke Damage. Elemental DMG for PvP wipe."
        }, "cube": {
            "pre_overload": [CubeName.Assault, CubeName.Resilience],
            "post_overload": [CubeName.Assault, CubeName.Resilience],
            "notes": "Assault Cube helps Shotgun wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "makima": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "C",
            "boss_adds": "B",
            "pvp": "S"
        }, "skills": {
            "priority": "PVP",
            "pve": "1/1/1",
            "pvp": "1/1/1 → 4/4/4"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "For PvP CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "A SMG wielder who syncs pretty well with the Reload Speed increase - as she will Taunt after emptying her mag."
        }
    }, "marciana": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "S",
            "boss_solo": "S",
            "boss_adds": "S",
            "pvp": "B"
        }, "skills": {
            "priority": "Medium",
            "pve": "4/4/1",
            "pvp": "4/4/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": ["4x Elemental Damage", "4x ATK"],
            "passable": [],
            "notes": "Niche DPS for Iron Weak Bosses in Solo Raid. Usually acts as a healer but does NOT need OL gear since she provides adequate healing already."
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Resilience. Period. This will allow her to abuse her Skill 1 way more often. Bastion and Wingman are the opposite and should be avoided. Assault can be usedfor more hitrate, but why?"
        }
    }, "mari_makinami_illustrious": {
        ratings: {
            story_low_deficit: "SS",
            story_high_deficit: "SS",
            boss_solo: "SS",
            boss_adds: "SS",
            pvp: "S"
        }, skills: {
            priority: "High",
            pve: "4/4/4 → 7/4/7 → 10/7/10 (→ 10/10/10)",
            pvp: "4/4/4 → 1/1/4 → 4/4/7 (→ 4/4/10)"
        }, overloads: {
            priority: "Low",
            essential: [],
            ideal: ["1x Max Ammo", "4x ATK", "4x ELE"],
            passable: ["3x Max Ammo"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience, CubeName.Bastion],
            post_overload: [CubeName.Resilience, CubeName.Bastion],
            notes: "We usually recommend Resilience Cube for Sniper Rifles because the shorter reload helps with smoother quick shots for burst gen. This is more true if you don't have any Max Ammo OL. Meanwhile, Bastion Cube technically allows her to shoot more shots over 3 minutes. "
        }
    }, "mary": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "D",
            "boss_adds": "C",
            "pvp": "B"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "A Shotgun wielder with the last bullet mechanic really needs the Resilience Cube."
        }
    }, "mary_bay_goddess": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "A",
            "boss_solo": "A",
            "boss_adds": "S",
            "pvp": "B"
        }, "skills": {
            "priority": "Medium",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": ["1x Max Ammo"],
            "passable": [],
            "notes": "1 Max Ammo Roll can help with Burst Generation in Raids, but not recommended to reroll this character. Does NOT need OL gear since she provides adequate healing already."
        }, "cube": {
            "pre_overload": [CubeName.Healing],
            "post_overload": [CubeName.Healing],
            "notes": "Healing Cube is the go-to cube for her currently."
        }
    }, "mast": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "A",
            "boss_adds": "B",
            "pvp": "C"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/4/4 (→ 7/4/7)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Low (PVE)",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "Increases Base DEF stats, no rerolling needed"
        }, "cube": {
            "pre_overload": [CubeName.Assault, CubeName.Resilience],
            "post_overload": [CubeName.Assault, CubeName.Resilience],
            "notes": "Assault Cube helps SMG wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "maxwell": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "SS",
            "boss_solo": "SS",
            "boss_adds": "SS",
            "pvp": "B"
        }, "skills": {
            "priority": "High",
            "pve": "4/1/4 → 7/1/4 → 10/1/7 (→ 10/4/10)",
            "pvp": "4/1/4 → 7/4/4 (→ 10/4/4)"
        }, "overloads": {
            "priority": "Meta",
            "essential": [],
            "ideal": ["4x Elemental Damage", "4x ATK", "1x Max Ammo"],
            "passable": ["3x Crit Rate", "3x Crit Damage"],
            "notes": "1 Max Ammo Roll can help with Burst Generation in Raids."
        }, "cube": {
            "pre_overload": [CubeName.Onslaught, CubeName.Resilience, CubeName.Wingman],
            "post_overload": [CubeName.Onslaught, CubeName.Resilience, CubeName.Wingman],
            "notes": "Onslaught and Resilience Cube both work really well on Maxwell, while Wingman is trailing behind them, but still being a viable option."
        }
    }, "mica_snow_buddy": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "A",
            "boss_solo": "A",
            "boss_adds": "A",
            "pvp": "A"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4 (→ 4/10/7)"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "CP Padding + Small Boost in Survivability"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Both Bastion and Resilience would serve her well for PvE purposes for more reliable stacking. In PvP, you can opt for Quantum instead (or even Vigor if she constantly dies before she can benefit from her Burst Skill)."
        }
    }, "milk": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "C",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "D"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Onslaught],
            "post_overload": [CubeName.Resilience, CubeName.Onslaught],
            "notes": "Milk doesn't really have anything in her kit that warrants the use of other than the generic damage increase cubes for an SR wielder."
        }
    }, "miranda": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "A",
            "boss_adds": "B",
            "pvp": "C"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 1/4/4 → 4/4/7 (→ 4/7/10)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Bastion Cube will give her a higher uptime on her S1 buff while Resilience Cube will be a general improvement to her performance."
        }
    }, "modernia": {
        "ratings": {
            "story_low_deficit": "SSS",
            "story_high_deficit": "SSS",
            "boss_solo": "SSS",
            "boss_adds": "SSS",
            "pvp": "B"
        }, "skills": {
            "priority": "Meta",
            "pve": "4/4/4 → 7/7/4 → 10/10/4 (→ 10/10/7)",
            "pvp": "4/4/4"
        }, "overloads": {
            "priority": "Meta",
            "essential": ["3x Max Ammo"],
            "ideal": ["4x ATK", "4x Elemental Damage", "1x Max Ammo"],
            "passable": ["1x Hit Rate", "1-2x Crit Rate"],
            "notes": "Ammo is a must-have. Modernia doesn't want to reload, ever. Hit Rate is a niche roll for Modernia and can be ignored completely. There is only one situation where it comes into play and it is in Campaign, and only if you use Red Hood as Solo Burst 1 Unit, since there is a downtime between 2nd and 3rd Bursts where Modernia will not get the ATK buff from her Skill 2 otherwise. Crit Rate is also an okay roll but it is not ideal. It is ultimately better to get an Ammo, ATK, or Elemental roll for your Modernia."
        }, "cube": {
            "pre_overload": [CubeName.Bastion],
            "post_overload": [CubeName.Bastion],
            "notes": "Even when you haven't unlocked Overload, you would still want to rely on Bastion, because Mod can access Hit Rate whenever you are in Full Burst. You will have down time for ATK buff, but the gain from Bastion always makes up for the dmg loss of not having ATK buff."
        }
    }, "moran": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "A",
            "boss_adds": "A",
            "pvp": "SS"
        }, "skills": {
            "priority": "Low (PVP)",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4 → 4/7/7 (→ 4/7/10)"
        }, "overloads": {
            "priority": "Medium (PVP)",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "CP Padding + Small Boost in Survivability"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Vigor],
            "post_overload": [CubeName.Resilience, CubeName.Vigor],
            "notes": "For more taunting outside Burst Skill, use Resilience. For higher HP, use Vigor. If you feel like she taunts too much outside Full Burst and want to dial it back a bit, try Bastion. However, this is not recommended! You can still use Resilience and manual her if you are worried."
        }
    }, "naga": {
        "ratings": {
            "story_low_deficit": "SSS",
            "story_high_deficit": "SSS",
            "boss_solo": "SSS",
            "boss_adds": "SSS",
            "pvp": "B"
        }, "skills": {
            "priority": "Meta",
            "pve": "4/4/4 → 7/4/7 → 10/7/10 (→ 10/10/10)",
            "pvp": "4/4/4"
        }, "overloads": {
            "priority": "High",
            "essential": [],
            "ideal": ["4x ATK", "4x Elemental Damage", "4x Max Ammo"],
            "passable": [],
            "notes": "Increases Base ATK stats, no rerolling needed, can act as a sub DPS against Near Bosses."
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Resilience Cube or Bastion Cube will be the best options to use with Naga, as both promote Naga land more shots. Wingman Cube is also a decent alternative."
        }
    }, "neon_blue_ocean": {
        "ratings": {
            "story_low_deficit": "D",
            "story_high_deficit": "C",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "D"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": ["3x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK", "1x Max Ammo"],
            "passable": [],
            "notes": "Can act as a mid tier DPS"
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Wingman, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Wingman, CubeName.Resilience],
            "notes": "MG goes brrr. Bastion Cube will allow her to shoot for longer, but if you don't have it upgraded, Resilience or Wingman Cubes are a better choice."
        }
    }, "nero": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "S"
        }, "skills": {
            "priority": "PVP",
            "pve": "1/1/1",
            "pvp": "1/1/1 → 4/4/4 (→ 10/10/4)"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": ["4x ATK", "4x Elemental Damage"],
            "passable": ["4x DEF"],
            "notes": "Increased revenge damage if she reaches max stacks"
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "The Resilience Cube is a generic DPS increase for a SMG user."
        }
    }, "nihilister": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "S"
        }, "skills": {
            "priority": "Very Low (PVP)",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": ["4x Charge Speed"],
            "passable": [],
            "notes": "CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Wingman, CubeName.Resilience],
            "post_overload": [CubeName.Wingman, CubeName.Resilience],
            "notes": "Either increasing the Mag Size or Reload Speed is the way to go for her."
        }
    }, "noah": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "B",
            "boss_adds": "B",
            "pvp": "SSS"
        }, "skills": {
            "priority": "PVP",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4"
        }, "overloads": {
            "priority": "High (PVP)",
            "essential": [],
            "ideal": ["4x Charge Speed"],
            "passable": ["4x ATK", "4x Elemental Damage"],
            "notes": "CP Padding + Small Boost in Survivability"
        }, "cube": {
            "pre_overload": [CubeName.Adjutant],
            "post_overload": [CubeName.Adjutant],
            "notes": "Adjutant Cube is the clear winner for her as she will reach Full Charge faster."
        }
    }, "noir": {
        "ratings": {
            "story_low_deficit": "SSS",
            "story_high_deficit": "SS",
            "boss_solo": "SS",
            "boss_adds": "SS",
            "pvp": "S"
        }, "skills": {
            "priority": "Meta",
            "pve": "4/4/4 → 7/5/4 → 10/9/4 (→ 10/10/4)",
            "pvp": "4/4/4 → 7/5/4 (→ 10/5/4)"
        }, "overloads": {
            "priority": "Medium",
            "essential": [],
            "ideal": ["4x Elemental Damage"],
            "passable": ["4x Ammo", "4x ATK", "4x Crit Rate"],
            "notes": "Increases Base ATK stats, no rerolling needed, can act as a sub DPS against Near Bosses. Warning: May steal buff, highly advise against ATK roll"
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Bastion allows here to shoot the most ammo, but you can use Resilience cube if bastion doesn't have any more slots remaining."
        }
    }, "noise": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "S",
            "boss_solo": "S",
            "boss_adds": "S",
            "pvp": "SS"
        }, "skills": {
            "priority": "Medium (PVP)",
            "pve": "1/4/4 → 4/4/4",
            "pvp": "1/4/4 → 4/4/7 (→ 7/7/10)"
        }, "overloads": {
            "priority": "High (PVP)",
            "essential": ["Preferebly do NOT have Max Ammo"],
            "ideal": ["4x Charge Speed"],
            "passable": ["4x ATK", "4x Elemental Damage"],
            "notes": "CP Padding + Small Boost in Survivability + Heals Also used in PvE content against Bosses, so elemental damage can help if team needs survivability and also needs Electric Element Unit in team."
        }, "cube": {
            "pre_overload": [CubeName.Healing],
            "post_overload": [CubeName.Healing],
            "notes": "Healing Cube is the go-to cube for her currently."
        }
    }, "novel": {
        "ratings": {
            "story_low_deficit": "D",
            "story_high_deficit": "D",
            "boss_solo": "A",
            "boss_adds": "A",
            "pvp": "D"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 1/1/7 (→ 4/4/10)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Low (PVE)",
            "essential": [],
            "ideal": ["3-4x Max Ammo"],
            "passable": [],
            "notes": "Allows Novel to reach max stacks faster, allowing for one extra burst with her Damage Taken Debuff on opponent."
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Bastion Cube will give her a higher uptime on her S2 buff while Resilience Cube will be a general improvement to her performance."
        }
    }, "pepper": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "B",
            "boss_adds": "A",
            "pvp": "S"
        }, "skills": {
            "priority": "Low (PVP)",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4 → 4/4/7 (→ 4/4/10)"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": ["4x ATK", "4x Elemental Damage"],
            "passable": ["4x DEF"],
            "notes": "Increased damage of Single Target Nuke"
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "A Shotgun wielder with the last bullet mechanic really needs the Resilience Cube."
        }
    }, "poli": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "A",
            "boss_adds": "A",
            "pvp": "A"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/4 → 4/4/4 → 4/4/7 (→ 4/4/10)",
            "pvp": "1/1/4 → 4/4/4 → 4/4/7 (→ 4/4/10)"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "Cp Padding for PvP"
        }, "cube": {
            "pre_overload": [CubeName.Assault, CubeName.Resilience],
            "post_overload": [CubeName.Assault, CubeName.Resilience],
            "notes": "Assault Cube helps Shotgun wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "power": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "B",
            "boss_adds": "B",
            "pvp": "A"
        }, "skills": {
            "priority": "PVP",
            "pve": "1/1/1",
            "pvp": "1/1/1 → 4/4/4 → 4/4/7 (→ 7/4/10)"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": ["4x ATK", "4x Charge Speed", "4x Elemental Damage"],
            "passable": [],
            "notes": "Increased damage of Single Target Nuke, however she is not widely used"
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "You really need Reload Speed on Power if you want to keep S1 buff stacks permanently."
        }
    }, "privaty": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "SS",
            "boss_solo": "S",
            "boss_adds": "S",
            "pvp": "A"
        }, "skills": {
            "priority": "Medium",
            "pve": "4/1/1 → 7/1/1 (→ 10/4/4)",
            "pvp": "4/1/1 → 7/7/4 (→ 7/10/4)"
        }, "overloads": {
            "priority": "Low",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "Privaty has a last bullet mechanic, hence she ideally does not want Max Ammo OL gear, but it isn't something critical to her kit in the current meta so it can be ignored. It is also suggested to avoid ATK on Privaty's OL gear since it can lead to Privaty being the target of enemy attacks which target Highest ATK stat unit. This especially comes into play when using Privaty with Anis: Sparkling Summer, who is a support type Nikke, and hence has lower base ATK. It is ideal that Anis gets targeted over Privaty since she can heal back up quickly, and hence Privaty is a very low priority unit to OL."
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Last bullet mechanic with reload buff? Resilience all the way! "
        }
    }, "privaty_unkind_maid": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "A",
            "boss_solo": "SS",
            "boss_adds": "S",
            "pvp": "SS"
        }, "skills": {
            "priority": "High (Late Game)",
            "pve": "1/1/4 → 4/4/4 → 7/7/4 (→ 10/10/7)",
            "pvp": "1/1/4 → 4/4/4 → 4/4/7 (→ 4/4/10)"
        }, "overloads": {
            "priority": "High",
            "essential": ["1-2x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK", "1x Max Ammo"],
            "passable": ["2-3x Hit Rate", "2-3x Crit Rate", "2-3x Crit Damage"],
            "notes": "If Privaty reloads for any reason during Full Burst, she will lose her buffs (they will reset to 0 stacks). Max Ammo is important to shoot for 15s + 2s straight during Full Burst. If you only need to reload once every 20s, that's even better! Privaty: Unkind Maid is also used in PvP, where ATK > Elemental Damage. Only OL if you plan to build Meta SG Team or for PvP"
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Most of the time, you will want to use Bastion and reload before every Full Burst to guarantee no reload during the DPS window, in case Tove loses stacks immediately, and it's even better with 1 line Max Ammo Overload. But if you have enough reload speed (SAnis in team), you can use Resilience instead."
        }
    }, "quency": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "B",
            "boss_adds": "A",
            "pvp": "C"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Bastion Cube will give her a higher uptime on her S1 buff while Resilience Cube will be a general improvement to her performance."
        }
    }, "quiry": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "C",
            "boss_adds": "B",
            "pvp": "A"
        }, "skills": {
            "priority": "PVP",
            "pve": "1/1/1",
            "pvp": "1/1/1 (→ 4/4/7)"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": ["4x Charge Speed"],
            "passable": ["4x ATK", "4x Elemental Damage", "4x DEF"],
            "notes": "CP Padding + Small Boost in Survivability + Heals"
        }, "cube": {
            "pre_overload": [CubeName.Healing],
            "post_overload": [CubeName.Healing],
            "notes": "Healing Cube is the go-to cube for her currently."
        }
    }, "rapunzel": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "SS",
            "boss_solo": "S",
            "boss_adds": "S",
            "pvp": "SS"
        }, "skills": {
            "priority": "Low (PVP)",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4 (→ 7/4/4)"
        }, "overloads": {
            "priority": "High (PVP)",
            "essential": [],
            "ideal": ["4x Charge Speed", "2-4x Ammo", "4x Elemental Damage"],
            "passable": ["4x ATK"],
            "notes": "CP Padding + Small Boost in Survivability + Heals. Elemental damage is highly appreciated on PvP Iron Units."
        }, "cube": {
            "pre_overload": [CubeName.Healing],
            "post_overload": [CubeName.Healing],
            "notes": "Healing Cube is the go-to cube for her currently."
        }
    }, "red_hood": {
        "ratings": {
            "story_low_deficit": "SSS",
            "story_high_deficit": "SSS",
            "boss_solo": "A",
            "boss_adds": "S",
            "pvp": "S"
        }, "skills": {
            "priority": "Meta",
            "pve": "4/4/4 → 4/7/7 → 10/10/10 ",
            "pvp": "4/4/4 → 4/7/7 → 10/10/10 "
        }, "overloads": {
            "priority": "Meta",
            "essential": [],
            "ideal": ["4x Elemental Damage", "1x Max Ammo", "4x ATK"],
            "passable": ["3x Charge Speed", "3x Charge Damage"],
            "notes": "Red Hood is the best unit for PvE, and is one of the top choices to use in PvP as well. 1 Ammo is needed for Burst Generation purposes in PvE content. Since she is Iron Element, Elemental Damage is highly appreciated in PvP as well."
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion, CubeName.Adjutant],
            "post_overload": [CubeName.Resilience, CubeName.Bastion, CubeName.Adjutant],
            "notes": "Red doesn't actually need any cube, so a generic DPS cube like Bastion/Resilience is okay. You can actually put Adjutant if it's the same level as your highest lvl cube to increase her overall DPS by a small margin! Or using Vigor (Hp) Cube to manipulate Blanc's Indomitable in PVP too."
        }
    }, "rei": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "D",
            "boss_solo": "D",
            "boss_adds": "D",
            "pvp": "C"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Assault, CubeName.Resilience],
            "post_overload": [CubeName.Assault, CubeName.Resilience],
            "notes": "Assault Cube helps SMG wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "rei_ayanami": {
        ratings: {
            story_low_deficit: "SSS",
            story_high_deficit: "SS",
            boss_solo: "S",
            boss_adds: "SS",
            pvp: "SS"
        }, skills: {
            priority: "High",
            pve: "4/4/7 → 7/7/7 → 7/10/10 (→ 10/10/10)",
            pvp: "4/4/7 → 4/7/10 "
        }, overloads: {
            priority: "High",
            essential: ["x× Max Ammo"],
            ideal: ["4x ATK", "4x ELE", "1x Max Ammo"],
            passable: [],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Bastion, CubeName.Resilience],
            post_overload: [CubeName.Bastion, CubeName.Resilience],
            notes: "Bastion has the edge over Resilience on MGs. But, if you pair Rei with Reload Speed buffers like Crown or Privaty, then Resilience works just fine. As long as her reload is shorter than 0.6s (76% reload), she will not have to wind up. "
        }
    }, "rem": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "S",
            "boss_solo": "SS",
            "boss_adds": "SS",
            "pvp": "D"
        }, "skills": {
            "priority": "High",
            "pve": "4/4/4 → 7/4/4 → 10/4/7 (→ 10/7/10)",
            "pvp": "4/4/4"
        }, "overloads": {
            "priority": "Medium (PVE)",
            "essential": ["3x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK", "1x Max Ammo"],
            "passable": ["4x Crit Damage"],
            "notes": "MGs want ammo. A lot of it"
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Bastion - The universal choice for all MGs as it offers the highest uptime extension without external help. Resilience - If paired with reload speed buffers like Privaty, Resilience (with some Max Ammo) may reduce downtime to the point that it is unfelt."
        }
    }, "rosanna": {
        "ratings": {
            "story_low_deficit": "D",
            "story_high_deficit": "D",
            "boss_solo": "D",
            "boss_adds": "D",
            "pvp": "SS"
        }, "skills": {
            "priority": "PVP",
            "pve": "1/1/1",
            "pvp": "1/1/1 → 4/1/1 → 4/7/7 (→ 7/10/10)"
        }, "overloads": {
            "priority": "Medium (PVP)",
            "essential": [],
            "ideal": ["4x ATK", "4x Elemental Damage"],
            "passable": [],
            "notes": "Strengthens Nuke Damage"
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Wingman, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Wingman, CubeName.Resilience],
            "notes": "MG goes brrr. Bastion Cube will allow her to shoot for longer, but if you don't have it upgraded, Resilience or Wingman Cubes are a better choice."
        }
    }, "rosanna_chic_ocean": {
        "ratings": {
            "story_low_deficit": "SS",
            "story_high_deficit": "S",
            "boss_solo": "S",
            "boss_adds": "S",
            "pvp": "B"
        }, "skills": {
            "priority": "Medium",
            "pve": "1/1/1 → 4/4/4 → 4/7/10 (→ 7/10/10)",
            "pvp": "1/1/1 → 1/1/7 → 1/4/10 (→ 1/7/10)"
        }, "overloads": {
            "priority": "Low",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Bastion],
            "post_overload": [CubeName.Bastion],
            "notes": "Rosanna does not particularly require any cube. Any generic cube works on her, but Bastion will allow her to shoot more bullets over 3 minutes. Despite that, it is recommended to use the highest level cube available for the base stat bonuses to help with her caster's ATK buff. "
        }
    }, "rupee": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "B",
            "boss_adds": "B",
            "pvp": "D"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": ["4x Elemental Damage", "4x ATK", "4x Max Ammo"],
            "passable": [],
            "notes": "Can act as a mid tier DPS"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Wingman, CubeName.Bastion],
            "post_overload": [CubeName.Bastion, CubeName.Resilience, CubeName.Wingman],
            "notes": "Pre-overload you want to either increase Rupee mag size above 100 so she can trigger her S1 without reloading. If this isn't possible, just use the Resilience Cube on her so she reloads faster. Post-overload Bastion Cube overcomes both of the Cubes though."
        }
    }, "rupee_winter_shopper": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "B"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Resilience Cube is the best choice for anyone with the last bullet mechanism."
        }
    }, "sakura": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "A",
            "boss_adds": "A",
            "pvp": "B"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/4/4 (→ 4/4/7)",
            "pvp": "1/1/1 → 4/4/4 (→ 4/4/7)"
        }, "overloads": {
            "priority": "Low",
            "essential": [],
            "ideal": ["1x Max Ammo"],
            "passable": [],
            "notes": "1 Max Ammo Roll can help with Burst Generation in Raids, but not recommended to reroll this character."
        }, "cube": {
            "pre_overload": [CubeName.Wingman, CubeName.Resilience],
            "post_overload": [CubeName.Wingman, CubeName.Resilience],
            "notes": "Either increasing Sakura's Mag Size or increasing her Reload Speed is the way to go for her - you really want to stack the S1 buff as fast as possible."
        }
    }, "sakura_bloom_in_summer": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "B",
            "boss_solo": "SS",
            "boss_adds": "S",
            "pvp": "SS"
        }, "skills": {
            "priority": "Medium",
            "pve": "1/1/1 → 4/4/4 → 5/7/7 (→ 7/10/10)",
            "pvp": "1/1/1 → 1/4/4 → 1/7/7 (→ 1/10/10)"
        }, "overloads": {
            "priority": "Medium",
            "essential": [],
            "ideal": ["4x Elemental DMG", "4x ATK"],
            "passable": ["4x CRIT Rate", "4x CRIT DMG"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Bastion],
            "post_overload": [CubeName.Bastion],
            "notes": "S. Sakura does not particularly require any cube. Any generic cube works on her, but Bastion will allow her to shoot more bullets over 3 minutes. Despite that, it is recommended to use the highest level cube available for the ATK (and Elemental DMG) bonus. "
        }
    }, "scarlet": {
        "ratings": {
            "story_low_deficit": "SSS",
            "story_high_deficit": "SSS",
            "boss_solo": "S",
            "boss_adds": "SSS",
            "pvp": "SSS"
        }, "skills": {
            "priority": "Meta",
            "pve": "4/4/4 → 7/4/4 → 10/4/7 (→ 10/4/10)",
            "pvp": "4/4/4 → 7/4/7 → 10/7/10 (→ 10/10/10)"
        }, "overloads": {
            "priority": "Meta",
            "essential": ["3x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK", "1x Max Ammo"],
            "passable": ["1-2x Hit Rate", "1-2x Crit Rate", "1-2x Crit Damage"],
            "notes": "Scarlet is an excellent choice for PvE, but she is at the top of the meta for PvP, where ATK is better than Elemental Damage. She scales the best with Ammo, since she only has 20 ammo and a huge reload time. Scarlet is an AR who cannot hit core shots well against enemies who are far away, hence she benefits from Crit Rolls more than others, as well as Hit Rate."
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Resilience Cube is the go-to choice for Scarlet pre-overload gear and when your Bastion Cube is still not upgraded to level 7. Post-overload though, Bastion Cube scales way better than Resilience because you can get Max Ammo as overload perk."
        }
    }, "scarlet_black_shadow": {
        "ratings": {
            "story_low_deficit": "SSS",
            "story_high_deficit": "SS",
            "boss_solo": "SSS",
            "boss_adds": "SSS",
            "pvp": "SS"
        }, "skills": {
            "priority": "Meta",
            "pve": "4/4/4 → 7/4/7 → 10/7/10 ",
            "pvp": "4/4/4 → 7/4/7 → 10/7/10 "
        }, "overloads": {
            "priority": "Meta",
            "essential": ["1x Max Ammo"],
            "ideal": ["1x Charge Speed", "4x Elemental Damage", "4x ATK"],
            "passable": ["2x Charge Speed"],
            "notes": "1 Ammo definitely makes it more comfortable to use SBS. Getting charge speed can allow SBS to hit 1-2 extra shots during Full Burst, but 1 roll of >5% is enough. SBS is one of the best unit for PvE, and is one of the top choices to use in PvP as well."
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Onslaught],
            "post_overload": [CubeName.Bastion, CubeName.Onslaught],
            "notes": "The most economical option is Bastion. While Onslaught is theoretically the best cube for SBS when it comes to pure damage, it is very niché and does not pair well with most other units. Thus, you will be better off using Bastion for the increased stats and elemental damage bonus. Besides that, when coupled with Alice, SBS will shoot faster. In order for her to last until the next Full Burst without reloading even once, you usually need to rely on Bastion (and 1 or more Max Ammo OL lines). This should result in more damage provided versus Onslaught. Regardless, you may benefit from Adjutant more if you have a low charge speed roll and want to reach a certain breakpoint (as stated in Gear Investment). Note that the case above doesn't convert well for PvP as there she is bound to reload before entering Full Burst if she doesn't have Max Ammo OL, in which case Resilience is a better option than Bastion. Since she gains Max Ammo from Skill 2 (and reloads fully just as Full Burst begins), it is unnecessary to equip Bastion to make full use of her devastating Burst Skill. Bastion would only be a good choice if Alice were also in the team, but that's usually questionable in PvP to bring a low-regen Nikke just to boost damage slightly. "
        }
    }, "signal": {
        "ratings": {
            "story_low_deficit": "D",
            "story_high_deficit": "D",
            "boss_solo": "D",
            "boss_adds": "D",
            "pvp": "D"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Bastion Cube will give her a higher uptime on her S1 debuff while Resilience Cube will be a general improvement to her performance."
        }
    }, "sin": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "C"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 (→ 4/4/4)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Resilience Cube is the best choice for anyone with the last bullet mechanism."
        }
    }, "snow_white": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "S",
            "boss_solo": "SS",
            "boss_adds": "S",
            "pvp": "B"
        }, "skills": {
            "priority": "High (Late Game)",
            "pve": "1/1/1 → 4/4/10 (→ 4/7/10)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Meta",
            "essential": [],
            "ideal": ["4x Elemental Damage", "4x ATK"],
            "passable": ["4x Crit Rate", "4x Crit Damage", "2-4x Charge Speed"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Adjutant, CubeName.Wingman],
            "post_overload": [CubeName.Resilience, CubeName.Adjutant, CubeName.Wingman],
            "notes": "If you're using SW one-shot team then you can equip Onslaught Cube on her, but in any other scenario, you're better with Resilience/Bastion/Wingman. Adjutant Cube is also an option to squeeze in the 5s damage window."
        }
    }, "snow_white_innocent_days": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "A",
            "boss_solo": "B",
            "boss_adds": "A",
            "pvp": "C"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": ["4x Elemental Damage", "4x ATK"],
            "passable": [],
            "notes": "Can act as a mid tier DPS"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Resilience and Bastion Cubes work best on most AR wielders and she isn't an exception."
        }
    }, "soda": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "B",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "D"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience, CubeName.Wingman],
            "post_overload": [CubeName.Bastion, CubeName.Resilience, CubeName.Wingman],
            "notes": "MG goes brrr. Bastion Cube will allow her to shoot for longer, but if you don't have it upgraded, Resilience or Wingman Cubes are a better choice."
        }
    }, "soda_twinkling_bunny": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "SS",
            "boss_adds": "S",
            "pvp": "S"
        }, "skills": {
            "priority": "High (Late Game)",
            "pve": "4/4/4 → 4/7/7 → 4/10/7 (→ 7/10/10)",
            "pvp": "4/4/4 → 7/4/7 → 7/4/10 (→ 7/10/10)"
        }, "overloads": {
            "priority": "High",
            "essential": ["1-2x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK"],
            "passable": ["1-2x Hit Rate", "1-2x Crit Rate", "1-2x Crit Damage"],
            "notes": "Ammo is important to shoot for 15s straight of Burst and to make sure she reloads only once every 20s. It is very important for Soda to consistently shoot during Burst in order to stack her Skill 1. Soda is also used in PvP. Since she is Iron, Elemental Damage is appreciated on her. Only OL if you plan to build Meta SG Team or for PvP"
        }, "cube": {
            "pre_overload": [CubeName.Bastion, CubeName.Resilience],
            "post_overload": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Due to the extra reloading animation imposed on B. Soda, we want to avoid reloading as much as possible. Bastion remains the best cube and is miles better than the other options. Resilience is second best. No questions asked. Technically, you can also use Quantum for PvP (if that extra juice is needed)."
        }
    }, "soline": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "D"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": ["4x Elemental Damage!", "4x ATK"],
            "passable": [],
            "notes": "Can act as a mid tier DPS"
        }, "cube": {
            "pre_overload": [CubeName.Assault, CubeName.Resilience],
            "post_overload": [CubeName.Assault, CubeName.Resilience],
            "notes": "Assault Cube helps SMG wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "sugar": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "A",
            "boss_adds": "C",
            "pvp": "S"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 1/5/5",
            "pvp": "1/1/1 → 4/5/5"
        }, "overloads": {
            "priority": "Low",
            "essential": ["2-3x Max Ammo"],
            "ideal": ["4x Elemental Damage", "4x ATK"],
            "passable": [],
            "notes": "Extreme Niche for Iron Weak Bosses in Solo Raids. Also used in PvP, but OLing her is more or less for CP Padding."
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion, CubeName.Wingman],
            "post_overload": [CubeName.Resilience, CubeName.Bastion, CubeName.Wingman],
            "notes": "You want to shoot as many as you can during her AS buff, then Bastion/Resi in here will be better. But if you don't have enough space and are lazy to swap cube around, a Wingman is okay"
        }
    }, "tia": {
        "ratings": {
            "story_low_deficit": "SSS",
            "story_high_deficit": "SSS",
            "boss_solo": "SSS",
            "boss_adds": "SSS",
            "pvp": "S"
        }, "skills": {
            "priority": "Meta",
            "pve": "4/1/1 → 7/4/4 → 10/4/4",
            "pvp": "4/1/1 → 7/4/4 → 10/4/4"
        }, "overloads": {
            "priority": "Medium",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Vigor, CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Vigor, CubeName.Resilience, CubeName.Bastion],
            "notes": "You can use Resilience/Bastion for CP padding in campaign, although Tia has a mechanic relied on attack, you actually don't want it to trigger more often. Either she will die, or your cover die. In both cases, you are pretty much guaranteed a retry. Just make sure she stays alive with Vigor. "
        }
    }, "tove": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "SS",
            "boss_adds": "S",
            "pvp": "B"
        }, "skills": {
            "priority": "High (Late Game)",
            "pve": "1/1/1 → 9/4/4 → 9/7/7 (→ 9/10/10)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "High (PVE)",
            "essential": [],
            "ideal": ["1-4x Max Ammo"],
            "passable": [],
            "notes": "Ammo OL increases uptime/consistency of Tove's S1 Only OL if you plan to build Meta SG Team."
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Base Tove (no Max Ammo) reloads every 6s. This means she will be hitting minimum probability in almost every 5s window. Because of this, we recommend Resilience, but Bastion 7+ is also not a bad pick as it will make accruing 3 stacks within 1 clip easier. If she has high base ammo, you should get Bastion instead, as maintaining stacks is much easier if Tove keeps firing. It also synergizes well with her Emergency Bullet (Skill 1)"
        }
    }, "trony": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "B",
            "boss_adds": "B",
            "pvp": "C"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 4/4/4 → 4/4/7 (→ 4/4/10)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": ["4x Elemental Damage", "4x ATK", "2x Max Ammo"],
            "passable": ["2x Charge Speed"],
            "notes": "Can act as a mid tier DPS"
        }, "cube": {
            "pre_overload": [CubeName.Resilience, CubeName.Bastion],
            "post_overload": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Resilience or Bastion would do fine. We recommend Bastion Lv 7+ if you have exactly 1x Max Ammo, as the extra 3 shots will help with charging Burst Energy after Full Burst(s). Otherwise, we prefer Resilience because their uptime/downtime balance is more consistent, especially if you're running her with other Reload buffers like Crown or Privaty."
        }
    }, "vesti": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "C",
            "boss_adds": "B",
            "pvp": "A"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": ["4x Elemental Damage", "4x ATK"],
            "passable": ["4x Charge Speed"],
            "notes": "Burst Gen for Elysion Tribe Tower / CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Onslaught, CubeName.Resilience, CubeName.Adjutant],
            "post_overload": [CubeName.Onslaught, CubeName.Resilience, CubeName.Adjutant],
            "notes": "All three Cubes work really well on her and what you use is up to you."
        }
    }, "viper": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "S"
        }, "skills": {
            "priority": "PVP",
            "pve": "1/1/1",
            "pvp": "1/1/1 (→ 4/4/4)"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": ["4x ATK", "1-2x Max Ammo"],
            "passable": ["4x Elemental Damage"],
            "notes": "CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Assault, CubeName.Resilience],
            "post_overload": [CubeName.Assault, CubeName.Resilience],
            "notes": "Assault Cube helps Shotgun wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }, with_treasure: {
            ratings: {
                story_low_deficit: "B",
                story_high_deficit: "B",
                boss_solo: "S",
                boss_adds: "B",
                pvp: "S"
            }, skills: {
                priority: "Low",
                pve: "1/1/1 → 4/4/4 → 7/4/7 (→ 10/4/10)",
                pvp: "1/1/1 → 4/4/4 → 7/4/7 (→ 10/4/10)"
            }, overloads: {
                priority: "Low (PVE)",
                essential: [],
                ideal: ["4x Hit Rate", "4x Attack", "4x Elemental Damage"],
                passable: ["4x Ammo"],
                notes: "Because Viper has a lot of Hit Rate already, OL Hit Rate will help her reach 90% breakpoint easier and make her deal damage like a MG unit. ATK and Ele are standard for any DPS."
            }, cube: {
                pre_overload: [CubeName.Bastion],
                post_overload: [CubeName.Bastion],
                notes: "For general DPS, you can slap Bastion on her so she reloads less during the entire fight."
            }
        }
    }, "volume": {
        "ratings": {
            "story_low_deficit": "S",
            "story_high_deficit": "S",
            "boss_solo": "S",
            "boss_adds": "S",
            "pvp": "D"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 1/1/4 → 1/4/4 (→ 1/7/7)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Very Low",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": "For Tribe Tower CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Assault, CubeName.Resilience],
            "post_overload": [CubeName.Assault, CubeName.Resilience],
            "notes": "Assault Cube helps SMG wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "yan": {
        "ratings": {
            "story_low_deficit": "B",
            "story_high_deficit": "B",
            "boss_solo": "C",
            "boss_adds": "C",
            "pvp": "C"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Adjutant],
            "post_overload": [CubeName.Adjutant],
            "notes": "Adjutant Cube is the clear winner for her as she will reach Full Charge faster."
        }
    }, "yulha": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "C",
            "boss_solo": "A",
            "boss_adds": "B",
            "pvp": "C"
        }, "skills": {
            "priority": "High (Late Game)",
            "pve": "1/1/1 → 1/4/1 → 1/7/1 (→ 1/10/1)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "Low (PVE)",
            "essential": [],
            "ideal": ["1x Max Ammo"],
            "passable": [],
            "notes": "1 Max Ammo Roll can help with Burst Generation in Raids, but not recommended to reroll this character."
        }, "cube": {
            "pre_overload": [CubeName.Onslaught, CubeName.Resilience, CubeName.Wingman],
            "post_overload": [CubeName.Onslaught, CubeName.Resilience, CubeName.Wingman],
            "notes": "Onslaught and Resilience Cube both work really well on Yulha, while Wingman is trailing behind them, but still being a viable option."
        }
    }, "yuni": {
        "ratings": {
            "story_low_deficit": "C",
            "story_high_deficit": "B",
            "boss_solo": "D",
            "boss_adds": "C",
            "pvp": "C"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Adjutant],
            "post_overload": [CubeName.Adjutant],
            "notes": "Adjutant Cube is the clear winner for her as she will reach Full Charge faster."
        }
    }, "zwei": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "B",
            "boss_solo": "A",
            "boss_adds": "B",
            "pvp": "B"
        }, "skills": {
            "priority": "Low",
            "pve": "1/1/1 → 4/1/4 → 7/4/7 (→ 10/7/10)",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Bastion],
            "post_overload": [CubeName.Bastion],
            "notes": "Any cube works on Zwei. Zwei is not a good damage dealer herself, but to maximise the number of bullets shot, the best cubes are either Bastion or Resilience Cubes."
        }
    }, "anchor": {
        ratings: {
            story_low_deficit: "C",
            story_high_deficit: "D",
            boss_solo: "D",
            boss_adds: "D",
            pvp: "B"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Vigor, CubeName.Resilience],
            post_overload: [CubeName.Vigor, CubeName.Resilience],
            notes: "Any taunt tank would enjoy more HP. And Resilience works with any last bullet Nikke."
        }
    }, "anis": {
        "ratings": {
            "story_low_deficit": "A",
            "story_high_deficit": "A",
            "boss_solo": "C",
            "boss_adds": "B",
            "pvp": "SS"
        }, "skills": {
            "priority": "Very Low",
            "pve": "1/1/1 → 4/4/4",
            "pvp": "1/1/1 → 4/4/4"
        }, "overloads": {
            "priority": "Low (PVP)",
            "essential": [],
            "ideal": ["4x Charge Speed"],
            "passable": ["4x ATK", "4x Elemental Damage", "4x DEF"],
            "notes": "CP Padding"
        }, "cube": {
            "pre_overload": [CubeName.Quantum],
            "post_overload": [CubeName.Quantum],
            "notes": "Anis's role is Burst Gen Battery, and Quantum on her is actually very important. It allows you to burst faster than enemy, leading to easier win in PVP. She's one of the Holy Trinity worth putting Quantum cube on."
        }
    }, "belorta": {
        ratings: {
            story_low_deficit: "D",
            story_high_deficit: "D",
            boss_solo: "D",
            boss_adds: "D",
            pvp: "C"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Adjutant, CubeName.Bastion, CubeName.Resilience],
            post_overload: [CubeName.Adjutant, CubeName.Bastion, CubeName.Resilience],
            notes: "Adjutant Cube will allow Belorta to reach Full Charge faster and keep the enemies debuffed with her S2. Bastion Cube allows her to shoot for longer before reloading, while Resilience is a general shooting uptime increase."
        }
    }, "delta": {
        ratings: {
            story_low_deficit: "D",
            story_high_deficit: "D",
            boss_solo: "D",
            boss_adds: "D",
            pvp: "C"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Adjutant, CubeName.Resilience],
            post_overload: [CubeName.Adjutant, CubeName.Resilience],
            notes: "Adjutant Cube will allow her to reach Full Charge faster while Resilience Cube just offers generic uptime on shooting."
        }
    }, "ether": {
        ratings: {
            story_low_deficit: "D",
            story_high_deficit: "D",
            boss_solo: "D",
            boss_adds: "D",
            pvp: "D"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Assault, CubeName.Resilience],
            post_overload: [CubeName.Assault, CubeName.Resilience],
            notes: "Assault Cube helps Shotgun wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "himeno": {
        ratings: {
            story_low_deficit: "D",
            story_high_deficit: "D",
            boss_solo: "D",
            boss_adds: "D",
            pvp: "D"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Adjutant],
            post_overload: [CubeName.Adjutant],
            notes: "Charge Speed increase helps with S1 uptime."
        }
    }, "mica": {
        ratings: {
            story_low_deficit: "D",
            story_high_deficit: "D",
            boss_solo: "D",
            boss_adds: "D",
            pvp: "B"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience, CubeName.Onslaught],
            post_overload: [CubeName.Resilience, CubeName.Onslaught],
            notes: "She doesn't really have anything in her kit that warrants the use of other than the generic damage increase cubes for an RL wielder."
        }
    }, "mihara": {
        ratings: {
            story_low_deficit: "D",
            story_high_deficit: "D",
            boss_solo: "D",
            boss_adds: "D",
            pvp: "C"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience],
            post_overload: [CubeName.Resilience],
            notes: "Resilience Cube is the best choice for anyone with the last bullet mechanism."
        }
    }, "misato_katsuragi": {
        ratings: {
            story_low_deficit: "C",
            story_high_deficit: "C",
            boss_solo: "C",
            boss_adds: "C",
            pvp: "C"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Healing, CubeName.Vigor],
            post_overload: [CubeName.Healing, CubeName.Vigor],
            notes: ""
        }
    }, "n102": {
        ratings: {
            story_low_deficit: "A",
            story_high_deficit: "A",
            boss_solo: "B",
            boss_adds: "B",
            pvp: "C"
        }, skills: {
            priority: "Low",
            pve: "1/1/1 → 1/1/4 ",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Adjutant],
            post_overload: [CubeName.Adjutant],
            notes: "Adjutant Cube is the clear winner for her as she will reach Full Charge faster."
        }
    }, "neon": {
        ratings: {
            story_low_deficit: "D",
            story_high_deficit: "D",
            boss_solo: "C",
            boss_adds: "D",
            pvp: "A"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Adjutant, CubeName.Resilience],
            post_overload: [CubeName.Adjutant, CubeName.Resilience],
            notes: "Assault Cube helps Shotgun wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "neve": {
        ratings: {
            story_low_deficit: "D",
            story_high_deficit: "D",
            boss_solo: "B",
            boss_adds: "C",
            pvp: "C"
        }, skills: {
            priority: "Very Low",
            pve: "1/1/1 → 1/4/1 ",
            pvp: "1/1/1"
        }, overloads: {
            priority: "Very Low",
            essential: [],
            ideal: ["4x Elemental Damage", "4x ATK"],
            passable: [],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Assault, CubeName.Resilience],
            post_overload: [CubeName.Assault, CubeName.Resilience],
            notes: "Assault Cube helps Shotgun wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "pascal": {
        ratings: {
            story_low_deficit: "B",
            story_high_deficit: "C",
            boss_solo: "D",
            boss_adds: "C",
            pvp: "A"
        }, skills: {
            priority: "PVP",
            pve: "1/1/1",
            pvp: "1/1/1 (→ 4/4/4)"
        }, overloads: {
            priority: "Very Low",
            essential: [],
            ideal: ["1-2x Ammo"],
            passable: [],
            notes: "Cp Padding for PvP, 1 Ammo allows her to shoot for more time and provide burst gen for longer."
        }, cube: {
            pre_overload: [CubeName.Wingman, CubeName.Resilience],
            post_overload: [CubeName.Wingman, CubeName.Resilience],
            notes: "Wingman or Resilience Cube are best on Pascal."
        }
    }, "ram": {
        ratings: {
            story_low_deficit: "B",
            story_high_deficit: "C",
            boss_solo: "C",
            boss_adds: "D",
            pvp: "D"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience, CubeName.Onslaught],
            post_overload: [CubeName.Resilience, CubeName.Onslaught],
            notes: "Ram doesn't really have anything in her kit that warrants the use of other than the generic damage increase cubes for an SR wielder."
        }
    }, "rapi": {
        ratings: {
            story_low_deficit: "C",
            story_high_deficit: "C",
            boss_solo: "D",
            boss_adds: "D",
            pvp: "D"
        }, skills: {
            priority: "Very Low",
            pve: "1/1/1 → 3/3/3",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience, CubeName.Bastion],
            post_overload: [CubeName.Resilience, CubeName.Bastion],
            notes: "Resilience and Bastion Cubes work best on most AR wielders and she isn't an exception."
        }
    }, "product_08": {
        "ratings": {
            "story_low_deficit": "E",
            "story_high_deficit": "E",
            "boss_solo": "E",
            "boss_adds": "E",
            "pvp": "E"
        }, "skills": {
            "priority": "-",
            "pve": "1/1/1",
            "pvp": "1/1/1"
        }, "overloads": {
            "priority": "-",
            "essential": [],
            "ideal": [],
            "passable": ["-"],
            "notes": ""
        }, "cube": {
            "pre_overload": [CubeName.Resilience],
            "post_overload": [CubeName.Resilience],
            "notes": "Her S1 wants you to never fully charge your shots and just spam - this is why Reload Speed is important on her."
        }
    }, "product_12": {
        ratings: {
            story_low_deficit: "E",
            story_high_deficit: "E",
            boss_solo: "E",
            boss_adds: "E",
            pvp: "E"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Bastion, CubeName.Resilience, CubeName.Wingman],
            post_overload: [CubeName.Bastion, CubeName.Resilience, CubeName.Wingman],
            notes: "MG goes brrr. Bastion Cube will allow her to shoot for longer, but if you don't have it upgraded, Resilience or Wingman Cubes are a better choice."
        }
    }, "product_23": {
        ratings: {
            story_low_deficit: "E",
            story_high_deficit: "E",
            boss_solo: "E",
            boss_adds: "E",
            pvp: "B"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience],
            post_overload: [CubeName.Resilience],
            notes: ""
        }
    }, "soldier_eg": {
        ratings: {
            story_low_deficit: "E",
            story_high_deficit: "E",
            boss_solo: "E",
            boss_adds: "E",
            pvp: "E"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: [],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience],
            post_overload: [CubeName.Resilience],
            notes: "Resilience Cube helps with the long reload Soldier EG has."
        }
    }, "soldier_fa": {
        ratings: {
            story_low_deficit: "E",
            story_high_deficit: "E",
            boss_solo: "E",
            boss_adds: "E",
            pvp: "E"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: [],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Assault, CubeName.Resilience],
            post_overload: [CubeName.Assault, CubeName.Resilience],
            notes: "Assault Cube helps Shotgun wielders to actually hit something past Near range. While the Resilience Cube is a generic DPS increase (but it's better in scenarios when you fight stuff only in Near range as there Hit Rate isn't that useful)."
        }
    }, "soldier_ow": {
        ratings: {
            story_low_deficit: "E",
            story_high_deficit: "E",
            boss_solo: "E",
            boss_adds: "E",
            pvp: "E"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: [],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience],
            post_overload: [CubeName.Resilience],
            notes: "A SMG wielder with a long reload time really needs the Resilience Cube."
        }
    }, "idoll_flower": {
        ratings: {
            story_low_deficit: "E",
            story_high_deficit: "E",
            boss_solo: "E",
            boss_adds: "E",
            pvp: "E"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience],
            post_overload: [CubeName.Resilience],
            notes: "Reload Speed is best choice for characters that use the last bullet mechanics."
        }
    }, "idoll_ocean": {
        ratings: {
            story_low_deficit: "E",
            story_high_deficit: "E",
            boss_solo: "E",
            boss_adds: "E",
            pvp: "E"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience],
            post_overload: [CubeName.Resilience],
            notes: "A SMG wielder with the last bullet mechanic really needs the Resilience Cube."
        }
    }, "idoll_sun": {
        ratings: {
            story_low_deficit: "E",
            story_high_deficit: "E",
            boss_solo: "E",
            boss_adds: "E",
            pvp: "E"
        }, skills: {
            priority: "-",
            pve: "1/1/1",
            pvp: "1/1/1"
        }, overloads: {
            priority: "-",
            essential: [],
            ideal: [],
            passable: ["-"],
            notes: ""
        }, cube: {
            pre_overload: [CubeName.Resilience, CubeName.Bastion],
            post_overload: [CubeName.Bastion, CubeName.Resilience],
            notes: "Resilience and Bastion Cubes work best on most AR wielders and she isn't an exception."
        }
    }, "template": {
        ratings: {
            story_low_deficit: "",
            story_high_deficit: "",
            boss_solo: "",
            boss_adds: "",
            pvp: ""
        }, skills: {
            priority: "",
            pve: "",
            pvp: ""
        }, overloads: {
            priority: "",
            essential: [],
            ideal: [],
            passable: [],
            notes: ""
        }, cube: {
            pre_overload: [],
            post_overload: [],
            notes: ""
        }
    }
}