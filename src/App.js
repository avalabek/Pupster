import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Navpills';
import About from "./components/pages/About";
import Search from "./components/pages/Search";
import Discover from "./components/pages/Discover";

import
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
const APP = () => (
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component ={About} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search"
      component={Search} />
    </div>
  </Router>    
);

export default App;
