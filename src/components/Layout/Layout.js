import React, { Fragment } from 'react';

import classes from './Layout.module.scss';

import { Route } from 'react-router-dom';


import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder.js';
import Checkout from  '../../containers/Checkout/Checkout.js';


const Layout = (props) => {
	return (
		<Fragment>
			<main className={classes.main}>
				<Route path='/' exact render={() => <BurgerBuilder />}/>
				<Route path='/checkout' exact render={() => <Checkout />}/>
			</main>
		</Fragment>
	);
}

export default Layout;