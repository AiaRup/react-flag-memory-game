import React, { Component } from 'react';
import './App.css';
import UserSelections from './components/UserSelections';
import Game from './components/Game';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      time: 400,
      cardsNum: 16
    };
  }
  STORAGE_ID = "MemoryGame";
  getFromLocalStorage = function () {
    return JSON.parse(localStorage.getItem(this.STORAGE_ID) || null);
  }
  saveToLocalStorage = function (time) {
    localStorage.setItem(this.STORAGE_ID, time);
  }

  saveGame = (timeToSave) => {
    let goodTime = this.getFromLocalStorage();
    if (goodTime == null || goodTime < timeToSave)
      this.saveToLocalStorage(timeToSave)
  }
  updateGameSettings = (numberOfCards, time) => {
    console.log(numberOfCards);
    console.log(time);
    // update state
    this.setState({ isPlaying: true, time: time, cardsNum: numberOfCards });
  }
  render() {
    return (
      <div className="App">
        {!this.state.isPlaying && <UserSelections name={this.updateGameSettings} />}
        {this.state.isPlaying && <Game cardsNum={this.state.cardsNum} time={this.state.time} saveGame={this.saveGame} />}
      </div>

    );
  }
}

export default App;



