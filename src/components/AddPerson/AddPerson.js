import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {

	state = {
		name: '',
		age: '',
	}

	clearDataHandler = () => {
		this.setState({
			name: '',
			age: ''
		});
	}

	render() {

		return (
		    <div className="AddPerson">
		    		<input 
		    			type="text" 
		    			placeholder='Person Name:' 
		    			onChange={(e) => this.setState({name: e.target.value})}
		    			value={this.state.name}
		    		/>
		    		<input 
		    			type="text" 
		    			placeholder='Person Age:' 
		    			onChange={(e) => this.setState({age: e.target.value})}
		    			value={this.state.age}
		    		/>
		    		<hr />
		        <button onClick={() => { 
		        	return (
		        		this.props.personAdded(this.state.name, this.state.age),
		        		this.clearDataHandler()
		        	)
		        }}>Add Person</button>
		    </div>
		);
	}
}

export default AddPerson;