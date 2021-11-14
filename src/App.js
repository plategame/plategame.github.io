import './App.css';
import React, { useEffect, useState } from 'react';
import StateButton from './components/StateButton';
import { isValidGame, newGame, restoreGame, saveGame } from './utils/Game';

const App = () => {

  useEffect(() => {
    document.title = "License Plate Game";

    const gameState = getUrlParam('state');

    if (isValidGame(gameState)) {
      const [show, array ] = restoreGame(gameState);
      setShowSeen(show);
      setStateArray(array);
    } else {
      setUrlParams('');
    }
  }, []);

  const [stateArray, setStateArray] = useState(newGame());
  const [showSeen, setShowSeen] = useState(true);

  const getUrlParam = (id) => {
    const params = window.location.search;

    if (!params.startsWith("?")) {
      return '';
    }

    const splitParams = params.substring(1).split('&');

    for (const p of splitParams) {
      if (p.startsWith(id + '=')) {
        return p.substring(id.length + 1);
      }
    }

    return '';
  }

  const resetGame = () => {
    if (window.confirm("Are you sure you want to reset?")) {
      const newArray = newGame();
      setStateArray(newArray);
      setUrlParams(saveGame(newArray, showSeen))
    }
  }

  const toggleSeen = (state) => {

    // Mark all states with matching names as "seen"
    let tempArray = [...stateArray];
    tempArray.filter(p => p.name === state).forEach(p => p.seen = !p.seen);
    setStateArray(tempArray);

    // Update the URL to include the game state
    setUrlParams(saveGame(tempArray, showSeen))
  }

  const setUrlParams = (newGameState) => {
    let currentURL = window.location.href;
    const pathIndex = currentURL.search(window.location.pathname + '$');

    if (newGameState.length > 0) {
      const newURL = currentURL.substr(0, pathIndex) + '/?state=' + newGameState;
      window.history.replaceState(null, '', newURL);
    } else {
      window.history.replaceState(null, '', currentURL.substr(0, pathIndex) + '/');
    }
  }

  const toggleShow = () => {
    setUrlParams(saveGame(stateArray, !showSeen));
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
          <StateButton key={so.name} seen={so.seen} showSeen={showSeen} toggleSeen={toggleSeen}>{so.name}</StateButton>
        )}
      </header>
    </div>
  );
}

export default App;
