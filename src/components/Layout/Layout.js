import React, { Fragment } from 'react';

import classes from './Layout.module.scss';


import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder.js';


const Layout = (props) => {
	return (
		<Fragment>
			<main className={classes.main}>
				<BurgerBuilder />
			</main>
		</Fragment>
	);
}

export default Layout;