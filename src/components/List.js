import React, { Component } from 'react';
import StarRatingListView from './icons/StarRatingListView.js'
import RightArrowIcon from './icons/RightArrowIcon.js';

class List extends Component {
	
	render() {
		const price = this.props.price;
		const allSalons = this.props.salonsData;
		const salonsList = allSalons.map((salon, index) => {
			if (salon.price <= price && salon.price > price - 250){
			return <li key={index}>
					<div className="appointment">
						<p>{salon.appointments[0]}</p>
					</div>
					<div className="salonInfo">
						<h2 className="salonName">{salon.name}</h2>
						<p className="rating"><StarRatingListView rating={salon.rating}/> <small>({salon.numberOfRatings})</small></p>
							<p className="address">{salon.streetAddress}</p>
					</div>
				<div>
					<p className="price">{salon.price} kr</p>
					<p>{salon.duration} mn</p>
				</div>
				<div>
					<button onClick={this.props.salonClick} id={salon.id}><RightArrowIcon/></button>
				</div>
					
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