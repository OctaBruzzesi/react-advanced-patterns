import React from 'react';
import './Toggle.css';

const Toggle = ({ toggleOn, onClick }) => {
  return (
    <div className="toggle">
      {
        toggleOn
        ? 'On'
        : 'Off'
      }
      <button onClick={onClick}>Toggle</button>
    </div>
  )
}

export default Toggle;
