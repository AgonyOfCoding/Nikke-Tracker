import { Navbar, Button, Alignment, InputGroup, Tooltip } from '@blueprintjs/core';
import { color_scheme } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { clearFilters, FilterOptions } from '../../state/filterOptions';
import { setSearch } from '../../state/search';
import NavbarAdditionalFilters from './navbarAdditionalFilters';
import NavbarSort from './navbarSort';
import NavbarSettings from './navbarSettings';
import TeamsMenu from './teamsMenu';
import NavbarRecommendations from './navbarRecommendations';
import NavbarAbout from './about';
import NavbarFilters from './navbarFilters';

const AppNavbar: React.FC = () => {
    const filterState: FilterOptions = useSelector((state: RootState) => state.filter)
    const dispatch = useDispatch();

    const any_filters_on = !Object.values(filterState).every(value => value === undefined || value === false);

    return (
        <Navbar
            style={{
                backgroundColor: color_scheme[1],
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
            <TeamsMenu />
            <Navbar.Divider />
            <NavbarSort />
            <Navbar.Divider />
            <NavbarFilters />
            <Navbar.Divider />
            <NavbarAdditionalFilters />
            <Tooltip position="bottom" content="Clear filters" >
                <Button 
                    icon='reset'
                    className="bp5-minimal"
                    intent={any_filters_on ? "warning" : "none"}
                    onClick={() => dispatch(clearFilters())}
                />
            </Tooltip>
            <Navbar.Divider />
            <NavbarRecommendations />
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
            <NavbarAbout />
            </Navbar.Group>
        </Navbar>
    );
};

export default AppNavbar;