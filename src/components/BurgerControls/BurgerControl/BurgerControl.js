import React from 'react';

import classes from './BurgerControl.module.scss';

const BurgerControl = (props) => {

	const { label, added, removed, count } = props;

	return (
		<div className={classes.burger__control}>
			<span className={classes.burger__control_label}>{label}</span>
			<div className={classes.burger__control_buttons}>
				<button 
					className={['btn', classes.btn__less, count === 0 ? classes.disabled : null].join(' ')}
					onClick={removed}
				>Less</button>
				<button 
					className={['btn', classes.btn__more].join(' ')}
					onClick={added}
				>More</button>
			</div>
		</div>
		);
}

export default BurgerControl;