import React, { Component } from 'react';
import { Button } from 'reactstrap';

class UserSelections extends Component {
  constructor(props) {
    super(props)
    this.state= {
      time: 5,
      settingsUpdate : false,
      numberOfCards: 16
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
                <Button id="8" onClick={this.changeLayout} color="success">2 X 4</Button>             
                <Button id="12" onClick={this.changeLayout} color="success">3 X 4</Button>
                <Button id="16" onClick={this.changeLayout} color="success">4 X 4</Button>
                <Button id="20" onClick={this.changeLayout} color="success">5 X 4</Button>
            </div>
          </div>
        </div>

        <div className="row">
          <div class="col-sm" className="setTimerTitle">
           <h5>Set Timer</h5>
          </div>
          <div class="col-sm">
            <Button id="300" onClick={this.setTimer} color="danger">5 minutes</Button>
            <Button id="600" onClick={this.setTimer} color="danger">10 minutes</Button>
            <Button id="900" onClick={this.setTimer} color="danger">15 minutes</Button>
          </div>
        </div>

        <div className="row">
          <div className ="playButtonBox">
            <Button color="primary" className="playButton" onClick={() => {this.props.name(this.state.numberOfCards, this.state.time)}}>
              Play!
            </Button>
          </div>
        </div>

      </div>
    );
  }
}

export default UserSelections;