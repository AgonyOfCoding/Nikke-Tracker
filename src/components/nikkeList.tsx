import React, { useEffect, useState } from 'react';
import { Burst, CollectionItem, Equipment, Nikke, NikkeElement, NikkeManufacturer, NikkeRarity, NikkeRole, NikkeSkills, NikkeStaticData, RecommendationData, RecommendationsNikkeGG, RecommendationsPrydwen, RecommendationsSkyfall, Team, TeamsData, WeaponType } from '../types';
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
import { initializeTeamsData, TeamSet, TeamsState } from '../state/teamsState';
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

const transformTeamsData = ( data: any ): TeamsData => {
    const transformedData: TeamsData = data as TeamsData;

    return transformedData;
};

const NikkeList: React.FC = () => {
    const [nikke_static_data, setNikkeStaticData] = useState<{ [key: string]: NikkeStaticData } | null>(null);
    const [recommendation_data, setRecommendationData] = useState<{ [key: string]: RecommendationData } | null>(null);
    const [nikke_investment_data, setNikkeInvestmentData] = useState<Nikke[] | null>(null);
    const [teams_data, setNikkeTeamsData] = useState<TeamsData | null>(null);
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter);
    const sort_state: SortState = useSelector((state: RootState) => state.sort);
    const teams_state: TeamsState = useSelector((state: RootState) => state.teams);
    const { selected_team_set, selected_team } = teams_state;
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
        const fetchTeamsData = async () => {
            try {
                const response = await axios.get('/api/teamData');
                const teams = transformTeamsData(response.data);
                setNikkeTeamsData(teams);
                dispatch(initializeTeamsData(teams));
            } catch (error) {
                console.error('Error fetching investment data:', error);
            }
        };
        const sta = transformStaticData(nikkeStaticDataJson);
        const rec = transformRecommendationData(recomendationDataJson);
        setNikkeStaticData(sta);
        setRecommendationData(rec);
        fetchInvestmentData();
        fetchTeamsData();
    }, [dispatch]);

    if (!nikke_static_data || !recommendation_data || !nikke_investment_data || !teams_data) {
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
    const teams: Team[] = selected_team_set === TeamSet.solo_raid ? teams_data.solo_raid :
        selected_team_set === TeamSet.pvp ? teams_data.pvp : teams_data.custom;

    if (selected_team_set && selected_team === "summary") {
        return <TeamsSummary teams={teams} />
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
