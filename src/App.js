import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Switch from './components/Switch';
import Accordion from './components/Accordion';
import logo from './logo.svg';
import './App.css';
import reducer from './redux/reducer';
import ToggleRenderProps from './components/ToggleRenderProps';
import Menu from './components/Menu';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <div style={{ padding: '15px' }}>
            <Switch />
          </div>
          <div style={{ padding: '15px' }}>
            <Accordion
              title="Do something!"
              content="Here I am"
            />
          </div>
        </main>
        <ToggleRenderProps>
          {(toggleOn, toggle) => (
            <Menu open={toggleOn} onToogleOpen={toggle} links={links} />
          )}
        </ToggleRenderProps>
      </div>
    </Provider>
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