import { useDispatch, useSelector } from "react-redux";
import { RecommendationSource, setRecommendationSource } from "../../state/recommendationSources";
import { RootState } from "../../state/store";
import { Button, Menu, MenuItem, Popover, Tooltip } from "@blueprintjs/core";
import { color_scheme } from "../../types";


const NavbarRecommendations: React.FC = () => {
    const recommendations_source: RecommendationSource = useSelector((state: RootState) => state.recommendations.source);
    const dispatch = useDispatch();

    const content = (
        <Menu style={{ backgroundColor: color_scheme[0] }}>
            {Object.values(RecommendationSource).map(source => (
                <MenuItem
                    style={{ backgroundColor: source === recommendations_source ? color_scheme[3] : color_scheme[0] }}
                    key={source}
                    text={source}
                    onClick={() => dispatch(setRecommendationSource(source))}
                />
            ))}
        </Menu>
    );

    return (
        <Popover minimal content={content}>
            <Tooltip position="bottom" content="Recommendations">
                <Button
                    style={{ color: color_scheme[4] }}
                    className="bp5-minimal"
                    icon="learning"
                />
            </Tooltip>
        </Popover>
    );
}

export default NavbarRecommendations;