import { Button, Dialog, DialogBody, DialogFooter, Popover, Tooltip } from "@blueprintjs/core";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { TeamsState, TeamSet, changeTeamsData } from "../../state/teamsState";
import { CubeName, NikkeElement, color_scheme } from "../../types";
import { getMiscIcon, getNikkeIcon } from "../../utility/iconGetters";
import TeamEdit from "./teamEdit";
import { nikke_static_data } from "../../data/nikkeStaticData";

interface SummaryEntryProps {
    pos: number;
    nikke: string | undefined;
    cube: CubeName | undefined;
    index: number;
    selected_team: string;
}

const SummaryEntry: React.FC<SummaryEntryProps> = ({ pos, nikke, cube, index, selected_team }) => {
    const [popover_open, setPopoverOpen] = useState(false);
    const dispatch = useDispatch();
    const teams_state: TeamsState = useSelector((state: RootState) => state.teams);
    const {selected_team_set, teams_data, highlighted_element} = teams_state;
    const teamSetKey = selected_team_set === TeamSet.campaign ?
            "campaign" : selected_team_set === TeamSet.solo_raid ?
            "solo_raid" : selected_team_set === TeamSet.tribe_tower ?
            "tribe_tower" : selected_team_set === TeamSet.shooting_range ?
            "shooting_range" : selected_team_set === TeamSet.pvp ?
            "pvp" : "custom";
    const team_set = teams_data![teamSetKey];
    const [edit_dialog_open, setEditDialogOpen] = useState(false);
    const element: NikkeElement | undefined = nikke ? nikke_static_data[nikke].element : undefined;
    const icon_getter_type = !highlighted_element ? "element" :
        highlighted_element === element ? "element" : "elementBW";

    
    const [isHoveredNikke, setIsHoveredNikke] = useState(false);
    const handleMouseEnterNikke = () => setIsHoveredNikke(true);
    const handleMouseLeaveNikke = () => setIsHoveredNikke(false);
    const [isHoveredCube, setIsHoveredCube] = useState(false);
    const handleMouseEnterCube = () => setIsHoveredCube(true);
    const handleMouseLeaveCube = () => setIsHoveredCube(false);

    const changeTeamCube = useCallback((new_cube: CubeName) => {
        if (!selected_team_set || selected_team === "summary" || !teams_data)
            throw new Error("Selected team not found.");

        
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
    }, [dispatch, pos, selected_team_set, selected_team, teams_data, teamSetKey]);

    const cubeSelector = () => {
        return (
            <div style={{ 
                backgroundColor: color_scheme[0], 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px'
            }}>
                {Object.values(CubeName).map(cube => (
                    <Tooltip key={cube} content={cube} >
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
                    </Tooltip>
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
                }}
            >                
                <div style={{ gridColumn: '1 / 2' }} >
                    <img 
                        src={nikke ? getNikkeIcon(nikke) : getMiscIcon("misc", "empty")}
                        alt="Icon not found"
                        onClick={() => setEditDialogOpen(true)}
                        style={{
                            ...styles.image,
                            transform: isHoveredNikke ? 'scale(1.1)' : 'scale(1)',
                        }}
                        onMouseEnter={handleMouseEnterNikke}
                        onMouseLeave={handleMouseLeaveNikke}
                    />
                </div>                
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
                                    style={{
                                        ...styles.smallImage,
                                        transform: isHoveredCube ? 'scale(1.1)' : 'scale(1)',
                                    }}
                                    onMouseEnter={handleMouseEnterCube}
                                    onMouseLeave={handleMouseLeaveCube}
                                />
                            </div>
                        </Popover>
                    </div>
                }
                <Dialog isOpen={edit_dialog_open} title="Edit Team" onClose={() => setEditDialogOpen(false)} >
                    <DialogBody>
                        <TeamEdit team={team_set.find(t => t.name === selected_team)!} teams_state={teams_state} />
                    </DialogBody>
                    <DialogFooter
                        actions={
                            <Button
                                style={{ backgroundColor: color_scheme[4], color: color_scheme[0] }}
                                text="Close"
                                onClick={() => setEditDialogOpen(false)} />
                            }
                    />
                </Dialog>
            </div>
        </div>
    )
}

const styles = {
    image: {
        width: '128px',
        height: '128px',
        transition: 'transform 0.3s ease-in-out',
    },
    hover: {
        transform: 'scale(1.1)',
    },
    smallImage: {
        width: '64px',
        height: '64px',
        transition: 'transform 0.3s ease-in-out',
    },
};

export default SummaryEntry;