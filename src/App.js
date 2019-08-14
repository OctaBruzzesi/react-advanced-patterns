import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Toggle from './components/Toggle/Toggle';
import logo from './logo.svg';
import './App.css';
import reducer from './redux/reducer';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Toggle />
        </main>
      </div>
    </Provider>
  );
}

export default App;
