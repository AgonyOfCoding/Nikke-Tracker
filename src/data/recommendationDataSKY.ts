import { RecommendationData } from "../types";

export const recommendation_data_SKY: RecommendationData[] = [
    {
        id: 'modernia',
        priority: 'High',
        skills: ['10', '10', '7-10'],
        overloads: [
            {
                attribute: 'Hit Rate',
                priority: 'ideal',
                count: '0-1'
            },{
                attribute: 'Max Ammo',
                priority: 'ideal',
                count: '2-4'
            },{
                attribute: 'ATK',
                priority: 'ideal',
                count: '3-4'
            },{
                attribute: 'Elemental Damage',
                priority: 'ideal',
                count: '3-4'
            },{
                attribute: 'Crit Rate',
                priority: 'good',
                count: '0-4'
            },{
                attribute: 'Crit Damage',
                priority: 'passable',
                count: '0-4'
            }
        ],
        notes: ""
    },{
        id: 'red_hood',
        priority: 'High',
        skills: ['10', '10', '10'],
        overloads: [
            {
                attribute: 'ATK',
                priority: 'ideal',
                count: '4'
            },{
                attribute: 'Elemental Damage',
                priority: 'ideal',
                count: '4'
            },{
                attribute: 'Charge Speed',
                priority: 'ideal',
                count: '0-4'
            },{
                attribute: 'Max Ammo',
                priority: 'good',
                count: '1'
            },{
                attribute: 'Additional Max Ammo',
                priority: 'fine',
                count: '0-3'
            },{
                attribute: 'Charge Damage',
                priority: 'fine',
                count: '0-4'
            },{
                attribute: 'Crit Rate',
                priority: 'passable',
                count: '0-4'
            },{
                attribute: 'Crit Damage',
                priority: 'passable',
                count: '0-4'
            }
        ],
        notes: ""
    },{
        id: 'scarlet',
        priority: 'High',
        skills: ['10', '4+', '7-10'],
        overloads: [
            {
                attribute: 'Max Ammo',
                priority: 'ideal',
                count: '3-4'
            },{
                attribute: 'Elemental Damage',
                priority: 'ideal',
                count: '4'
            },{
                attribute: 'ATK',
                priority: 'ideal',
                count: '0-4'
            },{
                attribute: 'Crit Damage',
                priority: 'good',
                count: '0-4'
            },{
                attribute: 'Crit Rate',
                priority: 'good',
                count: '0-4'
            },{
                attribute: 'Hit Rate',
                priority: 'fine',
                count: '0-4'
            }
        ],
        notes: ""
    },{
        id: 'snow_white',
        priority: 'Medium',
        skills: ['4', '4-10', '10'],
        overloads: [
            {
                attribute: 'ATK',
                priority: 'ideal',
                count: '4'
            },{
                attribute: 'Elemental Damage',
                priority: 'ideal',
                count: '4'
            },{
                attribute: 'Crit Rate',
                priority: 'good',
                count: '0-4'
            },{
                attribute: 'Charge Speed',
                priority: 'good',
                count: '0-3'
            },{
                attribute: 'Max Ammo',
                priority: 'passable',
                count: '0-2'
            },{
                attribute: 'Crit Damage',
                priority: 'passable',
                count: '0-4'
            },{
                attribute: 'Charge Damage',
                priority: 'passable',
                count: '0-4'
            }
        ],
        notes: ""
    }
]