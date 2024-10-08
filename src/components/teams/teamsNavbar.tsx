import { useDispatch, useSelector } from "react-redux";
import { setHighlightedElement, setSelectedTeam, setSelectedTeamSet, TeamSet, TeamsState } from "../../state/teamsState";
import { RootState } from "../../state/store";
import { Alignment, Button, Navbar } from "@blueprintjs/core";
import { color_scheme, NikkeElement, Team } from "../../types";
import { getMiscIcon } from "../../utility/iconGetters";
import NavbarRecommendations from "../navbar/navbarRecommendations";
import TeamsNavbarTeam from "./teamsNavbarTeam";

const TeamsNavbar: React.FC = () => {
    const teamsState: TeamsState = useSelector((state: RootState) => state.teams);
    const { selected_team_set, selected_team, teams_data, highlighted_element } = teamsState;
    const dispatch = useDispatch();
    
    if (!selected_team_set || !teams_data) return null;

    const team_set_key = selected_team_set === TeamSet.campaign ?
            "campaign" : selected_team_set === TeamSet.solo_raid ?
            "solo_raid" : selected_team_set === TeamSet.anomaly_interception ?
            "anomaly_interception" : selected_team_set === TeamSet.tribe_tower ?
            "tribe_tower": selected_team_set === TeamSet.shooting_range ?
            "shooting_range" : selected_team_set === TeamSet.pvp ?
            "pvp" : "custom";
    const team_set: Team[] = teams_data[team_set_key];

    return (
        <Navbar
            style={{
                backgroundColor: color_scheme[1],
                position: 'fixed',
                width: '100%',
                zIndex: 10,
                top: 0,
                left: 0
            }}
        >
            <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading style={{ fontWeight: 'bold' }}>{selected_team_set + " Teams"}</Navbar.Heading>
            <Button
                icon="cross"
                intent="danger"
                onClick={() => {
                    dispatch(setSelectedTeamSet(undefined))
                    dispatch(setSelectedTeam("summary"))
                }}
            />
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
                <TeamsNavbarTeam team={team} selected_team={selected_team} team_set={team_set} />
            )}
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
            <Navbar.Group align={Alignment.RIGHT}>
            <Navbar.Divider />
            {selected_team !== "summary" &&
                <NavbarRecommendations />
            }
            {selected_team === "summary" && Object.values(NikkeElement).map(element =>
                <Button
                    style={{ 
                        backgroundColor: element === highlighted_element ? color_scheme[3] : color_scheme[1],
                        color: element === highlighted_element ? color_scheme[0] : color_scheme[4]
                    }}
                    key={element}
                    className="bp5-minimal"
                    icon={<img src={getMiscIcon("element", element)} alt={element} style={{ height: 32 }} />}
                    onClick={() => dispatch(setHighlightedElement(element))}
                />
            )}
            </Navbar.Group>
        </Navbar>
    )
}

export default TeamsNavbar;