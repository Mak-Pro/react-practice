import React from 'react';

const ValidationComponent = (props) => {

	const { textlength } = props;

	const outputText = textlength >= 5 ? 'Text long enough' : 'Text too short';

	return (
		<p>{outputText}</p>
	);
}

export default ValidationComponent;