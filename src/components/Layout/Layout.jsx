import React from 'react';
import useTheme from '../../hooks/useTheme';

const Layout = ({ children }) => {
  const [themeId, theme] = useTheme();
  
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.fontColor
      }}
    >
      {children}
    </div>
  )
}

export default Layout;