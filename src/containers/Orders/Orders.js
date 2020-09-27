import React, { Component, Fragment } from 'react';
import burgerAxiosInstance from '../../axiosInstances.js';

import classes from './Orders.module.scss';

import Preloader from '../../components/Preloader/Preloader.js';
import Order from '../../components/Order/Order.js';

class Orders extends Component {

	state = {
		orders: [],
		loading: true
	}

	componentDidMount() {



		burgerAxiosInstance.get('/orders.json')
											 .then(response => {
											 		this.setState({
											 			orders: response.data,
											 			loading: false,
											 		});
											 })
											 .catch(error => {
											 	console.log(error);
											 	this.setState({
											 			loading: false,
											 		});
											 });

	}

	render() {

		const ordersArray = [];

		for(let item in this.state.orders) {
			ordersArray.push({id: item, ingredients: this.state.orders[item].ingredients, totalPrice: this.state.orders[item].price});
		}

		const ordersList = ordersArray.map((order) => {
			return <Order key={order.id} ingredients={order.ingredients} totalPrice={order.totalPrice}/>
		});


		return (
			<Fragment>
				{this.state.loading ? <Preloader/> : null}
				<div className={classes.orders}>
					{ordersList}
				</div>
			</Fragment>
		);

	}
}

export default Orders;