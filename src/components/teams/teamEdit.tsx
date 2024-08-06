import { useCallback } from "react";
import { CubeName, Team } from "../../types";
import { ItemPredicate, ItemRenderer, Select } from "@blueprintjs/select";
import { getNikkeIDByName, nikke_names } from "../../data/nikke_names";
import { Button, MenuItem } from "@blueprintjs/core";
import { getNikkeIcon } from "../../utility/iconGetters";
import { useDispatch } from "react-redux";
import { changeTeamsData, TeamSet, TeamsState } from "../../state/teamsState";

interface TeamEditProps {
    team: Team;
    teams_state: TeamsState
}

const TeamEdit: React.FC<TeamEditProps> = ({ team, teams_state }) => {
    const { name, nikke_1, nikke_2, nikke_3, nikke_4, nikke_5, cube_1, cube_2, cube_3, cube_4, cube_5 } = team;
    return (
        <div>
            <h2>{name}</h2>
            <TeamEditRow pos={1} nikke={nikke_1} cube={cube_1} team={team} teams_state={teams_state} />
            <TeamEditRow pos={2} nikke={nikke_2} cube={cube_2} team={team} teams_state={teams_state} />
            <TeamEditRow pos={3} nikke={nikke_3} cube={cube_3} team={team} teams_state={teams_state} />
            <TeamEditRow pos={4} nikke={nikke_4} cube={cube_4} team={team} teams_state={teams_state} />
            <TeamEditRow pos={5} nikke={nikke_5} cube={cube_5} team={team} teams_state={teams_state} />
        </div>
    )
}

interface TeamEditRowProps {
    pos: number;
    nikke: string | undefined;
    cube: CubeName | undefined;
    team: Team;
    teams_state: TeamsState;
}

const TeamEditRow: React.FC<TeamEditRowProps> = ({ pos, nikke, cube, team, teams_state }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: 'repeat(2, auto)',
                margin: '10px'
            }}
        >
            <div style={{ gridColumn: '1 / 2' }} ><NikkeSelect pos={pos} nikke={nikke} team={team} teams_state={teams_state} /></div>
            <div style={{ gridColumn: '2 / 3' }} >{cube}</div>
        </div>
    )
}

interface NikkeSelectProps {
    pos: number;
    nikke: string | undefined;
    team: Team;
    teams_state: TeamsState;
}

const NikkeSelect: React.FC<NikkeSelectProps> = ({ pos, nikke, team, teams_state }) => {
    const { selected_team_set, selected_team, teams_data } = teams_state;
    const select_items = Object.values(nikke_names);
    const dispatch = useDispatch();

    const changeTeamNikke = useCallback((nikke_name: string) => {
        if (!selected_team_set || selected_team === "summary" || !teams_data)
            throw new Error("Selected team not found.");

        const teamSetKey = selected_team_set === TeamSet.campaign ?
            "campaign" : selected_team_set === TeamSet.solo_raid ?
            "solo_raid" : selected_team_set === TeamSet.tribe_tower ?
            "tribe_tower": selected_team_set === TeamSet.pvp ?
            "pvp" : "custom";
        const teams = teams_data[teamSetKey];

        const teamIndex = teams.findIndex(team => team.name === selected_team);
        if (teamIndex === -1)
            throw new Error("Selected team not found.");

        const updatedTeams = [...teams];
        const teamToUpdate = { ...updatedTeams[teamIndex] };

        switch (pos) {
            case 1:
                teamToUpdate.nikke_1 = getNikkeIDByName(nikke_name);
                break;
            case 2:
                teamToUpdate.nikke_2 = getNikkeIDByName(nikke_name);
                break;
            case 3:
                teamToUpdate.nikke_3 = getNikkeIDByName(nikke_name);
                break;
            case 4:
                teamToUpdate.nikke_4 = getNikkeIDByName(nikke_name);
                break;
            case 5:
                teamToUpdate.nikke_5 = getNikkeIDByName(nikke_name);
                break;
            default:
                throw new Error("Invalid position");
        }

        updatedTeams[teamIndex] = teamToUpdate;

        const new_teams_data = {
            ...teams_data,
            [teamSetKey]: updatedTeams,
        };
        dispatch(changeTeamsData(new_teams_data))
    }, [dispatch, pos, selected_team_set, selected_team, teams_data]);

    const filterNikke: ItemPredicate<string> = (query, nikke, _index, exactMatch) => {
        const normalizednikke = nikke.toLowerCase();
        const normalizedQuery = query.toLowerCase();
    
        if (exactMatch) {
            return normalizednikke === normalizedQuery;
        } else {
            return `${normalizednikke}`.indexOf(normalizedQuery) >= 0;
        }
    };

    const renderNikke: ItemRenderer<string> = (nikke, { handleClick, handleFocus, modifiers, query }) => {
        if (!modifiers.matchesPredicate) {
            return null;
        }
        return (
            <MenuItem
                active={modifiers.active}
                disabled={modifiers.disabled}
                key={nikke}
                labelElement={<img src={getNikkeIcon(getNikkeIDByName(nikke))} alt="Icon not found" width="50px" height="50px" />}
                onClick={handleClick}
                onFocus={handleFocus}
                roleStructure="listoption"
                text={nikke}
            />
        );
    };

    return (
        <Select<string>
            items={select_items}
            itemPredicate={filterNikke}
            itemRenderer={renderNikke}
            noResults={<MenuItem disabled={true} text="No results." roleStructure="listoption" />}
            onItemSelect={changeTeamNikke}
        >
            <Button text={nikke} rightIcon="double-caret-vertical" aria-placeholder="Select a Nikke" />
        </Select>
    );
};

export default TeamEdit