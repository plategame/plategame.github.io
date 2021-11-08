import './App.css';
import React, { useEffect, useState } from 'react';
import StateButton from './components/StateButton';
// import { newGame, restoreGame, saveGame } from './utils/Game';
import { newGame } from './utils/Game';

const App = () => {

  useEffect(() => {
    document.title = "License Plate Game";
  }, []);

  const [stateArray, setStateArray] = useState(newGame());
  const [showSeen, setShowSeen] = useState(true);

  const setSeen = (state) => {

    let tempArray = [...stateArray];
    tempArray.filter(p => p.name === state).forEach(p => p.seen = true);
    setStateArray(tempArray);

    // const encoded = saveGame(tempArray);
    // console.log('encode:' + encoded);
    // console.log(restoreGame(encoded));
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="checkbox" className="showSeenCheck" checked={showSeen} value="showSeen" onChange={() => setShowSeen(!showSeen)} />
        {stateArray.map(so => <StateButton key={so.name} seen={so.seen} showSeen={showSeen} setSeen={setSeen}>{so.name}</StateButton>)}
      </header>
    </div>
  );
}

export default App;
