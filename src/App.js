import React, { Component } from 'react';

import AllPosts from './components/AllPosts/AllPosts.js';
import PostFullInfo from './components/PostFullInfo/PostFullInfo.js';
import AddNewPost from './components/AddNewPost/AddNewPost.js';

import axios from 'axios';



class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		selectedPost: null,
	}

	selectedPostHandler = (id) => {
		if(id) {
			axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
				 .then(response => {
				 		this.setState({ 
					 			selectedPost: response.data,
					 	});
				 });
		}
		
	}

	deletePostHandler = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
				 .then(response => {
				 	console.log(response);
				 });
	}

	render() {

		return (
			<div className="content__container">
				<AllPosts 
					selectPost={(id) => this.selectedPostHandler(id)}
				/>
				<PostFullInfo 
					selectedPost={this.state.selectedPost} deletePost={(id) => {this.deletePostHandler(id)}}
				/>
				<AddNewPost />
			</div>
	  );
	}
  
}

export default App;
