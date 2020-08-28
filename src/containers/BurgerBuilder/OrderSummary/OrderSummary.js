import React from 'react';

import classes from './OrderSummary.module.scss';

const OrderSummary = (props) => {

	const { ingredients, cancelOrder, continueOrder, totalPrice } = props;

	const summaryIngredients = Object.keys(ingredients).map(ingredient => {
		return <li key={ingredient}><strong>{ingredient}</strong> : {ingredients[ingredient]}</li>;
	});

	return (
		<div className={classes.order__summary}>
			<h3 className={classes.order__summary_title}>You are going to purchase burger with following ingredients: </h3>
			<hr />
			<ul className={classes.order__summary_ingredients_list}>
				{summaryIngredients}
			</ul>
			<hr />
			<h2 className={classes.order__summary_title_big}>{totalPrice.toFixed(2)} $</h2>
			<hr />
			<h3 className={classes.order__summary_title} style={{marginBottom: '2rem'}}>Continue to checkout ?</h3>
			<div className={classes.order__summary_actions}>
				<button className="btn" onClick={cancelOrder}>Cancel</button>
				<button className="btn" onClick={continueOrder}>Continue</button>
			</div>
		</div>
	);
}

export default OrderSummary;