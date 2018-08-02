import React, { Component } from 'react';
import './App.css';
import UserSelections from './components/UserSelections';
import Game from './components/Game';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      time: 0,
      cardsNum: 16
    };
  }

  updateGameSettings = (numberOfCards, time) => {
    console.log(numberOfCards);
    // update state
      this.setState({ isPlaying: true, time:time, cardsNum:numberOfCards });
  }

  render() {
    return (
      <div className="App">
        {!this.state.isPlaying && <UserSelections name={this.updateGameSettings}/>}
        {this.state.isPlaying && <Game cardsNum={this.state.cardsNum} time={this.state.time}/>}
      </div>
    );
  }
}

export default App;
