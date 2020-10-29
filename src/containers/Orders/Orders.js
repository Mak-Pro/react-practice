import React, { Component, Fragment } from 'react';
import burgerAxiosInstance from '../../axiosInstances.js';

import classes from './Orders.module.scss';

import Preloader from '../../components/Preloader/Preloader.js';
import Order from '../../components/Order/Order.js';


//Redux
import { connect } from 'react-redux';

import { initOrders } from '../../store/actions/index.js';

class Orders extends Component {

	componentDidMount() {
		this.props.initOrdersHandler(this.props.token);

	}

	render() {

		const ordersArray = [];

		for(let item in this.props.orders) {
			ordersArray.push({id: item, ingredients: this.props.orders[item].ingredients, totalPrice: this.props.orders[item].price});
		}

		const ordersList = ordersArray.map((order) => {
			return <Order key={order.id} ingredients={order.ingredients} totalPrice={order.totalPrice}/>
		});


		return (
			<Fragment>
				{this.props.loading && !this.props.error ? <Preloader/> : null}
				{
					this.props.error ? <h2 style={{
						fontSize: '4rem',
						fontWeight: '700',
						textAlign: 'center',
						margin: '0 auto',
						minHeight: '100vh',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						maxWidth: '80rem'
					}}>Error loading orders...</h2> : 
					<div className={classes.orders}>
						{ordersList}
					</div>
				}
				
			</Fragment>
		);

	}
}


const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    error: state.orderReducer.error,
    token: state.authReducer.token,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
  	initOrdersHandler: (token) => dispatch(initOrders(token)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Orders);