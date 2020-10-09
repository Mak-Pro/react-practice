import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import Burger from './Burger/Burger.js';
import BurgerControls from '../../components/BurgerControls/BurgerControls.js';
import OrderSummary from './OrderSummary/OrderSummary.js';
import Modal from '../../components/Modal/Modal.js';

import burgerAxiosInstance from '../../axiosInstances.js';

import Preloader from '../../components/Preloader/Preloader.js';


//Redux
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions.js';


// const INGREDIENT_PRICES = {
// 	salad: 1.2,
// 	bacon: 3.5,
// 	cheese: 2.4,
// 	meat: 4,
// 	tomatoes: 1.5,
// }



class BurgerBuilder extends Component {

	// componentDidMount() {
	// 	burgerAxiosInstance.get('/ingredients.json')
	// 										 .then(response => {
	// 										 	this.setState({
	// 										 		ingredients: response.data,
	// 										 		loaded: true,
	// 										 	});
	// 										 })
	// 										 .catch(error => {
	// 										 	console.log(error);
	// 										 	this.setState({
	// 										 		loaded: true,
	// 										 		error: true,
	// 										 	});
	// 										 });
	// }


	continueOrderHandler = () => {
		this.props.history.push('/checkout');
	}


  render() {

    return (
			<Fragment>
				<Modal 
					show={this.props.showModal}
					cancelOrder={this.props.showModalHandler}
				>
				{this.props.showModal ? <OrderSummary 
						ingredients={this.props.ingredients}
						cancelOrder={this.props.showModalHandler}
						continueOrder={this.continueOrderHandler}
						totalPrice={this.props.totalPrice}
					/> : null}
					<Preloader loaded={!this.props.sendingProcess}/>
				</Modal>
				
				{this.props.contentLoaded && !this.props.error ? 
					<Fragment>
						<Burger ingredients={this.props.ingredients}/>
						<BurgerControls 
							controls={this.props.ingredients}
							addIngredient={this.props.addIngredientHandler}
							removedIngredient={this.props.removeIngredientHandler}
							totalPrice={this.props.totalPrice}
							purchaseble={this.props.purchaseble}
							processOrder={this.props.showModalHandler}
						/>
					</Fragment> : <h2 style={{
					fontSize: '4rem',
					fontWeight: '700',
					textAlign: 'center',
					margin: '0 auto',
					minHeight: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					maxWidth: '80rem'
				}}>{this.props.error ? 'ERROR LOADING DATA...' : 'LOADING...'}</h2>}
				
			</Fragment>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilderReducer.ingredients,
    totalPrice: state.burgerBuilderReducer.totalPrice,
    purchaseble: state.burgerBuilderReducer.purchaseble,
    showModal: state.generalReducer.showModal,
    sendingProcess: state.generalReducer.sendingProcess,
    contentLoaded: state.generalReducer.contentLoaded,
    error: state.generalReducer.error,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addIngredientHandler: (type) => dispatch({type: actionTypes.ADD_INGREDIENT, payload: {type}}),
    removeIngredientHandler: (type) => dispatch({type: actionTypes.REMOVE_INGREDIENT, payload: {type}}),
    showModalHandler: () => dispatch({type: actionTypes.SHOW_MODAL}),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder));