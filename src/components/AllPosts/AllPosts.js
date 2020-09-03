import React from 'react';

import classes from './AllPosts.module.scss';

import PostCard from '../../components/PostCard/PostCard.js';

const AllPosts = (props) => {
	return (
		<div className={classes.all__posts}>
			<PostCard />
			<PostCard />
			<PostCard />
		</div>
	);
}

export default AllPosts;