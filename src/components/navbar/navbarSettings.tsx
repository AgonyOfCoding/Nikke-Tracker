import { Button, Menu, Popover, Switch, Tooltip } from "@blueprintjs/core"
import { color_scheme } from "../../types"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { setSettingsPostOverload, setSettingsWideLayout, Settings } from "../../state/settings";

const NavbarSort: React.FC = () => {
    const settings: Settings = useSelector((state: RootState) => state.settings)
    const dispatch = useDispatch();

    const settingsMenu = () => {
        return (
            <Menu style={{ backgroundColor: color_scheme[0] }} >
                <div>
                    <Tooltip position="bottom" content="Affects harmony cube recommendations from Prydwen" >
                        <Switch
                            alignIndicator="left"
                            checked={settings.post_overload}
                            label="Post-overload"
                            onChange={() => dispatch(setSettingsPostOverload(!settings.post_overload))}
                        />
                    </Tooltip>
                </div>
                <div>
                    <Tooltip position="bottom" content="Changes the position of the collection item">
                        <Switch
                            alignIndicator="left"
                            checked={settings.wide_layout}
                            label="Wide Layout"
                            onChange={() => dispatch(setSettingsWideLayout(!settings.wide_layout))}
                        />
                    </Tooltip>
                </div>
            </Menu>
        )
    };

    return (
        <Popover minimal position='bottom-right' content={settingsMenu()} >
            <Tooltip content="Settings" position="bottom">
                <Button
                    style={{ color: color_scheme[4] }}
                    className="bp5-minimal"
                    icon='settings'
                />
            </Tooltip>
        </Popover>
    )
}

export default NavbarSort;