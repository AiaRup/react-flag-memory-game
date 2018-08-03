import React from 'react';
import { Button } from 'reactstrap';

const Controls = ({ funSolve, newGame, showSettings }) => {

  // handleSolve = (e) => {
  //   this.props.funSolve();
  // }
  // handleNewGame = (e) => {
  //   this.props.newGame();
  // }
  return (
    <div>
      <Button style={{ width: '120px', backgroundColor: '#89C4F4' }} onClick={funSolve}>Solve</Button>
      <br /> <br />
      <Button style={{ width: '120px', backgroundColor: '#89C4F4' }} onClick={newGame}>New Game</Button>
      <br /> <br />
      <Button style={{ width: '120px', backgroundColor: '#89C4F4' }} onClick={showSettings}><i className="fas fa-cogs"></i></Button>
    </div>
  );
};

export default Controls;