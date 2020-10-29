import React, { Component, Fragment } from 'react';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';
import gsap from 'gsap';

import styles from './TransitionTest.module.scss';

class TransitionTest extends Component {
	constructor(props) {
		super(props);
		this.animation = null;
		this.figure = null;
		this.button = null;
	}

	state = {

		// GSAP animation
		showElement: false,
		animationProgress: false,

		// CSS classes animation
		showCssElement: false,
		cssAnimationProgress: false,


		// TransitonGroup List
		itemsList: [],
	}

	componentDidMount() {
		this.animation = gsap.timeline();
	}


	addItemHandler = () => {
		this.setState({
			itemsList: [].concat( this.state.itemsList, {
				id: new Date().getTime(),
				name: this.state.itemsList.length + 1,
			}),
		});

	}


	removeItemHandler = (id) => {
		const removeItemsListCopy = this.state.itemsList.filter(item => item.id !== id);

		this.setState({
			itemsList: removeItemsListCopy
		});

	}


	render() {


		// presets
		const animationTime = 1;

		const items = this.state.itemsList.map((item, index) => {

			return(
				<CSSTransition 
					key={item.id}
					timeout={animationTime * 1000}
					mountOnEnter={true}
					unmountOnExit={true}
					classNames={{
						appear: styles.fade__appear,
						appearActive: styles.fade__active_appear,
						appearDone: styles.fade__done_appear,
						enter: styles.fade__enter,
						enterActive: styles.fade__active_enter,
						enterDone: styles.fade__done_enter,
						exit: styles.fade__exit,
						exitActive: styles.fade__active_exit,
						exitDone: styles.fade__done_exit,
					}}
				>
					<li onClick={() => this.removeItemHandler(item.id)}>{item.id}</li>
				</CSSTransition>
			);
		});






		return (

			<Fragment>
				
				{/* Анимация с помощью GSAP */}
				<div className={styles.transition__wrapper}>

					<h2 className={styles.transition__wrapper_title}>GSAP Animation</h2>

					<div className={styles.transition__wrapper_top}>
						<button 
							className={['btn', this.state.animationProgress ? styles.disabled : null].join(' ')} 
							onClick={() => this.setState((prevState) => ({ showElement: !prevState.showElement }))}
							ref={button => {this.button = button}}
						>Toggle Figure</button>
					</div>
					<div className={styles.transition__wrapper_bottom}>
						<Transition 
							in={this.state.showElement} 
							timeout={animationTime * 1000}
							mountOnEnter={true}
							unmountOnExit={true}

							// START ENTER
							onEnter={() => {
								console.log('START ENTER');
								this.setState((prevState) => ({ animationProgress: !prevState.animationProgress }));
								// Не забываем убрать transition в css
								this.animation
								.set(this.button, {className: `+=${styles.disabled}`})
								.fromTo(this.figure, {opacity: 0}, {opacity: 1, duration: animationTime, onComplete: () => {
									this.setState((prevState) => ({ animationProgress: !prevState.animationProgress }));
								}});
							}}

							// PROGRESS ENTERING
							onEntering={() => {
								console.log('PROGRESS ENTERING');
							}}

							// ENTERED
							onEntered={() => {
								console.log('ENTERED');
							}}

							// START EXIT
							onExit={() => {
								console.log('START EXIT');

								this.setState((prevState) => ({ animationProgress: !prevState.animationProgress }));

								this.animation.to(this.figure, {opacity: 0, duration: animationTime, onComplete: () => {
									this.setState((prevState) => ({ animationProgress: !prevState.animationProgress }));
								}});
							}}

							// PROGRESS EXITING
							onExiting={() => {
								console.log('PROGRESS EXITING');
							}}

							// EXITED
							onExited={() => {
								console.log('EXITED');
							}}
						>
							{(state) => {
									return (<div 
														className={styles.figure}
														ref={figure => {this.figure = figure}}
													>{state}</div>)
								
							}}
						</Transition>
					</div>
				</div>






				{/* Анимация с помощью переключения CSS классов */}
				<div className={styles.transition__wrapper}>

					<h2 className={styles.transition__wrapper_title}>CSS Classes Animation</h2>

					<div className={styles.transition__wrapper_top}>
						<button 
							className={['btn', this.state.cssAnimationProgress ? styles.disabled : null].join(' ')} 
							onClick={() => this.setState((prevState) => ({ showCssElement: !prevState.showCssElement }))}
						>Toggle Figure</button>
					</div>
					<div className={styles.transition__wrapper_bottom}>
						<CSSTransition 
							in={this.state.showCssElement}
							timeout={animationTime * 1000}
							mountOnEnter={true}
							unmountOnExit={true}
							classNames={{
								appear: styles.fade__appear,
								appearActive: styles.fade__active_appear,
								appearDone: styles.fade__done_appear,
								enter: styles.fade__enter,
								enterActive: styles.fade__active_enter,
								enterDone: styles.fade__done_enter,
								exit: styles.fade__exit,
								exitActive: styles.fade__active_exit,
								exitDone: styles.fade__done_exit,
							}}
							onEnter={() => {
								console.log('CSS START ENTER');
								this.setState((prevState) => ({ cssAnimationProgress: !prevState.cssAnimationProgress }));
							}}

							onEntered={() => {
								this.setState((prevState) => ({ cssAnimationProgress: !prevState.cssAnimationProgress }));
							}}

							onExit={() => {
								console.log('START CSS EXIT');
								this.setState((prevState) => ({ cssAnimationProgress: !prevState.cssAnimationProgress }));
							}}

							onExited={() => {
								this.setState((prevState) => ({ cssAnimationProgress: !prevState.cssAnimationProgress }));
							}}
						>
						<div className={styles.figure}></div>
						</CSSTransition>
					</div>
				</div>








			{/* Анимация списка с помощью TransitionGroup */}

				<div className={styles.transition__wrapper}>

					<h2 className={styles.transition__wrapper_title}>TransitionGroup List Animation</h2>

					<div className={styles.transition__wrapper_top}>
						<button 
							className='btn' 
							onClick={this.addItemHandler}
						>Add Item</button>
					</div>
					<div className={styles.transition__wrapper_bottom}>
						<TransitionGroup component='ul' className={styles.transition__list}>
							{items}
						</TransitionGroup>
					</div>
				</div>

			</Fragment>
		);
	}
	
}

export default TransitionTest;