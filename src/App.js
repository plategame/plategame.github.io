import './App.css';
import React, { useEffect, useState } from 'react';
import StateButton from './components/StateButton';

const App = () => {

  useEffect(() => {
    document.title = "License Plate Game";
  }, []);

  const allStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado'];

  const [stateArray, setStateArray] = useState(allStates.map (s => {
    return {
      name: s,
      seen: false
    };
  }));
  const [showSeen, setShowSeen] = useState(true);

  const setSeen = (state) => {
    let tempArray = [...stateArray];
    tempArray.filter(p => p.name === state).forEach(p => p.seen = true);
    setStateArray(tempArray);
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
