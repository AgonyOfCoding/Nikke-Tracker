import React from 'react';
import './App.css';
import NikkeList from './components/nikkeList';
import AppNavbar from './components/navbar/appNavbar';
import TeamsNavbar from './components/teams/teamsNavbar';

function App() {
  return (
    <div className="App" >
      <AppNavbar />
      <div className="content" >
        <TeamsNavbar />
        <NikkeList />
      </div>
    </div>
  );
}

export default App;
