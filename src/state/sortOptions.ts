import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum SortOptions {
    alphapetical = "alphapetical",
    priority = "priority"
}

export interface SortOption {
    sortOption : SortOptions
}

const initialState: SortOption = {
    sortOption: SortOptions.alphapetical
}

export const sortSlice = createSlice({
    name: "SortOptions",
    initialState,
    reducers: {
        setSortOption: (state, action: PayloadAction<SortOptions>) => {
            state.sortOption = action.payload;
        },
    }
})

export const {
    setSortOption
} = sortSlice.actions

export default sortSlice.reducer