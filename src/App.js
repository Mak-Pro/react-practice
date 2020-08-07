import React, { Component } from 'react';


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
		]
	}

	changePersonNameHandler = (e, id) => {
		// Получаем позицию изменяемого элемента
		const personIndex = this.state.persons.findIndex(person => person.id == id);


		// Создаем копию массива для иммутабельности
		const newPersons = [
			...this.state.persons
		];

		// заменяем поле name в элементе, позиция которго равна personIndex 
		newPersons[personIndex].name = e.target.value;


		// меняем массив элементов
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

	render() {

		return (
			<div className="content__container">
				<Persons 
					persons={this.state.persons}
					changeName={this.changePersonNameHandler}
					deletePerson={this.deletePersonHandler}
				/>
			</div>
	  );
	}
  
}

export default App;
