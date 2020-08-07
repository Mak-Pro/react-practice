import React, { Component } from 'react';



import ValidationComponent from './components/ValidationComponent/ValidationComponent.js';
import CharComponent from './components/CharComponent/CharComponent.js';



class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		inputText: '',
	}

	inputTypeHandler = (e) => {
		this.setState({
			inputText: e.target.value,
		});
	}

	deleteCharHandler = (pos) => {
		const charsArray = this.state.inputText.split('');
		charsArray.splice(pos, 1);
		this.setState({
			inputText: charsArray.join('')
		});
	}

	render() {

		const charsList = this.state.inputText.split('').map((char, index) => {
			return <CharComponent key={index} char={char} deleteChar={() => this.deleteCharHandler(index)}/>;
		});

		return (
			<div className="content__container">
				<input type="text" onChange={(e) => this.inputTypeHandler(e)} value={this.state.inputText}/>
				<p>{this.state.inputLength}</p>
				<hr/>
				<ValidationComponent textlength={this.state.inputLength}/>
				<hr/>
				<div className="chars__list" style={{display: 'flex'}}>
					{charsList}
				</div>
			</div>
	  );
	}
  
}

export default App;
