import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import FormField from '../../components/FormField/FormField.js';
import Preloader from '../../components/Preloader/Preloader.js';

import classes from './Auth.module.scss';

import * as actions from '../../store/actions/index.js';

const { authStart, authSuccess, authFail, authLogout } = actions;

class Auth extends Component {

	state = {
		controls: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'E-Mail Address'
				},
				value: '',
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
			},
		},
		isSignup: true,
	}


	changeHandler = (e, type) => {
		// Создана поверхностная копия
		const transformedControls = {
			...this.state.controls,
		};

		//Создан модифицированный элемент
		const modifiedElement = transformedControls[type];
		modifiedElement.value = e.target.value;

		// Модифицированный элемент вставлен в поверхностную копию
		transformedControls[type] = modifiedElement;

		this.setState({
			controls: transformedControls,
		});

	}


	authHandler = (e) => {
		e.preventDefault();
		this.props.authStartHandler(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
	}

	logoutHandler = (e) => {
		e.preventDefault();
		this.props.logout();
		this.props.history.replace('/');
	}


	switchAuthModeHandler = () => {
		this.setState(prevState => {
			return {
				isSignup: !prevState.isSignup,
			}
		});
	}



	render() {

		const { token, userId, error, loading, authorized } = this.props;

		const formFieldsArray = [];

		for(let key in this.state.controls) {
			formFieldsArray.push({id: key, data: this.state.controls[key]});
		}

		const formFieldsList = formFieldsArray.map((field) => {
			return <FormField key={field.id} data={field.data} change={(e) => this.changeHandler(e, field.id)}/>
		});


		// errorMessage
		let errorMessage = null;

		if(error && !authorized) {
			switch(error.message) {
				case 'EMAIL_EXISTS':
					errorMessage = 'This Email already exists';
					break;
				case 'WEAK_PASSWORD : Password should be at least 6 characters':
					errorMessage = 'WEAK_PASSWORD : Password should be at least 6 characters';
					break;
				case 'INVALID_EMAIL':
					errorMessage = 'Please, enter a valid email address';
					break;
				case 'INVALID_PASSWORD':
					errorMessage = 'Incorrect password';
					break;
				case 'MISSING_EMAIL':
					errorMessage = 'Please, enter a valid email address';
					break;
				case 'MISSING_PASSWORD':
					errorMessage = 'Please, enter a password';
					break;
				case 'EMAIL_NOT_FOUND':
					errorMessage = 'User with this email address not found';
					break;
			}
		}

		

		return(

			<div className={classes.auth}>

				{loading ? <Preloader /> : null}

				<div className={classes.auth__inner}>
					<form action="">
						{formFieldsList}
						<hr />
						<div className={classes.submit__wrapper}>
							{
								authorized ? 
								<button className={classes.logout} type='button' onClick={this.logoutHandler}>Log Out</button> : 
								<button className='btn' type='submit' onClick={this.authHandler}>{this.state.isSignup ? 'Sign Up' : 'Sign In'}</button>
							}
						</div>
					</form>
					<br />
					{!authorized ? <div>
						<div className={classes.auth__note}>{this.state.isSignup ? 'If You allready registered, click' : 'If You are NOT registered, click'} <button onClick={this.switchAuthModeHandler}>HERE</button></div>
						<br/>
						<div className={classes.auth__error}>{errorMessage}</div>
					</div> : null}

					
				</div>
			</div>

		);
	}
}




const mapStateToProps = (state) => {
  return {
  	token: state.authReducer.token,
  	userId: state.authReducer.userId,
    error: state.authReducer.error,
    loading: state.authReducer.loading,
    authorized: state.authReducer.authorized,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
  	authStartHandler: (email, password, isSignup) => dispatch(authStart(email, password, isSignup)),
  	logout: () => dispatch(authLogout()),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth));