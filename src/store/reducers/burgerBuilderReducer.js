import * as actionTypes from '../../store/actions.js';

const INGREDIENT_PRICES = {
	salad: 1.2,
	bacon: 3.5,
	cheese: 2.4,
	meat: 4,
	tomatoes: 1.5,
}

const initialState = {
	ingredients: {
		salad: 0,
		bacon: 0,
		cheese: 0,
		meat: 0,
		tomatoes: 0,
	},
	totalPrice: 4,
	purchaseble: false,
}

const burgerBuilderReducer = (state = initialState, action) => {
	switch(action.type) {



		// ADD INGREDIENT
		case actionTypes.ADD_INGREDIENT:
			// Copy of state
			const addModifiedIngredients = {
				...state.ingredients,
			}

			// Set changed item
			addModifiedIngredients[action.payload.type] = addModifiedIngredients[action.payload.type] + 1;

			// Get selected ingredients count
			const addIngredientsCount = Object.values(addModifiedIngredients).reduce((sum, el) => {
				return sum + el;
			});

			return {
				...state,
				ingredients: addModifiedIngredients,
				totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload.type],
				purchaseble: addIngredientsCount > 0,
			}




		// REMOVE INGREDIENT
		case actionTypes.REMOVE_INGREDIENT:
			// Copy of state
			const removeModifiedIngredients = {
				...state.ingredients,
			}

			// Set changed item
			if(removeModifiedIngredients[action.payload.type] > 0) {
				removeModifiedIngredients[action.payload.type] = removeModifiedIngredients[action.payload.type] - 1;
			}

			// Get selected ingredients count
			const removeIngredientsCount = Object.values(removeModifiedIngredients).reduce((sum, el) => {
				return sum + el;
			});

			return {
				...state,
				ingredients: removeModifiedIngredients,
				totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload.type],
				purchaseble: removeIngredientsCount > 0,
			}

	}
	return state;
}

export default burgerBuilderReducer;