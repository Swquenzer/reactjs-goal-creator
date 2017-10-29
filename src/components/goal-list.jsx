import React, { Component } from 'react';
import GoalItem from './goal-item.jsx'
import CloneDeep from 'lodash.clonedeep'

const INITIAL_GOAL_ITEM = {
  id = 1,
  goalName: 'My Goal item',
  goalProgress: 0,
  goalTopic: 'Personal Improvement',
  isActive: true
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
            this.state.goalItems.filter(g => g.isActive === true).map((goalItem, index) => {
              return (<GoalItem key={index} goalItem={CloneDeep(goalItem)} updateGoalItem={this.updateGoalItem.bind(this, index)} deleteGoalItem={this.deleteGoalItem.bind(this, index)} />);
            })
          }
        </div>
    );
  }

  createGoalItem(goalItem) {
    let goalItems = [...this.state.goalItems]
    let newGoalItem = INITIAL_GOAL_ITEM;
    newGoalItem.id = goalItems.length + 1;


    goalItems.push(INITIAL_GOAL_ITEM);
    this.setState({goalItems: goalItems})

    //Trigger onGoalAdded event
    if(typeof this.props.onGoalAdded === 'function') {
      this.props.onGoalAdded(this.state.goalItems.length);
    }
  }

  updateGoalItem(index, goalItem) {
    let goalItems = [...this.state.goalItems]
    goalItems[index] = goalItem;
    this.setState({goalItems: goalItems})
  }

  deleteGoalItem(index) {
    let goalItems = [...this.state.goalItems]
    goalItems[index].isActive = false;
    this.setState({goalItems: goalItems})
  }
}
