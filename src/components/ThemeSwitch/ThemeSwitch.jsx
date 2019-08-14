import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/theme/themeAction';
import Switch from '../Switch';
import useTheme from '../../hooks/useTheme';

const ThemeSwitch = (props) => {
  const dispatch = useDispatch();
  const [themeId, theme] = useTheme();
  const handleToggle = () => {
    dispatch(toggleTheme());
  }

  return (
    <Switch
      toggleOn={themeId === 'dark'}
      onToggle={handleToggle}
      {...props}
    />
  )
}

export default ThemeSwitch;