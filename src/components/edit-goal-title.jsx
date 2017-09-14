import React, { Component } from 'react';

export default class EditGoalTitle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inEditMode: false,
			goalName: 'My New Goal',
			tempGoalName: 'My New Goal'
		};
	}

	renderHeading() {
    	if(this.state.inEditMode) {
			return (
				<div className="input-group">
					<input type="text" className="form-control" defaultValue={this.state.goalName} onKeyPress={(evt) => this.onKeyPressHandler(evt)} onChange={(evt) => this.updateTempGoalName(evt)} rel="goal-name-input" />
					<div className="input-group-btn">
						<button className="btn btn-success" onClick={this.saveGoalNameHandler.bind(this)}>Update <span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<div className="goal-name-literal">
						{this.state.goalName}
						<sup className="btn btn-warning" onClick={this.editGoalNameHandler.bind(this)}>Change Name</sup>
					</div>
				</div>
			);
		}
    }

 	render() {
	    return (
	    	<h3 className="panel-title">
				{ this.renderHeading() }
	    	</h3>
	    );
  	}

  	saveGoalNameHandler() {
  		console.log(this.rels)
  		this.setState({goalName: this.state.tempGoalName})
  		this.setState({inEditMode: false})

  		//lift state
  		this.props.updateGoalName(this.state.tempGoalName)
  	}

  	onKeyPressHandler(evt) {
  		this.setState({tempGoalName: evt.target.value});

  		if(evt.key === 'Enter'){
	    	this.saveGoalNameHandler();
	  	}
  	}

  	editGoalNameHandler() {
  		this.setState({inEditMode: true})
  	}

  	updateTempGoalName(evt) {
  		this.setState({tempGoalName: evt.target.value});
  	}
}


