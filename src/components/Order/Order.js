import React from 'react';

import classes from './Order.module.scss';

const Order = (props) => {

	const { ingredients, totalPrice } = props;

	const ingredientsArray = [];

	for(let ingredient in ingredients) {
		ingredientsArray.push({name: ingredient, count: ingredients[ingredient]});
	}

	const ingredientsItems = ingredientsArray.map((item, index) => {
		return <li key={index}>{`${item.name}: ${item.count}`}</li>
	});

	return (
		<div className={classes.order__item}>
			<h5 className={classes.order__item_ingredients_title}>Ingredients: </h5>
			<ul className={classes.order__item_ingredients}>
				{ingredientsItems}
			</ul>
			<hr />
			<h5 className={classes.order__item_price}>Total Price: <span>{`$${totalPrice}`}</span></h5>	
		</div>
	);
}

export default Order;