import React, { Component } from 'react';
import { Button } from 'reactstrap';

class UserSelections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 30,
      settingsUpdate: false,
      numberOfCards: 2
    };
    this.changeLayout = this.changeLayout.bind(this);
  }

  changeLayout(e) {
    let cardsLayout = e.target.id;
    this.setState({ numberOfCards: cardsLayout })
  }

  setTimer = (e) => {
    let SelectedMinutes = e.target.id;
    this.setState({ time: SelectedMinutes })
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-8" >
            <div className="gameTitle">
              <br />
              <br />
              <br />
              <h1>Fun with Flags</h1>
              <h2>Memory Game</h2>
            </div>
            <br />

            <div className="userSettings">
              <h5 className="selectCardTitle">Select Cards Layout</h5>
              <div className="selectLayout" >
                <Button style={{ margin: "5px 5px" }} id="8" onClick={this.changeLayout} color="success">2 X 4</Button>
                <Button style={{ margin: "5px 5px" }} id="12" onClick={this.changeLayout} color="success">3 X 4</Button>
                <Button style={{ margin: "5px 5px" }} id="16" onClick={this.changeLayout} color="success">4 X 4</Button>
                <Button style={{ margin: "5px 5px" }} id="20" onClick={this.changeLayout} color="success">5 X 4</Button>
              </div>
            </div>
            <br />
            <div className="setTimerTitle">
              <h5>Set Timer</h5>
            </div>
            <div className="col-sm">
              <Button style={{ margin: "5px 5px" }} id="300" onClick={this.setTimer} color="danger">5 minutes</Button>
              <Button style={{ margin: "5px 5px" }} id="600" onClick={this.setTimer} color="danger">10 minutes</Button>
              <Button style={{ margin: "5px 5px" }} id="900" onClick={this.setTimer} color="danger">15 minutes</Button>
            </div>
            <br />
            <div className="playButtonBox">
              <Button color="primary" className="playButton" onClick={() => { this.props.name(this.state.numberOfCards, this.state.time) }}>
                Play!
            </Button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default UserSelections;