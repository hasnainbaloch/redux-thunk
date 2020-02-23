import React from 'react';

import './Person.css';

export default function Person(props) {
  return (
    <div className="card" onClick={props.removePerson}>
        <h2>{props.name}</h2>
        <b>{props.age}</b>
    </div>
  );
}
