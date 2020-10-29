import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout.js';
import TransitionTest from './components/TransitionTest/TransitionTest.js';
import Navigation from './components/Navigation/Navigation.js';


class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		
	}

	render() {

		return (
			<BrowserRouter basename='/'>
				<Layout>
					<Navigation />
					<Route path='/' exact render={() => <TransitionTest />}/>
				</Layout>
			</BrowserRouter>
	  );
	}
  
}

export default App;
