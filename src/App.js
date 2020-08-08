import React, { Component } from 'react';






class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		counter: 0,
	}

	incrementCounter = () => {
		/*this.setState({
			counter: this.state.counter + 1,
		});*/
		// Новый вариант setState (более надежный)
		this.setState((prevState, props) => {
			return {
				counter: prevState.counter + 1,
			}
		});
	}

	decrementCounter = () => {
		if(this.state.counter > 0) {
			/*this.setState({
				counter: this.state.counter - 1,
			});*/

			// Новый вариант setState (более надежный)
			this.setState((prevState, props) => {
				return {
					counter: prevState.counter - 1,
				}
			});
		}
		else {
			return null;
		}
	}

	render() {

		return (
			<div className="content__container">
				<div className="counter__actions">
					<button onClick={this.decrementCounter}>-</button>
					<span>{this.state.counter}</span>
					<button onClick={this.incrementCounter}>+</button>
				</div>
			</div>
	  );
	}
  
}

export default App;
