import React from 'react';

import classes from './Modal.module.scss';

const Modal = (props) => {

	const { show, cancelOrder } = props;

	return (
		<div className={[classes.modal__window, show ? classes.show : null].join(' ')}>
			<div className={classes.modal__window_overlay} onClick={cancelOrder}></div>
			<div className={classes.modal__window_content}>{props.children}</div>
		</div>
	);
}

export default Modal;