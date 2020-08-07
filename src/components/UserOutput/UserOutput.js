import React, { Fragment } from 'react';

const UserOutput = (props) => {

	const { username } = props;

	return (
		<Fragment>
			<p>Hi, My name is {username}</p>
			<p>Paragraph text 2</p>
		</Fragment>
	); 
}

export default UserOutput;