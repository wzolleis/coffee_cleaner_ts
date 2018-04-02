import * as React from 'react';
import './App.css';
import { Navbar } from '../navbar/Navbar';
import { Switch, Route } from 'react-router';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Help } from '../components/Help';
import AdminContainer from '../admin/AdminContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/home" component={Home} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/help" component={Help} />
          <Route exact={true} path="/admin/data" component={AdminContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
