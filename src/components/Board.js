import React, { Component } from 'react';
import Card from './Card';

class Board extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.cardsArray.map((country, index) => {
          return (<Card key={index} index={index} code={country.code} isMatch={country.isMatch} name={country.name} turnCard={this.props.turnCard} numCardToCheck={this.props.numCardToCheck} flippedCardBack={this.props.flippedCardBack} askQuiz={this.props.askQuiz}  doNotShowQuiz={this.props.doNotShowQuiz}/>);
        })}
      </div>
    );
  }
}

export default Board;