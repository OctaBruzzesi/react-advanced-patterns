import { TOGGLE_THEME } from './types';

const initialState = {
  id: 'dark'
}

const getToggleTheme = (id) => id === 'dark' ? 'light' : 'dark';

export default (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_THEME:
      return {
        id: action.payload || getToggleTheme(state.id)
      }
    default:
      return state;
  }
}