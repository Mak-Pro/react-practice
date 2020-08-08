import React, { Component } from 'react';

// 1.Импортируем модуль
import PropTypes from 'prop-types';


class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		
	}

	render() {

		const { apptitle, appcounter } = this.props;

		return (
			<div className="content__container">
				<h1>{apptitle}</h1>
				<span>{appcounter}</span>
			</div>
	  );
	}
}

/*
	2. Добавляем проверку:

	optionalArray: PropTypes.array,
	optionalBool: PropTypes.bool,
	optionalFunc: PropTypes.func,
	optionalNumber: PropTypes.number,
	optionalObject: PropTypes.object,
	optionalString: PropTypes.string,
	optionalSymbol: PropTypes.symbol,
*/
App.propTypes = {
	apptitle: PropTypes.string,
	appcounter: PropTypes.number
}

export default App;
