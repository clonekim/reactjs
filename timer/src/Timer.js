import React from 'react';

export default class Timer extends React.Component {

  constructor() {
    super();
    this.state = {
      now: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({now: new Date()})
  }

  render() {
    return (
        <div>{this.state.now.toLocaleString()}</div>
    );
  }
}
