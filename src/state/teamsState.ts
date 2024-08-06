import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeamsData } from "../types";
import axios from "axios";

export enum TeamSet {
    campaign = "Campaign",
    solo_raid = "Solo Raid",
    tribe_tower = "Tribe Tower",
    pvp = "PVP",
    custom = "Custom"
}

export interface TeamsState {
    selected_team_set: TeamSet | undefined;
    selected_team: string;
    teams_data: TeamsData | undefined;
}

const initialState: TeamsState = {
    selected_team_set: undefined,
    selected_team: "summary",
    teams_data: undefined
}

const saveTeamsData = async (teams_data: TeamsData) => {
    try {
        const response = await axios.post('/api/save-teams', teams_data);
        console.log('Teams saved successfully:', response.data);
    } catch (error) {
        console.error('Error saving teams:', error);
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
    }
})

export const {
    setSelectedTeamSet,
    setSelectedTeam,
    initializeTeamsData,
    changeTeamsData
} = teamsSlice.actions

export default teamsSlice.reducer