import React from 'react';

import classes from './Preloader.module.scss';

const Preloader = (props) => {

	const { loaded } = props;

	return (
		<div className={[classes.preloader, loaded ? classes.hidden : null].join(' ')}>
			<div className={classes.preloader__inner}>
				<svg 
					style={{
						margin: 'auto',  
						display: 'block'
					}} 
					width="" 
					height="" 
					viewBox="0 0 100 100" 
					preserveAspectRatio="xMidYMid"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
				>
					<path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#4b7dbd" stroke="none">
					  <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
					</path>
				</svg>
			</div>
		</div>
	);
}

export default Preloader;