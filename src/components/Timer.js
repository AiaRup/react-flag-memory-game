import React, { Component } from 'react';
import { Modal, ModalBody, Button, ModalFooter, ModalHeader } from 'reactstrap';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: this.props.time };
    this.timer = 0;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.clickNewGame !== this.props.clickNewGame) {
      if (this.props.clickNewGame) {
        this.startAllOverTimer();
      }
    }
    if (prevProps.clickSolve !== this.props.clickSolve) {
      if (this.props.clickSolve) {
        this.stopTimer();
      }
    }
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      'h': hours,
      'm': minutes,
      's': seconds
    };
    this.props.updateTime(obj)
    return obj;
  }

  componentDidMount = () => {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  startTimer = () => {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  stopTimer = () => {
    clearInterval(this.timer);
  }

  startAllOverTimer = () => {
    clearInterval(this.timer);
    this.timer = 0;
    this.setState({ seconds: this.props.time }, () => {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
      this.startTimer();
    });
  }

  countDown = () => {
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
      setTimeout(() => {
        this.props.solve();
      }, 3000);
    }
  }

  presentClock = () => {
    if (this.state.time.s === 0) {
      return `${this.state.time.m} : 00`;
    }
    else if (this.state.time.s < 10) {
      return `${this.state.time.m} : 0${this.state.time.s}`;
    } else {
      return `${this.state.time.m} : ${this.state.time.s}`;
    }
  }

  render() {
    return (
      <div>
        <div>
          <button style={{ backgroundColor: '#4B77BE', width: '120px', height: '50px' }}><i className="far fa-clock"></i> {this.presentClock()}</button>
        </div>
        <Modal isOpen={this.state.seconds === 0} size="lg" centered>
          <ModalHeader>
            <img src="oops.jpg" style={{ width: '80px', height: '80px' }} alt="" />
          </ModalHeader>
          <ModalBody style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '50px' }}>Time's Up!<span><img src="sandClock.png" style={{ width: '60px', height: '60px', marginLeft: '10px' }} alt="" /></span></p>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.props.newGame}>New Game</Button>{' '}
            <Button color="warning" onClick={this.props.showSettings}><i className="fas fa-cogs"></i></Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Timer;