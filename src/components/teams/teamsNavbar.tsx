import { useDispatch, useSelector } from "react-redux";
import { setSelectedTeam, TeamSet, TeamsState } from "../../state/teamsState";
import { RootState } from "../../state/store";
import { Alignment, Button, Navbar } from "@blueprintjs/core";
import { color_scheme } from "../../types";

const TeamsNavbar: React.FC = () => {
    const teamsState: TeamsState = useSelector((state: RootState) => state.teams);
    const { selected_team_set, selected_team, teams_data } = teamsState;
    const dispatch = useDispatch();
    
    if (!selected_team_set || !teams_data) return null;

    const { solo_raid, pvp, custom } = teams_data;

    return (
        <Navbar
            style={{
                backgroundColor: color_scheme[1],
                position: 'fixed',
                width: '100%',
                zIndex: 10,
                top: '50px',
                left: 0
            }}
        >
            <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading style={{ fontWeight: 'bold' }}>Teams</Navbar.Heading>
            <Navbar.Divider />
            <Button
                style={{ 
                    backgroundColor: selected_team === "summary" ? color_scheme[3] : color_scheme[1],
                }}
                className="bp5-minimal"
                text={"Summary"}
                onClick={() => dispatch(setSelectedTeam("summary"))}
            />
            {selected_team_set === TeamSet.solo_raid && 
                solo_raid.map(team =>
                    <Button
                        style={{ 
                            backgroundColor: team.name === selected_team ? color_scheme[3] : color_scheme[1],
                        }}
                        key={team.name}
                        className="bp5-minimal"
                        text={team.name}
                        onClick={() => dispatch(setSelectedTeam(team.name))}
                    />
                )
            }
            {selected_team_set === TeamSet.pvp && 
                pvp.map(team =>
                    <Button
                        style={{ 
                            backgroundColor: team.name === selected_team ? color_scheme[3] : color_scheme[1],
                        }}
                        key={team.name}
                        className="bp5-minimal"
                        text={team.name}
                        onClick={() => dispatch(setSelectedTeam(team.name))}
                    />
                )
            }
            {selected_team_set === TeamSet.custom && 
                custom.map(team =>
                    <Button
                        style={{ 
                            backgroundColor: team.name === selected_team ? color_scheme[3] : color_scheme[1],
                        }}
                        key={team.name}
                        className="bp5-minimal"
                        text={team.name}
                        onClick={() => dispatch(setSelectedTeam(team.name))}
                    />
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
        </Navbar>
    )
}

export default TeamsNavbar;