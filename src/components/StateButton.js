import './StateButton.css';
import React from 'react';

const StateButton = (props) => {
    const name = props.children;

    if (props.seen) {
        if (props.showSeen) {
            return (<div className="seen state" onClick={() => props.toggleSeen(name)}>{name}</div>);
        } else {
            return null;
        }
    } else {
        return (<div className="unseen state" onClick={() => props.toggleSeen(name)}>{name}</div>);
    }
}

export default StateButton;