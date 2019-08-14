import React, { useState } from 'react';
import Toggle from './ToggleView';

const ToggleContainer = () => {
  const [toggleOn, toggleSwitch] = useState(false);

  const handleButtonClick = () => {
    toggleSwitch(!toggleOn);
  }

  return (
    <Toggle toggleOn={toggleOn} onClick={handleButtonClick} />
  )
}

export default ToggleContainer;
