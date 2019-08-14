import { TOGGLE_THEME } from './types';

export const toggleTheme = (id) => ({
  type: TOGGLE_THEME,
  payload: id
});