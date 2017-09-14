import React, { Component } from 'react';
import GoalItem from './goal-item.jsx'

const INITIAL_GOAL_ITEM = {
  goalName: 'My Goal item',
  goalProgress: 0,
  goalTopic: 'Personal Improvement'
};

export default class GoalList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goalItems: []
    }
  }

  render() {
    return (
        <div className="row">
          {
            this.state.goalItems.map((goalItem, index) => {
              return (<GoalItem key={index} goalItem={goalItem} updateGoalItem={this.updateGoalItem.bind(this, index)} />);
            })
          }
        </div>
    );
  }

  createGoalItem(goalItem) {
    let goalItems = [...this.state.goalItems]

    goalItems.push(INITIAL_GOAL_ITEM);
    this.setState({goalItems: goalItems})
  }

  updateGoalItem(index, goalItem) {
    let goalItems = [...this.state.goalItems]
    
    goalItems[index] = goalItem;
    this.setState({goalItems: goalItems})
  }
}
