import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Burger from '../../containers/BurgerBuilder/Burger/Burger.js';
import ContactData from './ContactData/ContactData.js';
import Preloader from '../../components/Preloader/Preloader.js';

import classes from './Checkout.module.scss';


import { withRouter } from 'react-router-dom';


class Checkout extends Component {

	state = {
		ingredients: {},
		totalPrice: 0,
		processing: false
	}


	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let tp = 0;
		for(let param of query.entries()) {
			if(param[0] !== 'price') {
				ingredients[param[0]] = +param[1];
			}
			else {
				tp = +param[1];
			}
		}

		this.setState({
			ingredients: ingredients,
			totalPrice: tp,
		});
		
	}


	cancelCheckoutHandler = () => {
		this.props.history.goBack();
	}

	agreeCheckoutHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}

	processHandler = (e) => {
		e.preventDefault();
		this.setState({
			processing: !this.state.processing
		});
	}


	render() {

		return (
			<div className={classes.checkout}>
				{this.state.processing ? <Preloader /> : null}
				<h2>We hope, It tastes well!</h2>
				<Burger ingredients={this.state.ingredients}/>
				<hr/>
				<div className={classes.checkout__actions}>
					<button className={["btn", classes.discard].join(' ')} onClick={this.cancelCheckoutHandler}>Cancel</button>
					<button className={["btn", classes.agree].join(' ')} onClick={this.agreeCheckoutHandler}>Continue</button>
				</div>
				<Route path={`${this.props.match.path}/contact-data`} render={
					() => <ContactData 
									ingredients={this.state.ingredients}
									totalPrice={this.state.totalPrice}
									process={this.processHandler}
								/>
				}/>
			</div>
		);
	}
	
}

export default withRouter(Checkout);