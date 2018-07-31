import React, { Component } from 'react';
import Timer from './Timer';

class UserSelections extends Component {
  constructor(props) {
    super(props)
    this.state= {
      finishSettings : false,
      numberOfCards: 8
    };
    this.changeLayout = this.changeLayout.bind(this);
  }

  changeLayout (){
    let cardsLayout = this.state.numberOfCards; // hold the number of cards in each layout
    return cardsLayout;
  }

  render() {
    return (
      <div>

        <div className="gameTitle">
          <h1>Fun with Flags</h1>
          <h2>Memory Game</h2>
        </div>

        <div className="userSettings">
          <h3>Select Cards Layout</h3>
          <div className ="selectLayout">
              <button id="8">2 X 4</button>             
              <button id="12">3 X 4</button>
              <button id="16">4 X 4</button>
          </div>
          <Timer />
          <button status={this.state.finishSettings}>Finish Game Settings</button>
        </div>

        <div className ="playButtonBox">
          <button className="playButton" onClick={this.props.updateGameSettings}>
            Play!
          </button>
        </div>

      </div>
    );
  }
}

export default UserSelections;