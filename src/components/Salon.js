import React from 'react';
import LeftArrowWhiteIcon from './icons/LeftArrowWhiteIcon.js';
import StarRatingSalonView from './icons/StarRatingSalonView.js';
import LocationIcon from './icons/LocationIcon.js';
import ClockIcon from './icons/ClockIcon.js';
import PhoneIcon from './icons/PhoneIcon.js';
import WebIcon from './icons/WebIcon.js';

function SalonView(props){
	return (
		<div className="salon">
			<header className="salonHeader">
				<div className="salonHeaderIcons">
					  <button onClick={props.backClick}>
					  <LeftArrowWhiteIcon/>
					  </button>
					  <button><i className="far fa-heart"></i></button>
				</div>
				<div>
				  <h1>{props.singleSalon.name}</h1>
				  <p><StarRatingSalonView rating={props.singleSalon.rating}/></p>
				</div>
			</header>
			  <ul className="salonMenu">
				  <li className="active"><p>Info</p></li>
				  <li><p>Schema</p></li>
			  </ul>
			  <main>
					<ul className="salonInfo">
						  <li><p><span><LocationIcon/></span> {props.singleSalon.streetAddress}, {props.singleSalon.zipcodeCity}</p></li>
						 <li><p><span><ClockIcon/></span> Öppet till {props.singleSalon.open} idag</p></li>
						  <li><p><span><PhoneIcon/></span> {props.singleSalon.phonenumber}</p></li>
						  <li><p><span><i className="fas fa-globe"></i></span> {props.singleSalon.website}</p></li>
					</ul>
				  <p className="salonDescription">{props.singleSalon.description}</p>
			  </main>
			</div>
		)
}

export default SalonView;