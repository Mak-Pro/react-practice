import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.scss';

import { Route } from 'react-router-dom';

import Header from '../../containers/Header/Header.js';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder.js';
import Checkout from  '../../containers/Checkout/Checkout.js';
import Orders from '../../containers/Orders/Orders.js';
import Auth from '../../containers/Auth/Auth.js';


class Layout extends Component {

	render() {
		return (
			<Fragment>
				<Header isAuth={this.props.token}/>
				<main className={classes.main}>
					<Route path='/' exact render={() => <BurgerBuilder />}/>
					<Route path='/checkout' render={() => <Checkout />}/>
					<Route path='/orders' exact render={() => <Orders />}/>
					<Route path='/auth' exact render={() => <Auth />}/>
				</main>
			</Fragment>
		);
	}
	
}


const mapStateToProps = (state) => {
  return {
  	token: state.authReducer.token,
  }
}




export default connect(mapStateToProps)(Layout);