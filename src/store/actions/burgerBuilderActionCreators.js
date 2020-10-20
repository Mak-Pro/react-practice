import * as actionTypes from './actionTypes.js';

import burgerAxiosInstance from '../../axiosInstances.js';

const { INIT_INGREDIENTS, FETCH_INGREDIENTS_FAILED, ADD_INGREDIENT, REMOVE_INGREDIENT } = actionTypes;


export const addIngredient = (type) => {
	return (dispatch) => {
		dispatch({
			type: ADD_INGREDIENT,
			payload: {type},
		});
	}
}


export const removeIngredient = (type) => {
	return (dispatch) => {
		dispatch({
			type: REMOVE_INGREDIENT,
			payload: {type},
		});
	}
}


export const initIngredients = () => {
	return (dispatch) => {
		burgerAxiosInstance.get('/ingredients.json')
		.then(response => {
			const ingredients = response.data;
			dispatch({
				type: INIT_INGREDIENTS,
				payload: {ingredients},
			});
		})
		.catch(error => {
			dispatch({
				type: FETCH_INGREDIENTS_FAILED,
			});
			console.log(error);
		});
	}
}