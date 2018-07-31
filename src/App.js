import React, { Component } from 'react';
import './App.css';
import UserSelections from './components/UserSelections';
import Game from './components/Game';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true,
      time: 0,
      cardsNum: 8
    };
  }

  updateGameSettings = () => {
    // update state
  }

  // function to make array of countries according to cardsNum
  // createCardsArray = () => {
  //   console.log("meir");
  //   const tempArray = _.shuffle(listCountries);
  //   let cardsArray = [];
  //   for (let i = 0; i < this.state.cardsNum / 2; i++) {
  //     // each country push twice
  //     cardsArray.push(tempArray[i]);
  //     let clone = _.clone(tempArray[i], true);
  //     cardsArray.push(clone);
  //   }
  //   return _.shuffle(_.map(cardsArray, obj => ({ ...obj, isMatch: false })));
  // }

  // function to cahnge card match property

  render() {
    return (
      <div className="App">
        {/* {!this.state.isPlaying && <UserSelections/>}
        {this.state.isPlaying && <Game cardsArray={this.createCardsArray()}/>} */}
        <Game cardsNum={this.state.cardsNum} />
      </div>
    );
  }
}

export default App;
