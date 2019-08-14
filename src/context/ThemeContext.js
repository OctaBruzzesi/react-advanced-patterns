import React from "react"

const ThemeContext = React.createContext({
  id: "dark",
  toggleTheme: () => {} 
})

export default ThemeContext