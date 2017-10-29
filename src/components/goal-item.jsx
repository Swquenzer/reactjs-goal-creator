import React, { Component } from 'react';
import EditGoalTitle from './edit-goal-title.jsx';
import _UniqueID from 'lodash.uniqueid';

export default class GoalItem extends Component {
   constructor(props) {
      super(props);

      this.state = {

      };
   }

   componentWillMount() {
      const id = _UniqueID("prefix-");
      this.setState({ id: id });
   }

   render() {
      const id = this.state.id;
      return (
         <div className="goal-item col-md-6 mb-2">
        <div className="card">
          <div className="card-header p-0">
            <EditGoalTitle updateGoalName={goalName => this.updateGoalName(goalName)} goalName={this.props.goalItem.goalName} />            
          </div>
          <div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{'width': '80%'}}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul className="list-group list-group-flush mb-0 text-left">
              <li className="list-group-item">
                <label htmlFor="topic-selector">Area of Interest</label>
                <select className="form-control" id="topic-selector" onChange={(e) => this.updateGoalInterest(e)} value={this.props.goalItem.goalInterest}>
                  <option>Personal Improvement</option>
                  <option>Professional Improvement</option>
                  <option>Social Skills</option>
                  <option>Other</option>
                </select>
              </li>
              <li className="list-group-item">
                More options go here
              </li>
              <li className="list-group-item">
                <a data-toggle="collapse" href={"#settingsCollapse" + id} aria-expanded="false" aria-controls={"settingsCollapse" + id}>
                  Additional Options
                </a>
                <div id={"settingsCollapse" + id} role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                  <button type="button" className="btn btn-outline-danger btn-sm" onClick={this.deleteGoal}>Delete</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      );
   }

   updateGoalInterest(e) {
      let goalItem = this.props.goalItem;
      goalItem.goalInterest = e.target.value;
      this.props.updateGoalItem(goalItem);
   }

   updateGoalName(goalName) {
      let goalItem = this.props.goalItem;
      goalItem.goalName = goalName;
      this.props.updateGoalItem(goalItem);
   }

   deleteGoal(e) {

   }
}