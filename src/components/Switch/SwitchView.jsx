import React from 'react';
import ReactSwitch from "react-switch";
import './Switch.css';

const Switch = ({ toggleOn, onToggle }) => {
  return (
    <div className="toggle">
      <label htmlFor="switch">
        {
          toggleOn
          ? 'On'
          : 'Off'
        }
      </label>
      <ReactSwitch
        name="switch"
        onChange={onToggle}
        checked={toggleOn}
      />
    </div>
  )
}

export default Switch;
