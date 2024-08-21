import { Button, Dialog, DialogBody, DialogFooter, Navbar } from "@blueprintjs/core";
import { setSelectedTeam, TeamsState } from "../../state/teamsState";
import { color_scheme, Team } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TeamEdit from "./teamEdit";
import { RootState } from "../../state/store";

interface TeamsNavbarTeamProps {
    team: Team;
    selected_team: string;
    team_set: Team[];
}

const TeamsNavbarTeam: React.FC<TeamsNavbarTeamProps> = ({ team, selected_team, team_set }) => {
    const [edit_dialog_open, setEditDialogOpen] = useState(false);
    const teamsState: TeamsState = useSelector((state: RootState) => state.teams);
    const dispatch = useDispatch();

    return (
        <>
            <Button
                style={{ 
                    backgroundColor: team.name === selected_team ? color_scheme[3] : color_scheme[1],
                }}
                className="bp5-minimal"
                text={team.name}
                onClick={() => dispatch(setSelectedTeam(team.name))}
            />
            <Button
                style={{ 
                    backgroundColor: color_scheme[1],
                }}
                className="bp5-minimal"
                icon="edit"
                onClick={() => {
                    setEditDialogOpen(true)
                    dispatch(setSelectedTeam(team.name))
                }}
            />
            <Navbar.Divider />
            <Dialog isOpen={edit_dialog_open} title="Edit Team" onClose={() => setEditDialogOpen(false)} >
                <DialogBody>
                    <TeamEdit team={team_set.find(team => team.name === selected_team)!} teams_state={teamsState} />
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
        </>
    )
}

export default TeamsNavbarTeam;

