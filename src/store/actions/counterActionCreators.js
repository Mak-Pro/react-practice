import * as actionTypes from './actionTypes.js';


const { INCREMENT, DECREMENT, ADD, SUBTRACT } = actionTypes;


export const increment = (count) => {
	return {
		type: INCREMENT,
		payload: {count},
	}
}

export const decrement = (count) => {
	return {
		type: DECREMENT,
		payload: {count},
	}
}

export const add = (count) => {
	return {
		type: ADD,
		payload: {count},
	}
}

export const subtract = (count) => {
	return {
		type: SUBTRACT,
		payload: {count},
	}
}