import React, { useState } from 'react';

const withToggle = (Component) => () => {
  const [toggleOn, toggleSwitch] = useState(false);

  const handleToggle = () => {
    toggleSwitch(!toggleOn);
  }

  return (
    <Component
      toggleOn={toggleOn}
      onToggle={handleToggle}
    />
  )
}

export default withToggle;
