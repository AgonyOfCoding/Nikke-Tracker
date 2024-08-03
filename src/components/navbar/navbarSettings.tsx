import { Button, Menu, Popover, Switch } from "@blueprintjs/core"
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
                <Switch
                    alignIndicator="right"
                    checked={settings.post_overload}
                    label="Post-overload"
                    onChange={() => dispatch(setSettingsPostOverload(!settings.post_overload))}
                />
                <Switch
                    alignIndicator="right"
                    checked={settings.wide_layout}
                    label="Wide Layout"
                    onChange={() => dispatch(setSettingsWideLayout(!settings.wide_layout))}
                />
            </Menu>
        )
    };

    return (
        <Popover minimal position='bottom-right' content={settingsMenu()} >
            <Button
                style={{ color: color_scheme[4] }}
                className="bp5-minimal"
                icon='settings'
            />
        </Popover>
    )
}

export default NavbarSort;