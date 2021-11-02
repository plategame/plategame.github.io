import './StateButton.css';
import React, { useState } from 'react';

const StateButton = (props) => {
    const stateName = props.children;
    const showSeen = props.showSeen;

    const [hasBeenSeen, setHasBeenSeen] = useState(false);

    if (hasBeenSeen) {
        if (showSeen) {
            return (<div className="seen state">{stateName}</div>);
        } else {
            return null;
        }
    } else {
        return (<div className="unseen state" onClick={() => setHasBeenSeen(true)}>{stateName}</div>);
    }
}

export default StateButton;