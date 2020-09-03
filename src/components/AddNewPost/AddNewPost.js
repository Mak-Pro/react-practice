import React from 'react';

import classes from './AddNewPost.module.scss';

const AddNewPost = (props) => {
	return (
		<div className={classes.add__new_post}>
			<h2 className={classes.add__new_post_title}>Add Post</h2>
			<div className="field__wrapper">
				<span className="field__wrapper_label">Title</span>
				<input type="text" />
			</div>
			<div className="field__wrapper">
				<span className="field__wrapper_label">Text</span>
				<textarea></textarea>
			</div>
			<div className="field__wrapper">
				<span className="field__wrapper_label">Autor</span>
				<select>
					<option value="MakPro">MakPro</option>
					<option value="Manu">Manu</option>
				</select>
			</div>
			<div className="submit__wrapper">
				<button className="btn">Add Post</button>
			</div>	
		</div>
	);
}

export default AddNewPost;