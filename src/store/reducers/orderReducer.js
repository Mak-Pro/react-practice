import * as actionTypes from '../../store/actions/actionTypes.js';


const { 
	START_PURCHASE_BURGER, 
	PURCHASE_BURGER_SUCCESS,
	PURCHASE_BURGER_FAIL,
	INIT_ORDERS,
	FETCH_ORDERS_SUCCESS, 
	FETCH_ORDERS_FAILED 
} = actionTypes;

const initialState = {
	sendingProcess: false,
	orders: {},
	loading: false,
	purchased: false,
	error: false,
}

const orderReducer = (state = initialState, action) => {
	switch(action.type) {

		case START_PURCHASE_BURGER:
			return {
				...state,
				sendingProcess: !state.sendingProcess,
				purchased: true,
			}

		case PURCHASE_BURGER_SUCCESS:
			return {
				...state,
				sendingProcess: !state.sendingProcess,
				purchased: false,
			}

		case PURCHASE_BURGER_FAIL:
			return {
				...state,
				sendingProcess: !state.sendingProcess,
				purchased: false,
			}
			
		case INIT_ORDERS:
			return {
				...state,
				loading: !state.loading,
			}

		case FETCH_ORDERS_SUCCESS:
			const initOrders = action.payload.orders;
			return {
				...state,
				orders: initOrders,
				loading: !state.loading,
				error: false,
			}

		case FETCH_ORDERS_FAILED:
			return {
				...state,
				error: true,
				loading: !state.loading,
			}
	}
	
	return state;
}

export default orderReducer;