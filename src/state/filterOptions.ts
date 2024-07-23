import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Burst, NikkeRole, WeaponType } from "../types";

export interface FilterOptions {
    burst: Burst | undefined;
    role: NikkeRole | undefined;
    weapon: WeaponType | undefined;
}

const initialState: FilterOptions = {
    burst: undefined,
    role: undefined,
    weapon: undefined
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
        clearFilters(state) {
            state.burst = undefined;
            state.role = undefined;
            state.weapon = undefined;
        }
    }
})

export const { setBurstFilter, setRoleFilter, setWeaponFilter, clearFilters } = filterSlice.actions
export default filterSlice.reducer