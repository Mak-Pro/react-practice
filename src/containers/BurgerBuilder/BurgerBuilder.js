import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './BurgerBuilder.module.scss';


import Burger from './Burger/Burger.js';
import BurgerControls from '../../components/BurgerControls/BurgerControls.js';
import OrderSummary from './OrderSummary/OrderSummary.js';
import Modal from '../../components/Modal/Modal.js';

import burgerAxiosInstance from '../../axiosInstances.js';

import Preloader from '../../components/Preloader/Preloader.js';



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
		sending: false,
		loaded: false,
		error: false,
	}


	componentDidMount() {
		burgerAxiosInstance.get('/ingredients.json')
											 .then(response => {
											 	this.setState({
											 		ingredients: response.data,
											 		loaded: true,
											 	});
											 })
											 .catch(error => {
											 	console.log(error);
											 	this.setState({
											 		loaded: true,
											 		error: true,
											 	});
											 });
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

		this.props.history.push('/checkout');

		// this.setState({ sending: true });

		// const order = {
		// 	ingredients: this.state.ingredients,
		// 	price: this.state.totalPrice,
		// 	customer: {
		// 		name: 'MakPro',
		// 		address: {
		// 			country: 'Ukraine',
		// 			town: 'Nikolaev',
		// 			street: 'Central Street 1',
		// 			zipCode: '54000',
		// 		},
		// 		email: 'test@test.com',
		// 	}
		// }

		// burgerAxiosInstance.post('/orders.json', order)
		// 									 .then(response => {
		// 									 		this.setState({ 
		// 									 			sending: false,
		// 									 			showOrderSummaryModal: !this.state.showOrderSummaryModal,
		// 									 		});
		// 									 })
		// 									 .catch(error => {
		// 									 		this.setState({ 
		// 									 			sending: false,
		// 									 			showOrderSummaryModal: !this.state.showOrderSummaryModal,
		// 									 		});
		// 									 });
	}


  render() {

    return (
			<Fragment>
				<Modal 
					show={this.state.showOrderSummaryModal}
					cancelOrder={this.showOrderSummaryModalHandler}
				>
				{this.state.showOrderSummaryModal ? <OrderSummary 
						ingredients={this.state.ingredients}
						cancelOrder={this.showOrderSummaryModalHandler}
						continueOrder={this.continueOrderingHandler}
						totalPrice={this.state.totalPrice}
					/> : null}
					<Preloader loaded={!this.state.sending}/>
				</Modal>
				
				{this.state.loaded && !this.state.error ? 
					<Fragment>
						<Burger ingredients={this.state.ingredients}/>
						<BurgerControls 
							controls={this.state.ingredients}
							addIngredient={this.addIngredientHandler}
							removedIngredient={this.removedIngredientHandler}
							totalPrice={this.state.totalPrice}
							purchaseble={this.state.purchaseble}
							processOrder={this.showOrderSummaryModalHandler}
						/>
					</Fragment> : <h2 style={{
					fontSize: '4rem',
					fontWeight: '700',
					textAlign: 'center',
					margin: '0 auto',
					minHeight: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					maxWidth: '80rem'
				}}>{this.state.error ? 'ERROR LOADING DATA...' : 'LOADING...'}</h2>}
				
			</Fragment>
    );
  }
}

export default withRouter(BurgerBuilder);