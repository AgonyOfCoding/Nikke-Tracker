import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SortState {
    sort_option: string;
    inverted: boolean;
}

const initialState: SortState = {
    sort_option: "Rarity",
    inverted: false
}

export const sortSlice = createSlice({
    name: "SortOptions",
    initialState,
    reducers: {
        setSortOption: (state, action: PayloadAction<string>) => {
            if (state.sort_option === action.payload) {
                state.inverted = !state.inverted;
            } else {
                state.sort_option = action.payload;
                state.inverted = false;
            }
        },
    }
})

export const {
    setSortOption
} = sortSlice.actions

export default sortSlice.reducer