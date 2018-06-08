import React from 'react';
import List from './List.js';

class Filter extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render(){
		return (
			<div>
			<select onChange={this.props.selectPrice}>
				<option>Välj pris</option>
				<option value={249}>Pris 1 - 249 kr</option>
				<option value={499}>Pris 250 - 499 kr</option>
				<option value={749}>Pris 500 - 749 kr</option>
				<option value={999}>Pris 750 - 999 kr</option>
			</select>
			</div>
		)
	}
}

export default Filter