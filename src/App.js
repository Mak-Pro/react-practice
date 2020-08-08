import React, { Component } from 'react';



class App extends Component {
	constructor(props) {
		super(props);
		// 2) Второй способ - современный
		this.inputElementRef = React.createRef();
	}

	state = {
		pagename: ''
	}

	componentDidMount() {
		// Первый способ - устаревший
		// this.inputElement.focus();

		// 3) Второй способ - современный
		this.inputElementRef.current.focus();
	}

	changeTextHandler = (e) => {
		this.setState({
			pagename: e.target.value
		});
	}

	render() {

		return (
			<div className="content__container">
				<h1>{this.state.pagename}</h1>
				<hr/>

				<input 
					type="text" 
					placeholder="Type the text..." 
					onChange={this.changeTextHandler}

					/* Первый способ - устаревший */
					/* ref={(inputEl) => {this.inputElement = inputEl}} */

					/* 1) Второй способ - современный */
					ref={this.inputElementRef}
				/>
			</div>
	  );
	}
  
}

export default App;
