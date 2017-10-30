import React, { Component } from 'react';
import GoalItem from './goal-item.jsx'
import GoalFilters from './goal-filters';
import _CloneDeep from 'lodash.clonedeep'
import _IsEqual from 'lodash.isequal'

const INITIAL_GOAL_ITEM = {
   id: 1,
   goalName: 'My Goal item',
   goalProgress: 0,
   goalInterest: 'Personal Improvement',
   isActive: true
};

export default class GoalsPage extends Component {
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
      //Restore goals from database
      let cachedGoalItems = JSON.parse(localStorage.getItem('goalList'));
      if (cachedGoalItems != null && cachedGoalItems.length) {
         this.setState({ goalItems: cachedGoalItems });
      } else {
         //this.createNewGoal(); //Add first goal
      }
   }

   componentDidUpdate(prevProps, prevState) {
      //console.log(JSON.parse(localStorage.getItem('goalList')));

      //If any goals have changed, save to the database (local storage)
      if (!_IsEqual(prevState.goalItems, this.state.goalItems)) {
         localStorage.setItem('goalList', JSON.stringify(this.state.goalItems));
      }

      console.log(this.state.goalItems);
   }

   render() {
      return (
         <div className="container">
          <div className="alert alert-success" role="alert">
            Your <strong>Goals</strong> Dashboard
            <button className="btn btn-success btn-sm ml-2" onClick={this.createNewGoal.bind(this)} >Create New Goal</button>
          </div>
          <div  className="row">
            <div className="col-lg-8 primary-col">
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
                  .filter(g => g.isActive === true)
                  .map((goalItem, index) => {
                    return (<GoalItem key={goalItem.id} goalItem={_CloneDeep(goalItem)} updateGoalItem={this.updateGoalItem.bind(this, index)} />);
                  })
                }
              </div>
            </div>
            <div className="col-lg-4">
              <ul className="list-group">
                <li className="list-group-item d-inline-flex justify-content-between">Number of total goals <span className="badge badge-primary badge-pill">{this.state.goalItems.length}</span></li>
                <li className="list-group-item d-inline-flex justify-content-between">Visible Goals: <span className="badge badge-success badge-pill">{this.state.goalItems.length}</span></li>
                <li className="list-group-item d-inline-flex justify-content-between">Hidden Goals: <span className="badge badge-secondary badge-pill">{0}</span></li>
              </ul>
              <div className="card mt-3">
              	<div className="card-header">
              		Filter by Goal Type
              	</div>
              	<div className="card-body">
              		<GoalFilters filters={this.state.goalFilters} setInterestFilter={filterType => this.setInterestFilter.call(this, filterType)} clearFilter={filterType => this.clearFilter.call(this, filterType)} />
              	</div>
              </div>
            </div>
          </div>
          <div>
            <button onClick={this.clearCache}>Clear Cache</button>
          </div>
         </div>
      );
   }

   //list
   createNewGoal() {
      let goalItems = [...this.state.goalItems]

      let newGoalItem = _CloneDeep(INITIAL_GOAL_ITEM);
      newGoalItem.id = this.state.goalItems.length + 1;

      goalItems.push(newGoalItem);
      this.setState({ goalItems: goalItems })
   }

   //list
   updateGoalItem(index, goalItem) {
      let goalItems = [...this.state.goalItems]
      const goalItemIndex = goalItems.findIndex(g => g.id === goalItem.id);
      
      goalItems[goalItemIndex] = goalItem;
      this.setState({ goalItems: goalItems })
   }

   updateNumGoals(numGoals) {
      this.setState({ numGoals });
   }

   setInterestFilter(filter) {
      let goalFilters = _CloneDeep(this.state.goalFilters);
      goalFilters.interestFilter = filter;
      this.setState({ goalFilters });
   }

   clearFilter(filterType) {
      let goalFilters = _CloneDeep(this.state.goalFilters);
      switch (filterType) {
         case "Interest":
            goalFilters.interestFilter = null;
            this.setState({ goalFilters });
            break;
      }
   }

   clearCache() {
     console.log("Clearing Cache");
     localStorage.setItem('goalList', JSON.stringify([]));
   }
}