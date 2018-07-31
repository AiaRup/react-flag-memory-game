import React, { Component } from 'react';
import Timer from './Timer';

class UserSelections extends Component {
  constructor(props) {
    super(props)
    this.state= {
      time: 5,
      settingsUpdate : false,
      numberOfCards: 8
    };
    this.changeLayout = this.changeLayout.bind(this);
  }

  changeLayout (e){
    let cardsLayout = e.target.id;
    this.setState({numberOfCards: cardsLayout})
  }

  setTimer = (e) =>{
    let SelectedMinutes = e.target.id;
    this.setState({time: SelectedMinutes})
  }


  render() {
    return (
      <div>

        <div className="gameTitle">
          <h1>Fun with Flags</h1>
          <h2>Memory Game</h2>
        </div>

        <div className="userSettings">
          <h5>Select Cards Layout</h5>
          <div className ="selectLayout">
              <button id="8" onClick={this.changeLayout}>2 X 4</button>             
              <button id="12" onClick={this.changeLayout}>3 X 4</button>
              <button id="16" onClick={this.changeLayout}>4 X 4</button>
          </div>
        <h5>Set Timer</h5>
        <button id="300" onClick={this.setTimer}>5 minutes</button>
        <button id="600" onClick={this.setTimer}>10 minutes</button>
        <button id="900" onClick={this.setTimer}>15 minutes</button>
        </div>

        <div className ="playButtonBox">
          <button className="playButton" onClick={ () =>{this.props.name(this.state.numberOfCards, this.state.time)}}>
            Play!
          </button>
        </div>

      </div>
    );
  }
}

export default UserSelections;