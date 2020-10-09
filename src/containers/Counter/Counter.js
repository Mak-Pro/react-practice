import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

// import * as actionTypes from '../../store/actions.js';
import { increment, decrement, add, subtract, storeResults, deleteResults } from '../../store/actions/actions.js';

class Counter extends Component {

  render () {

    const { 
      counter,
      results,
      onIncrementCounter, 
      onDecrementCounter, 
      onAddCounter, 
      onSubtractCounter,
      storeResultHandler,
      deleteResultHandler 
    } = this.props;


    const resultsList = results.map((result, index) => {
      return <li key={index} style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#ccc', 
        padding: '10px', 
        minWidth: '50px',
        textAlign: 'center',
        margin: '0 5px 10px',
        cursor: 'pointer',
      }} onClick={() => deleteResultHandler(index)}>{result}</li>
    });

    return (
      <div>
        <CounterOutput value={counter} />
        <CounterControl label="Increment" clicked={onIncrementCounter} />
        <CounterControl label="Decrement" clicked={onDecrementCounter}  />
        <CounterControl label="Add 5" clicked={onAddCounter}  />
        <CounterControl label="Subtract 5" clicked={onSubtractCounter}  />
        <hr />
        <div className='results' style={{textAlign: 'center'}}>
          <button className='btn' onClick={() => storeResultHandler(counter)}>Add to List of Results</button>
        </div>
        <hr />
        <ul style={{display: 'flex', flexWrap: 'wrap'}}>
          {resultsList}
        </ul>
      </div>
      );
  }
}


const mapStateToProps = (state) => {

  return {
    counter: state.counterReducer.counter,
    results: state.resultsReducer.results
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(increment(1)),
    onDecrementCounter: () => dispatch(decrement(1)),
    onAddCounter: () => dispatch(add(5)),
    onSubtractCounter: () => dispatch(subtract(5)),
    storeResultHandler: (counter) => dispatch(storeResults(counter)),
    deleteResultHandler: (index) => dispatch(deleteResults(index)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);