import React, { Component } from 'react';
import Salons from './../salons.json';

class List extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			price: '',
			salons: []
		};
	}
	
	handleSalons = () => {
				this.setState({
					salons: Salons.salons
				})	
	}
	
	selectPrice = (event) => {
		this.setState({price: event.target.value})
	}
	
	selectSalons = () => {
		
	}
	
	componentDidMount() {
		this.handleSalons(Salons);
	}
	
	render() {
		const allSalons = this.state.salons;
		const salonsList = allSalons.map((salon, index) => {
			if (salon.price <= this.state.price && salon.price > this.state.price - 250){
			return <li key={index}>
					<p><a href="">{salon.name}</a></p>
					<p>{salon.price}</p>
					<p>{salon.address}</p>
				</li>;
				}
		})
	return (
		<div>
			<select onChange={this.selectPrice}>
				<option>Välj pris</option>
				<option value={249}>Pris 1 - 249 kr</option>
				<option value={499}>Pris 250 - 499 kr</option>
				<option value={749}>Pris 500 - 749 kr</option>
				<option value={999}>Pris 750 - 999 kr</option>
			</select>
			<ul>
		{salonsList}
			</ul>
		</div>
		)
	}
}

export default List;