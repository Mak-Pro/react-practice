import React from 'react';

import classes from './Person.module.scss';

const Person = (props) => {

	const { id, image, name, position, changename, deleteperson } = props;

	return (
		<div className={classes.person}>
			<div className={classes.person__image}>
				<div className={classes.person__image_inner} style={{ backgroundImage: `url(${require(`../../../assets/img/${image}.jpg`)})` }}></div>
			</div>
			<div className={classes.person__info}>
				<h3 className={classes.person__title}>{name}</h3>
				<span className={classes.person__position}>{position}</span>
				<input type="text" placeholder="Change Name..." onChange={(e) => changename(e, id)}/>
				<hr/>
				<button onClick={() => deleteperson(id)}>Delete Person</button>
			</div>
		</div>
	);
}

export default Person;