export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULTS = 'STORE_RESULTS';
export const DELETE_RESULTS = 'DELETE_RESULTS';


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

export const storeResults = (counter) => {
	return {
		type: STORE_RESULTS,
		payload: {counter},
	}
}


export const deleteResults = (index) => {
	return {
		type: DELETE_RESULTS,
		payload: {position: index},
	}
}




