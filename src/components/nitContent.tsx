import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { TeamSet } from "../state/teamsState";
import { Burst, NikkeElement, NikkeManufacturer, NikkeRarity, NikkeRole, NikkeSkills, NikkeStaticData, RecommendationData, RecommendationsNikkeGG, RecommendationsPrydwen, RecommendationsSkyfall, WeaponType } from "../types";
import nikkeStaticDataJson from '../data/nikkeStaticData.json'
import recomendationDataJson from '../data/recommendationData.json'
import NikkeList from "./nikkeList";
import TeamsView from "./teams/teamsView";

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

const NITContent: React.FC = () => {
    const [nikke_static_data, setNikkeStaticData] = useState<{ [key: string]: NikkeStaticData } | null>(null);
    const [recommendation_data, setRecommendationData] = useState<{ [key: string]: RecommendationData } | null>(null);
    const selected_team_set: TeamSet | undefined = useSelector((state: RootState) => state.teams.selected_team_set);

    useEffect(() => {
        const sta = transformStaticData(nikkeStaticDataJson);
        const rec = transformRecommendationData(recomendationDataJson);
        setNikkeStaticData(sta);
        setRecommendationData(rec);
    }, []);

    if (!nikke_static_data || !recommendation_data) {
        return <div style={{marginTop: 100}}>Loading...</div>;
    }

    if (selected_team_set) {
        return (
            <TeamsView nikke_static_data={nikke_static_data} recommendation_data={recommendation_data} />
        )
    }
    return (
        <NikkeList nikke_static_data={nikke_static_data} recommendation_data={recommendation_data} />
    )
}

export default NITContent;