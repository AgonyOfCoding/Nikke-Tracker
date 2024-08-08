import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Burst, CollectionItemRarity, NikkeElement, NikkeManufacturer, NikkeRarity, NikkeRole, WeaponType } from "../types";

export interface FilterOptions {
    burst: Burst | undefined;
    role: NikkeRole | undefined;
    weapon: WeaponType | undefined;
    manufacturer: NikkeManufacturer | undefined;
    element: NikkeElement | undefined;
    nikke_rarity: NikkeRarity | undefined;
    collection_item_rarity: CollectionItemRarity | "no_collection_item" | undefined;
}

const initialState: FilterOptions = {
    burst: undefined,
    role: undefined,
    weapon: undefined,
    manufacturer: undefined,
    element: undefined,
    nikke_rarity: undefined,
    collection_item_rarity: undefined
}

export const filterSlice = createSlice({
    name: "FilterOptions",
    initialState,
    reducers: {
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
        clearFilters(state) {
            state.burst = undefined;
            state.role = undefined;
            state.weapon = undefined;
            state.manufacturer = undefined;
            state.element = undefined;
            state.nikke_rarity = undefined;
            state.collection_item_rarity = undefined;
        }
    }
})

export const {
    setBurstFilter,
    setRoleFilter,
    setWeaponFilter,
    setManufacturerFilter,
    setElementFilter,
    setNikkeRarityFilter,
    setCollectionItemRarityFilter,
    clearFilters
} = filterSlice.actions

export default filterSlice.reducer