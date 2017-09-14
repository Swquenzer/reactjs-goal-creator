import React, { Component } from 'react';
import EditGoalTitle from './edit-goal-title.jsx';

export default class CreateGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goalItem: {
        goalName: 'My Goal Name'
      }
    };
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <EditGoalTitle updateGoalName={goalName => this.updateGoalName(goalName)} goalName={this.state.goalItem.goalName} />            
          </div>
        </div>
      </div>
    );
  }

  updateGoalName(goalName) {
    this.setState({
      goalItem: {
        goalName: goalName
      }
    })
  }
}
