import * as actionTypes from '../../store/actions/actions.js';


const initialState = {
	results: [],
}


const resultsReducer = (state = initialState, action) => {

	switch(action.type) {
		case actionTypes.STORE_RESULTS:
			return {
				...state,
				results: state.results.concat(action.payload.counter),
			}

		case actionTypes.DELETE_RESULTS: 
			// Первый вариант
			// const transformedResults = [...state.results];
			// transformedResults.splice(action.payload.position, 1);

			// Второй вариант
			const transformedResults = state.results.filter((result, index) => index !== action.payload.position);
			return {
				...state,
				results: transformedResults,
			}
				
	}
	return state;
}

export default resultsReducer;