import React, { Component, Fragment } from 'react';


import UserOutput from './components/UserOutput/UserOutput.js';
import UserInput from './components/UserInput/UserInput.js';





class App extends Component {
	constructor(props) {
		super(props);
	}

	state ={
		username: 'MakPro'
	}


	changeNameHandler = (e) => {
		this.setState({
			username: e.target.value
		});
	}

	render() {

		return (
			<div className="content__container">
				<UserOutput username={this.state.username}/>
				<hr/>
				<UserOutput username="Manu"/>
				<hr/>
				<UserOutput username="Diana"/>
				<hr/>
				<hr/>
				<UserInput 
					changename={this.changeNameHandler}
					username={this.state.username}
				/>
			</div>
	  );
	}
  
}

export default App;
