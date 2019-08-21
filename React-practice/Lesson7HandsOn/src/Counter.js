import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'Increment' });
  };

  incrementBy5 = () => {
    this.props.dispatch({ type: 'UpBy5' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'Decrement' });
  };

  decrementBy10 = () => {
    this.props.dispatch({ type: 'DowyBy10' });
  };

  reset = () => {
    this.props.dispatch({ type: 'Reset' });
  };

  render() {
    return (
      <div>
        <h1>-- Lesson 7 HandsOn Counter --</h1>
        <div>
        <span><h2>{this.props.count}</h2></span>
          <button onClick={this.decrementBy10}>Sub(-10)</button>
          <button onClick={this.decrement}>Sub(-1)</button>
          
          
          <button onClick={this.increment}>Add(1)</button>
          
          <button onClick={this.incrementBy5}>Add(5)</button>
          <br />
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);