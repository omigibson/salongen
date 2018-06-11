import React from 'react';

function LeftArrowWhiteIcon() {
	return (
		<svg width="18px" height="27px" viewBox="0 0 18 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
			<desc>Created with Sketch.</desc>
			<defs>
				<polyline id="path-1" points="24.1432489 51.3847763 15 42.1432489 24.1432489 33"></polyline>
				<filter x="-82.0%" y="-29.9%" width="264.1%" height="181.6%" filterUnits="objectBoundingBox" id="filter-2">
					<feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
					<feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
					<feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
					<feOffset dx="0" dy="2" in="shadowInner" result="shadowInner"></feOffset>
					<feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
					<feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
					<feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
				</filter>
			</defs>
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="En-Salong" transform="translate(-10.000000, -31.000000)">
					<g id="Path-5">
						<use fill="black" fillOpacity="1" filter="url(#filter-2)" href="#path-1"></use>
						<use stroke="#FFFFFF" strokeWidth="1" href="#path-1"></use>
					</g>
				</g>
			</g>
		</svg>
	)
}

export default LeftArrowWhiteIcon;