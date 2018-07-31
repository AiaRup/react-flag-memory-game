import React, { Component } from 'react';
import Board from './Board';
import Timer from './Timer';
import Controls from './Controls';
import listCountries from '../countries.js';
import _ from 'lodash';

class Game extends Component {
  constructor() {
    super()
    this.state = {
      cardsArray: [],
      numCardToCheck: 0
    }
  }

  FirstCard = true;
  prevCard = "";
  currentCard = "";
  Correct_Card = 0;
  createCardsArray = () => {
    console.log("meir");
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
      alert("Congratulations")
    }, 1000)
  }

  solve = () => {
    this.state.cardsArray.forEach(card => {
      card.isMatch = true;
    });
    //timer stop
    this.setState(this.state)
  }
  newGame = () => {
    //timer stop

    this.setState({ cardsArray: this.createCardsArray() })
  }
  // handleClick
  turnCard = (obj) => {
    this.state.cardsArray[obj.index].isMatch = true;
    this.state.numCardToCheck = this.state.numCardToCheck + 1;
    this.setState(this.state)
    if (this.FirstCard) {
      this.prevCard = obj;
      this.FirstCard = false
    }
    else {
      this.currentCard = obj;
      this.FirstCard = true;
      if (this.prevCard.name != this.currentCard.name) {
        setTimeout(() => {
          this.state.cardsArray[this.prevCard.index].isMatch = false;
          this.state.cardsArray[this.currentCard.index].isMatch = false;
          this.state.numCardToCheck = 0;
          this.setState(this.state)
        }, 2000);
      }
      else {
        this.state.numCardToCheck = 0;
        this.setState(this.state)
        this.Correct_Card++
        if (this.Correct_Card == this.state.cardsArray.length / 2)
          this.endGame()
      }
    }
  }

  componentDidMount() {
    this.setState({ cardsArray: this.createCardsArray() })
  }
  render() {
    return (
      <div className="Game">
        <Board
          cardsArray={this.state.cardsArray}
          numCardToCheck={this.state.numCardToCheck}
          turnCard={this.turnCard}
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