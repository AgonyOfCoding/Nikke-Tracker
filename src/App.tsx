import React, { useState } from 'react';
import { Navbar, Button, Alignment, InputGroup } from '@blueprintjs/core';
import './App.css';
import CharacterList from './components/characterList';

function App() {  
  const filters: string[] = [
    'All Nikkes',
    'Burst I',
    'Burst II',
    'Burst III',    
  ];
  const [filter_state, setFilter] = useState(filters[0]);
  const recommendation_sources: string[] = [
    'SKY',
    'Nikke.gg',
    'Prydwen'
  ];
  const [recommendations_state, setSecommendations] = useState(recommendation_sources[0]);
  const [searchState, setSearchState] = useState('');
  
  return (
    <div className="App">
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Nikke Tracker</Navbar.Heading>
          <Navbar.Divider />
          <Navbar.Heading style={{ fontWeight: 'bold' }} >Filter</Navbar.Heading>
          {filters.map((filter, index) => (
            <Button
              key={index}
              intent={filter_state === filter ? 'primary' : 'none' }
              className="bp5-minimal"
              text={filter}
              onClick={() => setFilter(filter)}
            />
          ))}
          <Navbar.Divider />
          <Navbar.Heading style={{ fontWeight: 'bold' }} >Recommendations</Navbar.Heading>
          {recommendation_sources.map((source, index) => (
            <Button
              key={index}
              intent={recommendations_state === source ? 'primary' : 'none' }
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
            placeholder='Search...'
            type='search'
            onChange={(event) => setSearchState(event.target.value)}
          />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Divider />
          <Button className="bp5-minimal" text="Help" />
        </Navbar.Group>
      </Navbar>
      <div className="content">
        <CharacterList filter={filter_state} recommendations_source={recommendations_state} search={searchState} />
      </div>
    </div>
  );
}

export default App;
