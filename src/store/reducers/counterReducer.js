import * as actionTypes from '../actions/actionTypes.js';


//Utility
import { updateObject } from '../../store/utility.js';


const initialState = {
	counter: 0,
}


const counterReducer = (state = initialState, action) => {

	switch(action.type) {
		// Можем использовать вспомогательную функцию updateObject из utility (это опционально)
		// для сокращения кода
		case actionTypes.INCREMENT: return updateObject(state, {counter: state.counter + action.payload.count});
		case actionTypes.DECREMENT: return updateObject(state, {counter: state.counter > 0 ? state.counter - action.payload.count : state.counter});

		// а можем оставить код без вспомогательной функции
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