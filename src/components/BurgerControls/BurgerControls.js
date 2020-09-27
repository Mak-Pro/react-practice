import React from 'react';

import classes from './BurgerControls.module.scss';


import BurgerControl from './BurgerControl/BurgerControl.js';


const BurgerControls = (props) => {

	const { controls, addIngredient, removedIngredient, totalPrice, purchaseble, processOrder } = props; 

	const controlsArray = [];

	for(let key in controls) {
		controlsArray.push({name: key, value: controls[key]});
	}

	const controlsList = controlsArray.map(control => {

		return <BurgerControl
							key={control.name}
							label={control.name}
							count={control.value}
							added={() => addIngredient(control.name)}
							removed={() => removedIngredient(control.name)}
						/>;
	});

	return (
		<div className={classes.burger__controls}>
			<h3 className={classes.total__price}>Current Price: {totalPrice.toFixed(2)}$</h3>
			{controlsList}
			<div className={classes.submit__wrapper}>
				<button 
					className={["btn", !purchaseble ? classes.disabled : null].join(' ')}
					onClick={processOrder}
				>Continue</button>
			</div>
		</div>
	);
}

export default BurgerControls;