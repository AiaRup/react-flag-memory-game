import React, { Component } from 'react';
import Board from './Board';
import Timer from './Timer';
import Controls from './Controls';
import listCountries from '../countries.js';
import _ from 'lodash';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      cardsArray: [],
      numCardToCheck: 0,
      askQuiz: true
    };
  }

  FirstCard = true;
  prevCard = '';
  currentCard = '';
  Correct_Card = 0;

  createCardsArray = () => {
    const tempArray = _.shuffle(listCountries);
    let cardsArray = [];
    for (let i = 0; i < this.props.cardsNum / 2; i++) {
      cardsArray.push(tempArray[i]);
      let clone = _.clone(tempArray[i], true);
      cardsArray.push(clone);
    }
    return _.shuffle(_.map(cardsArray, obj => ({ ...obj, isMatch: false })));
  }

  endGame = () => {
    setTimeout(() => {
      alert('Congratulations');
    }, 1000);
  }

  solve = () => {
    this.state.cardsArray.forEach(card => {
      card.isMatch = true;
    });
    //timer stop
    this.setState(this.state);
  }

  newGame = () => {
    //timer stop

    this.setState({
      cardsArray: this.createCardsArray(),
      askQuiz: true,
      numCardToCheck: 0,
      });
      this.FirstCard = true;
      this.Correct_Card = 0;
  }

  // handleClick
  turnCard = (obj) => {
    let tempArr = this.state.cardsArray.map((card, index) => {
      if (index === obj.index) {
        card.isMatch = true;
        return card;
      }
      return card;
    });
    this.setState(prevState => ({
      cardsArray: tempArr,
      numCardToCheck: prevState.numCardToCheck + 1
    }));
    // this.state.cardsArray[obj.index].isMatch = true;
    // this.state.numCardToCheck = this.state.numCardToCheck + 1;
    // this.setState(this.state);
    // check if the card is a first card
    if (this.FirstCard) {
      this.prevCard = obj;
      this.FirstCard = false;
      this.setState({ askQuiz: false });
    }
    // second card
    else {
      this.currentCard = obj;
      this.FirstCard = true;
      // no match!
      if (this.prevCard.name !== this.currentCard.name) {
        setTimeout(() => {
          let tempArr = this.state.cardsArray.map((card, index) => {
            if (index === this.prevCard.index || index === this.currentCard.index) {
              card.isMatch = false;
              return card;
            }
            return card;
          });
          this.setState({
            cardsArray: tempArr,
            numCardToCheck: 0,
            askQuiz: true
          });
          // this.state.cardsArray[this.prevCard.index].isMatch = false;
          // this.state.cardsArray[this.currentCard.index].isMatch = false;
          // this.state.numCardToCheck = 0;
          // this.setState(this.state);
        }, 2000);
      }
      // match!
      else {
        this.setState({
          numCardToCheck: 0,
          askQuiz: true
         });
        this.Correct_Card++;

        // check if it the end of the game!
        if (this.Correct_Card === this.state.cardsArray.length / 2) {
          this.endGame();
        }
      }
    }
  }

  // flip back card after wrong answer
  flippedCardBack = (indexOfCardClicked) => {
    let tempArr = this.state.cardsArray.map((card, index) => {
      if (index === indexOfCardClicked) {
        card.isMatch = false;
        return card;
      }
      return card;
    });
    this.FirstCard = true;
    this.setState({
      cardsArray: tempArr,
      askQuiz: true,
      numCardToCheck: 0 });
  }

  // do not ask quiz when user answer correctly
  // doNotShowQuiz = () => {
  //   this.setState({ askQuiz: false });
  // }

  componentDidMount() {
    this.setState({ cardsArray: this.createCardsArray() });
  }

  render() {
    return (
      <div className="Game">
        <Board
          cardsArray={this.state.cardsArray}
          numCardToCheck={this.state.numCardToCheck}
          turnCard={this.turnCard}
          flippedCardBack={this.flippedCardBack}
          askQuiz={this.state.askQuiz}
          doNotShowQuiz={this.doNotShowQuiz}
        />
        <Timer />
        <br />
        <Controls funSolve={this.solve}
          newGame={this.newGame} />
      </div>
    );
  }
}

export default Game;