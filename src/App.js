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

  render() {
    return (
      <div className="App">
        {!this.state.isPlaying && <UserSelections/>}
        {this.state.isPlaying && <Game cardsNum={this.state.cardsNum}/>}
      </div>
    );
  }
}

export default App;
