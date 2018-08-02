import React, { Component } from 'react';
import Timer from './Timer';
import { Button } from 'reactstrap';

class UserSelections extends Component {
  constructor(props) {
    super(props)
    this.state= {
      time: 5,
      settingsUpdate : false,
      numberOfCards: 8
    };
    this.changeLayout = this.changeLayout.bind(this);
  }

  changeLayout (e){
    let cardsLayout = e.target.id;
    this.setState({numberOfCards: cardsLayout})
  }

  setTimer = (e) =>{
    let SelectedMinutes = e.target.id;
    this.setState({time: SelectedMinutes})
  }


  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="gameTitle">
            <h1>Fun with Flags</h1>
            <h2>Memory Game</h2>
          </div>
        </div>

        <div className="row">
          <div className="userSettings">
            <h5 className="selectCardTitle">Select Cards Layout</h5>
            <div className ="selectLayout">
                <button id="8" onClick={this.changeLayout} color="success">2 X 4</button>             
                <button id="12" onClick={this.changeLayout} color="success">3 X 4</button>
                <button id="16" onClick={this.changeLayout} color="success">4 X 4</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div class="col-sm" className="setTimerTitle">
           <h5>Set Timer</h5>
          </div>
          <div class="col-sm">
            <button id="300" onClick={this.setTimer} color="danger">5 minutes</button>
            <button id="600" onClick={this.setTimer} color="danger">10 minutes</button>
            <button id="900" onClick={this.setTimer} color="danger">15 minutes</button>
          </div>
        </div>

        <div className="row">
          <div className ="playButtonBox">
            <button color="primary" className="playButton" onClick={ () =>{this.props.name(this.state.numberOfCards, this.state.time)}}>
              Play!
            </button>
          </div>
        </div>

      </div>
    );
  }
}

export default UserSelections;