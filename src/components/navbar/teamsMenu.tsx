import { Button, Menu, MenuItem, Popover, Tooltip } from "@blueprintjs/core";
import { color_scheme } from "../../types";
import { setSelectedTeamSet, TeamSet } from "../../state/teamsState";
import { useDispatch } from "react-redux";
import { setSearch } from "../../state/search";

const TeamsMenu: React.FC = () => {
    const dispatch = useDispatch();

    const content = () => {
        return <Menu style={{ backgroundColor: color_scheme[0] }} >
            {Object.values(TeamSet).filter(ts => ts !== TeamSet.custom).map(team_set => 
                <MenuItem
                    style={{ 
                        backgroundColor: color_scheme[0]
                    }}
                    key={team_set}
                    text={team_set}
                    onClick={() => {
                        dispatch(setSelectedTeamSet(team_set))
                        dispatch(setSearch(""))
                    }}

                />
            )}
        </Menu>
    };

    return (
        <Popover minimal content={content()} >
            <Tooltip position="bottom" content="Teams" >
                <Button
                    style={{ color: color_scheme[4] }}
                    className="bp5-minimal"
                    icon='team'
                />
            </Tooltip>
        </Popover>
    )
}

export default TeamsMenu;