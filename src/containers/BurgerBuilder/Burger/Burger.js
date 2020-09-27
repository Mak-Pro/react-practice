import React from 'react';

import classes from './Burger.module.scss';


import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';


const Burger = (props) => {

	const { ingredients } = props;
	const transformedIngredientsArray = [];
	Object.keys(ingredients).map(ingredient => {
		for(let i = 0; i < ingredients[ingredient]; i++) {
			transformedIngredientsArray.push(ingredient);
		}
		return null;
	});

	const transformedIngredients = transformedIngredientsArray.map((ingredient, index) => {
		return <BurgerIngredient key={`${ingredient}-${index}`} type={ingredient}/>;
	})

	const ingredientsList = transformedIngredients.length > 0 ? transformedIngredients : <h3 className={classes.burger__empty_title}>Please start adding ingredients...</h3>;

	return (
		<div className={classes.burger}>
			<BurgerIngredient type='breadTop'/>
				{ingredientsList}
			<BurgerIngredient type='breadBottom'/>
		</div>
	);
}

export default Burger;