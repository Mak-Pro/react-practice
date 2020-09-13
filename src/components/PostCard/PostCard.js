import React from 'react';

import classes from './PostCard.module.scss';


//GET ROUTE PROPS
import { withRouter } from 'react-router-dom';


const PostCard = (props) => {

	const { id, autor='post autor', title='post title', selectPost } = props;

	return (
		<div className={classes.post__card} onClick={selectPost}>
			<h2 className={classes.post__card_autor}>{autor}</h2>
			<h3 className={classes.post__card_title}>{title}</h3>
		</div>
	);
}

export default withRouter(PostCard); // Wrap for get Route props to