import React, { Component } from 'react';
import './App.css';
import UserSelections from './UserSelections';
import Game from './Game';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({ time: time, cardsNum: numberOfCards });
  }

  render() {
    const bgImg = {
      backgroundImage: 'url(\'Images/bgImg.jpg\')',
      backgroundRepeat  : 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    };

    return (
      <div className="App" style={bgImg}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/gameSettings" render={() => <UserSelections name={this.updateGameSettings} />}/>
            <Route exact path="/game" render={() => <Game cardsNum={this.state.cardsNum} time={this.state.time} saveGame={this.saveGame} showSettings={this.showSettings} />}/>
            <Redirect from="/" to="/gameSettings" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;



