import { Button, Menu, MenuItem, Popover } from "@blueprintjs/core";
import { color_scheme } from "../../types";
import { setSelectedTeamSet, TeamSet } from "../../state/teamsState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";

const TeamsMenu: React.FC = () => {
    const selected_team_set: TeamSet | undefined  = useSelector((state: RootState) => state.teams.selected_team_set);
    const dispatch = useDispatch();

    const content = () => {
        return <Menu style={{ backgroundColor: color_scheme[0] }} >
            {Object.values(TeamSet).map(team_set => 
                <MenuItem
                    style={{ 
                        backgroundColor: team_set === selected_team_set ? color_scheme[3] : color_scheme[0],
                        color: team_set === selected_team_set ? color_scheme[0] : color_scheme[4]
                    }}
                    key={team_set}
                    text={team_set}
                    onClick={() => dispatch(setSelectedTeamSet(team_set))}
                />
            )}
        </Menu>
    };

    return (
        <Popover minimal content={content()} >
            <Button
                style={{ color: color_scheme[4] }}
                className="bp5-minimal"
                text='Teams'
            />
        </Popover>
    )
}

export default TeamsMenu;