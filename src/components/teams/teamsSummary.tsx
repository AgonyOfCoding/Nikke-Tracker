import { useDispatch, useSelector } from "react-redux";
import { color_scheme, CubeName, NikkeElement, NikkeStaticData, Team } from "../../types"
import { getMiscIcon, getNikkeIcon } from "../../utility/iconGetters";
import { RootState } from "../../state/store";
import { useCallback, useState } from "react";
import { changeTeamsData, TeamSet, TeamsState } from "../../state/teamsState";
import { Popover } from "@blueprintjs/core";

interface TeamsSummaryProps {
    teams: Team[];
    nikke_static_data: { [key: string]: NikkeStaticData };
}

const TeamsSummary: React.FC<TeamsSummaryProps> = ({ teams, nikke_static_data }) => {
    return (
        <div style={{ marginTop: '51px' }}>
            {teams.map((team, index) => 
                <TeamRow index={index} key={team.name} team={team} nikke_static_data={nikke_static_data} />
            )}
        </div>
    )
}

interface TeamRowProps {
    index: number;
    team: Team;
    nikke_static_data: { [key: string]: NikkeStaticData };
}

const TeamRow: React.FC<TeamRowProps> = ({ index, team, nikke_static_data }) => {
    const { name, nikke_1, nikke_2, nikke_3, nikke_4, nikke_5, cube_1, cube_2, cube_3, cube_4, cube_5 } = team;
    
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
                gridTemplateRows: 'repeat(6, auto)',
                backgroundColor: index % 2 === 0 ? color_scheme[1] : color_scheme[2],
            }}
        >
            <h3>{name}</h3>
            <SummaryEntry pos={1} nikke={nikke_1} cube={cube_1} index={2} nikke_static_data={nikke_static_data} selected_team={name} />
            <SummaryEntry pos={2} nikke={nikke_2} cube={cube_2} index={3} nikke_static_data={nikke_static_data} selected_team={name} />
            <SummaryEntry pos={3} nikke={nikke_3} cube={cube_3} index={4} nikke_static_data={nikke_static_data} selected_team={name} />
            <SummaryEntry pos={4} nikke={nikke_4} cube={cube_4} index={5} nikke_static_data={nikke_static_data} selected_team={name} />
            <SummaryEntry pos={5} nikke={nikke_5} cube={cube_5} index={6} nikke_static_data={nikke_static_data} selected_team={name} />
        </div>
    )
}

interface SummaryEntryProps {
    pos: number;
    nikke: string | undefined;
    cube: CubeName | undefined;
    index: number;
    nikke_static_data: { [key: string]: NikkeStaticData };
    selected_team: string;
}

const SummaryEntry: React.FC<SummaryEntryProps> = ({ pos, nikke, cube, index, nikke_static_data, selected_team }) => {
    const [popover_open, setPopoverOpen] = useState(false);
    const dispatch = useDispatch();
    const teams_state: TeamsState = useSelector((state: RootState) => state.teams);
    const {selected_team_set, teams_data, highlighted_element} = teams_state;
    const element: NikkeElement | undefined = nikke ? nikke_static_data[nikke].element : undefined;
    const icon_getter_type = !highlighted_element ? "element" :
        highlighted_element === element ? "element" : "elementBW";

    const changeTeamCube = useCallback((new_cube: CubeName) => {
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
                teamToUpdate.cube_1 = new_cube;
                break;
            case 2:
                teamToUpdate.cube_2 = new_cube;
                break;
            case 3:
                teamToUpdate.cube_3 = new_cube;
                break;
            case 4:
                teamToUpdate.cube_4 = new_cube;
                break;
            case 5:
                teamToUpdate.cube_5 = new_cube;
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

    const cubeSelector = () => {
        return (
            <div style={{ 
                backgroundColor: color_scheme[0], 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px'
            }}>
                {Object.values(CubeName).map(cube => (
                    <div key={cube} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={getMiscIcon("cube", cube)}
                            alt="Icon not found"
                            style={{ width: '80px' }}
                            onClick={() => {
                                changeTeamCube(cube)
                                setPopoverOpen(false)
                            }}
                        />
                    </div>
                ))}
            </div>
        )
    };
    
    return (
        <div style={{ gridColumn: `${index} / ${index + 1}`, width: '192px' }} >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: 'repeat(2, auto)'
                }}
            >
                {nikke &&
                    <div style={{ gridColumn: '1 / 2' }} >
                        <img 
                            src={nikke ? getNikkeIcon(nikke) : getMiscIcon("misc", "empty")}
                            alt="Icon not found"
                            style={{ width: '128px', height: '128px' }}
                        />
                    </div>
                }
                {nikke &&
                    <div style={{ gridColumn: '2 / 3' }} >
                        <div>
                            <img 
                                src={element ? getMiscIcon(icon_getter_type, element) : null}
                                alt="Icon not found"
                                style={{ width: '64px', height: '64px' }}
                            />
                        </div>
                        <Popover
                            minimal
                            interactionKind='click'
                            isOpen={popover_open}
                            onInteraction={(state) => setPopoverOpen(state)}
                            content={cubeSelector()}
                        >
                            <div>
                                <img 
                                    src={cube ? getMiscIcon("cube", cube) : getMiscIcon("misc", "empty")}
                                    alt="Icon not found"
                                    style={{ width: '64px', height: '64px' }}
                                />
                            </div>
                        </Popover>
                    </div>
                }
            </div>
        </div>
    )
}

export default TeamsSummary;