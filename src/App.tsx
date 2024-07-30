import React from 'react';
import './App.css';
import NikkeList from './components/nikkeList';
import AppNavbar from './components/navbar/appNavbar';

function App() {
  return (
    <div className="App" >
      <AppNavbar />
      <div className="content" >
        <NikkeList />
      </div>
    </div>
  );
}

export default App;
