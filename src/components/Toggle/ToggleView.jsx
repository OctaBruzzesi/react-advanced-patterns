import React from 'react';
import Switch from "react-switch";
import './Toggle.css';

const Toggle = ({ toggleOn, onToggle }) => {
  return (
    <div className="toggle">
      <label for="switch">
        {
          toggleOn
          ? 'On'
          : 'Off'
        }
      </label>
      <Switch
        id="switch"
        onChange={onToggle}
        checked={toggleOn}
      />
    </div>
  )
}

export default Toggle;
