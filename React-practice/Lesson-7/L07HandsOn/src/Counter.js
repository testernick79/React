import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  incrementBy5 = () => {
    this.props.dispatch({ type: 'INCREMENTADD5'});
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  reset = () => {
    this.props.dispatch({ type: 'RESET' });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <br />
          <button onClick={this.incrementBy5}>Adding5</button>
          <br />
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { count: state.count };
}

export default connect(mapStateToProps)(Counter);