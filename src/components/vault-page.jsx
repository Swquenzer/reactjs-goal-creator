import React, { Component } from 'react';
import GoalItem from './goal-item.jsx';
import GoalFilters from './goal-filters';
import _CloneDeep from 'lodash.clonedeep'
import _IsEqual from 'lodash.isequal'


export default class VaultPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         goalItems: [],
         goalFilters: {
            interestFilter: null,
            otherFilter: null
         },
         numVisibleGoals: 0,
         numHiddenGoals: 0
      }
   }

   componentDidMount() {
      //API CALL: Restore goals from database
      let cachedGoalItems = JSON.parse(localStorage.getItem('goalList'));
      if (cachedGoalItems != null && cachedGoalItems.length) {
         this.setState({ goalItems: cachedGoalItems }, this.updateStatCounter);
      } else {
      }
   }

   render() {
      return (
         <div className="container">
          <div  className="row">
            <div className="col-lg-8 primary-col">
              <div className="row">
                {
                  this.state.goalItems
                  .filter(g => g.isActive === true && (this.state.goalFilters.interestFilter === null || g.goalInterest === this.state.goalFilters.interestFilter))
                  .map((goalItem, index) => {
                    return (<GoalItem key={goalItem.id} goalItem={_CloneDeep(goalItem)} />);
                  })
                }
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
              	<div className="card-header">
              		Filter by Goal Type
              	</div>
              	<div className="card-body">
              		<GoalFilters filters={this.state.goalFilters} setInterestFilter={filterType => this.setInterestFilter.call(this, filterType)} clearFilter={filterType => this.clearFilter.call(this, filterType)} />
                  <ul className="list-group mt-3">
                    <li className="list-group-item d-inline-flex justify-content-between">Number of total goals <span className="badge badge-primary badge-pill">{this.state.goalItems.length}</span></li>
                    <li className="list-group-item d-inline-flex justify-content-between">Visible Goals: <span className="badge badge-success badge-pill">{this.state.numVisibleGoals}</span></li>
                    <li className="list-group-item d-inline-flex justify-content-between">Hidden Goals: <span className="badge badge-secondary badge-pill">{this.state.numHiddenGoals}</span></li>
                    <li className="list-group-item d-inline-flex justify-content-between">Deleted Goals: <span className="badge badge-danger badge-pill">{this.state.goalItems.filter(g => !g.isActive).length}</span></li>
                  </ul>
              	</div>
              </div>
            </div>
          </div>
         </div>
      );
   }

   updateGoalItem(goalItem) {
      let goalItems = [...this.state.goalItems]
      const goalItemIndex = goalItems.findIndex(g => g.id === goalItem.id);
      
      goalItems[goalItemIndex] = goalItem;
      this.setState({ goalItems: goalItems })
   }

   //Stats
   updateStatCounter() { //TODO: Move into filter control?
      console.log("Updating Stat Counter")
      const goalItems = [...this.state.goalItems];
      const interestFilter = this.state.goalFilters.interestFilter;
      this.setState({
        numVisibleGoals: goalItems.filter(g => g.isActive && (interestFilter === null || g.goalInterest === interestFilter)).length,
        numHiddenGoals: goalItems.filter(g => g.isActive && !(interestFilter === null || g.goalInterest === interestFilter)).length
      });
   }

   //Filters
   setInterestFilter(filter) {
      let goalFilters = _CloneDeep(this.state.goalFilters);
      goalFilters.interestFilter = filter;
      this.setState({ goalFilters }, this.updateStatCounter);
   }

   clearFilter(filterType) {
      let goalFilters = _CloneDeep(this.state.goalFilters);
      switch (filterType) {
         case "Interest":
            goalFilters.interestFilter = null;
            this.setState({ goalFilters }, this.updateStatCounter);
            break;
      }
   }

   //Utilities


   //Local Storage
   clearCache() {
     console.log("Clearing Cache");
     localStorage.setItem('goalList', JSON.stringify([]));
   }
}