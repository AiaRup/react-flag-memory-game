import React, { Component } from 'react';
import { Button } from 'reactstrap';

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

        <Button style={{ width: "120px", backgroundColor: "#89C4F4" }} onClick={this.handleSolve}> Solve</Button>
        <br /> <br />
        <Button style={{ width: "120px", backgroundColor: "#89C4F4" }} onClick={this.handleNewGame}> New Game</Button>

      </div>
    );
  }
}

export default Controls;