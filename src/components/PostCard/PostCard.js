import React from 'react';

import classes from './PostCard.module.scss';

const PostCard = (props) => {

	const { id, autor='post autor', title='post title' } = props;

	return (
		<div className={classes.post__card}>
			<h2 className={classes.post__card_autor}>{autor}</h2>
			<h3 className={classes.post__card_title}>{title}</h3>
		</div>
	);
}

export default PostCard;