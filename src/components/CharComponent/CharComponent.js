import React from 'react';

import classes from './CharComponent.module.scss';

const CharComponent = (props) => {

	const { char, deleteChar } = props;

	return (
		<div className={classes.char} onClick={deleteChar}>{char}</div>
	);
}

export default CharComponent;