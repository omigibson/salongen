import React, { Component } from 'react';
import Salonbutton from './Salonbutton.js';

class List extends Component {
	
	render() {
		const price = this.props.price;
		const allSalons = this.props.salonsData;
		const salonsList = allSalons.map((salon, index) => {
			if (salon.price <= price && salon.price > price - 250){
			return <li key={index}>
					<p className="appointment">{salon.appointments[0]}</p>
					<h2 className="salonName">{salon.name}</h2>
					<p className="price">{salon.price} kr</p>
					<p className="rating">{salon.rating}</p>
					<p>{salon.duration} mn</p>
					<Salonbutton salonClick={this.props.salonClick} id={salon.id}/>
					<p className="address">{salon.address}</p>
				</li>;
				}
		})
	return (
		<div>
			<ul>
		{salonsList}
			</ul>
		</div>
		)
	}
}

export default List;