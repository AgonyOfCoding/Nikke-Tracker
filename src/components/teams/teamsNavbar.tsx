import { useDispatch, useSelector } from "react-redux";
import { setSelectedTeam, setSelectedTeamSet, TeamSet, TeamsState } from "../../state/teamsState";
import { RootState } from "../../state/store";
import { Alignment, Button, Dialog, DialogBody, DialogFooter, Navbar } from "@blueprintjs/core";
import { color_scheme } from "../../types";
import { useState } from "react";
import "../../customStyles/customDialogStyles.css"
import TeamEdit from "./teamEdit";

const TeamsNavbar: React.FC = () => {
    const teamsState: TeamsState = useSelector((state: RootState) => state.teams);
    const { selected_team_set, selected_team, teams_data } = teamsState;
    const dispatch = useDispatch();
    const [edit_dialog_open, setEditDialogOpen] = useState(false);
    
    if (!selected_team_set || !teams_data) return null;

    const team_set_key = selected_team_set === TeamSet.campaign ?
            "campaign" : selected_team_set === TeamSet.solo_raid ?
            "solo_raid" : selected_team_set === TeamSet.tribe_tower ?
            "tribe_tower": selected_team_set === TeamSet.pvp ?
            "pvp" : "custom";
    const team_set = teams_data[team_set_key];

    return (
        <Navbar
            style={{
                backgroundColor: color_scheme[1],
                position: 'fixed',
                width: '100%',
                zIndex: 10,
                top: 0,//'50px',
                left: 0
            }}
        >
            <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading style={{ fontWeight: 'bold' }}>Teams</Navbar.Heading>
            <Button icon="cross" onClick={() => dispatch(setSelectedTeamSet(undefined))} />
            <Navbar.Divider />
            <Button
                style={{ 
                    backgroundColor: selected_team === "summary" ? color_scheme[3] : color_scheme[1],
                }}
                className="bp5-minimal"
                text={"Summary"}
                onClick={() => dispatch(setSelectedTeam("summary"))}
            />
            <Navbar.Divider />
                {team_set.map(team =>
                    <>   
                        <Button
                            style={{ 
                                backgroundColor: team.name === selected_team ? color_scheme[3] : color_scheme[1],
                            }}
                            key={team.name}
                            className="bp5-minimal"
                            text={team.name}
                            onClick={() => dispatch(setSelectedTeam(team.name))}
                        />
                        <Button
                            style={{ 
                                backgroundColor: color_scheme[1],
                            }}
                            key={team.name + "edit"}
                            className="bp5-minimal"
                            icon="edit"
                            onClick={() => {
                                setEditDialogOpen(true)
                                dispatch(setSelectedTeam(team.name))
                            }}
                        />
                        <Navbar.Divider />
                    </>
                )
            }
            {selected_team_set === TeamSet.custom && 
                <Button
                    style={{ 
                        backgroundColor: color_scheme[1],
                    }}
                    className="bp5-minimal"
                    icon="plus"
                />
            }
            </Navbar.Group>
            <Dialog isOpen={edit_dialog_open} title='Set Skill Levels' onClose={() => setEditDialogOpen(false)} >
                <DialogBody className="custom-dialog-body" >
                    <TeamEdit team={team_set.find(team => team.name === selected_team)!} teams_state={teamsState} />
                </DialogBody>
                <DialogFooter
                    className="custom-dialog-footer"
                    actions={
                        <Button
                            style={{ backgroundColor: color_scheme[4], color: color_scheme[0] }}
                            text="Close"
                            onClick={() => setEditDialogOpen(false)} />
                        }
                />
            </Dialog>
        </Navbar>
    )
}

export default TeamsNavbar;