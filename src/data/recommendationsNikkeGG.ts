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
    }
}