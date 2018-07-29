import React, { Component } from 'react';
import FlagTrivia from './FlagTrivia';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: false,
      isShowing: false,
      isMatch: false
    };
  }

  cardClicked = () => {

  }

  render() {
    return (
      <div className="Card" onClick={}>
        <img src="" alt=""/>
        <img src="" alt=""/>
      </div>
    );
  }
}

export default Card;