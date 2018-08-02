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

        <Button color="info" style={{ width: "120px" }} onClick={this.handleSolve}> Solve</Button>
        <br /> <br />
        <Button color="info" style={{ width: "120px" }} onClick={this.handleNewGame}> New Game</Button>

      </div>
    );
  }
}

export default Controls;