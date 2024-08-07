import { Button, Menu, MenuDivider, MenuItem, Popover, Tooltip } from "@blueprintjs/core"
import { CollectionItemRarity, color_scheme, NikkeElement, NikkeManufacturer, NikkeRarity } from "../../types"
import { useDispatch, useSelector } from "react-redux";
import { FilterOptions, setCollectionItemRarityFilter, setElementFilter, setManufacturerFilter, setNikkeRarityFilter } from "../../state/filterOptions";
import { RootState } from "../../state/store";
import { getMiscIcon } from "../../utility/iconGetters";

const NavbarAdditionalFilters: React.FC = () => {

    const filterState: FilterOptions = useSelector((state: RootState) => state.filter)
    const dispatch = useDispatch();

    const additionalFiltersdMenu = () => {
        
        return <Menu style={{ backgroundColor: color_scheme[0] }} >
            {Object.values(NikkeManufacturer).map(manufacturer => 
                <MenuItem
                    style={{ 
                        backgroundColor: manufacturer === filterState.manufacturer ? color_scheme[3] : color_scheme[0],
                        color: manufacturer === filterState.manufacturer ? color_scheme[0] : color_scheme[4]
                    }}
                    key={manufacturer}
                    text={manufacturer}
                    icon={<img src={getMiscIcon("manufacturer", manufacturer)} alt={manufacturer} style={{ height: 24 }} />}
                    onClick={manufacturer === filterState.manufacturer ?
                        () => dispatch(setManufacturerFilter(undefined)) :
                        () => dispatch(setManufacturerFilter(manufacturer))
                    }
                />
            )}
            <MenuDivider />
            {Object.values(NikkeElement).map(element =>
                <MenuItem
                    style={{ 
                        backgroundColor: element === filterState.element ? color_scheme[3] : color_scheme[0],
                        color: element === filterState.element ? color_scheme[0] : color_scheme[4]
                    }}
                    key={element}
                    text={element}
                    icon={<img src={getMiscIcon("element", element)} alt={element} style={{ height: 24 }} />}
                    onClick={element === filterState.element ?
                        () => dispatch(setElementFilter(undefined)) :
                        () => dispatch(setElementFilter(element))
                    }
                />
            )}
            <MenuDivider />
            {Object.values(NikkeRarity).map(nikke_rarity =>
                <MenuItem
                    style={{ 
                        backgroundColor: nikke_rarity === filterState.nikke_rarity ? color_scheme[3] : color_scheme[0],
                        color: nikke_rarity === filterState.nikke_rarity ? color_scheme[0] : color_scheme[4]
                    }}
                    key={nikke_rarity}
                    text={"Nikke"}
                    icon={<img src={getMiscIcon("nikke_rarity", nikke_rarity)} alt={nikke_rarity} style={{ height: 24 }} />}
                    onClick={nikke_rarity === filterState.nikke_rarity ?
                        () => dispatch(setNikkeRarityFilter(undefined)) :
                        () => dispatch(setNikkeRarityFilter(nikke_rarity))
                    }
                />
            )}
            <MenuDivider />
            {Object.values(CollectionItemRarity).map(collection_item_rarity =>
                <MenuItem
                    style={{ 
                        backgroundColor: collection_item_rarity === filterState.collection_item_rarity ? color_scheme[3] : color_scheme[0],
                        color: collection_item_rarity === filterState.collection_item_rarity ? color_scheme[0] : color_scheme[4]
                    }}
                    key={collection_item_rarity}
                    text={"Collection Item"}
                    icon={<img src={getMiscIcon("collection_item_rarity", collection_item_rarity)} alt={collection_item_rarity} style={{ height: 24 }} />}
                    onClick={collection_item_rarity === filterState.collection_item_rarity ?
                        () => dispatch(setCollectionItemRarityFilter(undefined)) :
                        () => dispatch(setCollectionItemRarityFilter(collection_item_rarity))
                    }
                />
            )}
        </Menu>
    };

    return (
        <Popover minimal content={additionalFiltersdMenu()} >
            <Tooltip position="bottom" content="Additional filters" >
                <Button
                    style={{ backgroundColor: color_scheme[1], color: color_scheme[4] }}
                    className="bp5-minimal"
                    icon='filter'
                />
            </Tooltip>
        </Popover>
    )
}

export default NavbarAdditionalFilters