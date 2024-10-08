import { Button, Icon, Menu, MenuDivider, MenuItem, Popover, Tooltip } from "@blueprintjs/core"
import { CollectionItemRarity, color_scheme, NikkeElement, NikkeManufacturer, NikkeRarity, WeaponType } from "../../types"
import { useDispatch, useSelector } from "react-redux";
import { EquipmentFilterOption, FilterOptions, setCollectionItemRarityFilter, setElementFilter, setEquipmentFilter, setManufacturerFilter, setMiscFilter, setNikkeRarityFilter, setWeaponFilter } from "../../state/filterOptions";
import { RootState } from "../../state/store";
import { getMiscIcon } from "../../utility/iconGetters";

const NavbarAdditionalFilters: React.FC = () => {
    const wide_layout: boolean = useSelector((state: RootState) => state.settings.wide_layout);
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter);
    const dispatch = useDispatch();

    const additionalFiltersdMenu = () => {
        
        return <Menu style={{ backgroundColor: color_scheme[0] }} >
            {!wide_layout && <>
                {Object.values(WeaponType).map(weapon =>
                    <MenuItem
                        style={{ 
                            backgroundColor: weapon === filterState.weapon ? color_scheme[3] : color_scheme[0],
                            color: weapon === filterState.weapon ? color_scheme[0] : color_scheme[4]
                        }}
                        key={weapon}
                        text={weapon}
                        icon={<img src={getMiscIcon("weapon", weapon)} alt={weapon} style={{ height: 24 }} />}
                        onClick={weapon === filterState.weapon ?
                            () => dispatch(setWeaponFilter(undefined)) :
                            () => dispatch(setWeaponFilter(weapon))
                        }
                    />
                )}
            <MenuDivider />
            </>}
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
            <MenuItem
                style={{ 
                    backgroundColor: filterState.collection_item_rarity === "no_collection_item" ? color_scheme[3] : color_scheme[0],
                    color: filterState.collection_item_rarity === "no_collection_item" ? color_scheme[0] : color_scheme[4]
                }}
                text={"No Collection Item"}
                icon={<img src={getMiscIcon("collection_item_rarity", "no_collection_item")} alt={"Icon not found"} style={{ height: 24 }} />}
                onClick={filterState.collection_item_rarity === "no_collection_item" ?
                    () => dispatch(setCollectionItemRarityFilter(undefined)) :
                    () => dispatch(setCollectionItemRarityFilter("no_collection_item"))
                }
            />
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
            <MenuDivider />
            {Object.values(EquipmentFilterOption).map(option =>
                <MenuItem
                    style={{ 
                        backgroundColor: option === filterState.equipment ? color_scheme[3] : color_scheme[0],
                        color: option === filterState.equipment ? color_scheme[0] : color_scheme[4]
                    }}
                    key={option}
                    text={option}
                    onClick={option === filterState.equipment ?
                        () => dispatch(setEquipmentFilter(undefined)) :
                        () => dispatch(setEquipmentFilter(option))
                    }
                />
            )}
            <MenuDivider />
            <MenuItem
                style={{ 
                    backgroundColor: filterState.misc === "bond_not_maxed" ? color_scheme[3] : color_scheme[0],
                    color: filterState.misc === "bond_not_maxed" ? color_scheme[0] : color_scheme[4]
                }}
                text={"Bond Not Maxed"}
                icon={<Icon icon="heart" color="red" />}
                onClick={filterState.misc === "bond_not_maxed" ?
                    () => dispatch(setMiscFilter(undefined)) :
                    () => dispatch(setMiscFilter("bond_not_maxed"))
                }
            />
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