import React from 'react';
import { NikkeStaticData, RecommendationData } from '../types';
import { nikke_static_data } from '../data/nikkeStaticData';
import NikkeCard from './nikkeCard';
import { recommendation_data_SKY } from '../data/recommendationDataSKY';

interface CharacterListProps {
    filter: string;
    recommendations_source: string;
    search: string;
}

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

const CharacterList: React.FC<CharacterListProps> = ({ filter, recommendations_source, search }) => {
    var filteredNikkes: NikkeStaticData[];
    switch (filter) {
        case 'all':
        default:
            filteredNikkes = nikke_static_data.filter((nikke) => nikke.name.toLowerCase().includes(search.toLowerCase()));
    }
    // filteredNikkes = filteredNikkes.sort(())

    const recommendationsData: RecommendationData[] = getRecommendationData(recommendations_source);
    
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '0px' }} >
            {filteredNikkes.map((nikke, index) => (
                <NikkeCard key={nikke.id} nikke_static={nikke} recommendations={recommendationsData} index={index} />
            ))}
        </div>
    );
};

export default CharacterList;
