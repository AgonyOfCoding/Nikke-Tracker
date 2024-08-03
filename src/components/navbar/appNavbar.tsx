import { Navbar, Button, Alignment, InputGroup } from '@blueprintjs/core';
import { Burst, color_scheme, NikkeRole, WeaponType } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { clearFilters, FilterOptions, setBurstFilter, setRoleFilter, setWeaponFilter } from '../../state/filterOptions';
import { setSearch } from '../../state/search';
import NavbarAdditionalFilters from './navbarAdditionalFilters';
import { getMiscIcon } from '../../utility/iconGetters';
import NavbarSort from './navbarSort';
import { RecommendationSource, RecommendationSourceState, setRecommendationSource } from '../../state/recommendationSources';
import NavbarSettings from './navbarSettings';

const AppNavbar: React.FC = () => {
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter)
    const recommendationSourceState: RecommendationSourceState = useSelector((state: RootState) => state.recommendations)
    const dispatch = useDispatch();

    return (
        <Navbar
            style={{
                backgroundColor: color_scheme[1],
                color: color_scheme[4],
                position: 'fixed',
                width: '100%',
                zIndex: 10,
                top: 0
            }}
        >
            <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading style={{ fontWeight: 'bold' }}>NIT</Navbar.Heading>
            <Navbar.Divider />
            <NavbarSettings />
            <Navbar.Divider />
            <NavbarSort />
            <Navbar.Divider />
            <Navbar.Heading style={{ fontWeight: 'bold' }} >Filters</Navbar.Heading>
            <Button 
                icon='reset'
                className="bp5-minimal"
                onClick={() => dispatch(clearFilters())}
            />
            <Navbar.Divider />
            {Object.values(Burst).filter(burst => burst !== Burst.Burst_Lambda).map(burst => 
                <Button
                    style={{ 
                        backgroundColor: burst === filterState.burst ? color_scheme[3] : color_scheme[1],
                        color: burst === filterState.burst ? color_scheme[0] : color_scheme[4]
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
                        backgroundColor: role === filterState.role ? color_scheme[3] : color_scheme[1],
                        color: role === filterState.role ? color_scheme[0] : color_scheme[4]
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
                        backgroundColor: weapon === filterState.weapon ? color_scheme[3] : color_scheme[1],
                        color: weapon === filterState.weapon ? color_scheme[0] : color_scheme[4]
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
            <Navbar.Divider />
            <NavbarAdditionalFilters />
            <Navbar.Divider />
            <Navbar.Heading style={{ fontWeight: 'bold' }} >Recommendations</Navbar.Heading>
            {Object.values(RecommendationSource).map((source) => (
                <Button
                    style={{ 
                        backgroundColor: source === recommendationSourceState.source ? color_scheme[3] : color_scheme[1],
                        color: source === recommendationSourceState.source ? color_scheme[0] : color_scheme[4]
                    }}
                    key={source}
                    className="bp5-minimal"
                    text={source}
                    onClick={() => dispatch(setRecommendationSource(source))}
                />
            ))}
            <Navbar.Divider />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
            <Navbar.Divider />
            <InputGroup
                style={{ backgroundColor: color_scheme[0] }}
                placeholder='Search...'
                type='search'
                onChange={(event) => dispatch(setSearch(event.target.value))}
            />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
            <Navbar.Divider />
            <Button className="bp5-minimal" text="Help" />
            </Navbar.Group>
        </Navbar>
    );
};

export default AppNavbar;