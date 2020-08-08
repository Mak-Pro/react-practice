import React, { Component } from 'react';

import classes from './Persons.module.scss';

import Person from './Person/Person.js';

class Persons extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');

		/*
			При изменении в App.js (в частности скрываем или показываем apptitle), 
			делаем сравнение существующего массива persons c массивом persons, который приходит из nextProps
			И если изменений не было, то не обновляем компонент Persons, а если было - обновляем.
			Это ускоряет приложение очень сильно!
		*/

		if(this.props.persons === nextProps.persons) {
			console.log('Persons not changed...');
			return false;
		}
		else {
			console.log('Persons was changed...');
			return true;
		}
		
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
	}

	render() {
		console.log('[Persons.js] render');
		const { persons, changeName, deletePerson } = this.props;

		const personsList = persons.map((person, index) => {
			return <Person 
							key={person.id}
							id={person.id}
							image={person.imgUrl}
							name={person.name}
							position={person.position}
							image={person.imgUrl}
							changename={changeName}
							deleteperson={deletePerson}
						/>
		});

		return (
			<div className={classes.persons}>
				{personsList}
			</div>
		);
	}
	
}

export default Persons;