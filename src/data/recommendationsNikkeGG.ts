import { CubeName, RecommendationsNikkeGG } from "../types";

export const recommendation_data_nikke_gg: {[nikke: string]: RecommendationsNikkeGG} = {
    "2b": {
        "ratings": {
            "story": 8,
            "pvp": 8.7,
            "boss": 8.5,
            "notes": "Requires high personal investments and New team buffer archetype to be semi-invested as well."
        }, "skills": {
            "priority": "High",
            "budget": "5/7/7",
            "recommended": "7/10/10",
            "notes": ["Skill 1 Is good, but the user can hold off upgrading it as you'll be using her with Max HP buffers for the most part anyways.",
                "Skill 2 is where you'll be getting your enormous ATK Pool from.",
                "Burst is where you'll be hitting HARD"]
        }, "overloads": {
            "priority": "Low",
            "priority_rank": 2,
            "elemental_damage": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "Situationally useful"
            },
            "hit_rate": {
                "priority": 2,
                "recommended": "1-2x",
                "notes": "Able to hit cores easier, less priority as her auto attack values are pretty bad."
            },
            "max_ammo": {
                "priority": 2,
                "recommended": "0-1x",
                "notes": "Already has enough ammo and reload speed, However having one roll would still be nice"
            },
            "atk": {
                "priority": 2,
                "recommended": "0-2x",
                "notes": "Doesn't scale well with ATK rolls, but it is still something"
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 5,
                "recommended": "4x",
                "notes": "more Burst DMG consistency"
            },
            "crit_rate": {
                "priority": 5,
                "recommended": "4x",
                "notes": "For NUKING"
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Good unit, however doesn't excel in all contents of the game, and is considered rather “Niche”. Will be mostly used for bosses."
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Bastion],
            "notes": "Vigor Increases her burst damage."
        }
    },  "a2": {
        "ratings": {
            "story": 8.5,
            "pvp": 8.7,
            "boss": 8.4,
            "notes": "Good DPS unit against bosses with parts, falls off real fast if there's none"
        }, "skills": {
            "priority": "High",
            "budget": "1/1/1",
            "recommended": "7/7/7",
            "notes": ["All skills pretty much synergize with each other, and hold almost equal value."]
        }, "overloads": {
            "priority": "Low",
            "priority_rank": 4,
            "elemental_damage": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "Situationally useful"
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": "Useless on RL’s"
            },
            "max_ammo": {
                "priority": 2,
                "recommended": "1-2x",
                "notes": "Reload speed is fast, her attack speed is rather slow as well. Not too needed"
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Absolutely wants ATK rolls"
            },
            "charge_damage": {
                "priority": 3,
                "recommended": "1-2x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 4,
                "recommended": "3-4x",
                "notes": "Benefits slightly less because of animation delay."
            },
            "crit_damage": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Great early game unit for clearing campaign, however falls off in hard mode campaign under high deficits. Niche boss killer as she requires bosses with strong parts for her to deal respectable damage. Exceeds scarlets damage at 2+ parts."
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Post Overloaded equipment with 1+ Max ammo rolls, Bastion Becomes Best in Slot"
        }
    }, "ade": {
        "ratings": {
            "story": 7.1,
            "pvp": 5,
            "boss": 7,
            "notes": "Used mostly against content that needs cleanse. Not viable anywhere else"
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "3/1/3",
            "notes": ["Skill 1 and Burst give too little to invest to.",
                "Skill 2 Needs to be at level 5 to even proc her Skill 1 outside of full burst. Most of the time, the Player will be in Full burst Anyways. Upgrade to level 5 if wanted"]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Wants to fire as much as possible to get her Cleanse procs faster"
        }
    }, "admi": {
        "ratings": {
            "story": 7.5,
            "pvp": 2,
            "boss": 7.5,
            "notes": "Strong reload speed buffer, pairs very well with Scarlet and/or Alice to help them reach 100% reload speed. Also a decent charge support, or last bullet support with Privaty."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/4/5",
            "notes": ["Skill 1 requires getting hit 20 times to proc passive which is horrible.",
                "Burst not too highly rated as reload speed slightly falls off late game if over/invested; also needs to be with Scarlet or Modernia to benefit greatly"]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "alice": {
        "ratings": {
            "story": 9.3,
            "pvp": 9.1,
            "boss": 9.8,
            "notes": "Very strong self DPS buffs on burst that scales extremely well with reload speed and charge speed buffs. Good charge shot support. Good AoE from pierce. Must be kept above 80% HP for pierce, but this is easily achievable thanks to her passive."
        }, "skills": {
            "priority": "Highest",
            "budget": "7/4/7",
            "recommended": "10/4/10",
            "notes": ["Very investment hungry unit, but pays off in the late game. Burst is main priority followed by skill 1.",
                "Skill 2 can be raised just for HP leech comfort. Does not perform too well at lower investment levels, only invest when you plan to commit.",
                "Huge single target damage Need to max out skill 1 and burst with 2x overload rolls to reach 100% charge speed and achieve her maximum potential."]
        }, "overloads": {
            "priority": "High",
            "priority_rank": 4,
            "elemental_damage": {
                "priority": 3,
                "recommended": "2-4x",
                "notes": "Useful against bosses such as Train"
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "max_ammo": {
                "priority": 5,
                "recommended": "2-4x",
                "notes": "Get ASAP, will be spamming sniper shots with Alice when high charge speed is achieved, mandatory for high DPS"
            },
            "atk": {
                "priority": 3,
                "recommended": "2-4x",
                "notes": "She scales pretty well with attack rolls"
            },
            "charge_damage": {
                "priority": 2,
                "recommended": "1-2x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 3,
                "recommended": "1-2x",
                "notes": "1 only needed if paired with Maxwell, as you will cap 100% charge speed at high skill investments. Otherwise, have 2 Charge speed rolls to reach 100% charge speed in any team."
            },
            "crit_damage": {
                "priority": 1,
                "recommended": "0x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 1,
                "recommended": "0x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Amazing at late game, assuming high investments and proper OL's. Alice mostly wants Max ammo and charge speed (1 if paired with Maxwell, 2 for solo use). Alice's charge speed should have around ~7.5%+ from OL rolls to benefit from instant charge if not paired with Maxwell and skill investment is 10/x/10."
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Post Overloaded equipment with 2+ Max ammo rolls, Bastion Becomes best in slot. Adjutant can be considered if Charge speed is at 98% (achievable with overload rolls/Maxwell charge speed) and the user is fast at clicking."
        }
    }, "alice_wonderland_bunny": {
        "ratings": {
            "story": 7.2,
            "pvp": 6.9,
            "boss": 8.6,
            "notes": "Great passive healing. Reduces RNG in SG Tove teams, a rather strong team archetype"
        }, "skills": {
            "priority": "Medium",
            "budget": "4/4/4",
            "recommended": "4/7+/4",
            "notes": ["Alice: Wonderland Bunny has enough healing to sustain most teams with low investments.",
                "However her skill 2 needs a bit more investment as her partial reload is a strong buff for SG teams, and the skill values starts very low. Level as needed"]
        }, "cube": {
            "cube": [CubeName.Bastion],
            "notes": "Bastion = More bullet uptime for more heals, Resilience should perform similarly."
        }
    }, "anis_sparkling_summer": {
        "ratings": {
            "story": 8.1,
            "pvp": 9.7,
            "boss": 9.1,
            "notes": "Does great in all forms of content. She has very strong personal damage and buffs for electric code teams."
        }, "skills": {
            "priority": "High",
            "budget": "7/7/4",
            "recommended": "10/10/9",
            "notes": ["Skill 1 Is where her buffs for the team lie. Really great buffs with good scaling when paired with electric teams.",
                "Skill 2 Is the meat of her damage. Works well in all content and probably the strongest skill 1/2 in the game.",
                "Burst can stay at level 4 until you have enough skill mats to level it up to 9 as that is when Anis is able to have 1 ammo on her burst without Privaty. Leveling the burst incrementally gives little benefit in normal scenarios."]
        }, "overloads": {
            "priority": "Medium",
            "priority_rank": 2,
            "elemental_damage": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "Situationally useful"
            },
            "hit_rate": {
                "priority": 2,
                "recommended": "1-4x",
                "notes": "Able to hit cores easier."
            },
            "max_ammo": {
                "priority": -1,
                "recommended": "0x",
                "notes": "STOP"
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Shotguns scale really well with ATK. Does not improve her skill 1 buffs."
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": "-"
            },
            "crit_damage": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "Max ammo not wanted, can roll into this instead"
            },
            "crit_rate": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "Max ammo not wanted, can roll into this instead"
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Great support that gets stronger with more investment. Her skill 1 benefits from more base attack so OL'ing her Helm and gloves are more priority than others. Max ammo directly nerfs her damage as it will take longer for her to proc her skill 2 (her main damage source)."
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Assault],
            "notes": "do NOT use bastion, gimps her damage because of kit nature."
        }
    }, "anne_miracle_fairy": {
        "ratings": {
            "story": 7.5,
            "pvp": 9.1,
            "boss": 7,
            "notes": "Very powerful attack buff, healing and resurrection on burst, but with a 60s CD. Strong in arena. Good in short battles with Poli or Noah for a 40s>60s>40s rotation. Not as good in boss battles as hoped due to awkward long CD, but strong attack buff can still be helpful. Unique enemy healing down on S2."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/4/5",
            "notes": ["Skill 1 doesn't heal a great amount, but does help a tad bit for survivability.",
                "Burst is Amazing in SW / Maxwell teams. Still good outside SW comp but 60s CD is simply too long sometimes. Great burst in Arena."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "aria": {
        "ratings": {
            "story": 4,
            "pvp": 2.5,
            "boss": 6,
            "notes": "A decent shielder and DPS with good crit support. Notable for enabling you to survive longer against Modernia."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "1/1/4",
            "notes": ["Aria is mostly used for shield one shot protection. Her skills don't provide much increased DPS to be worth investing into.",
                "Leveling burst won't toughen her shield durability enough to make a difference; it is already great for its purpose as is at burst level 1"]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Vigor],
            "notes": "Wants Resilience to empty out her ammo, however it is still preferred to be on DPS if possible. Vigor increases her shield HP if needed."
        }
    }, "bay": {
        "ratings": {
            "story": 6.5,
            "pvp": 9,
            "boss": 7,
            "notes": "Unique damage share buff that can be utilized in certain bosses with high single target damage (Special Interception Alteisein and Blacksmith), and a strong defensive PvP Nikke."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/4/4",
            "notes": ["All skills offer very little increases / utility in general. It is only used for damage share, no investment needed in general."]
        }, "cube": {
            "cube": [CubeName.Vigor],
            "notes": "Vigor cube = As she takes more of the damage from the damage share, she needs a bit more survivability than the others."
        }
    }, "biscuit": {
        "ratings": {
            "story": 7.1,
            "pvp": 9.6,
            "boss": 8.6,
            "notes": "One of the top supports in PvE when paired with Noir, also does pretty good in PvP when giving invul to attackers that can solo wipe enemies."
        }, "skills": {
            "priority": "High",
            "budget": "1/1/1",
            "recommended": "4/4/7",
            "notes": ["Skill 1, 2 and Burst can comfortably be raised to level 4/5 as they all do provide decent improvement towards survivability and damage, but not justifiable enough to upgrade much further."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Resilience can be replaced with Bastion as a secondary option."
        }
    }, "blanc": {
        "ratings": {
            "story": 9.2,
            "pvp": 9.1,
            "boss": 9.4,
            "notes": "The best bossing support duo in the game when paired with Noir."
        }, "skills": {
            "priority": "Highest",
            "budget": "1/5/7",
            "recommended": "1/5/10",
            "notes": ["Skill 1 is a rather weak shield, not worth investing too much skill books in.",
                "Skill 2 is where some of her healing comes from, great in boss fights.",
                "Burst is where her kit becomes pretty insane. Damage taken debuff + more healing. Very worth to upgrade to higher levels."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Resilience can be replaced with Bastion as a secondary option."
        }
    }, "brid": {
        "ratings": {
            "story": 5,
            "pvp": 4,
            "boss": 6.75,
            "notes": "Decent DPS and strong damage burst, but it is ST and requires her to be at max HP which can be difficult to maintain in higher level content."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/4/5",
            "notes": ["Skill 1 simply increases attack by a modest amount.",
                "Skill 2 and burst deal pretty solid damage however the inability to control which raptures the skill targets hurts, as well as the MAX HP condition."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "centi": {
        "ratings": {
            "story": 8,
            "pvp": 9,
            "boss": 7,
            "notes": "Currently the best shielder thanks to low cooldown. Very valuable against strong attacks, especially in late game. Superb burst energy generation. Decent defense debuffs. Strong in arena."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "5/1/1",
            "notes": ["Skill 1 decreases cooldown of shield, very useful on bosses that hit hard but don't shoot too many projectiles and kamikaze's; ineffective against enemies that shoot many projectiles.",
                "Skill 2 serves no purpose as her shield barely has HP, increasing it by a tiny amount will not protect you from more than one shot anyways.",
                "Burst provides a pretty useful defense shred."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion, CubeName.Quantum],
            "notes": "Centi wants Quantum cube in PvP"
        }
    }, "clay": {
        "ratings": {
            "story": 0,
            "pvp": 0,
            "boss": 0,
            "notes": ""
        }, "skills": {
            "priority": "",
            "budget": "",
            "recommended": "",
            "notes": [""]
        }, "cube": {
            "cube": [],
            "notes": ""
        }
    }, "cocoa": {
        "ratings": {
            "story": 5,
            "pvp": 6,
            "boss": 6,
            "notes": "Average unit, Cleanse too niche to be used generally. Cover repair is alright."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/4/1",
            "notes": ["Skill 1 has very decent cover repair.",
                "Skill 2 is slightly useless as Cocoa does not taunt.",
                "Burst grants a rather modest attack down debuff assuming full stacks of Skill 2."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "crow": {
        "ratings": {
            "story": 1.5,
            "pvp": 2,
            "boss": 1.5,
            "notes": "Her lack of a taunt makes her unable to perform as a tank. The attack debuff alone is not enough to justify taking up a slot."
        }, "skills": {
            "priority": "Lowest",
            "budget": "1/1/1",
            "recommended": "1/1/1",
            "notes": ["Skill 1 has a modest attack debuff on enemy raptures during full burst.",
                "Burst skill has uncontrollable targeting and also deals mediocre damage."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "crown": {
        "ratings": {
            "story": 10,
            "pvp": 8,
            "boss": 10,
            "notes": "Extremely strong Burst II. Has very Oppressive Offensive buffs with good defensive utility. best Burst II Nikke as of right now."
        }, "skills": {
            "priority": "Highest",
            "budget": "7/7/7",
            "recommended": "10/10/10",
            "notes": ["Skill 1 Offers More DPS gains generally. Extremely powerful when paired with other reload speed Nikkes (Privaty).",
                "However Skill 2 offers more utility and self sustainability. It is up to the Commander to choose what to raise first.",
                "Burst is basically just a big DPS buff, with a very nice team shield."]
        }, "overloads": {
            "priority": "Pending",
            "priority_rank": 0,
            "elemental_damage": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "She's able to deal decent damage. and Max ammo isn't mandatory for her due to reload speed."
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "max_ammo": {
                "priority": 5,
                "recommended": "2x",
                "notes": "Useful to proc skill 2 more often, however, has enough reload speed to keep the downtime of her skill 2 minimal. Still extremely helpful to have a few."
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Time to make the king a DPS."
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 1,
                "recommended": "0x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 1,
                "recommended": "0x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": ""
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Resilience = Any team with reload speed buffs prefer Reload speed. Since Crown has reload speed buffs, All Nikkes in the team will greatly prefer Resilience over bastion. No question. If there's not enough cubes for all Nikkes, Prioritize DPS's first over supports. Bastion = If Resilience cubes are all used."
        }
    }, "d": {
        "ratings": {
            "story": 6.55,
            "pvp": 4,
            "boss": 7.1,
            "notes": "Niche, But strong damage multiplier on bosses with parts, with the bonus of extra elemental damage against wind-weak raptures."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/1/5",
            "notes": ["Skill 1 and 2 mostly affects her personal damage, although skill 1 does it more consistently as it procs on FB and not once per battle unlike skill 2.",
                "Skill 2 also increases the stun immunity duration which is not really needed for more than 30s. Leveling skill 2 higher will increase the odds of having 2 burst cycles with extended burst timer, as the burst timer increase proc is linked with skill 2, in which i consider extended Full burst time to be a damage loss.",
                "Burst is a final damage multiplier and the strongest part of her kit. DONT over invest in skill 2 nor go over 4 because of stated reason above, it will simply gimp overall damage User may even keep skill 2 at level 1 if desired."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "d_killer_wife": {
        "ratings": {
            "story": 9.2,
            "pvp": 6,
            "boss": 9.4,
            "notes": "Great B1 buffer for Pierce Nikkes, Providing Similar buffing capabilities when compared to Liter, however less flexible."
        }, "skills": {
            "priority": "High",
            "budget": "5/7/4",
            "recommended": "7/10/5",
            "notes": ["Skill 1 is rather Niche as it only applies to Pierce Nikkes. Leave at 1 if the Commander simply does not have Pierce Nikkes at hand. Can be leveled up to 10 if desired.",
                "Skill 2 at level 10 ensures very smooth full burst rotations, level Asap if using her as your main CDR Nikke.",
                "Her burst gives rather low values across the board. Since burst mats are extremely valuable, the player can leave this at level 5, and level as needed when having surplus Mats in the future."]
        }, "overloads": {
            "priority": "Medium",
            "priority_rank": 7,
            "elemental_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "max_ammo": {
                "priority": 5,
                "recommended": "1x",
                "notes": ""
            },
            "atk": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Pretty much just wants one+ Max ammo roll to make her CDR more smooth. Doesn't need anything else besides that"
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "diesel": {
        "ratings": {
            "story": 5,
            "pvp": 6.5,
            "boss": 7,
            "notes": "Decent against Bowtie and Alteisen. Otherwise a weak taunter with low taunt duration. Interesting self and team ammo buffs, but there are better options,"
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "1/5/5",
            "notes": ["Skill 1 needs high investments to work; does good in Arena and tanking when skill is invested enough; assuming Diesel is getting hit by many small damaging bullets rather than single target nukes.",
                "Skill 2 takes too long and too many stacks to be helpful. Taunt duration is tied to her burst level."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Bastion],
            "notes": "Vigor Increases HP regen gained when getting hit, helps a lower raised Diesel's tank Special interception EX Alteisen better."
        }
    }, "dolla": {
        "ratings": {
            "story": 8.1,
            "pvp": 4,
            "boss": 8.4,
            "notes": "Core CDR unit for Union Raid and usually the best B2 option for when you don't have liter."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/4/4",
            "notes": ["Skill 1 Modest attack buff basically half the entire fight.",
                "Skill 2's strength is from cooldown reduction, which is fixed at level 1 to 10, other buffs Skill 2 give is negligible.",
                "Burst is a decent uncontrollable ST nuke."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "dorothy": {
        "ratings": {
            "story": 8.6,
            "pvp": 6,
            "boss": 9.2,
            "notes": "Very strong boss killer, she easily earns a spot in being used in a UR team, and in certain Interception bosses. With decent usage in Campaign as well."
        }, "skills": {
            "priority": "Highest",
            "budget": "7/4/7",
            "recommended": "10/7/10",
            "notes": ["Skill 1 improves CDR and massively increases team damage against parts. (By massively I mean very massive).",
                "Skill 2 pretty solid damage, however not enough to justify high investment.",
                "Burst % values start out pretty high and scales ok. Higher nuke is never bad."]
        }, "overloads": {
            "priority": "Medium",
            "priority_rank": 3,
            "elemental_damage": {
                "priority": 3,
                "recommended": "2-4x",
                "notes": "Situationally very useful. does NOT affect her burst damage though."
            },
            "hit_rate": {
                "priority": 4,
                "recommended": "3-4x",
                "notes": "Easier Core hits, more valuable now since Max Ammo capacity is unwanted."
            },
            "max_ammo": {
                "priority": -1,
                "recommended": "0x",
                "notes": "STOP"
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "More ATK, always means better, especially since she does good personal damage despite being a b1"
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 2,
                "recommended": "1-2x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 2,
                "recommended": "1-2x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Great support that is capable to do very solid damage while also giving CDR. Max ammo directly nerfs her CDR capabilities."
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Assault],
            "notes": "Do NOT use bastion."
        }
    }, "drake": {
        "ratings": {
            "story": 7.1,
            "pvp": 8.6,
            "boss": 7.9,
            "notes": "Great shotgun DPS for boss battles. Very strong buffer DPS, notably with Scarlet and Harran as she covers close range targets."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "7/4/5",
            "notes": ["Skill 1 has decent hit rate and ATK buffs on full burst.",
                "Skill 2 has good mob clearing / extra damage.",
                "Burst deals huge selected AoE damage, with a self ammo buff."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Wingman],
            "notes": ""
        }
    }, "ein": {
        "ratings": {
            "story": 8.3,
            "pvp": 7,
            "boss": 9,
            "notes": ""
        }, "skills": {
            "priority": "",
            "budget": "",
            "recommended": "",
            "notes": [""]
        }, "cube": {
            "cube": [],
            "notes": ""
        }
    }, "elegg": {
        "ratings": {
            "story": 7.4,
            "pvp": 5,
            "boss": 8.3,
            "notes": "Niche buffer, can be used as a DPS in certain teams"
        }, "skills": {
            "priority": "Medium",
            "budget": "4/4/5",
            "recommended": "4/7/7",
            "notes": ["Skill 1 Doesn't increase her personal damage by much, and not quite worth upgrading beyond 4.",
                "Skill 2 gives a rather decent ATK up.",
                "Burst fill % isn't affected and will be 100% at level 1 Burst is where Elegg will be mostly used for. However only upgrade this skill IF USING HER FOR DISTRIBUTED DAMAGE BUFF. Otherwise leave at level 4"]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Resilience = Used in Reload teams or any team with reload speed buffs (Anis: Sparkling Summer, Privaty) Bastion = Anywhere else"
        }
    }, "emilia": {
        "ratings": {
            "story": 8.6,
            "pvp": 9.2,
            "boss": 8.7,
            "notes": "Good AoE DPS. Currently the only Viable Water AoE DPS for PvE content as of right now. Consistent Wave clears with strong Burst generation"
        }, "skills": {
            "priority": "High",
            "budget": "4/7/4",
            "recommended": "7/10/7",
            "notes": ["Slightly Low scaling for both passives given by her skill 1. However, can go to level 10 + 2 charge speed rolls for PvP purposes.",
                "Skill 2 is basically her damage multiplier. Level as high as needed.",
                "Burst is the PvP Nuke, level as needed to one shot opponent teams"]
        }, "overloads": {
            "priority": "Low",
            "priority_rank": 1,
            "elemental_damage": {
                "priority": 4,
                "recommended": "4x",
                "notes": "Campaign Clearing / Raid Content"
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": "Useless on RL's"
            },
            "max_ammo": {
                "priority": 3,
                "recommended": "2x",
                "notes": "Slight Damage boost and for uptime purposes"
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Absolutely wants ATK rolls"
            },
            "charge_damage": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 4,
                "recommended": "3-4x",
                "notes": "Faster burst generation all around/ More DPS."
            },
            "crit_damage": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Similar to A2, however, has more use cases in bosses due to a better skill set"
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "emma": {
        "ratings": {
            "story": 3.5,
            "pvp": 8,
            "boss": 5,
            "notes": "Decently strong in arena. No utility other than healing, but her healing is strong."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "5/4/4",
            "notes": ["Skill 1 is great for Arena in specific teams.",
                "Skill 2 has a very troublesome condition to proc passive with not much benefits.",
                "Burst heals for quite a lot already for lower levels."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Bastion],
            "notes": "Burst and skill one healing scales off max HP, which Vigor increases. can be helpful in PvP teams."
        }
    }, "epinel": {
        "ratings": {
            "story": 6.5,
            "pvp": 5,
            "boss": 5.5,
            "notes": "Strong self attack buff on kill. Struggles when unable to stack kills. Wouldn't use anywhere except possible on Tower"
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "5/1/5",
            "notes": ["Skill 1 upgrade is essential for her damage but falls off extremely against bosses.",
                "Skill 2 buffs are quite minimal for dps gains.",
                "Burst hits pretty hard at full stack burst 1 which should take out all weaker raptures."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "eunhwa": {
        "ratings": {
            "story": 2.5,
            "pvp": 4,
            "boss": 4.7,
            "notes": "Strong ST defense down and self buffs on last hit. Unfortunately, defense down is much less valuable than attack buffs."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "1/4/4",
            "notes": ["Skill 1 bumps her personal DPS a bit.",
                "Skill 2 has a solid; basically permanent defense shred on target if manual play is considered.",
                "Burst does virtually nothing."]
        }, "cube": {
            "cube": [CubeName.Resilience],
            "notes": "Has last bullet Mechanics, Ammo increasing cubes not wanted"
        }
    }, "exia": {
        "ratings": {
            "story": 4.5,
            "pvp": 3.5,
            "boss": 4.7,
            "notes": "Decent B1 DPS. Works well with Privaty and charge support, but Pepper provides similar results with more utility."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/4/4",
            "notes": ["Skill 1 has decent attack down and def debuff however needs full Skill 2 stacks.",
                "Skill 2 bumps her personal DPS a little bit.","Burst does too little damage to consider upgrading"]
        }, "cube": {
            "cube": [CubeName.Resilience],
            "notes": "Has last bullet Mechanics, Ammo increasing cubes not wanted"
        }
    }, "folkwang": {
        "ratings": {
            "story": 5,
            "pvp": 8,
            "boss": 5.4,
            "notes": "A decent shielder most notable for allowing you to suvive modernia lasers in union raid for a little bit longer."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/4/4",
            "notes": ["Skill 1 has shield and healing buff which is nice.",
                "Skill 2 has taunt and a rather large Max HP increase.",
                "Burst heals an insane amount for your attackers and is already very solid at lower levels such as 4 or 5, therefore no further upgrades needed beyond that."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Bastion],
            "notes": ""
        }
    }, "frima": {
        "ratings": {
            "story": 4.5,
            "pvp": 2,
            "boss": 6.8,
            "notes": "Decent defense down and some healing, but outclassed by other options."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/4/4",
            "notes": ["Skill 1 has decent defense shred.",
                "Skill 2 and Burst have decent healing scaling."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": ""
        }
    }, "guillotine": {
        "ratings": {
            "story": 6.5,
            "pvp": 5,
            "boss": 8.3,
            "notes": "Must be kept under threshold HP (70%/50%) to do respectable damage. Realistically only used for electric elemental damage."
        }, "skills": {
            "priority": "High",
            "budget": "1/1/1",
            "recommended": "1/7/5",
            "notes": ["Skill 1 crit buff is a pretty welcome addition.",
                "Skill 2 is her main dps gain, It is a big ATK boost but with a rather bothersome condition.",
                "Burst is an uncontrollable hard hitting ST nuke with a not so hard condition to fulfill."]
        }, "overloads": {
            "priority": "Low",
            "priority_rank": 3,
            "elemental_damage": {
                "priority": 5,
                "recommended": "4x",
                "notes": "She'll be used for electric weak bosses."
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": "MG's have laser accuracy if fired long enough."
            },
            "max_ammo": {
                "priority": 4,
                "recommended": "3-4x",
                "notes": "Less reloads = less wind up times, which means a lot more damage."
            },
            "atk": {
                "priority": 4,
                "recommended": "4x",
                "notes": "Simply more damage."
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 2,
                "recommended": "2x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 2,
                "recommended": "2x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Post buff, she became a pretty solid unit. However Guillotine late game usage is more focused on Union raid | Solo raid purposes, more specifically on electric weak opponents. Do not OL if you're not very interested in those game modes."
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Wingman],
            "notes": "If using Anis Sparkling Summer in team, Resilience is easily the best in slot cube by a landslide."
        }
    }, "guilty": {
        "ratings": {
            "story": 6.5,
            "pvp": 7,
            "boss": 7.7,
            "notes": "Great offensive b2 unit, paired with good burst generation, def shred burst and 20s CD."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "7/1/4",
            "notes": ["Skill 1 is a very good chunk of her Overall DPS, just because it scales on your highest ATK unit.",
                "Skill 2 provides too little attack, and the stack gain is fixed, so there's not much purpose to upgrade this skill at all.",
                "Her burst does pretty good damage though, with the welcome bonus of def shred."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Wingman],
            "notes": ""
        }
    }, "harran": {
        "ratings": {
            "story": 7.9,
            "pvp": 8.6,
            "boss": 6.5,
            "notes": "Superb burst energy generation and Great AoE from skill 1, pierce, and burst. Can struggle if unable to stack kills."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/4/7",
            "notes": ["Skill 1 does decent AoE damage, but more importantly provides good burst generation.",
                "Skill 2 is where she gets massive DPS gains from but comes with a big downside of needing kills which falls off extremely late game.",
                "Burst can be slightly underleveled as it will take out most fodder mobs anyways."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "helm": {
        "ratings": {
            "story": 7.5,
            "pvp": 6.5,
            "boss": 8.6,
            "notes": "Provides interesting utility in bonus boss weakness damage, lifesteal on burst, and a good attack and crit rate buff. Pairs well as a healer with Modernia."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "5/7/5",
            "notes": ["Skill 1 has decent crit rate attack buff.",
                "Skill 2 also is a damage multiplier (not the same bracket as ATK), which means it's a pretty good dmg buff, however the values given is still rather lacking.",
                "Burst has great healing with decent ST nuke and can be left at lower levels and will still do a great job; no further upgrades needed beyond level 5 or 6."]
        }, "cube": {
            "cube": [CubeName.Resilience],
            "notes": "Has last bullet mechanic, avoid ammo-increasing cubes."
        }
    }, "helm_aquamarine": {
        "ratings": {
            "story": 8,
            "pvp": 4,
            "boss": 8.5,
            "notes": "Very Solid b2 unit against elecrtric coded bosses"
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "1/7/4",
            "notes": ["Skill 1 Adds negligible damage, but damage nonetheless.",
                "Skill 2 is her skill she'd be used for. Niche but strong.",
                "Burst does negligible damage."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "isabel": {
        "ratings": {
            "story": 3.5,
            "pvp": 5.5,
            "boss": 6.5,
            "notes": "Lowers full burst duration, allowing for faster rotations with CDR. Strong in long fights like boss fights where she is able to stack her Skill 2, especially against large bosses as she is a shotgun."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/4/7",
            "notes": ["Skill 1 has decent self offensive buffs, but stacking does take 3 burst cycles and at best case scenario, would proc at the later half of the fight with the exception of boss stages.",
                "Skill 2 has decent AoE capabilities but not too important to upgrade.",
                "Burst has a very good debuff that scales rather well, with the downside of fixed full burst time reduction."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Wingman],
            "notes": ""
        }
    }, "jackal": {
        "ratings": {
            "story": 6.5,
            "pvp": 10,
            "boss": 6,
            "notes": "Amazing PvP unit because of burst generation and damage share. Rarely used anywhere else though"
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/1/4",
            "notes": ["Skill 1 has a decent debuff on proc, however, getting hit 10 times to proc is troublesome, invest if you focus on Arena.",
                "Burst is okay if under the assumption you have ST nukes units in the such as Helm, Brid and other similar bursts."]
        }, "cube": {
            "cube": [CubeName.Quantum, CubeName.Resilience, CubeName.Bastion],
            "notes": "Use Quantum Cube for PvP."
        }
    }, "julia": {
        "ratings": {
            "story": 4,
            "pvp": 6,
            "boss": 4,
            "notes": "Performs well when paired with Rupee and Privaty, but becomes reliant on them which makes her unflexible."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/4/4",
            "notes": ["Skill 1 and 2 have good synergy, unfortunately crits aren't as beneficial as pure ATK, but a big increase to her personal dps nonetheless.",
                "Burst is a decent AoE clearer that can possibly one shot tougher mobs."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Assault],
            "notes": "Has last bullet mechanic, avoid ammo-increasing cubes."
        }
    }, "kilo": {
        "ratings": {
            "story": 7.8,
            "pvp": 9,
            "boss": 6.8,
            "notes": "Kilo's screen clear burst makes her a strong PvP Nikke and Decent Campaign Nikke."
        }, "skills": {
            "priority": "Low (PVP)",
            "budget": "4/4/7",
            "recommended": "4/4/10",
            "notes": ["Skill 1 and Skill 2 makes sure her shield doesn't break too easily in PvP.",
                "Upgrade burst as needed to guarantee team wipes in PvP"]
        }, "cube": {
            "cube": [CubeName.Vigor],
            "notes": "Vigor Cube = Increases her burst damage + Shields"
        }
    }, "laplace": {
        "ratings": {
            "story": 7.5,
            "pvp": 8.2,
            "boss": 7.9,
            "notes": "She provides good far AoE and energy support. BiS against bosses with clustered weak points (Chatterbox, Alteisen, etc). FPS can drop during burst, which triggers FPS bug and lowers DPS; tier is lower on devices with FPS issues."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "1/4/7",
            "notes": ["Skill 1 has radius increase, which is not very useful in most scenarios at all.",
                "Skill 2 increases personal dps slightly with a bonus of self buff part breaking damage which is only decent against bosses.",
                "Burst is where most of her damage comes from and scales rather well, does good damage against bosses."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "leona": {
        "ratings": {
            "story": 6,
            "pvp": 5,
            "boss": 8,
            "notes": "Most of her buffs are locked behind shotgun Nikkes. Buffs that are universal are mediocre."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/7/7",
            "notes": ["Skill 1 some decent Crit rate, although Crit damage is pretty bad in the damage formula, therefore not much investment is wanted.",
                "Skill 2 Investment Depends if using with Maid Privaty, to help her stack her skills. Otherwise can be left at skill 1.",
                "Burst has pretty nice values for Shotgun Nikkes, raise up to 7 if wanting to raise a shotgun team, leave at 4 if not."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "liter": {
        "ratings": {
            "story": 9.6,
            "pvp": 8.2,
            "boss": 10,
            "notes": "Powerful attack and CDR buffs for the whole team. Unique cover heal. BiS B1 in almost every PvE team."
        }, "skills": {
            "priority": "Highest",
            "budget": "7/5/7",
            "recommended": "10/5/10",
            "notes": ["Skill 1 and 2 are great, mid/high investments are recommended for both, as both greatly increases offensive capability and defensive capabilities for the team.",
                "Burst is also great as it does buff B2 and B3 burst AoE /Nuke outputs immensely and scales rather well."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "ludmilla": {
        "ratings": {
            "story": 2.5,
            "pvp": 6,
            "boss": 6,
            "notes": "Strong taunter against bosses thanks to her damage taken reduction self buff and attack down debuff, but often dies instantly against groups of enemies."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/1/4",
            "notes": ["Skill 1 has rather weak debuffs against 1 target that also applies on last hit of mag, and Lud's mag is rather large meaning it takes a considerable amount of time to empty a mag.",
                "Skill 2 at base level already makes her rather tanky and does scale well, however investing in skills that prevent you from being hit via more dealing more damage is more recommended still.",
                "Burst hits for peanuts."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Bastion],
            "notes": ""
        }
    }, "ludmilla_winter_owner": {
        "ratings": {
            "story": 8.2,
            "pvp": 6,
            "boss": 9.3,
            "notes": "Amazing Bossing Nikke, with decent campaign capabilities."
        }, "skills": {
            "priority": "High",
            "budget": "7/5/7",
            "recommended": "10/7/10",
            "notes": ["Skill 1 Is extremely strong. Offers Damage taken debuff (Damage multiplier), Ammo refund and proc damage.",
                "Skill 2 is a bit less desirable, but it is still on a strong Nikke, rather high investments are still wanted.",
                "Burst increases her ATK and reload speed greatly. It is recommended to stick to level 7 burst until higher priority Nikkes bursts are at 10."]
        }, "overloads": {
            "priority": "Medium",
            "priority_rank": 1,
            "elemental_damage": {
                "priority": 4,
                "recommended": "4x",
                "notes": "wanted for Union raids and Solo raid content."
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "max_ammo": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "Ludmilla already has high uptime because of her skill kit. So max ammo isn't too mandatory, however 2x ammo rolls is still very recommended. This also enables infinite uptime for bunny team."
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Simply more damage."
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 3,
                "recommended": "2x",
                "notes": "Has in-built crit rate in her skills, so going for crit based rolls is decent."
            },
            "crit_rate": {
                "priority": 3,
                "recommended": "2x",
                "notes": "Has in-built crit rate in her skills, so going for crit based rolls is decent."
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Great boss killer, almost on par with Modernia but easier to build. She's only in Mid Priority as she isn't as oppressive as Modernia in Campaign. Slightly benefits from crit rate and crit damage rolls due to innate crit rate in her kit compared to other Nikkes."
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": "During early game, use Bastion. At late game, use Resilience."
        }
    }, "maiden": {
        "ratings": {
            "story": 5.5,
            "pvp": 9,
            "boss": 5.5,
            "notes": "Strong close range DPS. Powerful self buffs when attacked, but she can start dying from her own taunt in some stages."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "5/1/5",
            "notes": ["Skill 1 is strong on paper, but the condition to proc makes it practically useless; getting hit 20 times is a death wish in campaign, but can be proc'd in Arena.",
                "Skill 2 however is big buff to her damage despite the taunt implemented in the skill.",
                "Burst does okay AoE damage but condition to deal more damage is having Skill 1 proc which is horrible outside Arena."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Wingman],
            "notes": ""
        }
    }, "makima": {
        "ratings": {
            "story": 6,
            "pvp": 8.6,
            "boss": 7,
            "notes": "Her skill 2 (5s invulnerabiltiy upon recieving a fatal hit) is strong in pvp and when fighting SII Alteisen, also has full screen taunt."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/1/1",
            "notes": ["Skill 1 may prove useful here and there, but still rather situational as it will not proc in most stages.",
                "Skill 2 does not make her Invincibility longer through upgrades, not worth considering to upgrade.",
                "Burst helps with sustain, however her personal DPS is still horrible being a defender SMG making Life leech rather ineffective."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Despite being a tanker, she still wants to fire as much bullets as possible to activate her taunt more often. Her indom passive negates the need for more HP."
        }
    }, "marciana": {
        "ratings": {
            "story": 7,
            "pvp": 6.5,
            "boss": 8.1,
            "notes": "Versatile Healer, falls off when more Nikkes are obtained."
        }, "skills": {
            "priority": "High",
            "budget": "1/1/1",
            "recommended": "5/5/5",
            "notes": ["Skill 1 and 2 share similar invest Priority.",
                "Burst may be useless occasionally if Marciana isn't able to heal more than what Raptures are able to dish out to your team."]
        }, "cube": {
            "cube": [CubeName.Resilience],
            "notes": "Do Not run uptime increasing cubes on her."
        }
    }, "mary": {
        "ratings": {
            "story": 4,
            "pvp": 5,
            "boss": 2.9,
            "notes": "No utility other than healing, but is a shotgun. Outshone by Pepper."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/1/4",
            "notes": ["All skills just heal or increase healing; scales okay."]
        }, "cube": {
            "cube": [CubeName.Resilience],
            "notes": "Has last bullet mechanic, avoid ammo-increasing cubes."
        }
    }, "mary_bay_goddess": {
        "ratings": {
            "story": 6.5,
            "pvp": 5.5,
            "boss": 8.3,
            "notes": "Good healing, but that's about it. There are no viable Water DPS's to take advantage of her other passives."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/4/4",
            "notes": ["Skill 1 is where most of her healing will come from, most likely won't need to upgrade it past level 6 or 7+, due to her being able to heal a lot already.",
                "Skill 2 although great in paper, No team can realistically take advantage of it as of right now unless specifically building a raised mono water team.",
                "Burst will realistically be just used for Max HP healing and buff."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Vigor increases her healing."
        }
    }, "mast": {
        "ratings": {
            "story": 7.2,
            "pvp": 6.5,
            "boss": 8.4,
            "notes": "Heavily buffs crit damage and crit rate. Unfortunately, due to crit damage being rather invaluable in the formula, a select few Nikkes would greatly benefit from her buffs."
        }, "skills": {
            "priority": "High",
            "budget": "1/1/1",
            "recommended": "7/4/5",
            "notes": ["Skill 1 has pretty good scaling for crit damage, with the side of def shred.",
                "Skill 2 is only 30s, 1/6th uptime in a boss fight, not recommended to raise at higher levels.",
                "Burst level is entirely dependent on how much Max HP value you need to reach certain HP thresholds for units. Level as needed"]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "maxwell": {
        "ratings": {
            "story": 8.7,
            "pvp": 7,
            "boss": 9.2,
            "notes": "Strong Burst damage. Good attack and charge time reduction buff on full burst."
        }, "skills": {
            "priority": "Highest",
            "budget": "7/1/7",
            "recommended": "10/1/10",
            "notes": ["Skill 1 is a big attack boost to two highest unit attacks on full burst.",
                "Burst needs investment as it starts out weak but very strong at high invested levels; very good scaling."]
        }, "overloads": {
            "priority": "High",
            "priority_rank": 6,
            "elemental_damage": {
                "priority": 3,
                "recommended": "2x",
                "notes": "Comes useful situationally."
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "max_ammo": {
                "priority": 3,
                "recommended": "1x",
                "notes": "Spam shot Burst gen if needed."
            },
            "atk": {
                "priority": 5,
                "recommended": "2-4x",
                "notes": "More damage for burst NUKE."
            },
            "charge_damage": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "More damage for burst NUKE pt.2"
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 3,
                "recommended": "1-2x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 3,
                "recommended": "1-2x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "OL simply for more burst damage. Be aware that she can steal her own Skill 1 attack buff if her attack is high enough. Her Skill 1 passive accounts for the increased ATK from OL rolls in regards on who to buff."
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Onslaught],
            "notes": "Onslaught Cube is slightly usable here as Charge damage increase from Cube also Affects burst. However Normal Sniper rifle Uptime still outweighs burst damage."
        }
    }, "mica_snow_buddy": {
        "ratings": {
            "story": 7.1,
            "pvp": 8.3,
            "boss": 7.1,
            "notes": "Decent B1 buffer, however B1 slot is heavily contested by CDR Nikkes, which Mica: Snow buddy is not. One of the only debuff cleansers in the game, which can be useful in very select content"
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/4/5",
            "notes": ["Skill 1 give decent damage protection when fully stacked, with max ammo buffs. Damage protection can be useful in running no healer teams when running with tanky Nikkes (2B).",
                "Skill 2 Increases burst gen (Arena purposes) and reduces shots needed to refresh stacks, which can be useful in diesel teams / Cope solo Tia Teams.",
                "Burst simply increases the ATK given by Mica. ATK given is not enough to justify leveling it to high levels."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "milk": {
        "ratings": {
            "story": 6.5,
            "pvp": 6,
            "boss": 6,
            "notes": "Powerful attack buff to 2 allies with highest attack, but soon outclassed by team-wide Offensive Supports. Gives lifesteal on 40s burst."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/1/4",
            "notes": ["Skill 1 has a very modest team attack buff for 10s.",
                "Skill 2 has a rather hard condition to fulfill with a rather lackluster team buff anyways.",
                "Burst has decent life steal that can easily heal attackers to full at low/ mid investment."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "miranda": {
        "ratings": {
            "story": 7,
            "pvp": 4,
            "boss": 8.4,
            "notes": "Strong attack and crit damage buffs for 1 ally, but soon outclassed by Liter and N102 when you start investing in multiple DPS. Good for Snow White one shot strategies."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "1/5/7",
            "notes": ["Skill 2 and Burst have great synergy with other bursts that do very high burst damage such as Maxwell, Alice, SW and etc; assuming those units have the highest attack in team."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "modernia": {
        "ratings": {
            "story": 9.8,
            "pvp": 7.25,
            "boss": 9.2,
            "notes": "Due to the FPS Issue, Modernia has lower RoF when FPs is low. At below 35 FPS, she is unable to stack her Skill 1, and has a much lower performance. This rating is accurate to 54+ FPS; Modernia's rating is lower on lower FPS devices (emulator, android); on IOS (59+ FPS), Modernia can out-damage Scarlet."
        }, "skills": {
            "priority": "Highest",
            "budget": "7/5/5",
            "recommended": "10/10/7",
            "notes": ["Skill 1 and 2 have very good buffs for Modernia's personal damage.",
                "Burst doesn't need very high investments as her wave clearing abilities under burst is already phenomenal; also has low scaling and damage is also increased by skill 1 anyway."]
        }, "overloads": {
            "priority": "High",
            "priority_rank": 2,
            "elemental_damage": {
                "priority": 3,
                "recommended": "2-4x",
                "notes": "Useful against core bosses such as Train"
            },
            "hit_rate": {
                "priority": 1,
                "recommended": "0-1x",
                "notes": "Her ATK up passive can have full uptime without the assistance of Cooldown reduction Nikkes via her skill 2 (15s). Hit rate OL's makes this buff guaranteed, however very much not needed."
            },
            "max_ammo": {
                "priority": 4,
                "recommended": "3-4x",
                "notes": "Useful for keeping her stacks, less wind-up time from MG via less reloads/ paired with bastion cube"
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Modernia Scales really well with ATK"
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "She has a lot of crit DMG buffs built into her kit, which makes crit rate actually worth more compared to other units."
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Amazing early - late game unit. Needs max ammo to definitely ramp up her damage. She greatly benefits from Crit rate too as her kit has innate Crit damage buffs."
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Wingman],
            "notes": "Wingman is especially wanted for Non-Overload equipment players, as she reduces her own max ammo. The buff provided by wingman doesn't get affected by the ammo down, which is great. HOWEVER replace Wingman cube when overloaded gear is obtained and 1+ Max ammo roll. Assault Cube not really needed as it's almost 100% Uptime with a CDR unit anyways."
        }
    }, "moran": {
        "ratings": {
            "story": 7,
            "pvp": 9.1,
            "boss": 8,
            "notes": "Featured Damage sponge of the game. Great in PvP"
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "5/5/4",
            "notes": ["Skill 1 can offer tremendous damage reduction depending on game mode, or not much at all. Level 5 should normally be enough for Interception and Solo raid purposes. Very slight DPS improvement.",
                "Skill 2 simply increases her “health pool” and punishment she can take.",
                "Burst Simply increases her damage reduction and slightly increases her sustain, however sufficient investments in her skill 1 and 2 should be enough for her to get through most bosses without needing to invest much in her burst."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Vigor For better tanking, Resilience for more taunt uptime if needed."
        }
    }, "naga": {
        "ratings": {
            "story": 9.6,
            "pvp": 6.5,
            "boss": 9.8,
            "notes": "Versatile Burst II Nikke, stronger when paired with Tia. Has Both defensive and offensive buffs."
        }, "skills": {
            "priority": "Highest",
            "budget": "7/5/7",
            "recommended": "10/7/10",
            "notes": ["Skill 1 provides the most DPS potential out of all her skills, despite the values being high, its damage buff is limited to the core.",
                "Skill 2 Provides Great healing and decent core damage potential, upgrade beyond 5 if needed for sustain.",
                "Burst provides a decent 10s ATK buff, even more so when paired with Tia. Stop at 4 if Tia is not available for use."]
        }, "overloads": {
            "priority": "Medium",
            "priority_rank": 5,
            "elemental_damage": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Situationally useful, No other wanted rolls."
            },
            "hit_rate": {
                "priority": 3,
                "recommended": "2-4x",
                "notes": "With enough Hit rate, she can actually benefit from her core damage buff."
            },
            "max_ammo": {
                "priority": 2,
                "recommended": "1-2x",
                "notes": "Reload speed is fast, downtimes on shotguns are low. 1-2x is good enough."
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Shotguns will always greatly benefit from ATK rolls despite being a support."
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Staple Boss killer support duo when paired with Tia. Overloads are wanted mostly for increased ATK buffs from her burst and healing capabilities"
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Vigor increases her healing"
        }
    }, "neon_blue_ocean": {
        "ratings": {
            "story": 4.5,
            "pvp": 3,
            "boss": 6,
            "notes": "Only used for Solo Raid bosses weak to Water, or to form a full team for Elysion Tower"
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/5/1",
            "notes": ["Skill 1 is rather Niche as it requires burst to proc to take advantage of it. However Bursting with her is such a DPS loss, that it really won't be worth investing skill books towards to.",
                "Skill 2 is rather decent against water weak enemies.",
                "Bursting with Neon: Blue Ocean is such a DPS loss. Needs high investment to even get a slither of DPS gains, and that's assuming against water weak enemies with parts."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Wingman],
            "notes": ""
        }
    }, "nero": {
        "ratings": {
            "story": 3,
            "pvp": 8.1,
            "boss": 6.5,
            "notes": "Has a big health pool, but Nero has no means of self-sustaining herself, forcing the a healer into the team which reduces overall team damage."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/4/4",
            "notes": ["Skill 1 increases Damage resistance. Useful but not worth investing too high into unless very pvp orientated.",
                "Skill 2 has a good amount of utility packed to it, but the scaling is pretty bad.",
                "Her burst can stay at level 4 or 7 because of taunt duration break throughs. Level burst as needed."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": ""
        }
    }, "nihilister": {
        "ratings": {
            "story": 6.9,
            "pvp": 8.7,
            "boss": 6,
            "notes": "Good Burst generator, however can't be manually controlled efficiently compared to other rocket launchers"
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/4/4",
            "notes": ["All skills simply don't do enough to warrant investment towards to."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "noah": {
        "ratings": {
            "story": 6,
            "pvp": 9.3,
            "boss": 6.5,
            "notes": "Unique invulnerability on burst. Can be valuable in certain fights to ignore team wipe attacks, and is very strong in arena. Great burst energy generation and useful taunt on charge attack."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/4/4",
            "notes": ["Skill 1 is too RNG for a rather small defensive buff.",
                "Skill 2 has a rather good permanent attack down debuff on boss raptures but not worth investing compared to offensive skills.",
                "Burst provides huge defense buff on paper, but DEF scaling as of right now is rather disappointing and will not help your survivability as much as you think it would; burst starting level DEF buff is already pretty high anyway."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "noir": {
        "ratings": {
            "story": 9.2,
            "pvp": 8.6,
            "boss": 9.4,
            "notes": "The best bossing support duo in the game when paired with Blanc."
        }, "skills": {
            "priority": "High",
            "budget": "7/5/4",
            "recommended": "10/9/4",
            "notes": ["Skill 1 increases team attack basically permanently, good skill to invest towards to.",
                "Skill 2 increases max ammo capacity to 4 at level 5, so it is recommended to at least reach there. the next break point is level 9 at max ammo + 5. Ammo refresh is amazing to make sure maximum firing uptime during full burst.",
                "Burst is rather situational with the boss raptures we have currently, therefore no reason to overly upgrade it as of right now."]
        }, "overloads": {
            "priority": "Medium",
            "priority_rank": 6,
            "elemental_damage": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "Situationally useful"
            },
            "hit_rate": {
                "priority": 4,
                "recommended": "1-4x",
                "notes": "With enough hit rate rolls, Noir might as well become a sniper rifle"
            },
            "max_ammo": {
                "priority": 3,
                "recommended": "2-4x",
                "notes": "Max ammo is never bad, however she reloads extremely fast and has mag refund too. It's pretty much diminishing returns, better to focus on other stats after having 2x rolls."
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Shotguns scale really well with ATK. Does not improve her skill 1 buffs."
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 2,
                "recommended": "1-2x",
                "notes": "SG's Can't Core hit very well, Critical Damage/Rate is more useful for them (Core hits and Crit damage are in the same bracket in the damage formula)"
            },
            "crit_rate": {
                "priority": 2,
                "recommended": "1-2x",
                "notes": "SG's Can't Core hit very well, Critical Damage/Rate is more useful for them (Core hits and Crit damage are in the same bracket in the damage formula)"
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": ""
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Bastion is BiS with Noir as she provides ammo refill and increased ammo buffs / She reloads very fast anyways."
        }
    }, "noise": {
        "ratings": {
            "story": 7.4,
            "pvp": 9.3,
            "boss": 8.4,
            "notes": "Thanks to her taunt on charge attack with high uptime and self-healing, Noise is one of the best taunters in the game. However, to maintain good self-healing she must be played on manual."
        }, "skills": {
            "priority": "High",
            "budget": "5/7/7",
            "recommended": "7/7/10",
            "notes": ["Skill 1 is great in Arena but not so much in PvE content, invest if PvP focused.",
                "Skill 2 is her tool to live forever; but skill scaling is rather low, still extremely helpful for her survivability nonetheless to invest modestly into.",
                "Burst gives good max HP buff and team healing that also scales rather well. Lower Investments if not PvP focused."]
        }, "overloads": {
            "priority": "Low",
            "priority_rank": 5,
            "elemental_damage": {
                "priority": 1,
                "recommended": "0x",
                "notes": ""
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "max_ammo": {
                "priority": 0,
                "recommended": "0x",
                "notes": "More ammo gimps her healing capabilities in PvP (Self heal from skill 2 proc)."
            },
            "atk": {
                "priority": 3,
                "recommended": "2x",
                "notes": ""
            },
            "charge_damage": {
                "priority": 1,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Takes less time to empty her clip and reload. Reloading and shooting the first bullet will activate her healing proc on s2 in Arena."
            },
            "crit_damage": {
                "priority": 1,
                "recommended": "0x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 1,
                "recommended": "0x",
                "notes": ""
            },
            "def": {
                "priority": 4,
                "recommended": "3-4x",
                "notes": "More survivability. "
            },
            "notes": "OL if wanted for Strictly PvP purposes in mind as noise is a staple tank there. Extra Health on Campaign/PvE is only an added bonus. Focus For Chest, Helm, and Boots in order. Chest only is totally fine if not wanting to spend more resources on her. "
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Vigor Increases her tanking abilities and healing."
        }
    }, "novel": {
        "ratings": {
            "story": 5,
            "pvp": 3,
            "boss": 8.7,
            "notes": "Powerful +damage taken% debuff for boss battles, which can be quite valuable if there are already attack buffers on the team to avoid diminishing returns.Very inconsistent in story as her burst has unpredictable targetting. "
        }, "skills": {
            "priority": "High",
            "budget": "4/1/7",
            "recommended": "4/1/10",
            "notes": ["Skill 1 and 2 affects gameplay minimally.",
                "Burst, however, is very good for long duration boss battles and even better with very high burst damage units such as Alice, Maxwell, and SW; good skill scaling as well; great skill in Union Raids in Solo Raids."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "pepper": {
        "ratings": {
            "story": 7,
            "pvp": 8.6,
            "boss": 8.4,
            "notes": "A “healer” that heals the team by killing the enemy with an high multiplier on her burst. Her healing is still stronger on manual, but she performs well with Privaty on auto. good in boss fights with her strong ST burst and shotgun weapon type."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "7/1/7",
            "notes": ["Skill 1 has insane sustain/healing under manual play and especially paired with Privaty; very useful in boss stages that demand survivability instead of raw damage; despite rather low skill scaling, still worth investing into moderately.",
                "Burst also does great healing with a rather strong ST nuke; stacks are easily gained by manually controlling Pepper."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Vigor],
            "notes": "Her healing is based on last bullet, do NOT use ammo increasing cubes on her. When not manualing with Pepper, use Vigor instead."
        }
    }, "poli": {
        "ratings": {
            "story": 6.7,
            "pvp": 8,
            "boss": 7.6,
            "notes": "Strong buffs, damage share and shield. Great sub for close range fights."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/1/4",
            "notes": ["Skill 1 has a basically permanent uptime; but very nerfed score because of how small the buff is.",
                "Burst has a good attack buff that lasts 10s and also comes with a shield; decent sidegrade to Anne: Miracle Fairy for SW and Maxwell teams."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Vigor increases her shield HP."
        }
    }, "power": {
        "ratings": {
            "story": 7.25,
            "pvp": 8.75,
            "boss": 6.7,
            "notes": "Decent B3 DPS"
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "5/1/4",
            "notes": ["Skill 1 is good to upgrade, more attack equals more damage.",
                "Her burst is deals good damage, which can easily be used against Bosses, however it does not scale too well, so higher levels of investments are not quite worth it."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "privaty": {
        "ratings": {
            "story": 8.2,
            "pvp": 8.4,
            "boss": 8.6,
            "notes": "Free welfare unit that everyone should aim to MLB. Strong reload speed and last bullet support, but can do well on almost any team. Stun on burst allows for strategic plays in PvE and is very strong in PvP."
        }, "skills": {
            "priority": "High",
            "budget": "7/4/4",
            "recommended": "10/4/4",
            "notes": ["Skill 1 has really good scaling regarding the reload buff, and also gives a good attack buff; also scales well late game as her reduced mag debuff does not account for max ammo increases from Overload equipment. For example, if Scarlet has 30 ammo, Privaty would only reduce her ammo by 10 instead of 15 as Scarlet's base ammo count is only 20 unbuffed, basically reducing the mag debuff handicap even more. TLDR: Privaty's Skill 1 has great scaling for units that have OL equipments with the ammo max increase stat.",
                "Skill 2 can hit hard in PvE mob content, but useless in boss stages.",
                "Burst is not very important but still worth some investment; not very important as her stun is the main sought after part of the skill, not the damage."]
        }, "cube": {
            "cube": [CubeName.Resilience],
            "notes": "Has last bullet mechanic, avoid ammo-increasing cubes."
        }
    }, "privaty_unkind_maid": {
        "ratings": {
            "story": 8.3,
            "pvp": 8.6,
            "boss": 8.3,
            "notes": "Needs A specialized team to do well, otherwise performs rather averagely, Has a strong Screenwipe for campaign and PvP."
        }, "skills": {
            "priority": "High",
            "budget": "7/5/5",
            "recommended": "7/7/7",
            "notes": ["Skill 1 Gives Consistent good damage, with slight wave clear viability.",
                "Skill 2 Investment Depends if using with Tove/Leona, if not, leave it at level 1.",
                "Burst is Good for campaign purposes, higher value if the player has Crit rate rolls on gear."]
        }, "cube": {
            "cube": [CubeName.Bastion],
            "notes": "Synergizes with her skill as it also gives ammo refund, ensuring her stacks don't drop during burst"
        }
    }, "quency": {
        "ratings": {
            "story": 7,
            "pvp": 4,
            "boss": 6.65,
            "notes": "Heals 2 units with the highest attack every burst, while also giving them a MAX HP buff for a short duration. More than half uptime on her Modest ATK buff from passive."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "1/4/4",
            "notes": ["Skill 1 basically just activates once per battles under auto play, useless to invest into.",
                "Skill 2 does give pretty high uptime on a modest ATK buff.",
                "Burst Is where her healing comes from, so some investment is required there."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "quiry": {
        "ratings": {
            "story": 6.5,
            "pvp": 8.4,
            "boss": 6.8,
            "notes": "Has a pretty good Burst heal, that's about it "
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/4/5",
            "notes": ["Skill 1 and Skill 2 has pretty horrible scaling, and buff itself is mediocre.",
                "Her burst Actually does some good healing."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Vigor increases her burst healing, however does not increases the Max hp given to allies."
        }
    }, "rapunzel": {
        "ratings": {
            "story": 7,
            "pvp": 9,
            "boss": 8.3,
            "notes": "High healing per second and decent AOE damage. Unique ability to resurrect a fallen ally on burst. Sometimes resurrects an ally at 0 HP due to another bug."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "7/5/7",
            "notes": ["Skill 1 and 2 are both good sustain skills to invest into.",
                "Burst won't be used often and is used for emergency heals or resurrection."]
        }, "overloads": {
            "priority": "Low",
            "priority_rank": 6,
            "elemental_damage": {
                "priority": 1,
                "recommended": "0x",
                "notes": ""
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "max_ammo": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "Less reload time = more healing"
            },
            "atk": {
                "priority": 3,
                "recommended": "0x",
                "notes": ""
            },
            "charge_damage": {
                "priority": 1,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Very important for her healing. Note: Get at least 2-3 Max Ammo lines first/ Don't Prioritize or replace a Max ammo Line for Charge speed"
            },
            "crit_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "def": {
                "priority": 1,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "A good healer that is used in PvP and PvE."
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Vigor Increases her Healing"
        }
    }, "red_hood": {
        "ratings": {
            "story": 10,
            "pvp": 9.2,
            "boss": 10,
            "notes": "Top tier DPS in every content. Versatile, Easy to build, can be used as a buffer, Red hood has it all."
        }, "skills": {
            "priority": "Highest",
            "budget": "5/7/7",
            "recommended": "7/10/10",
            "notes": ["Skill 1 Gives more charge speed, which is then converted to charge damage during her burst. Can be raised to level 10 last, around a level behind skill 2 when upgrading.",
                "Skill 2 is mostly notable as a buffer to her burst damage, which does insane damage.",
                "Burst increases her team buffing and Burst III damage capability."]
        }, "overloads": {
            "priority": "High",
            "priority_rank": 1,
            "elemental_damage": {
                "priority": 4,
                "recommended": "4x",
                "notes": "wanted for Union raids and Solo raid content."
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "max_ammo": {
                "priority": 2,
                "recommended": "1x",
                "notes": "She gets unlimited ammo during her burst. However one roll is still wanted because of her off-burst damage and burst generation abilities."
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Simply more damage."
            },
            "charge_damage": {
                "priority": 2,
                "recommended": "0x",
                "notes": "Good to have, can be replaced with better options"
            },
            "charge_speed": {
                "priority": 4,
                "recommended": "3-4x",
                "notes": "Red hood has pretty high innate charge speed, putting even more rolls would make her fire rather fast off-burst. Excess charge speed is converted into charge damage anyways during burst."
            },
            "crit_damage": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "A much more friendly version of Alice while dealing similar damage. Not only that, she is also easier to build because of less restrictive rolls that are required when compared to other Meta DPS Nikkes. Amazing Nikke to overload first."
        }, "cube": {
            "cube": [CubeName.Adjutant, CubeName.Resilience],
            "notes": "Adjutant increases her burst damage, HOWEVER. Use adjutant only if it is of the similar level of your resilience and bastion cubes. Otherwise use Resilience/bastion because of the level stat difference."
        }
    }, "rei": {
        "ratings": {
            "story": 3,
            "pvp": 2,
            "boss": 4,
            "notes": "N/A"
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "1/1/1",
            "notes": [""]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Vigor Increases Decoy HP"
        }
    }, "rem": {
        "ratings": {
            "story": 8.4,
            "pvp": 6,
            "boss": 8.9,
            "notes": "Great Solo b2. Has DPS similar to Scarlet, Healing and ATK buffs for RL's. Needs High investment for her healing to do its job though."
        }, "skills": {
            "priority": "High",
            "budget": "7/4/4",
            "recommended": "10/7/7",
            "notes": ["Skill 1 is where most of her damage is at, massive ATK increase, which directly transfers to healing.",
                "Skill 2 gives increased life steal, and the amount that is shared.",
                "Burst doesn't increase her personal damage too much despite the high crit scaling, but has great RL ATK buffs. Can be increased higher if using/maining Rem specifically in RL teams"]
        }, "overloads": {
            "priority": "Medium",
            "priority_rank": 4,
            "elemental_damage": {
                "priority": 5,
                "recommended": "4x",
                "notes": "wanted for Union raids and Solo raid content. Can open up a more risky team for her in Solo Raid"
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "max_ammo": {
                "priority": 4,
                "recommended": "3-4x",
                "notes": "Rem is absolutely hungry for max ammo."
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Simply more damage."
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 3,
                "recommended": "3-4x",
                "notes": "High Base Crit rate from burst, making critical damage rolls wanted."
            },
            "crit_rate": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Needs heavy investment for her to start healing well, which includes overloaded gear and good equipment rolls. She also has good personal damage"
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Resilience = Used in Reload teams / Any team that buffs reload. Bastion = Anywhere else"
        }
    }, "rosanna": {
        "ratings": {
            "story": 2.5,
            "pvp": 9,
            "boss": 2,
            "notes": "Mostly used in a PvP setting to counter Jackal Teams. Even then, will not be guaranteed to do so. "
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/1/7",
            "notes": ["Skill 1 at level 4 gives 3 buff dispells. Which can be useful in arena.",
                "Skill 2 Requires a Nikke to be taken out of action to benefit from skill. Which is obviously not wanted nor worth trying to build towards to.",
                "Only invest in Burst if PvP focused."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Wingman],
            "notes": ""
        }
    }, "rosanna_chic_ocean": {
        "ratings": {
            "story": 9.3,
            "pvp": 7,
            "boss": 9,
            "notes": ""
        }, "skills": {
            "priority": "High",
            "budget": "4/4/7",
            "recommended": "4+/7+/10",
            "notes": ["Skill 1 and Skill 2 are rather Niche, and is only good when there is tanky parts or respawning parts. Upgrade as needed.",
                "Burst is the meat of her kit, upgrade ASAP."]
        }, "cube": {
            "cube": [],
            "notes": ""
        }
    }, "rupee": {
        "ratings": {
            "story": 7.7,
            "pvp": 6,
            "boss": 7.9,
            "notes": "Very high DPS with permanent self attack buff and strong team attack buff. Does not need Iron synergy to be strong."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "1/7/5",
            "notes": ["Skill 2 has big influence on her personal DPS.",
                "Burst also gives a rather modest attack buff with a 20s CD."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "rupee_winter_shopper": {
        "ratings": {
            "story": 3,
            "pvp": 4,
            "boss": 4,
            "notes": "A reload support, but struggles to live through her taunt against waves and high damage bosses in more difficult content with CP deficit. There is a 1.5 second delay between her burst and the second B1, which makes her difficult to utilize in arena."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "1/1/5",
            "notes": ["Burst has very good reload speed scaling and self life leech, but due to the nature of how her re/enter burst 1 Internal cooldown works and how useless life leech is on a defender, score is brought down."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "sakura": {
        "ratings": {
            "story": 5.5,
            "pvp": 8,
            "boss": 7,
            "notes": "Wind counter"
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "1/7/5",
            "notes": ["Skill 1 and 2 are not very beneficial as defense has rather bad scaling and does not reduce much incoming damage, and small amount of CDR is not worth very high investments.",
                "Burst can be upgraded to higher levels if needed to make train clears more comfortable."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "sakura_bloom_in_summer": {
        "ratings": {
            "story": 7.9,
            "pvp": 9,
            "boss": 9,
            "notes": ""
        }, "skills": {
            "priority": "Medium",
            "budget": "4/7/7",
            "recommended": "4+/10/10",
            "notes": ["Skill 1 is a bit niche, since it requires parts to be destroyed, and just increases skill uptime by a limited amount. Bosses that are tailor made for her will most likely have consistent/Respawning parts anyways.",
                "Skill 2 provides half uptime of strong DoT against bosses with no parts, also has better offensive buffs than what skill 1 provides.",
                "Burst is significant amount of where her damage will come from."]
        }, "cube": {
            "cube": [],
            "notes": ""
        }
    }, "scarlet": {
        "ratings": {
            "story": 8.85,
            "pvp": 9.5,
            "boss": 8.8,
            "notes": "Very high ST DPS and strong AoE Burst. Scales well with Max Ammo and Reload Speed buffs. Good in every situation."
        }, "skills": {
            "priority": "Highest",
            "budget": "7/4/4",
            "recommended": "10/5/7",
            "notes": ["Skill 1 has high level 1 base buffs but scaling is rather on the low side. However, it is still very worthwhile to invest into as she simply deals great ST damage and more attack makes her better.",
                "Skill 2 has a very minimal crit damage buff but her counter does well in Arena with the right team, invest if focused in Arena.",
                "Burst does a massively damaging AoE wipe, amplified by her Skill 1 stacks as well; also gives a nice critical rate buff when under 50% HP during cast."]
        }, "overloads": {
            "priority": "High",
            "priority_rank": 5,
            "elemental_damage": {
                "priority": 4,
                "recommended": "2-4x",
                "notes": "Comes useful situationally. (UR raids such as Black smith, Thermite) "
            },
            "hit_rate": {
                "priority": 3,
                "recommended": "2-4x",
                "notes": "Able to hit Cores easier on bosses with small cores. "
            },
            "max_ammo": {
                "priority": 5,
                "recommended": "4x",
                "notes": "Wants all ammo possible. get ASAP"
            },
            "atk": {
                "priority": 3,
                "recommended": "2x",
                "notes": "More attack is never bad, however this stat gets bloated from her passive, giving so much attack already."
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "crit_damage": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "crit_rate": {
                "priority": 2,
                "recommended": "0x",
                "notes": ""
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Pretty great unit from early - late game. OL's grant her much needed max ammo capacity to off-set her innate low ammo count. One of the most beginner friendly DPS's."
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": "When overloaded with 2-3x+ lines of Max Ammo, Bastion Becomes best in slot."
        }
    }, "scarlet_black_shadow": {
        "ratings": {
            "story": 8.8,
            "pvp": 9.2,
            "boss": 9.7,
            "notes": "Amazing All-Around Nikke. One of the Strongest Bossing Nikkes second only to piercing Nikkes. Strongest Wind Element Damage dealer as of right now. "
        }, "skills": {
            "priority": "Highest",
            "budget": "7/5/7",
            "recommended": "10/7/10",
            "notes": ["Skill 1 Is extremely strong, and where most of her damage lies.",
                "Skill 2 is makes sure she has full uptime during her burst. This can be left at 4 when using her with the bunny duo, however it is recommended to level this up to 7 in the future for her to be able to comfortably be used in Tia/Naga teams",
                "Burst massively increases her ATK and charge damage while buffing her skill "]
        }, "overloads": {
            "priority": "High",
            "priority_rank": 3,
            "elemental_damage": {
                "priority": 5,
                "recommended": "4x",
                "notes": "wanted for Union raids and Solo raid content. "
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "max_ammo": {
                "priority": 1,
                "recommended": "0-1x",
                "notes": "Her Main teams will supply her with enough ammo for her to have full uptime on her burst (where most of her damage is)."
            },
            "atk": {
                "priority": 4,
                "recommended": "4x",
                "notes": "Simply more damage"
            },
            "charge_damage": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "charge_speed": {
                "priority": 2,
                "recommended": "1x",
                "notes": "Wants at least a 4.9% Charge speed roll so she can launch one more attack during burst. "
            },
            "crit_damage": {
                "priority": 3,
                "recommended": "3-4x",
                "notes": "Max Ammo rolls not wanted, can roll into here instead"
            },
            "crit_rate": {
                "priority": 3,
                "recommended": "3-4x",
                "notes": "Max Ammo rolls not wanted, can roll into here instead"
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Very versatile Nikke that can be used in every game mode and excel at it. She isn't Overload dependent but would still love to have them for the stat increases. Immense raw damage potential."
        }, "cube": {
            "cube": [CubeName.Bastion],
            "notes": ""
        }
    }, "signal": {
        "ratings": {
            "story": 2.5,
            "pvp": 3,
            "boss": 4,
            "notes": "Decent personal damage with defence and attack down. Outclassed by attack buffers for offensive support and shielders for defensive support."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "1/1/1",
            "notes": ["Skill 2 has big life steal but due to the nature of how her kit works; life leech is kinda useless without soaking damage via taunt skills which she does not have.",
                "Burst has decent def shred."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "sin": {
        "ratings": {
            "story": 2,
            "pvp": 6.5,
            "boss": 6.5,
            "notes": "An actual Tank unit with good taunt uptime and good self sustain against bosses if survivability is needed. However she is useless against story stages in high deficit as mobs deal massive damage in high deficit stages."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/5/5",
            "notes": ["Skill 1 and 2 are her main survivability tools, with Skill 1 being more important as it provides constant healing.",
                "Burst does not need consideration as the damage dealt is miniscule, and damage taken debuff will never proc in stages she'd often be used in."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Has last bullet mechanic, avoid ammo-increasing cubes."
        }
    }, "snow_white": {
        "ratings": {
            "story": 8.3,
            "pvp": 8,
            "boss": 9.2,
            "notes": "Strong DPS with a very powerful burst that allows for great manual play skill expression. Weak in auto play."
        }, "skills": {
            "priority": "Highest",
            "budget": "4/4/7",
            "recommended": "4/7/10",
            "notes": ["Skill 2 synergizes with Burst with proper timing.",
                "Burst has insane scaling and insane damage when paired with the right team. She just needs high skill investments to plow through everything."]
        }, "overloads": {
            "priority": "High",
            "priority_rank": 7,
            "elemental_damage": {
                "priority": 3,
                "recommended": "2x",
                "notes": "Situationally Useful"
            },
            "hit_rate": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "max_ammo": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "atk": {
                "priority": 5,
                "recommended": "4x",
                "notes": "NUUUUUKE"
            },
            "charge_damage": {
                "priority": 1,
                "recommended": "0x",
                "notes": "Simply adds too little Charge DMG% to her burst (Base 1000%), Charge damage increase is additive, not multiplicative."
            },
            "charge_speed": {
                "priority": 2,
                "recommended": "1-2x",
                "notes": "Increases the amount of charge SW can do when under Liter | Novel buffs, before expiring. "
            },
            "crit_damage": {
                "priority": 3,
                "recommended": "2x",
                "notes": "NUUUUUKE"
            },
            "crit_rate": {
                "priority": 3,
                "recommended": "2x",
                "notes": "NUUUUUKE"
            },
            "def": {
                "priority": 0,
                "recommended": "0x",
                "notes": ""
            },
            "notes": "Massive burst damage. Amazing Nikke when dealing against raptures with many parts/Regenerating parts. (Notably on Solo Raid and Union Raid). Also a solid campaign clearer with high investments. "
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": "Use Adjutant when using her with Novel/Liter to fit in as much damage as possible on her burst, as their burst buffs lasts 5s, but SW takes longer than 5s to fully charge."
        }
    }, "snow_white_innocent_days": {
        "ratings": {
            "story": 7.6,
            "pvp": 6,
            "boss": 7.8,
            "notes": "Good Welfare Nikke that has decent personal damage and solid AoE capabilities."
        }, "skills": {
            "priority": "Medium",
            "budget": "-",
            "recommended": "4/7/7",
            "notes": ["Skill 1: The extra damage is not enough to justify bringing this skill to level 7. The same goes for extra ammo as the benefit has diminishing returns",
                "Skill 2: Mainly for the extra Attack Damage ▲, not worth upgrading past this point as she'll can be replaced easily and high skill investment should be reserved for staple units.",
                "Burst: Bumps up her self ATK buff, not worth upgrading past 7 for the same reason as Skill 2"]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "soda": {
        "ratings": {
            "story": 5.5,
            "pvp": 6,
            "boss": 6,
            "notes": "A good healer that comes with a 20s cooldown, and has good self sustain as well."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/5/4",
            "notes": ["Skill 1 and 2 Synergize with each other; both need to be raised to get optimal healing from her.",
                "Soda's skills scale rather well but high investments are not recommended unless she is your only healer.",
                "Soda's burst is not even worth considering upgrading."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Bastion],
            "notes": "Vigor Increases her Healing."
        }
    }, "soda_twinkling_bunny": {
        "ratings": {
            "story": 8.3,
            "pvp": 8.7,
            "boss": 8.7,
            "notes": "Strong niche unit, Soda: Twinkling bunny is used in Shotgun teams, paired with Tove and Leona. She does rather bad in other teams due to unconditional full burst timer"
        }, "skills": {
            "priority": "",
            "budget": "",
            "recommended": "",
            "notes": [""]
        }, "cube": {
            "cube": [],
            "notes": ""
        }
    }, "soline": {
        "ratings": {
            "story": 6.5,
            "pvp": 4,
            "boss": 7.9,
            "notes": "Can rival scarlet when bossing, but is a very niche unit because she needs to be full hp at all times."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "1/7/7",
            "notes": ["Skill 1 is broken. Doesn't give Fire rate at all.",
                "Skill 2 post Soline buff actually gives her a big dps boost when max HP",
                "Burst Additional proc hits 3 times instead of once (max hp), making it a hard hitting burst. Unknown if bug will be fixed anytime soon."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "sugar": {
        "ratings": {
            "story": 6.5,
            "pvp": 8.6,
            "boss": 7.9,
            "notes": "Strong shotgun DPS. Provides useful max ammo buff to other shotguns, making her a staple in shotgun teams."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "1/5/7",
            "notes": ["Skill 1 required getting hit to get ok buffs.",
                "Skill 2 and Burst synergize well with each other. Higher skill investments would greatly benefit Shotgun teams."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Bastion can actually be used because of max ammo increase on burst. Wingman holds less value."
        }
    }, "tia": {
        "ratings": {
            "story": 9.4,
            "pvp": 8.6,
            "boss": 9.8,
            "notes": "Can be Great in low deficit clearing, however her taunt mechanics greatly reduce her late game clearing capabilities"
        }, "skills": {
            "priority": "Highest",
            "budget": "7/4/4",
            "recommended": "10/5/4",
            "notes": ["Skill 1 Is the meat of her offensive support capabilities. Extremely good buff, level asap for solo raid and union raid usage.",
                "Skill 2 Improves her cover survivability, but usually this won't be an issue as she provides enough at low levels.",
                "Burst simply gives shields, no investment really needed."]
        }, "cube": {
            "cube": [CubeName.Vigor, CubeName.Resilience],
            "notes": "Vigor increases her cover indirectly and increases cover recovery."
        }
    }, "tove": {
        "ratings": {
            "story": 6,
            "pvp": 5.5,
            "boss": 8.4,
            "notes": "Great Shotgun Team Buffer, however most shotgun Nikkes are phased out of the meta as of right now. Useless outside Shotgun teams"
        }, "skills": {
            "priority": "Medium",
            "budget": "9/4/4",
            "recommended": "9/7/7",
            "notes": ["Skill 1 Gives more consistency towards her stack gain and gives more ammo. One can stop at level 6 as she's not a meta defining character as of right now. But it is recommended to level up this skill to level 9 for stacking consistency.",
                "Skill 2 gives more attack speed and skill level 6 is a breakthrough on increased ATK spd. Anymore than level 6 is not worth the skill books.",
                "Burst provides a simple yet big ATK buff for shotgun Nikkes."]
        }, "cube": {
            "cube": [CubeName.Bastion],
            "notes": "Bastion = Increased Ammo Count"
        }
    }, "trony": {
        "ratings": {
            "story": 6.8,
            "pvp": 4,
            "boss": 7.8,
            "notes": "Does pretty good single target damage when played manually and with her preferred teams. Nothing too impressive however, bad in all other forms of content."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/5",
            "recommended": "4/4/7",
            "notes": ["Skill 1 and Skill 2 reduces the amount of full charge shoots during full burst cycles when spamming shots on manual.",
                "Burst is where most of her damage will come from, needs rather heavy investment for her to deal respectable damage "]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": "Resilience - Any team that has reload speed buffers. Bastion - If no more resilience cube slots"
        }
    }, "vesti": {
        "ratings": {
            "story": 5.5,
            "pvp": 7,
            "boss": 6.5,
            "notes": "Lowers full burst duration, allowing for faster rotations with CDR. Notable for having high splash radius (can hit many boss parts if they are close to eachother, like chatterbox, thermite etc)"
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "4/7/7",
            "notes": ["Skill 1 simply increases explosion radius.",
                "Skill 2 does increase crit damage and crit rate modestly, but the ATK buff is miniscule.",
                "Burst simply takes too long to stack to be useful in stages but still does okay."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "viper": {
        "ratings": {
            "story": 6.8,
            "pvp": 8.5,
            "boss": 6.9,
            "notes": "Decent b2 Offensive option, Competes against guilty regarding utility via better burst gen, but weaker personal damage."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/1/4",
            "notes": ["Skill 1 is slightly useful in campaign, but uses are simply too limited in a fight to be investing at high levels.",
                "Burst deals decent ST nuke with good defense shred."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Wingman],
            "notes": ""
        }
    }, "volume": {
        "ratings": {
            "story": 8.4,
            "pvp": 5,
            "boss": 8.7,
            "notes": "Strong CDR and crit buffs for the whole team, but still outclassed by Liter. Used in union raid teams that dont have liter or dolla in them."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "1/5/5",
            "notes": ["Skill 1 simply never procs and the attack buff affects her minimally anyway.",
                "Skill 2 buffs are not good and CDR is fixed on skill level 1.",
                "Burst is decent for crit focused teams such as Julia and Maiden."]
        }, "cube": {
            "cube": [CubeName.Bastion, CubeName.Resilience],
            "notes": ""
        }
    }, "yan": {
        "ratings": {
            "story": 3.5,
            "pvp": 1.5,
            "boss": 3.5,
            "notes": "Decent charge buffer, but Liter is better. Unique enemy grouping CC."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "1/1/1",
            "notes": ["Skill 1 works okay only in RL teams, which are used against Obelisk in Union Raid.",
                "Burst is used for relocating raptures which is fixed; not for her damage."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "yulha": {
        "ratings": {
            "story": 6,
            "pvp": 4,
            "boss": 7.5,
            "notes": "The strongest attack buff in the game, but can be difficult to utilize around her 30s cooldown."
        }, "skills": {
            "priority": "Medium",
            "budget": "1/1/1",
            "recommended": "4/7/4",
            "notes": ["Skill 1 has a horrible condition to proc, getting hit 30 times.",
                "Skill 2 is great for SW and MX teams with proper timing."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "yuni": {
        "ratings": {
            "story": 5,
            "pvp": 5.5,
            "boss": 5.75,
            "notes": "Good charge speed support for Alice. Can be used a sub."
        }, "skills": {
            "priority": "Low",
            "budget": "1/1/1",
            "recommended": "5/4/4",
            "notes": ["Skill 1 maybe be useful in RL based teams.",
                "Skill 2 simply provides too little to even matter."]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "zwei": {
        "ratings": {
            "story": 7.9,
            "pvp": 7,
            "boss": 8.6,
            "notes": "Works good in her niche pierce teams, however still outshadowed by the top tier burst II supports even in pierce teams. Pairs better with Snow white and Maxwell."
        }, "skills": {
            "priority": "Medium",
            "budget": "7/4/4",
            "recommended": "10/7/7+",
            "notes": ["Skill 1 Is strong when paired with Maxwell/Snow white, as their bursts are massive, one shot hits. Less effective with Alice and Red hood due to the limit of one of the buffs only lasting a hit.",
                "Skill 2 can be upgraded as needed for survivability.",
                "Burst mats are scarce, so only upgrade beyond 7 if needed, the values are not high enough to warrant spending gold books."]
        }, "cube": {
            "cube": [],
            "notes": ""
        }
    }, "anis": {
        "ratings": {
            "story": 6.5,
            "pvp": 9,
            "boss": 3,
            "notes": "Best SR B2 for auto play. Superb burst energy generarion. Good kit and strong burst. Falls off due to lower SR base stats."
        }, "skills": {
            "priority": "Lowest",
            "budget": "1/1/1",
            "recommended": "1/1/1",
            "notes": [""]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "product_08": {
        "ratings": {
            "story": 1,
            "pvp": 1,
            "boss": 1,
            "notes": "No longer has any use after nerf, unless you don't have Neon for Elysion Tower."
        }, "skills": {
            "priority": "Lowest",
            "budget": "1/1/1",
            "recommended": "1/1/1",
            "notes": [""]
        }, "cube": {
            "cube": [CubeName.Resilience, CubeName.Bastion],
            "notes": ""
        }
    }, "template": {
        ratings: {
            story: 0,
            pvp: 0,
            boss: 0,
            notes: ""
        }, skills: {
            priority: "",
            budget: "",
            recommended: "",
            notes: [""]
        }, cube: {
            cube: [],
            notes: ""
        }
    }
}