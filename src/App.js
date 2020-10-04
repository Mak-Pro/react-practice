import React, { Component } from 'react';

import Persons from './containers/Persons';



class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		
	}

	render() {

		return (
			<div className="content__container">
				<Persons />
			</div>
	  );
	}
  
}

export default App;
