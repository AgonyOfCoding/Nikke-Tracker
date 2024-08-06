import React, { useEffect, useState } from 'react';
import { Burst, Nikke, NikkeElement, NikkeManufacturer, NikkeRarity, NikkeRole, NikkeSkills, NikkeStaticData, RecommendationData, RecommendationsNikkeGG, RecommendationsPrydwen, RecommendationsSkyfall,  WeaponType } from '../types';
import NikkeEntry from './nikkeEntry';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { FilterOptions } from '../state/filterOptions';
import nikkeStaticDataJson from '../data/nikkeStaticData.json'
import recomendationDataJson from '../data/recommendationData.json'
import { nikkeListSorter } from '../utility/nikkeListSorter';
import { SortState } from '../state/sortOptions';
import { TeamSet, TeamsState } from '../state/teamsState';
import TeamsSummary from './teams/teamsSummary';

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

const NikkeList: React.FC = () => {
    const [nikke_static_data, setNikkeStaticData] = useState<{ [key: string]: NikkeStaticData } | null>(null);
    const [recommendation_data, setRecommendationData] = useState<{ [key: string]: RecommendationData } | null>(null);
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter);
    const sort_state: SortState = useSelector((state: RootState) => state.sort);
    const nikke_investment_data: Nikke[] = useSelector((state: RootState) => state.investments.investments)
    const teams_state: TeamsState = useSelector((state: RootState) => state.teams);
    const { selected_team_set, selected_team, teams_data } = teams_state;
    const search = useSelector((state: RootState) => state.search).search
    
    useEffect(() => {
        const sta = transformStaticData(nikkeStaticDataJson);
        const rec = transformRecommendationData(recomendationDataJson);
        setNikkeStaticData(sta);
        setRecommendationData(rec);
    }, []);

    if (!nikke_static_data || !recommendation_data || !teams_data) {
        return <div style={{marginTop: 100}}>Loading...</div>;
    }

    console.log(teams_data)

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

    const team_nikke_list: NikkeStaticData[] = [];
    if (selected_team_set && selected_team !== "summary") {
        teams_data.solo_raid.forEach(team => {
            if (team.name === selected_team) {
                if (team.nikke_1) team_nikke_list.push(nikke_static_data[team.nikke_1]);
                if (team.nikke_2) team_nikke_list.push(nikke_static_data[team.nikke_2]);
                if (team.nikke_3) team_nikke_list.push(nikke_static_data[team.nikke_3]);
                if (team.nikke_4) team_nikke_list.push(nikke_static_data[team.nikke_4]);
                if (team.nikke_5) team_nikke_list.push(nikke_static_data[team.nikke_5]);
            }
        })
    }
    const list_data = selected_team_set ? team_nikke_list : sorted_static_data;

    if (selected_team_set && selected_team === "summary") {
        const team_set_key = selected_team_set === TeamSet.campaign ?
            "campaign" : selected_team_set === TeamSet.solo_raid ?
            "solo_raid" : selected_team_set === TeamSet.tribe_tower ?
            "tribe_tower": selected_team_set === TeamSet.pvp ?
            "pvp" : "custom";
        return <TeamsSummary teams={teams_data[team_set_key]} />
    }
    
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '0px', paddingTop: '30px' }} >
            {list_data.map((nikke, index) => (
                <NikkeEntry key={nikke.id} nikke_static={nikke} index={index} recommendation_data={recommendation_data[nikke.id]} />
            ))}
        </div>
    );
};

export default NikkeList;
