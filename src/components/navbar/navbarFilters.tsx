import { Button, Navbar } from "@blueprintjs/core";
import { useSelector, useDispatch } from "react-redux";
import { FilterOptions, setBurstFilter, setRoleFilter, setWeaponFilter } from "../../state/filterOptions";
import { RootState } from "../../state/store";
import { Burst, color_scheme, NikkeRole, WeaponType } from "../../types";
import { getMiscIcon } from "../../utility/iconGetters";

const NavbarFilters: React.FC = () => {
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter)
    const dispatch = useDispatch();

    return (
        <>
            {Object.values(Burst).filter(burst => burst !== Burst.Burst_Lambda).map(burst => 
                <Button
                    style={{ 
                        backgroundColor: burst === filterState.burst ? color_scheme[4] : color_scheme[1],
                        marginLeft: '2px',
                        marginRight: '2px'
                    }}
                    key={burst}
                    className="bp5-minimal"
                    icon={<img src={getMiscIcon("burst", burst)} alt={burst} style={{ height: 32 }} />}
                    onClick={
                        burst === filterState.burst ?
                        () => dispatch(setBurstFilter(undefined)) :
                        () => dispatch(setBurstFilter(burst))
                    }
                />
            )}
            <Navbar.Divider />
            {Object.values(NikkeRole).map(role =>
                <Button
                    style={{ 
                        backgroundColor: role === filterState.role ? color_scheme[4] : color_scheme[1],
                        marginLeft: '2px',
                        marginRight: '2px'
                    }}
                    key={role}
                    className="bp5-minimal"
                    icon={<img src={getMiscIcon("role", role)} alt={role} style={{ height: 32 }} />}
                    onClick={role === filterState.role ?
                        () => dispatch(setRoleFilter(undefined)) :
                        () => dispatch(setRoleFilter(role))
                    }
                />
            )}
            <Navbar.Divider />
            {Object.values(WeaponType).map(weapon =>
                <Button
                    style={{ 
                        backgroundColor: weapon === filterState.weapon ? color_scheme[4] : color_scheme[1],
                        marginLeft: '2px',
                        marginRight: '2px'
                    }}
                    key={weapon}
                    className="bp5-minimal"
                    icon={<img src={getMiscIcon("weapon", weapon)} alt={weapon} style={{ height: 32 }} />}
                    onClick={weapon === filterState.weapon ?
                        () => dispatch(setWeaponFilter(undefined)) :
                        () => dispatch(setWeaponFilter(weapon))
                    }
                />
            )}
        </>
    )
}

export default NavbarFilters;