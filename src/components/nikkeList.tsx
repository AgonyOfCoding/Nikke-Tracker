import React, { useEffect, useState } from 'react';
import { Burst, CollectionItem, Equipment, Nikke, NikkeElement, NikkeManufacturer, NikkeRarity, NikkeRole, NikkeSkills, NikkeStaticData, RecommendationData, RecommendationsNikkeGG, RecommendationsPrydwen, RecommendationsSkyfall, WeaponType } from '../types';
import NikkeEntry from './nikkeEntry';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { FilterOptions } from '../state/filterOptions';
import nikkeStaticDataJson from '../data/nikkeStaticData.json'
import recomendationDataJson from '../data/recommendationData.json'
import { setInvestments } from '../state/investment';
import axios from 'axios';
import { nikkeListSorter } from '../utility/listSorter';
import { SortState } from '../state/sortOptions';

const transformStaticData = ( data: { [key: string]: any }): { [key: string]: NikkeStaticData } => {
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

const transformRecommendationData = ( data: { [key: string]: any }): { [key: string]: RecommendationData } => {
    const transformedData: { [key: string]: RecommendationData } = {};

    Object.keys(data).forEach(key => {
        const entry = data[key];
        transformedData[key] = {
            nikke_gg: entry.nikke_gg as RecommendationsNikkeGG,
            prydwen: entry.prydwen as RecommendationsPrydwen,
            skyfall: entry.skyfall as RecommendationsSkyfall
        };
    });

    return transformedData;
};

const transformInvestmentData = ( data: any[] ): Nikke[] => {
    const transformedData: Nikke[] = [];

    Object.values(data).forEach(nikke => {
        transformedData.push({
            id: nikke.id as string,
            core: nikke.core as number,
            bond: nikke.bond as number,
            equipment: nikke.equipment as Equipment,
            skill_levels: nikke.skill_levels as number[],
            collection_item: nikke.collection_item as CollectionItem | undefined 
        });
    });

    return transformedData;
};

const NikkeList: React.FC = () => {
    const [nikke_static_data, setNikkeStaticData] = useState<{ [key: string]: NikkeStaticData } | null>(null);
    const [recommendation_data, setRecommendationData] = useState<{ [key: string]: RecommendationData } | null>(null);
    const [nikke_investment_data, setNikkeInvestmentData] = useState<Nikke[] | null>(null);
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter);
    const sort_state: SortState = useSelector((state: RootState) => state.sort);
    const search = useSelector((state: RootState) => state.search).search
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchInvestmentData = async () => {
            try {
                const response = await axios.get('/api/investmentData');
                const inv = transformInvestmentData(response.data);
                setNikkeInvestmentData(inv);
                dispatch(setInvestments(inv));
            } catch (error) {
                console.error('Error fetching investment data:', error);
            }
        };
        const sta = transformStaticData(nikkeStaticDataJson);
        const rec = transformRecommendationData(recomendationDataJson)
        setNikkeStaticData(sta)
        setRecommendationData(rec)
        fetchInvestmentData()
    }, [dispatch]);

    if (!nikke_static_data || !recommendation_data || !nikke_investment_data) {
        return <div style={{marginTop: 100}}>Loading...</div>;
    }

    var filtered_static_data: NikkeStaticData[] = Object.values(nikke_static_data).filter((nikke) =>
        nikke.id !== '' &&
        (filterState.burst === undefined || nikke.burst === filterState.burst || nikke.burst === Burst.Burst_Lambda) &&
        (filterState.role === undefined || nikke.role === filterState.role) &&
        (filterState.weapon === undefined || nikke.weapon_type === filterState.weapon) &&
        (filterState.manufacturer === undefined || nikke.manufacturer === filterState.manufacturer) &&
        (filterState.element === undefined || nikke.element === filterState.element) &&
        (filterState.nikke_rarity === undefined || nikke.rarity === filterState.nikke_rarity) &&
        (filterState.collection_item_rarity === undefined || 
            nikke_investment_data.find(n => n.id === nikke.id)?.collection_item?.rarity === filterState.collection_item_rarity)
    )
    
    filtered_static_data = filtered_static_data.filter((nikke) => nikke.name.toLowerCase().includes(search.toLowerCase()));

    const sorted_static_data: NikkeStaticData[] = nikkeListSorter(
        filtered_static_data,
        recommendation_data,
        nikke_investment_data,
        sort_state.sort_option,
        sort_state.inverted);
    
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '0px', paddingTop: '30px' }} >
            {sorted_static_data.map((nikke, index) => (
                <NikkeEntry key={nikke.id} nikke_static={nikke} index={index} recommendation_data={recommendation_data[nikke.id]} />
            ))}
        </div>
    );
};

export default NikkeList;
