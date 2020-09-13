import React, { Component } from 'react';

import classes from './AddNewPost.module.scss';

import axios from 'axios';

import { Redirect } from 'react-router-dom';

class AddNewPost extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		title: '',
		body: '',
		autor: 'MakPro',
		postSuccess: false,
	}


	componentDidMount() {
		
	}

	sendPostHandler = () => {

		const data = {
			title: this.state.title,
			body: this.state.body,
			autor: this.state.autor
		}

		axios.post('/posts', data)
				 .then(response => {
				 		// this.props.routeProps.history.push('/posts'); // alternative way to REDIRECT
				 		this.setState({
				 			postSuccess: true
				 		});
				 })
				 .catch(error => {

				 });
	}

	render() {

		return (
			<div className={classes.add__new_post}>
				{this.state.postSuccess ? <Redirect to='/posts' /> : null} {/* REDIRECT */}
				<h2 className={classes.add__new_post_title}>Add Post</h2>
				<div className="field__wrapper">
					<span className="field__wrapper_label">Title</span>
					<input 
						type="text" 
						onChange={(e) => {this.setState({title: e.target.value})}}
						value={this.state.title}
					/>
				</div>
				<div className="field__wrapper">
					<span className="field__wrapper_label">Text</span>
					<textarea 
						onChange={(e) => {this.setState({body: e.target.value})}}
						value={this.state.body}
					></textarea>
				</div>
				<div className="field__wrapper">
					<span className="field__wrapper_label">Autor</span>
					<select 
						onChange={(e) => {this.setState({autor: e.target.value})}}
					>
						<option value="MakPro">MakPro</option>
						<option value="Manu">Manu</option>
					</select>
				</div>
				<div className="submit__wrapper">
					<button className="btn" onClick={this.sendPostHandler}>Add Post</button>
				</div>	
			</div>
		);
	}
	
}

export default AddNewPost;