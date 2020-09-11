import React, { Component, Fragment } from 'react';


//IMPORT ROUTER
import { BrowserRouter, Route } from 'react-router-dom';
 

import AllPosts from './components/AllPosts/AllPosts.js';
import PostFullInfo from './components/PostFullInfo/PostFullInfo.js';
import AddNewPost from './components/AddNewPost/AddNewPost.js';

import Header from './components/Header/Header.js';


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
			axios.get(`/posts/${id}`)
				 .then(response => {
				 		this.setState({ 
					 			selectedPost: response.data,
					 	});
				 });
		}
		
	}

	deletePostHandler = (id) => {
		axios.delete(`/posts/${id}`)
				 .then(response => {
				 	console.log(response);
				 });
	}

	render() {

		return (
			<BrowserRouter>
				<Fragment>
					<Header />
					<div className="content__container">
						<Route path='/' exact render={ (routeProps) => <AllPosts 
							routeProps={routeProps}
							selectPost={(id) => this.selectedPostHandler(id)}
						/> }/>
						<Route path='/new-post' exact render={ (routeProps) => <AddNewPost routeProps={routeProps}/> }/>
						{/*<AllPosts 
							selectPost={(id) => this.selectedPostHandler(id)}
						/>*/}
						{/*<PostFullInfo 
							selectedPost={this.state.selectedPost} deletePost={(id) => {this.deletePostHandler(id)}}
						/>
						<AddNewPost />*/}
					</div>
				</Fragment>
			</BrowserRouter>
	  );
	}
  
}

export default App;
