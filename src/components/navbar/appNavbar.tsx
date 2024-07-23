import { Navbar, Button, Alignment, InputGroup } from '@blueprintjs/core';
import { useState } from 'react';
import { Burst, color_scheme, NikkeRole, WeaponType } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { clearFilters, FilterOptions, setBurstFilter, setRoleFilter, setWeaponFilter } from '../../state/filterOptions';
import { setSearch } from '../../state/search';
import NavbarAdditionalFilters from './navbarAdditionalFilters';

const AppNavbar: React.FC = () => {
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter)
    const dispatch = useDispatch()

    // const bursts: Burst[] = [
    //     'Burst I',
    //     'Burst II',
    //     'Burst III',    
    // ];

    // const roles: NikkeRole[] = [
    //     'Attacker',
    //     'Defender',
    //     'Supporter',    
    // ];

    // const weapon_types: WeaponType[] = [
    //     'AR',
    //     'MG',
    //     'RL',
    //     'SMG',
    //     'SR'    
    // ];

    const recommendation_sources: string[] = [
        'Skyfall',
        'Nikke.gg',
        'Prydwen'
    ];
    const [recommendations_state, setSecommendations] = useState(recommendation_sources[0]);

    return (
        <Navbar style={{ backgroundColor: color_scheme[1] }}>
            <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Nikke Tracker</Navbar.Heading>
            <Navbar.Divider />
            <Navbar.Heading style={{ fontWeight: 'bold' }} >Filters</Navbar.Heading>
            <Button 
                icon='reset'
                className="bp5-minimal"
                onClick={() => dispatch(clearFilters())}
            />
            <Navbar.Divider />
            {Object.values(Burst).map(burst => 
                <Button
                    style={{ 
                        backgroundColor: burst === filterState.burst ? color_scheme[3] : color_scheme[1],
                        color: burst === filterState.burst ? color_scheme[0] : color_scheme[4]
                    }}
                    key={burst}
                    className="bp5-minimal"
                    text={burst}
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
                    text={role}
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
                    text={weapon}
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
            {recommendation_sources.map((source) => (
                <Button
                    style={{ 
                        backgroundColor: source === recommendations_state ? color_scheme[3] : color_scheme[1],
                        color: source === recommendations_state ? color_scheme[0] : color_scheme[4]
                    }}
                    key={source}
                    className="bp5-minimal"
                    text={source}
                    onClick={() => setSecommendations(source)}
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