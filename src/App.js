import React, { Component, Fragment } from 'react';


import Persons from './components/Persons/Persons.js';


/*
	В корне лежит папка Lifecycle Methods Diagram. В ней наглядная диаграмма
	методов жизненнго цикла компонента.
	

*/




class App extends Component {
	constructor(props) {
		super(props);
		// 1. Самым первым выполняется код в constructor
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{id: 'person1', name: 'Etienne Gruyez', position: 'Stoelzle Masnières Parfumerie SAS', imgUrl: 'person-1'},
			{id: 'person2', name: 'Andrea Gherzi', position: 'Global Sales Director Spirits', imgUrl: 'person-2'},
			{id: 'person3', name: 'Andreas Herzog', position: 'Decoration Manager Stoelzle Glass Group', imgUrl: 'person-3'}
		]
	}

	// 2. Вторым выполняется код методе getDerivedStateFromProps (обязан вернуть state)
	//    Этот метод практически никогда не используется.
	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	// 5. Пятым выполнится код в методе componentDidMount
	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}



	/*6. Этот метод выполняется ТОЛЬКО тогда, когда компонент обновляется.
				 При первом рендеринге он не выполняется.
				 Дожен обязательно вернуть true (компонент обновится после изменений)
				 или false (обновление не произойдет)
				 После этого метода выполняется метод render и рендеринг дочерних элементов
	*/
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate | ', 'nextProps - ', nextProps, 'nextSatte - ', nextState);
		return true;
	}



	/*7. Этот метод выполняется после того, как будут отрисованы все дочерние элементы
				 метода render
				 Дожен обязательно вернуть какой-либо код или по умолчанию null
				 Используется крайне редко и только вместе с методом componentDidUpdate
	*/
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[App.js] getSnapshotBeforeUpdate');
		return { message: 'SNAPSHOT!' };
	}



	/*8. Этот метод выполняется после метода getSnapshotBeforeUpdate
			 snapshot берется из getSnapshotBeforeUpdate
	*/
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[App.js] componentDidUpdate | snaphot: ', snapshot);
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

	render() {
		// 3. Третим выполнится код в методе render 
		//    (четвертым выполнится рендеринг дочерних элементов, в частности компонента Persons)
		console.log('[App.js] Render');
		return (
			<Fragment>
				<h1 className="app__title">{this.props.apptitle}</h1>
				<hr/>
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
