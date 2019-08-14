import React, { useState } from 'react';
import './Toggle.css';

const Toggle = () => {
  const [toggleOn, toggleSwitch] = useState(false);

  const handleButtonClick = () => {
    toggleSwitch(!toggleOn);
  }

  return (
    <div className="toggle">
      {
        toggleOn
        ? 'On'
        : 'Off'
      }
      <button onClick={handleButtonClick}>Toggle</button>
    </div>
  )
}

export default Toggle;
