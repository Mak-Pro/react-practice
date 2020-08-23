import React, { Component, Fragment } from 'react';

import classes from './BurgerBuilder.module.scss';


import Burger from './Burger/Burger.js';


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
		}
	}


  render() {
    return (
			<Fragment>
				<Burger ingredients={this.state.ingredients}/>
				<p>Controls</p>
			</Fragment>
    );
  }
}

export default BurgerBuilder;