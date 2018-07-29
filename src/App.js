import React, { Component } from 'react';
import './App.css';
import UserSelections from './components/UserSelections';
import Game from './components/Game';
import listCountries from './countries.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      time: 0,
      cardsNum: 16
    };
  }

  updateGameSettings = () => {
    // update state
  }

  // function to make array of countries according to cardsNum
  // each country push twice
  // shuffle

  // function to cahnge card match property

  render() {
    return (
      <div className="App">
        {!this.state.isPlaying && <UserSelections/>}
        {this.state.isPlaying && <Game/>}
      </div>
    );
  }
}

export default App;
