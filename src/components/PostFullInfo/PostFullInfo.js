import React from 'react';

import classes from './PostFullInfo.module.scss';

const PostFullInfo = (props) => {

	let renderPost = <h3>'Please select a post...'</h3>;

	if(props.selectedPost) {
		const { title, body, id } = props.selectedPost;

		renderPost = (<div className={classes.post__full_info}>
										<h3 className={classes.post__full_info_title}>{title}}</h3>
										<p>{body}</p>
										<hr />
										<button className="btn" onClick={() => {props.deletePost(id)}}>Delete</button>
									</div>);
	}

	return (
		renderPost
	);
}

export default PostFullInfo;