import axios from 'axios';
import * as actionTypes from './actionTypes.js';

export const authStart = (email, password, isSignup) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.AUTH_START,
			payload: {email, password}
		});
		const authData = {
			email,
			password,
			returnSecureToken: true,
		}
		let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBGgS5Panobr1nseuCD9ty1QIUV4zkJjs';
		if(!isSignup) {
			url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBGgS5Panobr1nseuCD9ty1QIUV4zkJjs';
		}
		axios.post(url, authData)
				 .then(response => {
				 		dispatch(authSuccess(response.data));
				 })
				 .catch(error => {
				 		//console.log(error.response.data.error.message); // only error message
				 		//console.log(error.response); // full object
				 		dispatch(authFail(error.response.data));
				 });
	}
}


export const authSuccess = (authData) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		payload: {authData}
	}
}


export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		payload: {error}
	}
}


export const authLogout = () => {
	return {
		type: actionTypes.AUTH_LOGOUT,
	}
}