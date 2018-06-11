import React from 'react';

function Salonbutton(props){
	return (
		<button onClick={props.salonClick} id={props.id}>
			<svg width="8px" height="11px" viewBox="0 0 8 11" version="1.1">
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="Lista" transform="translate(-353.000000, -381.000000)" stroke="#B69F58">
						<polyline id="Path-2-Copy-3" points="354.446027 381 359.67887 386.232843 354 391.911713"></polyline>
					</g>
				</g>
			</svg>
		</button>
		)
}

export default Salonbutton;