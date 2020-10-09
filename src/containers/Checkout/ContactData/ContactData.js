import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './ContactData.module.scss';

import burgerAxiosInstance from '../../../axiosInstances.js';

import FormField from '../../../components/FormField/FormField.js';


import * as actionTypes from '../../../store/actions.js';
import { connect } from 'react-redux';

class ContactData extends Component {

	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Name'
				},
				value: '',
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'E-Mail'
				},
				value: '',
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country'
				},
				value: '',
			},
			town: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Town'
				},
				value: '',
			},
			street: {
				elementType: 'textarea',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: '',
			},
			zipCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Zip Code'
				},
				value: '',
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					type: '',
					options: [
						{value: 'chipest', text: 'Chipest'},
						{value: 'fastest', text: 'Fastest'}
					]
				},
				value: '',
			},
		}
	}


	changeHandler = (e, type) => {
		// Создана поверхностная копия
		const transformedOrderForm = {
			...this.state.orderForm,
		};

		//Создан модифицированный элемент
		const modifiedElement = transformedOrderForm[type];
		modifiedElement.value = e.target.value;

		// Модифицированный элемент вставлен в поверхностную копию
		transformedOrderForm[type] = modifiedElement;

		this.setState({
			orderForm: transformedOrderForm,
		});

	}


	orderHandler = (e) => {
		e.preventDefault();

		// запускаем preloader
		this.props.process(e);
		this.props.showModalHandler();

		const order = {
			ingredients: this.props.ingredients,
			price: this.props.totalPrice,
			customer: {
				name: '',
				address: {
					country: '',
					town: '',
					street: '',
					zipCode: '',
				},
				email: '',
				deliveryMethod: '',
			}
		}

		for(let identifier in this.state.orderForm) {
			switch(identifier) {
				case 'name': 
					order.customer.name = this.state.orderForm[identifier].value;
					break;
				case 'email': 
					order.customer.email = this.state.orderForm[identifier].value;
					break;
				case 'country': 
					order.customer.address.country = this.state.orderForm[identifier].value;
					break;
				case 'town': 
					order.customer.address.town = this.state.orderForm[identifier].value;
					break;
				case 'street': 
					order.customer.address.street = this.state.orderForm[identifier].value;
					break;
				case 'zipCode': 
					order.customer.address.zipCode = this.state.orderForm[identifier].value;
					break;
				case 'deliveryMethod': 
					order.customer.deliveryMethod = this.state.orderForm[identifier].value;
					break;

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

		const formFieldsArray = [];

		for(let key in this.state.orderForm) {
			formFieldsArray.push({id: key, data: this.state.orderForm[key]});
		}

		const formFieldsList = formFieldsArray.map((field) => {
			return <FormField key={field.id} data={field.data} change={(e) => this.changeHandler(e, field.id)}/>
		});

		return (
			<div className={classes.contact__data}>
				<form action="">
					{formFieldsList}
					<hr />
					<div className={classes.submit__wrapper}>
						<button className='btn' type='submit' onClick={this.orderHandler}>ORDER</button>
					</div>
				</form>
			{/* Найти плагин типа FORMIK для валидации, изучить и внедрить */}
			</div>
		);
	}

	
}



const mapStateToProps = (state) => {
  return {
    showModal: state.generalReducer.showModal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showModalHandler: () => dispatch({type: actionTypes.SHOW_MODAL}),
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData));