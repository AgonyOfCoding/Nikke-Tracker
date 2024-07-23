import React from 'react';
import { Burst, NikkeElement, NikkeManufacturer, NikkePriority, NikkeRarity, NikkeRole, NikkeSkills, NikkeStaticData, RecommendationData, WeaponType } from '../types';
import NikkeEntry from './nikkeEntry';
import { recommendation_data_SKY } from '../data/recommendationDataSKY';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { FilterOptions } from '../state/filterOptions';
import nikkeDataJson from '../data/nikkeStaticData.json'

const getRecommendationData = (source: string): RecommendationData[] => {
    switch (source) {
        case 'sky':
        default:
            return recommendation_data_SKY;
        case 'nikke_gg':
            return recommendation_data_SKY;
        case 'prydwen':
            return recommendation_data_SKY;
    }
}

const transformData = (data: { [key: string]: any }): { [key: string]: NikkeStaticData } => {
    const transformedData: { [key: string]: NikkeStaticData } = {};

    Object.keys(data).forEach(key => {
        const entry = data[key];
        transformedData[key] = {
            id: entry.id,
            name: entry.name,
            manufacturer: entry.manufacturer as NikkeManufacturer,
            role: entry.role as NikkeRole,
            weapon_type: entry.weapon_type as WeaponType,
            rarity: entry.rarity as NikkeRarity,
            burst: entry.burst as Burst,
            element: entry.element as NikkeElement,
            skills: entry.skills as NikkeSkills
        };
    });

    return transformedData;
};

const NikkeList: React.FC = () => {
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter)

    const nikkeData: { [key: string]: NikkeStaticData } = transformData(nikkeDataJson);

    var filtered_static_data: NikkeStaticData[] = Object.values(nikkeData).filter((nikke) =>
        nikke.id !== '' &&
        (filterState.burst === undefined || nikke.burst === filterState.burst) &&
        (filterState.role === undefined || nikke.role === filterState.role) &&
        (filterState.weapon === undefined || nikke.weapon_type === filterState.weapon)
    )
    const search = useSelector((state: RootState) => state.search).search
    filtered_static_data = filtered_static_data.filter((nikke) => nikke.name.toLowerCase().includes(search.toLowerCase()));

    const recommendationsData: RecommendationData[] = getRecommendationData('sky');

    filtered_static_data.sort(function(n1, n2) {
        const priority1: NikkePriority | undefined  = recommendationsData.find((entry) => entry.id === n1.id)?.priority;
        const priority2: NikkePriority | undefined  = recommendationsData.find((entry) => entry.id === n2.id)?.priority;
        if (priority1 === 'High') {
            if (priority2 === 'High') return n1.name.localeCompare(n2.name);
            else return -1;
        } else if (priority1 === 'Medium') {
            if (priority2 === 'High') return 1;
            else if (priority2 === 'Medium') return n1.name.localeCompare(n2.name);
            else return -1;
        } else if (priority1 === 'PVP') {
            if (priority2 === 'High' || priority2 === 'Medium') return 1;
            else if (priority2 === 'PVP') return n1.name.localeCompare(n2.name);
            else return -1;
        } else {
            if (priority2 === 'Low') return n1.name.localeCompare(n2.name);
            else return 1;
        }
        
    })
    
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '0px' }} >
            {filtered_static_data.map((nikke, index) => (
                <NikkeEntry key={nikke.id} nikke_static={nikke} recommendations={recommendationsData} index={index} />
            ))}
        </div>
    );
};

export default NikkeList;
