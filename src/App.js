import React, { Component } from 'react';

import AllPosts from './components/AllPosts/AllPosts.js';
import PostFullInfo from './components/PostFullInfo/PostFullInfo.js';
import AddNewPost from './components/AddNewPost/AddNewPost.js';



class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		
	}

	render() {

		return (
			<div className="content__container">
				<AllPosts />
				<PostFullInfo />
				<AddNewPost />
			</div>
	  );
	}
  
}

export default App;
