import React, { Component } from 'react';

import Counter from './containers/Counter/Counter.js';


class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		
	}

	render() {

		return (
			<div className="content__container">
				<Counter />
			</div>
	  );
	}
  
}

export default App;
