import React, { Component } from 'react';
import './App.css';
import UserSelections from './components/UserSelections';
import Game from './components/Game';
import listCountries from './countries.js';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      time: 0,
      cardsNum: 16
    };
    this.updateGameSettings = this.updateGameSettings.bind(this);
  }

  updateGameSettings = () => {
    // update state
    return this.props.changeLayout //updateGameSettings  return the numbers of cards
    let finishGameSettings = this.props.status; //click on Finish Game Settings button indicate of finishGameSettings 
    if (finishGameSettings) {
      this.setState({ isPlaying: true });
      <Game />
    }
  }

  // function to make array of countries according to cardsNum
  createCardsArray = () => {
    const tempArray = _.shuffle(listCountries);
    let cardsArray = [];
    for (let i = 0; i < this.state.cardsNum/2; i++) {
      // each country push twice
      cardsArray.push(tempArray[i]);
      let clone = _.clone(tempArray[i], true);
      cardsArray.push(clone);
    }
    return _.shuffle(_.map(cardsArray, obj => ({ ...obj, isMatch:false })));
  }

  // function to cahnge card match property

  render() {
    this.createCardsArray();
    return (
      <div className="App">
        {!this.state.isPlaying && <UserSelections/>}
        {this.state.isPlaying && <Game cardsArray={this.createCardsArray()}/>}
      </div>
    );
  }
}

export default App;
