import React from 'react';

import classes from './BurgerControl.module.scss';

const BurgerControl = (props) => {
	return (
		<div className={classes.burger__control}>
			<span className={classes.burger__control_label}>Label</span>
			<div className={classes.burger__control_buttons}>
				<button className={['btn', classes.btn__less].join(' ')}>Less</button>
				<button className={['btn', classes.btn__more].join(' ')}>More</button>
			</div>
		</div>
		);
}

export default BurgerControl;