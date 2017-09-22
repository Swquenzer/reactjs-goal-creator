import React, { Component } from 'react';
import GoalList from './components/goal-list.jsx';
import GoalFilters from './components/goal-filters';
import logo from './logo.svg';
import './App.css';
import CloneDeep from 'lodash.clonedeep'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numGoals: 0,
      goalFilters: {
        interestFilter: null,
        otherFilter: null
      }
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
              <GoalList ref={(list) => {this.goalList = list}} onGoalAdded={this.updateNumGoals.bind(this)} filters={this.state.goalFilters} />
            </div>
            <div className="col-lg-4">
              <ul className="list-group">
                <li className="list-group-item">Number of total goals: {this.state.numGoals}</li>
                <li className="list-group-item">Visible Goals: {this.state.numGoals}</li>
                <li className="list-group-item">Hidden Goals: {this.state.numGoals}</li>
              </ul>
              <GoalFilters filters={this.state.goalFilters} setInterestFilter={filterType => this.setInterestFilter.call(this, filterType)} clearFilter={filterType => this.clearFilter.call(this, filterType)} />
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

   setInterestFilter(filter) {
    let goalFilters = CloneDeep(this.state.goalFilters);
    goalFilters.interestFilter = filter;
    this.setState({goalFilters});
   }

   clearFilter(filterType) {
    let goalFilters = CloneDeep(this.state.goalFilters);
      switch(filterType) {
        case "Interest":
          goalFilters.interestFilter = null;
          this.setState({goalFilters});
        break;
      }
    }
}

export default App;