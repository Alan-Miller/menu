import React, { Component } from 'react';
import './styles/App.css';
import Menu from './Menu';
import Welcome from './Welcome';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Menu</h1>
          <Link to="/">Welcome Page</Link>
          <Link to="/menu">Menu</Link>
        </header>

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </div>
    );
  }
}

export default App;
