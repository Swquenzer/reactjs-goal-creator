import React, { Component } from 'react';
import GoalItem from './components/create-goal.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Pinata</h2>
        </div>
        <div className="container">
          <div className="alert alert-success" role="alert">
            Your <strong>Goals</strong> Dashboard
          </div>

          <div className="col-lg-8">
            <div className="row">
              <GoalItem />
              <GoalItem />
            </div>
          </div>
          <div className="col-lg-4">
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
