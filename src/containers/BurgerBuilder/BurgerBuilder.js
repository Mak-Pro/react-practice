import React, { Component, Fragment } from 'react';

import classes from './BurgerBuilder.module.scss';


import Burger from './Burger/Burger.js';
import BurgerControls from '../../components/BurgerControls/BurgerControls.js';
import OrderSummary from './OrderSummary/OrderSummary.js';
import Modal from '../../components/Modal/Modal.js';



const INGREDIENT_PRICES = {
	salad: 1.2,
	bacon: 3.5,
	cheese: 2.4,
	meat: 4,
	tomatoes: 1.5,
}



class BurgerBuilder extends Component {
	
	constructor(props) {
		super(props);
	}


	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
			tomatoes: 0,
		},
		totalPrice: 4,
		purchaseble: false,
		showOrderSummaryModal: false,
	}


	addIngredientHandler =(type) => {
		const modifiedIngredients = {
			...this.state.ingredients,
		}
		modifiedIngredients[type] = modifiedIngredients[type] + 1;

		const ingredientsCount = Object.values(modifiedIngredients).reduce((sum, el) => {
  		return sum + el;
  	});


		this.setState({
			ingredients: modifiedIngredients,
			totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type],
			purchaseble: ingredientsCount > 0,
		});
	}

	removedIngredientHandler =(type) => {
		const modifiedIngredients = {
			...this.state.ingredients,
		}
		if(modifiedIngredients[type] > 0) {
			modifiedIngredients[type] = modifiedIngredients[type] - 1;
		}


		const ingredientsCount = Object.values(modifiedIngredients).reduce((sum, el) => {
  		return sum + el;
  	});


		this.setState({
			ingredients: modifiedIngredients,
			totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type],
			purchaseble: ingredientsCount > 0,
		});
	}



	showOrderSummaryModalHandler = () => {
		this.setState({
			showOrderSummaryModal: !this.state.showOrderSummaryModal
		});
	}

	continueOrderingHandler = () => {
		console.log('Continue Ordering...');
	}


  render() {

    return (
			<Fragment>
				<Modal 
					show={this.state.showOrderSummaryModal}
					cancelOrder={this.showOrderSummaryModalHandler}
				>
					<OrderSummary 
						ingredients={this.state.ingredients}
						cancelOrder={this.showOrderSummaryModalHandler}
						continueOrder={this.continueOrderingHandler}
						totalPrice={this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BurgerControls 
					controls={this.state.ingredients}
					addIngredient={this.addIngredientHandler}
					removedIngredient={this.removedIngredientHandler}
					totalPrice={this.state.totalPrice}
					purchaseble={this.state.purchaseble}
					processOrder={this.showOrderSummaryModalHandler}
				/>
			</Fragment>
    );
  }
}

export default BurgerBuilder;