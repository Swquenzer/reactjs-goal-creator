import React, { Component } from 'react';
import EditGoalTitle from './edit-goal-title.jsx';
export default class GoalItem extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
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
            <ul className="list-group mb-0 text-left">
              <li className="list-group-item">
                <label htmlFor="topic-selector">Area of Interest</label>
                <select className="form-control" id="topic-selector" onChange={(e) => this.updateGoalInterest(e)} value={this.props.goalItem.goalInterest}>
                  <option>Personal Improvement</option>
                  <option>Professional Improvement</option>
                  <option>Social Skills</option>
                  <option>Other</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  updateGoalInterest(e) {
    console.log(this.props.goalItem);
    let goalItem = this.props.goalItem;
    console.log(this.props.goalItem);
    goalItem.goalInterest = e.target.value;
    console.log(this.props.goalItem);
    this.props.updateGoalItem(goalItem);
    console.log(this.props.goalItem);
  }

  updateGoalName(goalName) {
    let goalItem = this.props.goalItem;
    goalItem.goalName = goalName;
    this.props.updateGoalItem(goalItem);
  }
}
