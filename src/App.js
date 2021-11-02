import './App.css';
import React, { useEffect, useState } from 'react';
import StateButton from './components/StateButton';

const App = () => {

  useEffect(() => {
    document.title = "License Plate Game";
  }, []);

  const allStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado'];

  const [showSeen, setShowSeen] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <input type="checkbox" className="showSeenCheck" checked={showSeen} value="showSeen" onChange={() => setShowSeen(!showSeen)} />
        {allStates.map(s => <StateButton key={s} showSeen={showSeen}>{s}</StateButton>)}
      </header>
    </div>
  );
}

export default App;
