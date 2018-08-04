import React, { Component } from 'react';
import './App.css';
import UserSelections from './components/UserSelections';
import Game from './components/Game';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      time: 300,
      cardsNum: 16
    };
  }

  STORAGE_ID = 'MemoryGame';

  getFromLocalStorage = function () {
    return JSON.parse(localStorage.getItem(this.STORAGE_ID) || null);
  }

  saveToLocalStorage = function (time) {
    localStorage.setItem(this.STORAGE_ID, time);
  }

  saveGame = (timeToSave) => {
    let goodTime = this.getFromLocalStorage();
    if (goodTime == null || goodTime > timeToSave)
      this.saveToLocalStorage(timeToSave);
  }

  updateGameSettings = (numberOfCards, time) => {
    // update state
    this.setState({ isPlaying: true, time: time, cardsNum: numberOfCards });
  }

  showSettings = () => {
    this.setState({ isPlaying: false });
  }

  render() {
    return (
      <div className="App"
        style={{
          backgroundImage: 'url(\'Images/bgImg.jpg\')',
          backgroundRepeat  : 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}>
        {!this.state.isPlaying && <UserSelections name={this.updateGameSettings} />}
        {this.state.isPlaying && <Game cardsNum={this.state.cardsNum} time={this.state.time} saveGame={this.saveGame} showSettings={this.showSettings} />}
      </div>

    );
  }
}

export default App;



