import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Burst, CollectionItemRarity, NikkeElement, NikkeManufacturer, NikkeRarity, NikkeRole, WeaponType } from "../types";

export enum EquipmentFilterOption {
    missing_ol_equipment = "Missing Overload Equipment",
    missing_ol_helm = "Missing Overload Helm",
    missing_ol_gloves = "Missing Overload Gloves",
    missing_ol_chest = "Missing Overload Chest",
    missing_ol_boots = "Missing Overload Boots",
}

export interface FilterOptions {
    favorite: boolean;
    burst: Burst | undefined;
    role: NikkeRole | undefined;
    weapon: WeaponType | undefined;
    manufacturer: NikkeManufacturer | undefined;
    element: NikkeElement | undefined;
    nikke_rarity: NikkeRarity | undefined;
    collection_item_rarity: CollectionItemRarity | "no_collection_item" | undefined;
    equipment: EquipmentFilterOption | undefined;
    misc: "bond_not_maxed" | undefined;
}

const initialState: FilterOptions = {
    favorite: false,
    burst: undefined,
    role: undefined,
    weapon: undefined,
    manufacturer: undefined,
    element: undefined,
    nikke_rarity: undefined,
    collection_item_rarity: undefined,
    equipment: undefined,
    misc: undefined
}

export const filterSlice = createSlice({
    name: "FilterOptions",
    initialState,
    reducers: {
        toggleFavoriteFilter: (state, action: PayloadAction) => {
            state.favorite = !state.favorite;
        },
        setBurstFilter: (state, action: PayloadAction<Burst | undefined>) => {
            state.burst = action.payload;
        },
        setRoleFilter(state, action: PayloadAction<NikkeRole | undefined>) {
            state.role = action.payload;
        },
        setWeaponFilter(state, action: PayloadAction<WeaponType | undefined>) {
            state.weapon = action.payload;
        },
        setManufacturerFilter(state, action: PayloadAction<NikkeManufacturer | undefined>) {
            state.manufacturer = action.payload;
        },
        setElementFilter(state, action: PayloadAction<NikkeElement | undefined>) {
            state.element = action.payload;
        },
        setNikkeRarityFilter(state, action: PayloadAction<NikkeRarity | undefined>) {
            state.nikke_rarity = action.payload;
        },
        setCollectionItemRarityFilter(state, action: PayloadAction<CollectionItemRarity | "no_collection_item" |  undefined>) {
            state.collection_item_rarity = action.payload;
        },
        setEquipmentFilter(state, action: PayloadAction<EquipmentFilterOption | undefined>) {
            state.equipment = action.payload;
        },
        setMiscFilter(state, action: PayloadAction<"bond_not_maxed" | undefined>) {
            state.misc = action.payload;
        },
        clearFilters(state) {
            state.favorite = false;
            state.burst = undefined;
            state.role = undefined;
            state.weapon = undefined;
            state.manufacturer = undefined;
            state.element = undefined;
            state.nikke_rarity = undefined;
            state.collection_item_rarity = undefined;
            state.equipment = undefined;
            state.misc = undefined;
        }
    }
})

export const {
    toggleFavoriteFilter,
    setBurstFilter,
    setRoleFilter,
    setWeaponFilter,
    setManufacturerFilter,
    setElementFilter,
    setNikkeRarityFilter,
    setCollectionItemRarityFilter,
    setEquipmentFilter,
    setMiscFilter,
    clearFilters
} = filterSlice.actions

export default filterSlice.reducer