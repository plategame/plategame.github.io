import './StateButton.css';
import React from 'react';

const StateButton = (props) => {
    const name = props.children;

    if (props.seen) {
        if (props.showSeen) {
            return (<div className="seen state">{name}</div>);
        } else {
            return null;
        }
    } else {
        return (<div className="unseen state" onClick={() => props.setSeen(name)}>{name}</div>);
    }
}

export default StateButton;