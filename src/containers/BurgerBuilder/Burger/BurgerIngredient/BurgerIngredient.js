import React from 'react';

import classes from './BurgerIngredient.module.scss';

const BurgerIngredient = (props) => {

	const { type } = props;

	let ingredient = null;

	switch (type) {
		case('breadTop'):
			ingredient = <div className={[classes.burger__ingredient, classes.breadTop].join(' ')}></div>;
			break;
		case('salad'):
			ingredient = <div className={[classes.burger__ingredient, classes.salad].join(' ')}>salad</div>;
			break;
		case('bacon'):
			ingredient = <div className={[classes.burger__ingredient, classes.bacon].join(' ')}>bacon</div>;
			break;
		case('cheese'):
			ingredient = <div className={[classes.burger__ingredient, classes.cheese].join(' ')}>cheese</div>;
			break;
		case('meat'):
			ingredient = <div className={[classes.burger__ingredient, classes.meat].join(' ')}>meat</div>;
			break;
		case('tomatoes'):
			ingredient = <div className={[classes.burger__ingredient, classes.tomatoes].join(' ')}>tomatoes</div>;
			break;
		case('breadBottom'):
			ingredient = <div className={[classes.burger__ingredient, classes.breadBottom].join(' ')}></div>;
			break;
		default:
			ingredient = null;
	}

	return ingredient;
}

export default BurgerIngredient;