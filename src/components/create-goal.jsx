import React, { Component } from 'react';
import EditGoalTitle from './edit-goal-title.jsx';

const INITIAL_GOAL_ITEM = {
  goalName: 'My Goal',
  goalProgress: 0,
  goalTopic: 'Personal Improvement'
};

export default class GoalItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goalItem: INITIAL_GOAL_ITEM
    };
  }

  render() {
    return (
      <div className="goal-item col-md-6">
        <div className="card">
          <div className="card-header p-0">
            <EditGoalTitle updateGoalName={goalName => this.updateGoalName(goalName)} goalName={this.state.goalItem.goalName} />            
          </div>
          <div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{'width': '80%'}}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul className="list-group mb-0 text-left">
              <li className="list-group-item">
                
              </li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  updateGoalName(goalName) {
    console.log(goalName);

    this.setState({
      goalItem: {
        goalName: goalName
      }
    });
  }
}
