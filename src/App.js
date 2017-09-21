import React, { Component } from 'react';
import GoalList from './components/goal-list.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numGoals: 0
    }
  }

   componentDidMount() {
      this.addNewGoal(); //Add first goal
   }

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
            <button className="btn btn-success btn-sm ml-2" onClick={this.addNewGoal.bind(this)} >Create New Goal</button>
          </div>
          <div  className="row">
            <div className="col-lg-8">
              <GoalList ref={(list) => {this.goalList = list}} onGoalAdded={this.updateNumGoals.bind(this)} />
            </div>
            <div className="col-lg-4">
              <ul className="list-group">
                <li className="list-group-item">Number of total goals: {this.state.numGoals}</li>
              </ul>
            </div>
          </div>          
        </div>
      </div>
      );
   }

   addNewGoal() {
      this.goalList.createGoalItem();
   }

   updateNumGoals(numGoals) {
      this.setState({numGoals});
   }
}

export default App;