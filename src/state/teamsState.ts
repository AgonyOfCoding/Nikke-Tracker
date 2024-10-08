import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NikkeElement, TeamsData } from "../types";
import axios from "axios";

export enum TeamSet {
    campaign = "Campaign",
    solo_raid = "Solo Raid",
    anomaly_interception = "Anomaly Interception",
    tribe_tower = "Tribe Tower",
    shooting_range = "Shooting Range",
    pvp = "PVP",
    custom = "Custom"
}

export interface TeamsState {
    selected_team_set: TeamSet | undefined;
    selected_team: string;
    teams_data: TeamsData | undefined;
    highlighted_element: NikkeElement | undefined;
}

const initialState: TeamsState = {
    selected_team_set: undefined,
    selected_team: "summary",
    teams_data: undefined,
    highlighted_element: undefined
}

const saveTeamsData = async (teamsdata: TeamsData) => {
    try {
        const response = await axios.post('/api/save-team', teamsdata);
        console.log('Teams saved successfully:', response.data);
    } catch (error) {
        console.error('Error saving Teams:', error);
    }
};

export const teamsSlice = createSlice({
    name: "TeamsState",
    initialState,
    reducers: {
        setSelectedTeamSet: (state, action: PayloadAction<TeamSet | undefined>) => {
            if (state.selected_team_set === action.payload) {
                state.selected_team_set = undefined;
            } else {
                state.selected_team_set = action.payload;
            }
        },
        setSelectedTeam: (state, action: PayloadAction<string>) => {
            state.selected_team = action.payload;
        },
        initializeTeamsData: (state, action: PayloadAction<TeamsData>) => {
            state.teams_data = action.payload;
        },
        changeTeamsData: (state, action: PayloadAction<TeamsData>) => {
            state.teams_data = action.payload;
            saveTeamsData(state.teams_data)
        },
        setHighlightedElement: (state, action: PayloadAction<NikkeElement>) => {
            if (state.highlighted_element === action.payload) {
                state.highlighted_element = undefined;
            } else {
                state.highlighted_element = action.payload;
            }
        },
    }
})

export const {
    setSelectedTeamSet,
    setSelectedTeam,
    initializeTeamsData,
    changeTeamsData,
    setHighlightedElement
} = teamsSlice.actions

export default teamsSlice.reducer