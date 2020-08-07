import React from 'react';

const UserInput = (props) => {

	const { changename, username } = props;

	const styles = {
		marginBottom: '0',
		borderColor: 'rgb(213, 79, 72)',
	}

	return (
		<input type="text" onChange={changename} value={username} style={styles}/>
	); 
}

export default UserInput;