import React from 'react';

import classes from './Persons.module.scss';

import Person from './Person/Person.js';

const Persons = (props) => {

	const { persons, changeName, deletePerson } = props;

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

export default Persons;