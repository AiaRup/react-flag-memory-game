import React, { Component } from 'react';
import Board from './Board';
import Timer from './Timer';
import Controls from './Controls';
import listCountries from '../countries.js';
import _ from 'lodash';
import Mymodule from './module';

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
    const tempArray = _.shuffle(listCountries);
    let cardsArray = [];
    for (let i = 0; i < this.props.cardsNum / 2; i++) {
      cardsArray.push(tempArray[i]);
      let clone = _.clone(tempArray[i], true);
      cardsArray.push(clone);
    }
    return _.shuffle(_.map(cardsArray, obj => ({ ...obj, isMatch: false })));
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
    //timer stop
    this.Correct_Card = 0;
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
        // if (this.Correct_Card == this.state.cardsArray.length / 2)
        //   this.endGame()
      }
    }
  }

  componentDidMount() {
    this.setState({ cardsArray: this.createCardsArray() })
  }
  render() {
    return (
      <div className="Game">
        <div className="container">

          <br />
          <h2 className="titleGame" style={{ color: "white" }}>Memory game</h2>
          <br />
          <br />
          <div className="row">
            <div className=" col-1 col-sm-1"></div>
            <div className="col-sm-8 " >
              <Board
                cardsArray={this.state.cardsArray}
                numCardToCheck={this.state.numCardToCheck}
                turnCard={this.turnCard}
              />
              {this.Correct_Card == this.state.cardsArray.length / 2 && <Mymodule saveGame={this.props.saveGame}
                time={this.props.time} />}
            </div>
            <div className="col-sm-2 col-sm-offset-1">
              <Timer />
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

{/* <div className="container">
        <div className="row App">
          <div className="col-md-10" style={{ backgroundColor: "green" }}>
            <Game cardsNum={this.state.cardsNum} />
          </div>
          <div className="col-md-2" style={{ backgroundColor: "red" }}>
            <br />

            <button className="btn btn-info" >meir1</button>
            <br />
            <button>meir2</button>
            <br />
            <button>meir3</button>

          </div>



        </div>
      </div> */}