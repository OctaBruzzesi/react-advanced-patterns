import React from 'react';
import Switch from '../Switch';
import useTheme from '../../hooks/useTheme';

const ThemeSwitch = (props) => {
  const [themeId, theme, toggleTheme] = useTheme();
  return (
    <Switch
      toggleOn={themeId === 'dark'}
      onToggle={toggleTheme}
      {...props}
    />
  )
}

export default ThemeSwitch;