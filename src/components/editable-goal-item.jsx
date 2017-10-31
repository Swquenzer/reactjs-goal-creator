import React, { Component } from 'react';
import EditGoalTitle from './edit-goal-title.jsx';
import _UniqueID from 'lodash.uniqueid';

export default class EditableGoalItem extends Component {
   constructor(props) {
      super(props);

      this.state = {

      };
   }

   componentWillMount() {
      const id = _UniqueID("-");
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
            <div className="progress" style={{'display': 'none'}}>
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{'width': '80%'}}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul className="list-group list-group-flush mb-0 text-left">
              <li className="list-group-item">
                <div className="form-group row mb-0">
                  <label htmlFor="goal-target-input" className="col-5 col-form-label">Target Streak</label>
                  <input id={"goal-target" + id} className="col-7 form-control form-control-sm" min="0" max="365" type="number" value={this.props.goalItem.goalTarget} onChange={(e) => this.updateGoalTarget(e)} />
                </div>
              </li>
              <li className="list-group-item">
              <div className="form-group row mb-0">
                <label htmlFor="topic-selector" className="col-5">Area of Interest</label>
                <select className="col-7 form-control form-control-sm" id="topic-selector" value={this.props.goalItem.goalInterest} onChange={(e) => this.updateGoalInterest(e)}>
                  <option>Personal Improvement</option>
                  <option>Professional Improvement</option>
                  <option>Social Skills</option>
                  <option>Other</option>
                </select>
                </div>
              </li>
              <li className="list-group-item">
                <a data-toggle="collapse" href={"#settingsCollapse" + id} aria-expanded="false" aria-controls={"settingsCollapse" + id}>
                  Additional Options
                </a>
                <div id={"settingsCollapse" + id} className="collapse" role="tabpanel" aria-labelledby={"headingOne" + id} data-parent="#accordion">
                  <button type="button" className="btn btn-outline-danger btn-sm" onClick={(e) => this.deleteGoal(e)}>Delete</button>
                </div>   
              </li>
            </ul>
          </div>
        </div>
      </div>
      );
   }

   updateGoalTarget(e) {
      let goalItem = this.props.goalItem;
      goalItem.goalTarget = e.target.value;
      this.props.updateGoalItem(goalItem);  
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
      let goalItem = this.props.goalItem;
      goalItem.isActive = false;
      this.props.updateGoalItem(goalItem);
   }
}