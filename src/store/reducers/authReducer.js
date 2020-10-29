import * as actionTypes from '../../store/actions/actionTypes.js';

const initialState = {
	token: null,
	userId: null,
	error: null,
	loading: false,
	authorized: false,
}


const authReducer = (state = initialState, action) => {
	switch(action.type) {

		case actionTypes.AUTH_START:
			return {
				...state,
				loading: true,
			}

		case actionTypes.AUTH_SUCCESS:
			return {
				...state,
				token: action.payload.authData.idToken,
				userId: action.payload.authData.localId,
				loading: false,
				authorized: true,
			}

		case actionTypes.AUTH_FAIL:
			return {
				...state,
				error: action.payload.error.error,
				loading: false,
			}

		case actionTypes.AUTH_LOGOUT:
			return {
				...state,
				token: null,
				userId: null,
				loading: false,
				authorized: false,
			}
	}
	
	return state;
}

export default authReducer;