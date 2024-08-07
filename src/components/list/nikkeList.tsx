import { Nikke, NikkeStaticData, RecommendationData } from '../../types';
import NikkeEntry from './nikkeEntry';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { FilterOptions } from '../../state/filterOptions';
import { nikkeListSorter } from '../../utility/nikkeListSorter';
import { SortState } from '../../state/sortOptions';
import { VariableSizeList as List, ListChildComponentProps } from 'react-window';
import useWindowSize from '../../utility/windowSizeHook';
import { nikkeListFilterer } from '../../utility/nikkeListFilterer';

interface NikkeListProps {
    nikke_static_data: { [key: string]: NikkeStaticData };
    recommendation_data: { [key: string]: RecommendationData };
}

const NikkeList: React.FC<NikkeListProps> = ({ nikke_static_data, recommendation_data }) => {
    const { height: windowHeight } = useWindowSize();
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter);
    const sort_state: SortState = useSelector((state: RootState) => state.sort);
    const nikke_investment_data: Nikke[] = useSelector((state: RootState) => state.investments.investments);
    const search = useSelector((state: RootState) => state.search).search;

    const list = Object.values(nikke_static_data);
    
    const filtered_static_data = search === "" ? 
        nikkeListFilterer(list, recommendation_data, nikke_investment_data, filterState) :
        list.filter((nikke) => nikke.name.toLowerCase().includes(search.toLowerCase()));

    const sorted_static_data: NikkeStaticData[] = nikkeListSorter(
        filtered_static_data,
        recommendation_data,
        nikke_investment_data,
        sort_state.sort_option,
        sort_state.inverted
    );

    const getItemSize = (index: number): number => {
        // Return the height of the item at index
        // For example, return 100 for all items if they have the same height
        return 350;
    };

    const Row: React.FC<ListChildComponentProps> = ({ index, style }) => {
        const nikke = sorted_static_data[index];
        return (
            <div style={style}>
                <NikkeEntry 
                    key={nikke.id} 
                    nikke_static={nikke} 
                    index={index} 
                    recommendation_data={recommendation_data[nikke.id]} 
                />
            </div>
        );
    };
    
    
    return (
        <List
            height={windowHeight - 70} // Set the height of the container
            itemCount={sorted_static_data.length}
            itemSize={getItemSize} // Adjust based on the height of your items
            width={'100%'} // Adjust based on the width of your container
            style={{marginTop: 50}}
        >
            {Row}
        </List>
    );
};

export default NikkeList;
