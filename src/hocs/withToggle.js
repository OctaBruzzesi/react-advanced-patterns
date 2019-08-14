import React, { useState } from 'react';

const defaultPropsMap = {
  toggleOn: 'toggleOn',
  onToggle: 'onToggle'
}

const withToggle = (Component, propsMap = {}) => (props) => {
  const [toggleOn, toggleSwitch] = useState(false);
  const finalPropsMap = {
    ...defaultPropsMap,
    ...propsMap
  };

  const handleToggle = () => {
    toggleSwitch(!toggleOn);
  }

  const viewProps = {
    [finalPropsMap['toggleOn']]: toggleOn,
    [finalPropsMap['onToggle']]: handleToggle
  }

  return (
    <Component
      {...viewProps}
      {...props}
    />
  )
}

export default withToggle;
