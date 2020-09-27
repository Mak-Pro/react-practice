import React from 'react';

import classes from './FormField.module.scss';

const FormField = (props) => {

	let element = null;

	switch(props.data.elementType) {
		case 'input':
			element = <input {...props.data.elementConfig} onChange={props.change} value={props.data.value}/>;
			break;
		case 'textarea':
			element = <textarea {...props.data.elementConfig} onChange={props.change} value={props.data.value}></textarea>;
			break;
		case 'select':
			element = <select onChange={props.change} value={props.data.value}>
									{props.data.elementConfig.options.map((option) => {
										return <option key={option.value} value={option.value}>{option.text}</option>
									})}
								</select>;
			break;
		default:
			element = <input {...props.data.elementConfig} onChange={props.change} value={props.data.value}/>;
	}

	return (
		<div className={classes.form__field}>
			{element}
		</div>
	);
}

export default FormField;