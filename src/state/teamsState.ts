import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeamsData } from "../types";

export enum TeamSet {
    solo_raid = "Solo Raid",
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
        setTeamsData: (state, action: PayloadAction<TeamsData>) => {
            state.teams_data = action.payload;
        },
    }
})

export const {
    setSelectedTeamSet,
    setSelectedTeam,
    setTeamsData
} = teamsSlice.actions

export default teamsSlice.reducer