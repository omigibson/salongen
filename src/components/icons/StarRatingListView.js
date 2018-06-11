import React from 'react';
import SmallStar from './SmallStar.js';
import SmallStarEmpty from './SmallStarEmpty.js';

function StarRatingListView(props) {
	switch(props.rating){
		case 1:
			return (
				<span>
				<SmallStar/>
				<SmallStarEmpty/>
				<SmallStarEmpty/>
				<SmallStarEmpty/>
				<SmallStarEmpty/>
				</span>
				)
		case 2:
			return (
				<span>
				<SmallStar/>
				<SmallStar/>
				<SmallStarEmpty/>
				<SmallStarEmpty/>
				<SmallStarEmpty/>
				</span>
				)
		case 3:
			return (
				<span>
				<SmallStar/>
				<SmallStar/>
				<SmallStar/>
				<SmallStarEmpty/>
				<SmallStarEmpty/>
				</span>
				)
		case 4:
			return (
				<span>
				<SmallStar/>
				<SmallStar/>
				<SmallStar/>
				<SmallStar/>
				<SmallStarEmpty/>
				</span>
				)
		case 5:
			return (
				<span>
				<SmallStar/>
				<SmallStar/>
				<SmallStar/>
				<SmallStar/>
				<SmallStar/>
				</span>
				)
		default:
			return (
				<span>
				<SmallStar/>
				</span>
				)
	}
}
		
export default StarRatingListView;