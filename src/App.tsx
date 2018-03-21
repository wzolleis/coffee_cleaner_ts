import * as React from 'react';
import './App.css';
import { TeamListContainer } from './team/TeamListContainer';

const logo = require('./logo.svg');
const picture = require('./images/kugel_mit_schale_3.png');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to React</h1>
         
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          <img src={picture} className="App-logo" alt="logo" />
          <TeamListContainer/>
      </div>
    );
  }
}

export default App;
