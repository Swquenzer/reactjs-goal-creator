import React, { Component } from 'react';
import EditGoalTitle from './edit-goal-title.jsx';

export default class GoalItem extends Component {
  render() {
    return (
      <div className="goal-item col-md-4 mb-2">
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
                <select className="form-control" id="topic-selector">
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

  updateGoalName(goalName) {
    this.props.updateGoalItem({goalName: goalName});
  }
}
