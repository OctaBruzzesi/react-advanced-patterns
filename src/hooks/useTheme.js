import { useContext } from "react"
import getTheme from '../configs/theme';
import ThemeContext from "../context/ThemeContext";

const useTheme = () => {
  const { id, toggleTheme } = useContext(ThemeContext)
  const theme = getTheme(id);

  return [id, theme, toggleTheme];
}

export default useTheme;