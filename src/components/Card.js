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

  // What happens when a card is clicked
  cardClicked = () => {

  }

  // What happens when a user answer
  onUserAnswer = (property, value) => {
    this.setState({ [property]: value });
  }

  render() {
    return (
      <div className="Card" onClick={this.cardClicked}>
        <img src="" alt=""/>
        <img src="" alt=""/>
        {this.state.isShowing && !this.state.isCorrect && <FlagTrivia name={this.props.name} onUserAnswer={this.onUserAnswer} code={this.props.code}/>}
      </div>
    );
  }
}

export default Card;