import { Button, Menu, MenuItem, Popover } from "@blueprintjs/core"
import { color_scheme } from "../../types"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { setSortOption, SortState } from "../../state/sortOptions";
import { RecommendationSource } from "../../state/recommendationSources";

const sort_options_common: string[] = [
    "Rarity",
    "Name",
    "Collection Item Priority"
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

const NavbarSort: React.FC = () => {
    const sortState: SortState = useSelector((state: RootState) => state.sort);
    const recommendations_source: RecommendationSource  = useSelector((state: RootState) => state.recommendations.source);
    const dispatch = useDispatch();

    const sort_options = recommendations_source === RecommendationSource.nikke_gg ?
        sort_options_common.concat(sort_options_nikkegg) :
        recommendations_source === RecommendationSource.prydwen ?
        sort_options_common.concat(sort_options_prydwen) :
        sort_options_common.concat(sort_options_sky);

    const sortMenu = () => {
        return <Menu style={{ backgroundColor: color_scheme[0] }} >
            {sort_options.map(option => 
                <MenuItem
                    style={{ 
                        backgroundColor: option === sortState.sort_option ? color_scheme[3] : color_scheme[0],
                        color: option === sortState.sort_option ? color_scheme[0] : color_scheme[4]
                    }}
                    icon={option !== sortState.sort_option ?
                        null :
                        sortState.inverted ? "caret-up" : "caret-down"
                    }
                    key={option}
                    text={option}
                    onClick={() => dispatch(setSortOption(option))}
                />
            )}
        </Menu>
    };

    return (
        <Popover minimal content={sortMenu()} >
            <Button
                style={{ color: color_scheme[4] }}
                className="bp5-minimal"
                text='Sort'
            />
        </Popover>
    )
}

export default NavbarSort;