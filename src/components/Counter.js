// React + Dependencies
import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <button class="ui button" onClick={this.increment}>{this.state.count}</button>
    )
  }
}

export default Counter
