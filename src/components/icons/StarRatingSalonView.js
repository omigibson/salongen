import React from 'react';
import BigStar from './BigStar.js';
import BigStarEmpty from './BigStarEmpty.js';

function StarRatingSalonView(props) {
	switch(props.rating){
		case 1:
			return (
				<span>
				<BigStar/>
				<BigStarEmpty/>
				<BigStarEmpty/>
				<BigStarEmpty/>
				<BigStarEmpty/>
				</span>
				)
		case 2:
			return (
				<span>
				<BigStar/>
				<BigStar/>
				<BigStarEmpty/>
				<BigStarEmpty/>
				<BigStarEmpty/>
				</span>
				)
		case 3:
			return (
				<span>
				<BigStar/>
				<BigStar/>
				<BigStar/>
				<BigStarEmpty/>
				<BigStarEmpty/>
				</span>
				)
		case 4:
			return (
				<span>
				<BigStar/>
				<BigStar/>
				<BigStar/>
				<BigStar/>
				<BigStarEmpty/>
				</span>
				)
		case 5:
			return (
				<span>
				<BigStar/>
				<BigStar/>
				<BigStar/>
				<BigStar/>
				<BigStar/>
				</span>
				)
		default:
			return (
				<span>
				<BigStar/>
				</span>
				)
	}
}
		
export default StarRatingSalonView;