import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionTypes from '../store/actions.js';

class Persons extends Component {

  personDeletedHandler = (personId) => {
    this.setState( ( prevState ) => {
      return { persons: prevState.persons.filter(person => person.id !== personId)}
    } );
  }

  render () {
    const { persons, addPersonHandler, deletePersonHandler } = this.props;

    return (
      <div>
      <AddPerson personAdded={addPersonHandler} />
      {persons.map(person => (
        <Person 
        key={person.id}
        name={person.name} 
        age={person.age} 
        clicked={() => deletePersonHandler(person.id)}/>
        ))}
      </div>
      );
  }
}


const mapStateToProps = (state) => {
  return {
    persons: state.personsReducer.persons,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPersonHandler: () => dispatch({type: actionTypes.ADD_PERSON}),
    deletePersonHandler: (id) => dispatch({type: actionTypes.DELETE_PERSON, payload: {personId: id}}),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Persons);