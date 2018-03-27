import * as React from 'react';
import './App.css';
import { TeamList } from './team/TeamListContainer';
import { Navbar } from './navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Coffee Cleaner</h1>
            <Navbar/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TeamList/>
      </div>
    );
  }
}

export default App;
