import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { decrement } from '../actions/counter';
import { increment } from '../actions/counter';
import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  render() {
    const { count } = this.props;

    return (
      <div className="Counter">
        <div>
          <button onClick={this.props.decrement}>-</button>
          <button onClick={this.props.increment}>+</button>
        </div>
        <div>
          Count: {count}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    decrement,
    increment
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
