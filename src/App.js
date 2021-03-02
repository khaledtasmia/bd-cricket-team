import React from 'react'; 
import './App.css';
import Players from './component/Players/Players';
import PlayerInfo from './component/PlayerInfo/PlayerInfo';

function App() {
  return (
    <div className="App">
    <Players></Players>
    <PlayerInfo></PlayerInfo>
    </div>
  );
}

export default App;