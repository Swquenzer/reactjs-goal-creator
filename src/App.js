import React, { Component } from 'react';
import GoalItem from './components/goal-item.jsx'
import GoalFilters from './components/goal-filters';
import logo from './logo.svg';
import './App.css';
import CloneDeep from 'lodash.clonedeep'

const INITIAL_GOAL_ITEM = {
  goalName: 'My Goal item',
  goalProgress: 0,
  goalInterest: 'Personal Improvement'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goalItems: [],
      goalFilters: {
        interestFilter: null,
        otherFilter: null
      }
    }
  }

   componentDidMount() {
      this.createNewGoal(); //Add first goal
   }

   //<GoalList ref={(list) => {this.goalList = list}} onGoalAdded={this.updateNumGoals.bind(this)} filters={this.state.goalFilters} />

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
            <button className="btn btn-success btn-sm ml-2" onClick={this.createNewGoal.bind(this)} >Create New Goal</button>
          </div>
          <div  className="row">
            <div className="col-lg-8">
              <div className="row">
                {
                  this.state.goalItems.filter((goalItem) => {
                    let showGoal = true;

                    //Filter by "Interest"
                    if(this.state.goalFilters.interestFilter && this.state.goalFilters.interestFilter !== goalItem.goalInterest) {
                      showGoal = false;
                    }

                    //TODO: Other Filters

                    //Return
                    return showGoal;
                  })
                  .map((goalItem, index) => {
                    return (<GoalItem key={index} goalItem={CloneDeep(goalItem)} updateGoalItem={this.updateGoalItem.bind(this, index)} />);
                  })
                }
              </div>
              
            </div>
            <div className="col-lg-4">
              <ul className="list-group">
                <li className="list-group-item">Number of total goals: {this.state.goalItems.length}</li>
                <li className="list-group-item">Visible Goals: {this.state.goalItems.length}</li>
                <li className="list-group-item">Hidden Goals: {0}</li>
              </ul>
              <GoalFilters filters={this.state.goalFilters} setInterestFilter={filterType => this.setInterestFilter.call(this, filterType)} clearFilter={filterType => this.clearFilter.call(this, filterType)} />
            </div>
          </div>
        </div>
      </div>
      );
   }

   //list
   createNewGoal() {
    let goalItems = [...this.state.goalItems]

    goalItems.push(INITIAL_GOAL_ITEM);
    this.setState({goalItems: goalItems})
  }

  //list
  updateGoalItem(index, goalItem) {
    let goalItems = [...this.state.goalItems]
        
    goalItems[index] = goalItem;

    this.setState({goalItems: goalItems})
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