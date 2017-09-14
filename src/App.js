import React, { Component } from 'react';
import GoalList from './components/goal-list.jsx'
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
            <button className="btn btn-success btn-sm ml-2" onClick={this.addNewGoal.bind(this)}>Create New Goal</button>
          </div>

          <div className="col-lg-12">
              <GoalList ref={(list) => {this.goalList = list}} />
          </div>
          <div className="col-lg-4">
          </div>
        </div>
      </div>
    );
  }

  updateGoal(goalItem) {

  }

  addNewGoal(newGoal) {
    this.goalList.createGoalItem();
  }

}

export default App;
