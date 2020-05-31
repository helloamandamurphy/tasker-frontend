// React + Dependencies
import React from 'react';

//Clock from this Codepen: https://codepen.io/tchx/pen/PBjJqW?editors=0010
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'];

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  static pad(num, digit) {
    let zero = '';
    for (let i = 0; i < digit; ++i) zero += '0';
    return (zero+num).slice(-digit);
  }

  tick() { this.setState({ date: new Date() }); }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let date = this.state.date;
    let h = Clock.pad(date.getHours(), 2);
		let m = Clock.pad(date.getMinutes(), 2);
		// let s = Clock.pad(date.getSeconds(), 2);
    let d = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    return (
      <React.Fragment>
        <div class="ui divider"></div>
        <div>
          <h4 class="ui center aligned header">{d}</h4>
          <h1 class="ui center aligned huge header">{h}:{m}</h1>
        </div>
        <div class="ui divider"></div>
      </React.Fragment>
    );
  }
}

export default Clock
