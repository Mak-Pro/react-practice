import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import classes from './PostFullInfo.module.scss';

import Preloader from '../../components/Preloader/Preloader.js';

const PostFullInfo = (props) => {

	let renderPost = null;

	if(props.selectedPost) {
		const { title, body, id } = props.selectedPost;

		renderPost = (<Fragment>
										<h3 className={classes.post__full_info_title}>{title}</h3>
										<p>{body}</p>
										<hr />
										<button className="btn" onClick={() => {props.deletePost(id)}}>Delete</button>
									</Fragment>);
	}

	return (
		<div className={classes.post__full_info}>
			<Link to='/posts' exact className={['btn', classes.back].join(' ')}>Back to Posts List</Link>
			<Preloader loaded={props.selectedPost}/>
			{renderPost}
		</div>
	);
}

export default PostFullInfo;