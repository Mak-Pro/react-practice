import React from 'react';

import classes from './BurgerControls.module.scss';


import BurgerControl from './BurgerControl/BurgerControl.js';


const BurgerControls = (props) => {
	return (
		<div className={classes.burger__controls}>
			<BurgerControl/>
		</div>
	);
}

export default BurgerControls;