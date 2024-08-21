import { Nikke, NikkeStaticData } from '../../types';
import NikkeEntry from './nikkeEntry';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { FilterOptions } from '../../state/filterOptions';
import { nikkeListSorter } from '../../utility/nikkeListSorter';
import { SortState } from '../../state/sortOptions';
import { VariableSizeList as List, ListChildComponentProps } from 'react-window';
import useWindowSize from '../../utility/windowSizeHook';
import { nikkeListFilterer } from '../../utility/nikkeListFilterer';
import { RecommendationSource } from '../../state/recommendationSources';
import { useCallback, useEffect, useRef } from 'react';
import { nikke_static_data } from '../../data/nikkeStaticData';

interface NikkeListProps {
    team_nikke_list?: NikkeStaticData[];
}

const NikkeList: React.FC<NikkeListProps> = ({ team_nikke_list }) => {
    const { height: windowHeight } = useWindowSize();
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter);
    const sort_state: SortState = useSelector((state: RootState) => state.sort);
    const nikke_investment_data: Nikke[] = useSelector((state: RootState) => state.investments.investments);
    const search = useSelector((state: RootState) => state.search).search;
    const recommendation_source: RecommendationSource = useSelector((state: RootState) => state.recommendations.source);
    const wide_layout: boolean = useSelector((state: RootState) => state.settings.wide_layout);

    const list = Object.values(nikke_static_data);
    
    const filtered_static_data = search === "" ? 
        nikkeListFilterer(list, nikke_investment_data, filterState) :
        list.filter((nikke) => nikke.name.toLowerCase().includes(search.toLowerCase()));

    const sorted_static_data: NikkeStaticData[] = nikkeListSorter(
        filtered_static_data,
        nikke_investment_data,
        sort_state.sort_option,
        sort_state.inverted
    );

    const final_list = team_nikke_list ? team_nikke_list : sorted_static_data;

    const listRef = useRef<List>(null);

    const item_size_nikkegg = wide_layout ? 500 : 600;
    const item_size_prydwen = wide_layout ? 400 : 600;
    const item_size_prydwen_treasure = 710;
    const item_size_skyfall = wide_layout ? 360 : 600;

    const getItemSize = useCallback((index: number): number => {
        const nikke = final_list[index];
        switch (recommendation_source) {
            case RecommendationSource.nikke_gg:
                return item_size_nikkegg;
            case RecommendationSource.prydwen:
                return nikke.has_treasure ? item_size_prydwen_treasure : item_size_prydwen
            case RecommendationSource.skyfall:
            default:
                return item_size_skyfall;
        }
    }, [final_list, recommendation_source, item_size_nikkegg, item_size_prydwen_treasure, item_size_prydwen, item_size_skyfall]);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.resetAfterIndex(0);
        }
    },[recommendation_source, wide_layout])

    const Row: React.FC<ListChildComponentProps> = ({ index, style }) => {
        const nikke = final_list[index];
        return (
            <div style={style}>
                <NikkeEntry 
                    key={nikke.id} 
                    nikke_static={nikke} 
                    index={index}
                    height={getItemSize(index)}
                />
            </div>
        );
    };
    
    const navbar_height = 50;
    
    return (
        <List
            ref={listRef}
            height={windowHeight - navbar_height}
            itemCount={final_list.length}
            itemSize={getItemSize}
            width={'100%'}
            style={{marginTop: navbar_height}}
        >
            {Row}
        </List>
    );
};

export default NikkeList;
