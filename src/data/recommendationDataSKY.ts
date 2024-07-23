import { NikkePriority, OverloadPriority, RecommendationData } from "../types";

export const recommendation_data_SKY: RecommendationData[] = [
    {
        id: 'modernia',
        priority: NikkePriority.High,
        skills: ['10', '10', '7-10'],
        overloads: [
            {
                attribute: 'Hit Rate',
                priority: OverloadPriority.ideal,
                count: '0-1'
            },{
                attribute: 'Max Ammo',
                priority: OverloadPriority.ideal,
                count: '2-4'
            },{
                attribute: 'ATK',
                priority: OverloadPriority.ideal,
                count: '3-4'
            },{
                attribute: 'Elemental Damage',
                priority: OverloadPriority.ideal,
                count: '3-4'
            },{
                attribute: 'Crit Rate',
                priority: OverloadPriority.good,
                count: '0-4'
            },{
                attribute: 'Crit Damage',
                priority: OverloadPriority.passable,
                count: '0-4'
            }
        ],
        notes: ""
    },{
        id: 'red_hood',
        priority: NikkePriority.High,
        skills: ['10', '10', '10'],
        overloads: [
            {
                attribute: 'ATK',
                priority: OverloadPriority.ideal,
                count: '4'
            },{
                attribute: 'Elemental Damage',
                priority: OverloadPriority.ideal,
                count: '4'
            },{
                attribute: 'Charge Speed',
                priority: OverloadPriority.ideal,
                count: '0-4'
            },{
                attribute: 'Max Ammo',
                priority: OverloadPriority.good,
                count: '1'
            },{
                attribute: 'Additional Max Ammo',
                priority: OverloadPriority.fine,
                count: '0-3'
            },{
                attribute: 'Charge Damage',
                priority: OverloadPriority.fine,
                count: '0-4'
            },{
                attribute: 'Crit Rate',
                priority: OverloadPriority.passable,
                count: '0-4'
            },{
                attribute: 'Crit Damage',
                priority: OverloadPriority.passable,
                count: '0-4'
            }
        ],
        notes: ""
    },{
        id: 'scarlet',
        priority: NikkePriority.High,
        skills: ['10', '4+', '7-10'],
        overloads: [
            {
                attribute: 'Max Ammo',
                priority: OverloadPriority.ideal,
                count: '3-4'
            },{
                attribute: 'Elemental Damage',
                priority: OverloadPriority.ideal,
                count: '4'
            },{
                attribute: 'ATK',
                priority: OverloadPriority.ideal,
                count: '0-4'
            },{
                attribute: 'Crit Damage',
                priority: OverloadPriority.good,
                count: '0-4'
            },{
                attribute: 'Crit Rate',
                priority: OverloadPriority.good,
                count: '0-4'
            },{
                attribute: 'Hit Rate',
                priority: OverloadPriority.fine,
                count: '0-4'
            }
        ],
        notes: ""
    },{
        id: 'snow_white',
        priority: NikkePriority.Medium,
        skills: ['4', '4-10', '10'],
        overloads: [
            {
                attribute: 'ATK',
                priority: OverloadPriority.ideal,
                count: '4'
            },{
                attribute: 'Elemental Damage',
                priority: OverloadPriority.ideal,
                count: '4'
            },{
                attribute: 'Crit Rate',
                priority: OverloadPriority.good,
                count: '0-4'
            },{
                attribute: 'Charge Speed',
                priority: OverloadPriority.good,
                count: '0-3'
            },{
                attribute: 'Max Ammo',
                priority: OverloadPriority.passable,
                count: '0-2'
            },{
                attribute: 'Crit Damage',
                priority: OverloadPriority.passable,
                count: '0-4'
            },{
                attribute: 'Charge Damage',
                priority: OverloadPriority.passable,
                count: '0-4'
            }
        ],
        notes: ""
    }
]