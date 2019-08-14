import { useSelector } from 'react-redux';
import getTheme from '../configs/theme';

const useTheme = () => {
  const themeId = useSelector(state => state.theme.id);
  const theme = getTheme(themeId);

  return [themeId, theme];
}

export default useTheme;