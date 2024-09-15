import { useDispatch, useSelector } from "react-redux";
import { color_scheme, Team } from "../../types"
import { RootState } from "../../state/store";
import { useCallback } from "react";
import { changeTeamsData, TeamSet, TeamsState } from "../../state/teamsState";
import { Button, Tooltip } from "@blueprintjs/core";
import SummaryEntry from "./teamsSummaryEntry";

interface TeamsSummaryProps {
    teams: Team[];
}

const TeamsSummary: React.FC<TeamsSummaryProps> = ({ teams }) => {
    return (
        <div style={{ marginTop: '51px' }}>
            {teams.map((team, index) => 
                <TeamRow index={index} key={team.name} team={team} />
            )}
        </div>
    )
}

interface TeamRowProps {
    index: number;
    team: Team;
}

const TeamRow: React.FC<TeamRowProps> = ({ index, team }) => {
    const { name, nikke_1, nikke_2, nikke_3, nikke_4, nikke_5, cube_1, cube_2, cube_3, cube_4, cube_5 } = team;
    const teams_state: TeamsState = useSelector((state: RootState) => state.teams);
    const { selected_team_set, teams_data } = teams_state;
    const dispatch = useDispatch();

    const clearTeam = useCallback(() => {
        if (!selected_team_set || !teams_data)
            throw new Error("Selected team not found.");

        const teamSetKey = selected_team_set === TeamSet.campaign ?
            "campaign" : selected_team_set === TeamSet.solo_raid ?
            "solo_raid" : selected_team_set === TeamSet.anomaly_interception ?
            "anomaly_interception" : selected_team_set === TeamSet.tribe_tower ?
            "tribe_tower" : selected_team_set === TeamSet.shooting_range ?
            "shooting_range" : selected_team_set === TeamSet.pvp ?
            "pvp" : "custom";
        const teams = teams_data[teamSetKey];

        const teamIndex = teams.findIndex(t => t.name === team.name);
        if (teamIndex === -1)
            throw new Error("Selected team not found.");

        const updatedTeams = [...teams];
        const teamToUpdate = { ...updatedTeams[teamIndex] };

        teamToUpdate.nikke_1 = undefined;
        teamToUpdate.nikke_2 = undefined;
        teamToUpdate.nikke_3 = undefined;
        teamToUpdate.nikke_4 = undefined;
        teamToUpdate.nikke_5 = undefined;
        teamToUpdate.cube_1 = undefined;
        teamToUpdate.cube_2 = undefined;
        teamToUpdate.cube_3 = undefined;
        teamToUpdate.cube_4 = undefined;
        teamToUpdate.cube_5 = undefined;

        updatedTeams[teamIndex] = teamToUpdate;

        const new_teams_data = {
            ...teams_data,
            [teamSetKey]: updatedTeams,
        };
        dispatch(changeTeamsData(new_teams_data))
    }, [dispatch, selected_team_set, teams_data, team.name]);
    
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
                backgroundColor: index % 2 === 0 ? color_scheme[1] : color_scheme[2],
            }}
        >
            <div>
                <h2>{name}</h2>
                <Tooltip content="Clear Team" >
                    <Button icon="reset" onClick={clearTeam} intent="danger" />
                </Tooltip>
            </div>
            <SummaryEntry pos={1} nikke={nikke_1} cube={cube_1} index={2} selected_team={name} />
            <SummaryEntry pos={2} nikke={nikke_2} cube={cube_2} index={3} selected_team={name} />
            <SummaryEntry pos={3} nikke={nikke_3} cube={cube_3} index={4} selected_team={name} />
            <SummaryEntry pos={4} nikke={nikke_4} cube={cube_4} index={5} selected_team={name} />
            <SummaryEntry pos={5} nikke={nikke_5} cube={cube_5} index={6} selected_team={name} />
        </div>
    )
}

export default TeamsSummary;