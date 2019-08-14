import React from 'react';
import ToggleRenderProps from '../components/ToggleRenderProps';

const defaultPropsMap = {
  toggleOn: 'toggleOn',
  onToggle: 'onToggle'
}

const withToggle = (Component, propsMap = {}) => (props) => {

  const finalPropsMap = {
    ...defaultPropsMap,
    ...propsMap
  };

  return (
    <ToggleRenderProps>
      {(toggleOn, toggle) => {
        const viewProps = {
          [finalPropsMap['toggleOn']]: toggleOn,
          [finalPropsMap['onToggle']]: toggle
        }
        return (
          <Component
            {...viewProps}
            {...props}
          />
        );
      }}
    </ToggleRenderProps>
  )
}

export default withToggle;
