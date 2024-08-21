import { Button, Menu, MenuItem, Popover, Tooltip } from "@blueprintjs/core"
import { color_scheme } from "../../types"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { setSortOption, SortState } from "../../state/sortOptions";
import { RecommendationSource } from "../../state/recommendationSources";

const sort_options_common: string[] = [
    "Rarity",
    "Name",
    "Collection Item Priority",
    "Collection Item Phase"
];

const sort_options_nikkegg: string[] = [
    "Rating (Story)[Nikke.gg]",
    "Rating (PVP)[Nikke.gg]",
    "Rating (Boss)[Nikke.gg]",
    "Skill Investment Priority[Nikke.gg]",
    "Overload Investment Priority[Nikke.gg]"
]

const sort_options_prydwen: string[] = [
    "Rating (Story, low deficit)[Prydwen]",
    "Rating (Story, high deficit)[Prydwen]",
    "Rating (Boss, solo)[Prydwen]",
    "Rating (Boss, adds)[Prydwen]",
    "Rating (PVP)[Prydwen]",
    "Skill Investment Priority[Prydwen]",
    "Overload Investment Priority[Prydwen]"
]

const sort_options_sky: string[] = [
    "Priority[Skyfall]"
]

const sort_options_keripo: string[] = [
    "Tier[Keripo]"
]

function removeBrackets(str: string) {
    return str.replace(/\[.*?\]/g, '');
}

const NavbarSort: React.FC = () => {
    const sortState: SortState = useSelector((state: RootState) => state.sort);
    const recommendations_source: RecommendationSource  = useSelector((state: RootState) => state.recommendations.source);
    const dispatch = useDispatch();

    const sort_options = recommendations_source === RecommendationSource.nikke_gg ?
        sort_options_common.concat(sort_options_nikkegg) :
        recommendations_source === RecommendationSource.prydwen ?
        sort_options_common.concat(sort_options_prydwen) :
        recommendations_source === RecommendationSource.skyfall ?
        sort_options_common.concat(sort_options_sky) :
        sort_options_common.concat(sort_options_keripo)

    const sortMenu = () => {
        return <Menu style={{ backgroundColor: color_scheme[0] }} >
            {sort_options.map(option => 
                <MenuItem
                    style={{ 
                        backgroundColor: option === sortState.sort_option ? color_scheme[3] : color_scheme[0]
                    }}
                    icon={option !== sortState.sort_option ?
                        null :
                        sortState.inverted ? "caret-up" : "caret-down"
                    }
                    key={option}
                    text={removeBrackets(option)}
                    onClick={() => dispatch(setSortOption(option))}
                />
            )}
        </Menu>
    };

    return (
        <Popover minimal content={sortMenu()} >
            <Tooltip position="bottom" content="Sort" >
                <Button
                    style={{ color: color_scheme[4] }}
                    className="bp5-minimal"
                    icon='sort'
                />
            </Tooltip>
        </Popover>
    )
}

export default NavbarSort;