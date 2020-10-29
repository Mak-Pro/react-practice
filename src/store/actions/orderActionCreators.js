import * as actionTypes from './actionTypes.js';
import burgerAxiosInstance from '../../axiosInstances.js';

const { 
	START_PURCHASE_BURGER, 
	PURCHASE_BURGER_SUCCESS, 
	PURCHASE_BURGER_FAIL, 
	INIT_ORDERS,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAILED 
} = actionTypes;



export const startPurchaseBurger = (order, token) => {
	return (dispatch) => {
		dispatch({
			type: START_PURCHASE_BURGER,
		});
		burgerAxiosInstance.post('/orders.json?auth=' + token, order)
		.then(response => {
			dispatch({
				type: PURCHASE_BURGER_SUCCESS,
			});
		})
		.catch(error => {
			dispatch({
				type: PURCHASE_BURGER_FAIL,
			});
		});
	}
}


export const initOrders = (token) => {
	return (dispatch) => {
		dispatch({
			type: INIT_ORDERS,
		});
		burgerAxiosInstance.get('/orders.json?auth=' + token)
		.then(response => {
			const orders = response.data;
			dispatch({
				type: FETCH_ORDERS_SUCCESS,
				payload: {orders},
			});
		})
		.catch(error => {
			dispatch({
				type: FETCH_ORDERS_FAILED,
			});
			console.log(error);
		});
	}
}

