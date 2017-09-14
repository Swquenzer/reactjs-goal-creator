import React, { Component } from 'react';

export default class EditGoalTitle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inEditMode: false,
			currentGoalName: this.props.goalName
		};
	}

	renderHeading() {
    	if(this.state.inEditMode) {
			return (
				<div className="input-group pt-2 px-2">
					<input 	type="text" 
							className="form-control" 
							autoFocus="autofocus" 
							onFocus={this.handleFocus} 
							defaultValue={this.props.goalName} 
							onKeyPress={(evt) => this.updatecurrentGoalName(evt)} 
							onChange={(evt) => this.updatecurrentGoalName(evt)}
							rel="goal-name-input" />
					<div className="input-group-btn">
						<button	className="btn btn-success" onClick={this.saveGoalNameHandler.bind(this)}>
							Update <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
						</button>
					</div>
				</div>
			);
		} else {
			return (
				<div className="goal-name-literal pt-3 pb-0 px-2">
					<div className="float-left pl-2">
						{this.props.goalName}
					</div>
					<sup className="btn btn-primary float-right" onClick={this.editGoalNameHandler.bind(this)}>
						Change Name
					</sup>
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

  	handleFocus(e) {
  		e.target.select();
  	}

  	saveGoalNameHandler() {
  		//this.setState({goalName: this.state.currentGoalName})
  		this.setState({inEditMode: false})

  		//lift state
  		this.props.updateGoalName(this.state.currentGoalName);
  	}

  	editGoalNameHandler() {
  		this.setState({inEditMode: true})
  	}

  	updatecurrentGoalName(evt) {
  		this.setState({currentGoalName: evt.target.value});

  		if(evt.key === 'Enter'){
	    	this.saveGoalNameHandler();
	  	}
  	}
}


