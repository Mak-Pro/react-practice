import * as actionTypes from '../actions.js';


const initialState = {
	counter: 0,
}


const counterReducer = (state = initialState, action) => {

	switch(action.type) {
		case actionTypes.INCREMENT: 
			return {
				...state,
				counter: state.counter + action.payload.count,
			}

		case actionTypes.DECREMENT: 
			return {
				...state,
				counter: state.counter > 0 ? state.counter - action.payload.count : state.counter,
			}
			break;

		case actionTypes.ADD: 
			return {
				...state,
				counter: state.counter + action.payload.count,
			}

		case actionTypes.SUBTRACT: 
			return {
				...state,
				counter: state.counter - action.payload.count,
			}
	}
	return state;
}

export default counterReducer;