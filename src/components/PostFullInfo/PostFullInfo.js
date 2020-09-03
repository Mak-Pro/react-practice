import React from 'react';

import classes from './PostFullInfo.module.scss';

const PostFullInfo = (props) => {
	return (
		<div className={classes.post__full_info}>
			<h3 className={classes.post__full_info_title}>Post full info title</h3>
			<p>Post full info Text</p>
			<hr />
			<button className="btn">Delete</button>
		</div>
	);
}

export default PostFullInfo;