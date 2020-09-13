import React, { Component, Fragment } from 'react';


//IMPORT ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 

import AllPosts from './components/AllPosts/AllPosts.js';
import PostFullInfo from './components/PostFullInfo/PostFullInfo.js';
import AddNewPost from './components/AddNewPost/AddNewPost.js';
import NotFound from './components/NotFound/NotFound.js';

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
			this.setState({ 
				selectedPost: null,
			});

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
			<BrowserRouter basename='/'>
				<Fragment>
					<Header />
					<div className="content__container">
						<Switch>
						<Route path='/' exact render={() => <h1>HOME PAGE</h1>}/>
						<Route path='/posts' exact render={ (routeProps) => <AllPosts 
							routeProps={routeProps}
							selectPost={(id) => this.selectedPostHandler(id)}
						/> }/>
						<Route path='/new-post' exact render={ (routeProps) => <AddNewPost routeProps={routeProps}/> }/>
						<Route path='/posts/:id' exact render={() => <PostFullInfo 
							selectedPost={this.state.selectedPost} deletePost={(id) => {this.deletePostHandler(id)}}
						/>}/>
						<Route render={() => <NotFound />} />
						</Switch>
					</div>
				</Fragment>
			</BrowserRouter>
	  );
	}
  
}

export default App;
