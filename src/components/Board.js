import React, { Component } from 'react';
import Card from './Card';

class Board extends Component {
  // variable of prevCard
  // variable currentCard
  // variable match = false

  //funtcion to change object is match


  render() {
    return (
      <div>
        {this.props.flagCards.map((country, index) => {
          return (<Card key={index} code={} name={} handleClick={} index={index} />);
        })}
      </div>
    );
  }
}

export default Board;