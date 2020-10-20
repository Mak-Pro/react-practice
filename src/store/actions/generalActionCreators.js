import * as actionTypes from './actionTypes.js';

const { SHOW_MODAL, SENDING_PROCESS } = actionTypes;

export const showModal = () => {
	return (dispatch) => {
		dispatch({
			type: SHOW_MODAL,
		});
	}
}


export const sendingProcess = () => {
	return (dispatch) => {
		dispatch({
			type: SENDING_PROCESS,
		});
	}
}