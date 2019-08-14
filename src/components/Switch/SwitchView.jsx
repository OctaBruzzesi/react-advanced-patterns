import React from 'react';
import ReactSwitch from "react-switch";
import './Switch.css';

const Switch = ({ toggleOn, onToggle, onText = 'On', offText = 'Off' }) => {
  return (
    <div className="toggle">
      <label htmlFor="switch">
        {
          toggleOn
          ? onText
          : offText
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
