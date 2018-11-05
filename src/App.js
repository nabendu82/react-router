import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <ul>
          <li>
            <NavLink to="/"  activeStyle={{ color:'green' }}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"  activeStyle={{ color:'green' }}>About</NavLink>
          </li>

          </ul>
              <Route path="/about/:aboutId" component={AboutPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
