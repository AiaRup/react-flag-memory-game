import React, { Component } from 'react';
import FlagTrivia from './FlagTrivia';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: false,
      isShowing: true,
      isMatch: false,
      showModal: false
    };
  }

  // What happens when a card is clicked
  cardClicked = () => {
    // check if the modal is open and if the user already answered correctly
    if (!this.state.showModal && !this.state.isCorrect) {
      this.setState(prevState => ({
        showModal: !prevState.showModal
      }));
    }

  }

  // What happens when a user answer
  onUserAnswer = (property, value) => {
    this.setState(prevState => ({
      [property]: value,
      showModal: !prevState.showModal
    }));
    // this.setState({
    //   [property]: value,
    //   showModal: false
    // });
  }

  render() {
    return (
      <div className="Card" onClick={this.cardClicked}>
        <img src="" alt=""/>
        <img src="" alt=""/>
        hhhhhh
        <FlagTrivia name={this.props.name} onUserAnswer={this.onUserAnswer} code={this.props.code} modalState={this.state.showModal}/>
      </div>
    );
  }
}

export default Card;