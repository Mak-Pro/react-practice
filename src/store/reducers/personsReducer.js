import * as actionTypes from '../../store/actions.js'; 

const initialState = {
	persons: [],
}

const personsReducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.ADD_PERSON: 
			const newPerson = {
				id: Math.random(),
				name: action.payload.name,
				age: action.payload.age
			}
			return {
				...state,
				persons: state.persons.concat(newPerson),
			}

		case actionTypes.DELETE_PERSON: 
			return {
				...state,
				persons: state.persons.filter(person => person.id !== action.payload.personId)
			}
	}
	return state;
}

export default personsReducer;