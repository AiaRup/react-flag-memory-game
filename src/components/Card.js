import React, { Component } from 'react';
import FlagTrivia from './FlagTrivia';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: false,
      isShowing: false

    };
    // this.cardClicked = this.cardClicked.bind(this);
  }


  // What happens when a card is clicked
  cardClicked = (e) => {
    if (this.props.numCardToCheck < 2) {
      if (!this.props.isMatch) {
        this.props.turnCard(this.props)
      }
    }

  }

  // What happens when a user answer
  onUserAnswer = (property, value) => {
    this.setState({ [property]: value });
  }
  render() {
    console.log(this.props);

    return (
      <div className="Card" onClick={this.cardClicked}>
        <img className="ImgCard" src={this.props.isMatch ? `https://www.countryflags.io/${this.props.code}/shiny/64.png` : "black.jpg"} alt="" />
        {this.state.isShowing && !this.state.isCorrect && <FlagTrivia name={this.props.name} onUserAnswer={this.onUserAnswer} code={this.props.code} />}
      </div>
    );
  }
}

export default Card;
