import React, { Component } from 'react';
import Board from './Board';
import Timer from './Timer';
import Controls from './Controls';
import listCountries from '../countries.js';
import _ from 'lodash';
import MyModule from './module';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      cardsArray: [],
      numCardToCheck: 0,
      askQuiz: true,
      clickNewGame: false,
      endtime: {
        m: 15, s: 60
      }

    };
  }

  FirstCard = true;
  prevCard = '';
  currentCard = '';
  Correct_Card = 0;
  clickNewGame = false;

  createCardsArray = () => {
    const tempArray = _.shuffle(listCountries);
    let cardsArray = [];
    for (let i = 0; i < this.props.cardsNum / 2; i++) {
      cardsArray.push(tempArray[i]);
      let clone = _.clone(tempArray[i], true);
      cardsArray.push(clone);
    }
    return _.shuffle(_.map(cardsArray, obj => ({ ...obj, isMatch: false, isCorrect: false })));
  }

  // endGame = () => {
  //   setTimeout(() => {
  //     alert("Congratulations")
  //   }, 1000)
  // }

  solve = () => {
    this.state.cardsArray.forEach(card => {
      card.isMatch = true;
    });
    //timer stop
    this.Correct_Card = 0;
    this.setState(this.state)
  }



  newGame = () => {
    //timer start

    this.setState({
      cardsArray: this.createCardsArray(),
      askQuiz: true,
      numCardToCheck: 0,
      clickNewGame: true,
    });
    this.FirstCard = true;
    this.Correct_Card = 0;

    setTimeout(() => {
      this.setState({ clickNewGame: false })
    }, 2000)
  }

  // function to flip card, check match and end of game
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
      numCardToCheck: 0
    });
  }

  // update match card of user correct answer
  noQuizOnSecondCard = (cardFromBoard) => {
    console.log('card', cardFromBoard)
    let tempArr = this.state.cardsArray.map((card, index) => {
      if (card.name === cardFromBoard) {
        card.isCorrect = true;
        return card;
      }
      return card;
    });
    this.setState({ cardsArray: tempArr });
  }

  componentDidMount() {
    this.setState({ cardsArray: this.createCardsArray() });
  }
  updateTime = (item) => {
    this.setState({ endtime: item })
  }
  render() {
    return (
      <div className="Game">
        <div className="container">
          <br />
          <h2 className="titleGame" style={{ color: "white" }}>Memory game</h2>
          <br />  <br />
          <div className="row">
            <div className=" col-2 col-sm-1"></div>
            <div className="col-sm-7 " >
              <Board
                cardsArray={this.state.cardsArray}
                numCardToCheck={this.state.numCardToCheck}
                turnCard={this.turnCard}
                flippedCardBack={this.flippedCardBack}
                askQuiz={this.state.askQuiz}
                noQuizOnSecondCard={this.noQuizOnSecondCard}
              />
              {this.Correct_Card == this.state.cardsArray.length / 2 && <MyModule saveGame={this.props.saveGame}
                time={this.props.time} endtime={this.state.endtime}
                newGame={this.newGame} />}
            </div>
            <div className="col-sm-2 col-sm-offset-1">
              <Timer time={this.props.time} solve={this.solve} newGame={this.newGame} clickNewGame={this.state.clickNewGame} updateTime={this.updateTime}
                finsGame={this.Correct_Card == this.state.cardsArray.length / 2} />
              <br />
              <Controls funSolve={this.solve} newGame={this.newGame} />
            </div>

          </div>

        </div>


      </div>
    );
  }
}

export default Game;
