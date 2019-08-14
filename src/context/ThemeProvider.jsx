import React, { useState } from "react"
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
   const [themeId, setThemeId] = useState("dark")

   const toggleTheme = () => setThemeId("dark" === themeId ? "light": "dark")

   return <ThemeContext.Provider value={{
     id: themeId,
     toggleTheme
   }}>
     {children}
   </ThemeContext.Provider>
}

export default ThemeProvider