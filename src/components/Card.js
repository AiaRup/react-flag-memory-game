import React, { Component } from 'react';
import FlagTrivia from './FlagTrivia';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: false,
      showModal: false,
    };
  }

  // What happens when a card is clicked
  cardClicked = () => {
    if (this.props.askQuiz) {
      // check if the modal is open and if the user already answered correctly
      if (!this.state.showModal && !this.state.isCorrect) {
        this.setState(prevState => ({
          showModal: !prevState.showModal
      }));
    }
  }
      if (this.props.numCardToCheck < 2) {
        if (!this.props.isMatch) {
          this.props.turnCard(this.props);
        }
      }
    }

  // What happens when a user answer
  onUserAnswer = (property, value) => {
    this.setState(prevState => ({
      [property]: value,
      showModal: !prevState.showModal
    }));
  }

  render() {
    return (
      <div className="Card" onClick={this.cardClicked}>
        <img className="ImgCard" src={this.props.isMatch ? `https://www.countryflags.io/${this.props.code}/shiny/64.png` : 'black.jpg'} alt="" />
        <FlagTrivia name={this.props.name} onUserAnswer={this.onUserAnswer} code={this.props.code} showModal={this.state.showModal} flippedCardBack={this.props.flippedCardBack} index={this.props.index} doNotShowQuiz={this.props.doNotShowQuiz}/>
      </div>
    );
  }
}

export default Card;
