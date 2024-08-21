import { OverloadsNikkeGG, WeaponType } from "../types";

export function getNikkeGGOverloadArchitype(weapon_type: WeaponType): OverloadsNikkeGG {
    switch (weapon_type) {
        case WeaponType.AR:
        default:
            return nikke_gg_overload_archetype_AR;
        case WeaponType.MG:
            return nikke_gg_overload_archetype_MG;
        case WeaponType.RL:
            return nikke_gg_overload_archetype_RL;
        case WeaponType.SG:
            return nikke_gg_overload_archetype_SG;
        case WeaponType.SMG:
            return nikke_gg_overload_archetype_SMG;
        case WeaponType.SR:
            return nikke_gg_overload_archetype_SR;
    }
}

const nikke_gg_overload_archetype_AR: OverloadsNikkeGG = {
    priority: "-",
    priority_rank: 0,
    elemental_damage: {
        priority: 3,
        recommended: "2x",
        notes: "Situationally useful"
    },
    hit_rate: {
        priority: 3,
        recommended: "2-4x",
        notes: "More core hits"
    },
    max_ammo: {
        priority: 3,
        recommended: "1-2x",
        notes: "They have high base reload speed anyways."
    },
    atk: {
        priority: 5,
        recommended: "4x",
        notes: "More damage"
    },
    charge_damage: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    charge_speed: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    crit_damage: {
        priority: 1,
        recommended: "0x",
        notes: ""
    },
    crit_rate: {
        priority: 1,
        recommended: "0x",
        notes: ""
    },
    def: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    notes: ""
}
const nikke_gg_overload_archetype_SMG: OverloadsNikkeGG = {
    priority: "-",
    priority_rank: 0,
    elemental_damage: {
        priority: 3,
        recommended: "2x",
        notes: "Situationally useful"
    },
    hit_rate: {
        priority: 3,
        recommended: "2-4x",
        notes: "More core hits/ ability to actually hit things mid range"
    },
    max_ammo: {
        priority: 3,
        recommended: "1-2x",
        notes: "Fast reload Speed anyways (Exception of novel, she benefits rather quite a bit from this via faster stacks)"
    },
    atk: {
        priority: 5,
        recommended: "4x",
        notes: "More damage"
    },
    charge_damage: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    charge_speed: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    crit_damage: {
        priority: 1,
        recommended: "0x",
        notes: ""
    },
    crit_rate: {
        priority: 1,
        recommended: "0x",
        notes: ""
    },
    def: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    notes: ""
}
const nikke_gg_overload_archetype_RL: OverloadsNikkeGG = {
    priority: "-",
    priority_rank: 0,
    elemental_damage: {
        priority: 3,
        recommended: "1-2x",
        notes: "Situationally useful"
    },
    hit_rate: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    max_ammo: {
        priority: 5,
        recommended: "2-4x",
        notes: "More Spam shots for burst generation"
    },
    atk: {
        priority: 3,
        recommended: "2x",
        notes: "More damage"
    },
    charge_damage: {
        priority: 3,
        recommended: "2-4x",
        notes: ""
    },
    charge_speed: {
        priority: 3,
        recommended: "2-4x",
        notes: ""
    },
    crit_damage: {
        priority: 1,
        recommended: "0x",
        notes: ""
    },
    crit_rate: {
        priority: 1,
        recommended: "0x",
        notes: ""
    },
    def: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    notes: ""
}
const nikke_gg_overload_archetype_SR: OverloadsNikkeGG = {
    priority: "-",
    priority_rank: 0,
    elemental_damage: {
        priority: 3,
        recommended: "2x",
        notes: "Situationally useful"
    },
    hit_rate: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    max_ammo: {
        priority: 5,
        recommended: "2-3x",
        notes: "More spam shots for burst gen if needed"
    },
    atk: {
        priority: 3,
        recommended: "2-4x",
        notes: "More damage"
    },
    charge_damage: {
        priority: 3,
        recommended: "2x",
        notes: ""
    },
    charge_speed: {
        priority: 3,
        recommended: "2-4x",
        notes: ""
    },
    crit_damage: {
        priority: 1,
        recommended: "0x",
        notes: ""
    },
    crit_rate: {
        priority: 1,
        recommended: "0x",
        notes: ""
    },
    def: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    notes: ""
}
const nikke_gg_overload_archetype_SG: OverloadsNikkeGG = {
    priority: "-",
    priority_rank: 0,
    elemental_damage: {
        priority: 3,
        recommended: "2x",
        notes: "Situationally useful"
    },
    hit_rate: {
        priority: 3,
        recommended: "1-4x",
        notes: "Useful when using in campaign, less against bosses. May be able to hit boss core more often nonetheless"
    },
    max_ammo: {
        priority: 4,
        recommended: "2-4x",
        notes: "Ammo is useful, however, having Ammo+ will invalidate fast reload speed and priv combo (shoots faster with higher reload speed and mag debuff from privaty), still really good though. Do NOT have this roll on Pepper though. This roll will hugely gimp her Healing capability."
    },
    atk: {
        priority: 5,
        recommended: "4x",
        notes: "Shotguns scale really well with attk"
    },
    charge_damage: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    charge_speed: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    crit_damage: {
        priority: 2,
        recommended: "0x",
        notes: "SG's Can't Core hit very well, Critical Damage/Rate is more useful for them (Core hits and Crit damage share the same bracket in the damage formula)"
    },
    crit_rate: {
        priority: 2,
        recommended: "0x",
        notes: "SG's Can't Core hit very well, Critical Damage/Rate is more useful for them (Core hits and Crit damage share the same bracket in the damage formula)"
    },
    def: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    notes: ""
}
const nikke_gg_overload_archetype_MG: OverloadsNikkeGG = {
    priority: "-",
    priority_rank: 0,
    elemental_damage: {
        priority: 3,
        recommended: "2x",
        notes: "Situationally useful"
    },
    hit_rate: {
        priority: 0,
        recommended: "0x",
        notes: "Mg's have laser point accuracy if fired long enough, not needed at all."
    },
    max_ammo: {
        priority: 5,
        recommended: "3-4x",
        notes: "Extremely useful to reducing the downtime of MG's, as you want to reload as little as possible due to wind-up time and long reload times."
    },
    atk: {
        priority: 5,
        recommended: "4x",
        notes: "MG's scale really well with attack."
    },
    charge_damage: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    charge_speed: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    crit_damage: {
        priority: 2,
        recommended: "1-2x",
        notes: ""
    },
    crit_rate: {
        priority: 2,
        recommended: "1-2x",
        notes: ""
    },
    def: {
        priority: 0,
        recommended: "0x",
        notes: ""
    },
    notes: ""
}