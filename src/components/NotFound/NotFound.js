import React from 'react';

import classes from './NotFound.module.scss';

const NotFound = (props) => {
	return (
		<div className={classes.not__found}>
			<span>404</span>
			<span>Not Found</span>
		</div>
	);
}

export default NotFound;