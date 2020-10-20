import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import Burger from './Burger/Burger.js';
import BurgerControls from '../../components/BurgerControls/BurgerControls.js';
import OrderSummary from './OrderSummary/OrderSummary.js';
import Modal from '../../components/Modal/Modal.js';

import Preloader from '../../components/Preloader/Preloader.js';


//Redux
import { connect } from 'react-redux';

import { initIngredients, addIngredient, removeIngredient, showModal } from '../../store/actions/index.js';

class BurgerBuilder extends Component {


	componentDidMount() {
		this.props.initIngredientsHandler();
	}


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
  	initIngredientsHandler: () => dispatch(initIngredients()),
    addIngredientHandler: (type) => dispatch(addIngredient(type)),
    removeIngredientHandler: (type) => dispatch(removeIngredient(type)),
    showModalHandler: () => dispatch(showModal()),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder));