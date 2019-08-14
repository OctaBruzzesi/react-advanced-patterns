import React from 'react';
import useToggle from '../hooks/useToggle';

const defaultPropsMap = {
  toggleOn: 'toggleOn',
  onToggle: 'onToggle'
}

const withToggle = (Component, propsMap = {}) => (props) => {
  const [toggleOn, handleToggle] = useToggle(false);

  const finalPropsMap = {
    ...defaultPropsMap,
    ...propsMap
  };

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
