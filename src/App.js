import React, { Component } from 'react';
import CreateGoal from './components/create-goal.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <div className="alert alert-success" role="alert">
            Set your <strong>goals</strong> below
          </div>
          <div className="row">
            <CreateGoal />
            <CreateGoal />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
