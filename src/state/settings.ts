import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Settings {
    post_overload: boolean;
    wide_layout: boolean;
}

const initialState: Settings = {
    post_overload: true,
    wide_layout: true
}

export const settingsSlice = createSlice({
    name: "Settings",
    initialState,
    reducers: {
        setSettingsPostOverload: (state, action: PayloadAction<boolean>) => {
            state.post_overload = action.payload;
        },
        setSettingsWideLayout: (state, action: PayloadAction<boolean>) => {
            state.wide_layout = action.payload;
        },
    }
})

export const {
    setSettingsPostOverload,
    setSettingsWideLayout
} = settingsSlice.actions

export default settingsSlice.reducer