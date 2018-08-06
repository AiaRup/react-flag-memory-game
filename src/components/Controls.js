import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Controls = ({ funSolve, newGame }) => {
  return (
    <div>
      <Button className="controls" onClick={funSolve}>Solve</Button>
      <Button className="controls" onClick={newGame}>New Game</Button>
      <Link to="/gameSettings" style={{ color: '#fff', textDecoration: 'none' }}>
        <Button className="controls"><i className="fas fa-cogs"></i></Button>
      </Link>
    </div>
  );
};

export default Controls;