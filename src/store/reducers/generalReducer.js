import * as actionTypes from '../../store/actions/actionTypes.js';


const { 
	INIT_INGREDIENTS, 
	FETCH_INGREDIENTS_FAILED, 
	SHOW_MODAL, 
	SENDING_PROCESS,
} = actionTypes;

const initialState = {
	showModal: false,
	sendingProcess: false,
	contentLoaded: false,
	error: false,
}

const generalReducer = (state = initialState, action) => {
	switch(action.type) {

		case INIT_INGREDIENTS:
			return {
				...state,
				contentLoaded: true,
				error: false,
			}

		case FETCH_INGREDIENTS_FAILED:
			return {
				...state,
				error: true,
			}

		case SHOW_MODAL:
			return {
				...state,
				showModal: !state.showModal,
			}

		case SENDING_PROCESS:
			return {
				...state,
				sendingProcess: !state.sendingProcess,
			}
	}
	
	return state;
}

export default generalReducer;