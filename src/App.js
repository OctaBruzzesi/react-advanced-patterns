import React from 'react';
import Switch from './components/Switch';
import Accordion from './components/Accordion';
import logo from './logo.svg';
import './App.css';
import ToggleRenderProps from './components/ToggleRenderProps';
import Menu from './components/Menu';
import Box from './components/Box';
import Layout from './components/Layout/Layout';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Layout className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Box>
            <Switch />
          </Box>
          <Box>
            <Accordion
              title="Do something!"
            >
              <p>Here I am!</p>
            </Accordion>
          </Box>
          <Box>
            <Switch
              toggleOn
              onToggle={() => alert('Toggled')}
            />
          </Box>
          <Box>
            <ThemeSwitch onText="Dark Mode" offText="Light Mode" />
          </Box>
        </main>
        <ToggleRenderProps>
          {(toggleOn, toggle) => (
            <Menu open={toggleOn} onToogleOpen={toggle} links={links} />
          )}
        </ToggleRenderProps>
      </Layout>
    </ThemeProvider>
  );
}

export default App;


const links = [
  {
    label: 'Link 1',
    href: '#'
  },
  {
    label: 'Link 2',
    href: '#'
  },
  {
    label: 'Link 3',
    href: '#'
  },
]