import React, { Component } from 'react';
import Board from './Board';
import Timer from './Timer';
import Controls from './Controls';

class Game extends Component {
  // variable of totalFlippedCards
  render() {
    return (
      <div className="Game">
        <Board cardsArray={this.props.cardsArray}/>
        <Timer/>
        <Controls/>
      </div>
    );
  }
}

export default Game;