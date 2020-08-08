import React, { Component, Fragment } from 'react';


import Persons from './components/Persons/Persons.js';


class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		persons: [
			{id: 'person1', name: 'Etienne Gruyez', position: 'Stoelzle Masnières Parfumerie SAS', imgUrl: 'person-1'},
			{id: 'person2', name: 'Andrea Gherzi', position: 'Global Sales Director Spirits', imgUrl: 'person-2'},
			{id: 'person3', name: 'Andreas Herzog', position: 'Decoration Manager Stoelzle Glass Group', imgUrl: 'person-3'}
		],
		showAppTitle: true,
	}

	changePersonNameHandler = (e, id) => {
		const personIndex = this.state.persons.findIndex(person => person.id == id);
		const newPersons = [
			...this.state.persons
		];
		newPersons[personIndex].name = e.target.value;
		this.setState({
			persons: newPersons
		});
	}

	deletePersonHandler =(id) => {
		const personsCopy = [...this.state.persons];
		const filteredPersons = personsCopy.filter(person => person.id !== id);
		this.setState({
			persons: filteredPersons
		});
	}

	toggleAppTitleHandler = () => {
		this.setState({
			showAppTitle: !this.state.showAppTitle
		});
	}

	render() {

		return (
			<Fragment>
				<div className="header__container">
					{this.state.showAppTitle ? <h1 className="app__title">{this.props.apptitle}</h1> : null}
					<button onClick={this.toggleAppTitleHandler}>{this.state.showAppTitle ? 'Hide Title' : 'Show Title'}</button>
				</div>

				<div className="content__container">
					<Persons 
						persons={this.state.persons}
						changeName={this.changePersonNameHandler}
						deletePerson={this.deletePersonHandler}
					/>
				</div>
			</Fragment>
	  );
	}
  
}

export default App;
