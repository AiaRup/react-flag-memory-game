import React, { Component } from 'react';
import AlertTimeUp from './AlertTimeUp';
import { UncontrolledAlert } from 'reactstrap';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: this.props.time };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
      //and then call the solve func from Game component
      this.props.solve();
    }
  }


  render() {
    return (
      <div>
        <br />
        {this.seconds === 0 && <AlertTimeUp />}
        {/* <div className="displayTimer rounded-circle border border-dark mx-auto"> */}
        <div>
          {/* minutes: {this.state.time.m} seconds: {this.state.time.s} */}

          <button style={{ backgroundColor: "#4B77BE", width: "120px", height: "50px" }}>  {this.state.time.m} : {this.state.time.s}</button>
        </div>
      </div>
    );
  }
}

export default Timer;