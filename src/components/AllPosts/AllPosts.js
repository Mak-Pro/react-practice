import React, { Component, Fragment } from 'react';

import classes from './AllPosts.module.scss';

import PostCard from '../../components/PostCard/PostCard.js';

import Preloader from '../../components/Preloader/Preloader.js';

import axios from 'axios';

class AllPosts extends Component {

	constructor(props) {
		super(props);
	}

	state = {
		posts: [],
		loaded: false,
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
				 .then(response => {

				 	const fetchedPosts = response.data.splice(0, 3);
				 	const updatedPosts = fetchedPosts.map(post => {
				 		return {
				 			...post,
				 			autor: 'Mak-Pro'
				 		}
				 	});

				 	this.setState({ 
				 			posts: updatedPosts,
				 			loaded: true
				 	});
				 });
	}


	render() {

		const loadedPosts = this.state.posts.map(post => {
			return <PostCard 
								key={post.id}
								id={post.id}
								title={post.title}
								text={post.body}
								autor='Mak-Pro'
								selectPost={() => this.props.selectPost(post.id)}
						 />
		});

		return (
			<div className={classes.all__posts}>
				<Fragment>
					<Preloader loaded={this.state.loaded}/>
					{loadedPosts}
				</Fragment>
			</div>
		);
	}
	
}

export default AllPosts;