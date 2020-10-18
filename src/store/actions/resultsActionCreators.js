import * as actionTypes from './actionTypes.js';


const { STORE_RESULTS, DELETE_RESULTS } = actionTypes;


// ASYNC CODE 

// Первый вариант - просто передать объект в функцию dispatch

// export const storeResults = (counter) => {
// 	return (dispatch) => {
// 		setTimeout(() => {
// 			dispatch({
// 				type: STORE_RESULTS,
// 				payload: {counter},
// 			});
// 		}, 2000);
// 	}
// }


// Второй вариант - создать отдельную функцию, которая возвращает объект.
// Но теперь в этой функции можно модифицировать counter перед передачей в payload
// НО ЛУЧШЕ модифицировать результат в reducer

// export const saveResults = (count) => {
// 	// например удвоить счетчик:
// 	let counter = count * 2;
// 	return {
// 		type: STORE_RESULTS,
// 		payload: {counter},
// 	}
// }

export const saveResults = (counter) => {
	return {
		type: STORE_RESULTS,
		payload: {counter},
	}
} 

export const storeResults = (counter) => {
	return (dispatch, getState) => {
		// Можно получить данные предыдущего состояния через getState
		// let oldCounter = getState().counterReducer.counter;

		setTimeout(() => {
			dispatch(saveResults(counter));
		}, 2000);
	}
} 






export const deleteResults = (index) => {
	return {
		type: DELETE_RESULTS,
		payload: {position: index},
	}
}