import React, { Component } from 'react';
import { Button } from 'reactstrap';

class UserSelections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 300,
      settingsUpdate: false,
      numberOfCards: 2
    };
  }

  changeLayout = (e) => {
    let cardsLayout = e.target.id;
    this.setState({ numberOfCards: cardsLayout });
  }

  setTimer = (e) => {
    let SelectedMinutes = e.target.id;
    this.setState({ time: SelectedMinutes });
  }

  render() {
    return (
      <div className="user-page">
        <div className="title-section">
          <div className="gameTitle">
            <h1 className="matchTheFlag" style={{ margin: '100px 0 30px 100px' }}>Match</h1>
            <h1 className="matchTheFlag" style={{ margin: '0 0 30px 250px' }}>The</h1>
            <h1 className="matchTheFlag" style={{ margin: '0 0 30px 300px' }}>Flag</h1>
            <h2>Trivia and Memory Game</h2>
          </div>
        </div>
        <div className="userSettings">
          <div className="selectLayout" >
            <h5>Select Cards Layout</h5>
            <Button className="options-buttons" id="8" onClick={this.changeLayout} color="success">2 X 4</Button>
            <Button className="options-buttons" id="12" onClick={this.changeLayout} color="success">3 X 4</Button>
            <Button className="options-buttons" id="16" onClick={this.changeLayout} color="success">4 X 4</Button>
            <Button className="options-buttons" id="20" onClick={this.changeLayout} color="success">5 X 4</Button>
          </div>
          <div className="selectTime">
            <h5>Set Timer</h5>
            <Button className="options-buttons" id="300" onClick={this.setTimer} color="danger">5 min</Button>
            <Button className="options-buttons" id="600" onClick={this.setTimer} color="danger">10 min</Button>
            <Button className="options-buttons" id="900" onClick={this.setTimer} color="danger">15 min</Button>
          </div>
          <div className="playButtonBox">
            <Button color="warning" className="playButton" onClick={() => { this.props.name(this.state.numberOfCards, this.state.time); }}>
                Play!
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserSelections;