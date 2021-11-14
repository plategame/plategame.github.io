import './App.css';
import React, { useEffect, useState } from 'react';
import StateButton from './components/StateButton';
import { isValidGame, newGame, restoreGame, saveGame } from './utils/Game';

const App = () => {

  useEffect(() => {
    document.title = "License Plate Game";

    const gameState = window.location.pathname.substring(1);

    if (isValidGame(gameState)) {
      const [show, array ] = restoreGame(gameState);
      setShowSeen(show);
      setStateArray(array);
    } else {
      setUri('');
    }
  }, []);

  const [stateArray, setStateArray] = useState(newGame());
  const [showSeen, setShowSeen] = useState(true);

  const resetGame = () => {
    if (window.confirm("Are you sure you want to reset?")) {
      const newArray = newGame();
      setStateArray(newArray);
      setUri(saveGame(newArray, showSeen))
    }
  }

  const setSeen = (state) => {

    // Mark all states with matching names as "seen"
    let tempArray = [...stateArray];
    tempArray.filter(p => p.name === state).forEach(p => p.seen = true);
    setStateArray(tempArray);

    // Update the URL to include the game state
    setUri(saveGame(tempArray, showSeen))
  }

  const setUri = (newUri) => {
    let currentURL = window.location.href;
    const pathIndex = currentURL.search(window.location.pathname + '$');
    const newURL = currentURL.substr(0, pathIndex) + '/' + newUri;
    window.history.replaceState(null, '', newURL);
  }

  const toggleShow = () => {
    setUri(saveGame(stateArray, !showSeen));
    setShowSeen(!showSeen);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="controls">
          <div id="showSeenCheck">
            <input type="checkbox" className="showSeenCheck" checked={showSeen} value="showSeen" onChange={toggleShow} />
          </div>
          <div id="resetButton" onClick={resetGame}>Reset</div>
        </div>
        { stateArray.map(so =>
          <StateButton key={so.name} seen={so.seen} showSeen={showSeen} setSeen={setSeen}>{so.name}</StateButton>
        )}
      </header>
    </div>
  );
}

export default App;
