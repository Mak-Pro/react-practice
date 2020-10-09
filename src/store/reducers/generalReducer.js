import * as actionTypes from '../../store/actions.js';

const initialState = {
	showModal: false,
	sendingProcess: false,
	contentLoaded: true,
	error: false,
}

const generalReducer = (state = initialState, action) => {
	switch(action.type) {

		case actionTypes.SHOW_MODAL:
			return {
				...state,
				showModal: !state.showModal,
			}

		case actionTypes.SENDING_PROCESS:
			return {
				...state,
				sendingProcess: !state.sendingProcess,
			}
	}
	
	return state;
}

export default generalReducer;