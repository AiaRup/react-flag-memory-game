import React, { Component } from 'react';
import FlagTrivia from './FlagTrivia';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: this.props.isCorrect,
      showModal: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.isCorrect !== prevProps.isCorrect) {
      this.setState({ isCorrect: this.props.isCorrect });
      // if the modal is open and the time is up- close modal
      if (this.state.showModal) {
        this.setState({ showModal: false });
      }
    }
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
      <div className="Card col-3" onClick={this.cardClicked}>
        <img className="ImgCard" src={this.props.isMatch ? `https://www.countryflags.io/${this.props.code}/shiny/64.png` : 'Images/back.png'} alt="" />
        <FlagTrivia onUserAnswer={this.onUserAnswer} showModal={this.state.showModal} {...this.props} />
      </div>
    );
  }
}

export default Card;
