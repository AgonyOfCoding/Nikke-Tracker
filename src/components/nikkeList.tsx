import { Burst, Nikke, NikkeStaticData, RecommendationData } from '../types';
import NikkeEntry from './nikkeEntry';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { FilterOptions } from '../state/filterOptions';
import { nikkeListSorter } from '../utility/nikkeListSorter';
import { SortState } from '../state/sortOptions';

interface NikkeListProps {
    nikke_static_data: { [key: string]: NikkeStaticData };
    recommendation_data: { [key: string]: RecommendationData };
}

const NikkeList: React.FC<NikkeListProps> = ({ nikke_static_data, recommendation_data }) => {
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter);
    const sort_state: SortState = useSelector((state: RootState) => state.sort);
    const nikke_investment_data: Nikke[] = useSelector((state: RootState) => state.investments.investments);
    const search = useSelector((state: RootState) => state.search).search;

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
        sort_state.inverted
    );

    
    
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '0px', paddingTop: '30px' }} >
            {sorted_static_data.map((nikke, index) => (
                <NikkeEntry key={nikke.id} nikke_static={nikke} index={index} recommendation_data={recommendation_data[nikke.id]} />
            ))}
        </div>
    );
};

export default NikkeList;
