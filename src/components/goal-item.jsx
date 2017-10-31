import React, { Component } from 'react';
import _UniqueID from 'lodash.uniqueid';

export default class GoalItem extends Component {
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
          </div>
          <div>
            <div className="progress" style={{'display': 'none'}}>
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{'width': '80%'}}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul className="list-group list-group-flush mb-0 text-left">
              <li className="list-group-item">
                <div className="form-group row mb-0">
                  <label htmlFor="goal-target-input" className="col-5 col-form-label">Target Streak</label>
                </div>
              </li>
              <li className="list-group-item">
              <div className="form-group row mb-0">
                <label htmlFor="topic-selector" className="col-5">Area of Interest</label>
                </div>
              </li>
              <li className="list-group-item">
                <a data-toggle="collapse" href={"#settingsCollapse" + id} aria-expanded="false" aria-controls={"settingsCollapse" + id}>
                  Additional Options
                </a>
                <div id={"settingsCollapse" + id} className="collapse" role="tabpanel" aria-labelledby={"headingOne" + id} data-parent="#accordion">
                </div>   
              </li>
            </ul>
          </div>
        </div>
      </div>
      );
   }
}