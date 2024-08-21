import { useCallback, useEffect, useState } from "react";
import { CubeName, NikkeManufacturer, NikkeStaticData, Team } from "../../types";
import { ItemPredicate, ItemRenderer, Select } from "@blueprintjs/select";
import { Button, MenuItem } from "@blueprintjs/core";
import { getNikkeIcon } from "../../utility/iconGetters";
import { useDispatch } from "react-redux";
import { changeTeamsData, TeamSet, TeamsState } from "../../state/teamsState";
import { nikke_static_data } from "../../data/nikkeStaticData";

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
        <NikkeSelect pos={pos} nikke={nikke} team={team} teams_state={teams_state} />
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
    const [ select_items, setSelectItems ] = useState(Object.values(nikke_static_data));
    useEffect(() => {
        switch (team.name) {
            case "Elysion":
                setSelectItems(Object.values(nikke_static_data).filter(nikke => nikke.manufacturer === NikkeManufacturer.Elysion));
                break;
            case "Missilis":
                setSelectItems(Object.values(nikke_static_data).filter(nikke => nikke.manufacturer === NikkeManufacturer.Missilis));
                break;
            case "Tetra":
                setSelectItems(Object.values(nikke_static_data).filter(nikke => nikke.manufacturer === NikkeManufacturer.Tetra));
                break;
            case "Pilgrim":
                setSelectItems(Object.values(nikke_static_data).filter(nikke => nikke.manufacturer === NikkeManufacturer.Pilgrim));
                break;
            default:
                setSelectItems(Object.values(nikke_static_data));
        }
    },[team.name]);
    const dispatch = useDispatch();
    const nikke_name = nikke ? nikke_static_data[nikke].name : "(Select a Nikke)";

    const changeTeamNikke = useCallback((nikke: NikkeStaticData) => {
        if (!selected_team_set || !teams_data)
            throw new Error("Selected team not found.");

        const teamSetKey = selected_team_set === TeamSet.campaign ?
            "campaign" : selected_team_set === TeamSet.solo_raid ?
            "solo_raid" : selected_team_set === TeamSet.tribe_tower ?
            "tribe_tower" : selected_team_set === TeamSet.shooting_range ?
            "shooting_range" : selected_team_set === TeamSet.pvp ?
            "pvp" : "custom";
        const teams = teams_data[teamSetKey];

        const team_to_edit = selected_team === "summary" ? team.name : selected_team;

        const teamIndex = teams.findIndex(t => t.name === team_to_edit);
        if (teamIndex === -1)
            throw new Error("Selected team not found (index -1).");

        const updatedTeams = [...teams];
        const teamToUpdate = { ...updatedTeams[teamIndex] };

        switch (pos) {
            case 1:
                teamToUpdate.nikke_1 = nikke.id;
                teamToUpdate.cube_1 = undefined;
                break;
            case 2:
                teamToUpdate.nikke_2 = nikke.id;
                teamToUpdate.cube_2 = undefined;
                break;
            case 3:
                teamToUpdate.nikke_3 = nikke.id;
                teamToUpdate.cube_3 = undefined;
                break;
            case 4:
                teamToUpdate.nikke_4 = nikke.id;
                teamToUpdate.cube_4 = undefined;
                break;
            case 5:
                teamToUpdate.nikke_5 = nikke.id;
                teamToUpdate.cube_5 = undefined;
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
    }, [dispatch, pos, selected_team_set, selected_team, teams_data, team.name]);

    const filterNikke: ItemPredicate<NikkeStaticData> = (query, nikke, _index, exactMatch) => {
        const normalizednikke = nikke.name.toLowerCase();
        const normalizedQuery = query.toLowerCase();
    
        if (exactMatch) {
            return normalizednikke === normalizedQuery;
        } else {
            return `${normalizednikke}`.indexOf(normalizedQuery) >= 0;
        }
    };

    const renderNikke: ItemRenderer<NikkeStaticData> = (nikke, { handleClick, handleFocus, modifiers, query }) => {
        if (!modifiers.matchesPredicate) {
            return null;
        }
        return (
            <MenuItem
                active={modifiers.active}
                disabled={modifiers.disabled}
                key={nikke.id}
                labelElement={<img src={getNikkeIcon(nikke.id)} alt="Icon not found" width="50px" height="50px" />}
                onClick={handleClick}
                onFocus={handleFocus}
                roleStructure="listoption"
                text={nikke.name}
            />
        );
    };

    return (
        <Select<NikkeStaticData>
            items={select_items}
            itemPredicate={filterNikke}
            itemRenderer={renderNikke}
            noResults={<MenuItem disabled={true} text="No results." roleStructure="listoption" />}
            onItemSelect={changeTeamNikke}
        >
            <Button text={nikke_name} rightIcon="double-caret-vertical" style={{ width: "300px" }} />
        </Select>
    );
};

export default TeamEdit;