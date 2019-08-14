const themes = {
  dark: {
    backgroundColor: '#282C34',
    fontColor: '#FFF'
  },
  light: {
    backgroundColor: '#FFF',
    fontColor: '#282C34'
  }
}

const getTheme = (id) => {
  return themes[id || 'dark'];
}

export default getTheme;