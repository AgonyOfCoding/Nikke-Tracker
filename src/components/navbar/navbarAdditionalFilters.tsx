import { Button, Menu, MenuDivider, MenuItem, Popover } from "@blueprintjs/core"
import { color_scheme, NikkeElement, NikkeManufacturer, NikkeRarity } from "../../types"

const NavbarAdditionalFilters: React.FC = () => {

    const additionalFiltersdMenu = () => {
        return <Menu style={{ backgroundColor: color_scheme[0] }} >
            {Object.values(NikkeManufacturer).map(manufacturer => 
                <MenuItem
                    key={manufacturer}
                    text={manufacturer}
                />
            )}
            <MenuDivider />
            {Object.values(NikkeRarity).map(rarity =>
               <MenuItem
                    key={rarity}
                    text={rarity}
                />
            )}
            <MenuDivider />
            {Object.values(NikkeElement).map(element =>
               <MenuItem
                    key={element}
                    text={element}
                />
            )}
        </Menu>
    };

    return (
        <Popover minimal content={additionalFiltersdMenu()} >
            <Button
                style={{ backgroundColor: color_scheme[1], color: color_scheme[4] }}
                className="bp5-minimal"
                text='Additional Filters'
            />
        </Popover>
    )
}

export default NavbarAdditionalFilters