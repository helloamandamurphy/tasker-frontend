// React + Dependencies
import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
  }

  heartThis = () => {
    this.setState(state => {
      return {liked: !state.liked}
    })
  }

  render() {
    return (
      <button class="ui button" onClick={this.heartThis} style={{color: this.state.liked ? "red" : "gray"}}>❤︎</button>
    )
  }
}

export default Counter
