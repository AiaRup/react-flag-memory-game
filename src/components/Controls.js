import React, { Component } from 'react';

class Controls extends Component {

  handleSolve = (e) => {
    this.props.funSolve();
  }
  handleNewGame = (e) => {
    this.props.newGame();
  }
  render() {
    return (
      <div>
        <button onClick={this.handleSolve}> solve</button>
        <button onClick={this.handleNewGame}> newGame</button>

      </div>
    );
  }
}

export default Controls;