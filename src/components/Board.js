import React, { Component } from 'react';
import Card from './Card';

class Board extends Component {
  // variable of prevCard
  // variable currentCard
  // variable match = false

  //funtcion to change object is match
  handleClick = () => {

  }


  render() {
    console.log(this.props.cardsArray);
    return (
      <div>
        {this.props.cardsArray.map((country, index) => {
          return (<Card key={index} code={country.code} name={country.name} handleClick={this.handleClick} index={index} />);
        })}
      </div>
    );
  }
}

export default Board;