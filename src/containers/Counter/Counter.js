import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  state = {
    counter: 0
  }

  render () {
    return (
      <div>
      <CounterOutput value={this.state.counter} />
      <CounterControl label="Increment" clicked={ () => this.setState({counter: this.state.counter + 1})} />
      <CounterControl label="Decrement" clicked={() => this.state.counter > 0 ? this.setState({counter: this.state.counter - 1}) : null}  />
      <CounterControl label="Add 5" clicked={() => this.setState({counter: this.state.counter + 5})}  />
      <CounterControl label="Subtract 5" clicked={() => this.state.counter > 0 ? this.setState({counter: this.state.counter - 5}) : null}  />
      </div>
      );
  }
}



export default Counter;