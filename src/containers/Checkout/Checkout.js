import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Burger from '../../containers/BurgerBuilder/Burger/Burger.js';
import ContactData from './ContactData/ContactData.js';
import Preloader from '../../components/Preloader/Preloader.js';

import classes from './Checkout.module.scss';


import { withRouter } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions.js';


class Checkout extends Component {

	cancelCheckoutHandler = () => {
		this.props.showModalHandler();
		this.props.history.goBack();
	}

	agreeCheckoutHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}


	render() {

		return (
			<div className={classes.checkout}>
				{this.props.sendingProcess ? <Preloader /> : null}
				<h2>We hope, It tastes well!</h2>
				<Burger ingredients={this.props.ingredients}/>
				<hr/>
				<div className={classes.checkout__actions}>
					<button className={["btn", classes.discard].join(' ')} onClick={this.cancelCheckoutHandler}>Cancel</button>
					<button className={["btn", classes.agree].join(' ')} onClick={this.agreeCheckoutHandler}>Continue</button>
				</div>
				<Route path={`${this.props.match.path}/contact-data`} render={
					() => <ContactData 
									ingredients={this.props.ingredients}
									totalPrice={this.props.totalPrice}
									process={this.props.sendingProcessHandler}
								/>
				}/>
			</div>
		);
	}
	
}



const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilderReducer.ingredients,
    totalPrice: state.burgerBuilderReducer.totalPrice,
    sendingProcess: state.generalReducer.sendingProcess,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    sendingProcessHandler: () => dispatch({type: actionTypes.SENDING_PROCESS}),
    showModalHandler: () => dispatch({type: actionTypes.SHOW_MODAL}),
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));