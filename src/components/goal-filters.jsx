import React, { Component } from 'react';
//import CloneDeep from 'lodash.clonedeep'

//TODO: Replace this w/ dynamic list from database
const FILTERS = {
	interests: ["Personal Improvement", "Social Skills", "Professional Improvement", "Other"],
	type: ["type1", "type2"]
}

export default class GoalFilters extends Component {
 	render() {
	    return (
	    	<div className="panel text-left">
	    		{
	    			FILTERS.interests.map((el, i) => {
	    				return <button className={`btn mr-1 mt-1 ${el == this.props.filters.interestFilter ? "btn-primary" : "btn-info"}`} 
	    				key={i} 
	    				onClick={e => this.filterInterest(e)}>
	    					{el}
	    				</button>
	    			})
	    		}
	    		<button className="btn btn-warning mr-1 mt-1" onClick={this.clearFilter.bind(this, "Interest")}>Clear Filters</button>
	    	</div>
	    );
  	}

  	filterInterest(e) {
		const filter = e.currentTarget.textContent;
		this.props.setInterestFilter(filter);
  	}

  	clearFilter(filterType) {
  		this.props.clearFilter(filterType);
  	}
}
