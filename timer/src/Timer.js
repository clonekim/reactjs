import React from 'react';

export default class Timer extends React.Component {

  constructor() {
    super();
    this.state = {
      now: new Date()
    }

    this.timer = this.timer.bind(this);
    this.timer()
  }

  timer() {
    setInterval(() => {
      this.setState({now: new Date()})
    });
  }

  render() {
    return (
        <div>{this.state.now.toLocaleString()}</div>
    );
  }
}
