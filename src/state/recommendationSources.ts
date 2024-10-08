import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum RecommendationSource {
    nikke_gg = "Nikke.gg",
    prydwen = "Prydwen",
    skyfall = "skyJLV",
    keripo = "Keripo (PvP)"
}

export interface RecommendationSourceState {
    source: RecommendationSource;
}

const initialState: RecommendationSourceState = {
    source: RecommendationSource.skyfall
};

export const recommendationSlice = createSlice({
    name: "Recommendations",
    initialState,
    reducers: {
        setRecommendationSource: (state, action: PayloadAction<RecommendationSource>) => {
            state.source = action.payload;
        },
    }
});

export const {
    setRecommendationSource
} = recommendationSlice.actions;

export default recommendationSlice.reducer;
