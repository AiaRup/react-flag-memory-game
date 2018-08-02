import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        {this.props.time}
      </div>
    );
  }
}

export default Timer;