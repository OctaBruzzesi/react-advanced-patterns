import React, { useState } from 'react';
import Toggle from './ToggleView';

const ToggleContainer = () => {
  const [toggleOn, toggleSwitch] = useState(false);

  const handleToggle = () => {
    toggleSwitch(!toggleOn);
  }

  return (
    <Toggle toggleOn={toggleOn} onToggle={handleToggle} />
  )
}

export default ToggleContainer;
