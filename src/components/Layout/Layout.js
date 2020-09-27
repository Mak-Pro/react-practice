import React, { Fragment } from 'react';

import classes from './Layout.module.scss';

import { Route } from 'react-router-dom';

import Header from '../../containers/Header/Header.js';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder.js';
import Checkout from  '../../containers/Checkout/Checkout.js';
import Orders from '../../containers/Orders/Orders.js';


const Layout = (props) => {
	return (
		<Fragment>
			<Header />
			<main className={classes.main}>
				<Route path='/' exact render={() => <BurgerBuilder />}/>
				<Route path='/checkout' render={() => <Checkout />}/>
				<Route path='/orders' exact render={() => <Orders />}/>
			</main>
		</Fragment>
	);
}

export default Layout;