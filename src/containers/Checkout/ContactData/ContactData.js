import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './ContactData.module.scss';

import burgerAxiosInstance from '../../../axiosInstances.js';

class ContactData extends Component {

	state ={
		customer: {
			name: 'MakPro',
			address: {
				country: 'Ukraine',
				town: 'Nikolaev',
				street: 'Central Street 1',
				zipCode: '54000',
			},
			email: 'test@test.com',
		}
	}


	orderHandler = (e) => {
		e.preventDefault();

		// запускаем preloader
		this.props.process(e);

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice,
			customer: {
				name: 'MakPro',
				address: {
					country: 'Ukraine',
					town: 'Nikolaev',
					street: 'Central Street 1',
					zipCode: '54000',
				},
				email: 'test@test.com',
			}
		}

		burgerAxiosInstance.post('/orders.json', order)
											 .then(response => {
											 		this.props.process(e);
											 		this.props.history.push('/');
											 })
											 .catch(error => {
											 		this.props.process(e);
											 		this.props.history.push('/');
											 });
	}

	render() {

		return (
			<div className={classes.contact__data}>
				<form action="">
					<input type="text" placeholder='Name' />
					<input type="text" placeholder='Email' />
					<input type="text" placeholder='Country' />
					<input type="text" placeholder='Town' />
					<input type="text" placeholder='Street' />
					<input type="text" placeholder='ZipCode' />
					<hr />
					<div className={classes.submit__wrapper}>
						<button className='btn' type='submit' onClick={this.orderHandler}>ORDER</button>
					</div>
				</form>
			</div>
		);
	}

	
}

export default withRouter(ContactData);