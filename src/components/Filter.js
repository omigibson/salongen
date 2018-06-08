import React from 'react';
import List from './List.js';

class FilteredList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			price: ''
		};
	}
	
	selectPrice = (event) => {
		this.setState({price: event.target.value})
	}
	
	render(){
		return (
			<div>
			<select onChange={this.selectPrice}>
				<option>Välj pris</option>
				<option value={249}>Pris 1 - 249 kr</option>
				<option value={499}>Pris 250 - 499 kr</option>
				<option value={749}>Pris 500 - 749 kr</option>
				<option value={999}>Pris 750 - 999 kr</option>
			</select>
			<List salonsData={this.props.salonsData} price={this.state.price}/>
			</div>
		)
	}
}

export default FilteredList;