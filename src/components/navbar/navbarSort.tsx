import { Button, Menu, MenuItem, Popover } from "@blueprintjs/core"
import { color_scheme } from "../../types"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { setSortOption, SortOption, SortOptions } from "../../state/sortOptions";

const NavbarSort: React.FC = () => {
    const sortState: SortOption = useSelector((state: RootState) => state.sort)
    const dispatch = useDispatch();

    const sortMenu = () => {
        return <Menu style={{ backgroundColor: color_scheme[0] }} >
            {Object.values(SortOptions).map(option => 
                <MenuItem
                    style={{ 
                        backgroundColor: option === sortState.sortOption ? color_scheme[3] : color_scheme[0],
                        color: option === sortState.sortOption ? color_scheme[0] : color_scheme[4]
                    }}
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