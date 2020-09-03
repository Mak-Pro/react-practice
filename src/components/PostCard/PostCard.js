import React from 'react';

import classes from './PostCard.module.scss';

const PostCard = (props) => {
	return (
		<div className={classes.post__card}>
			<h2 className={classes.post__card_autor}>PostCard Autor</h2>
			<h3 className={classes.post__card_title}>PostCard Title</h3>
		</div>
	);
}

export default PostCard;