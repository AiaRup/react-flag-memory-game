import React, { Component } from 'react';
import Card from './Card';

class Board extends Component {

  render() {
    return (
      <div className="row Board">
        {this.props.cardsArray.map((country, index) => {
          return (<Card key={index} index={index} code={country.code} isMatch={country.isMatch} name={country.name} turnCard={this.props.turnCard} numCardToCheck={this.props.numCardToCheck} />);
        })}
      </div>
    );
  }
}

export default Board;