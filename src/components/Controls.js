import React from 'react';
import { Button } from 'reactstrap';

const Controls = ({ funSolve, newGame, showSettings }) => {
  return (
    <div>
      <Button className="controls" onClick={funSolve}>Solve</Button>
      <Button className="controls" onClick={newGame}>New Game</Button>
      <Button className="controls" onClick={showSettings}><i className="fas fa-cogs"></i></Button>
    </div>
  );
};

export default Controls;