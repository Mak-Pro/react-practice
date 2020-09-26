import React, { Component } from 'react';

import Burger from '../../containers/BurgerBuilder/Burger/Burger.js';

import classes from './Checkout.module.scss';


import { withRouter } from 'react-router-dom';


class Checkout extends Component {

	constructor(props) {
		super(props);
	}

	state = {
		ingredients: {
			salad: 1,
			bacon: 1,
			cheese: 1,
			meat: 1,
			tomatoes: 1,
		},
	}


	cancelCheckoutHandler = () => {
		this.props.history.goBack();
	}


	render() {

		return (
			<div className={classes.checkout}>

				<h2>We hope, It tastes well!</h2>
				<Burger ingredients={this.state.ingredients}/>
				<hr/>
				<div className={classes.checkout__actions}>
					<button className={["btn", classes.discard].join(' ')} onClick={this.cancelCheckoutHandler}>Cancel</button>
					<button className={["btn", classes.agree].join(' ')} onClick={this.agreeCheckoutHandler}>Cancel</button>
				</div>
			</div>
		);
	}
	
}

export default withRouter(Checkout);