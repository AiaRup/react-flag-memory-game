import React, { Component } from 'react';
import Card from './Card';

const Board = (props) => {
  const { cardsArray, turnCard, numCardToCheck, flippedCardBack, askQuiz, noQuizOnSecondCard } = props;

  return (
    <div>
    {cardsArray.map((country, index) => {
      return (<Card
        key={index} index={index}
         code={country.code}
         isMatch={country.isMatch}
         name={country.name}
         isCorrect={country.isCorrect}
         turnCard={turnCard}
         numCardToCheck={numCardToCheck}
         flippedCardBack={flippedCardBack}
         askQuiz={askQuiz}
         noQuizOnSecondCard={noQuizOnSecondCard}/>);
    })}
  </div>
  );
};

// class Board extends Component {

//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         {this.props.cardsArray.map((country, index) => {
//           return (<Card key={index} index={index} code={country.code} isMatch={country.isMatch} name={country.name} turnCard={this.props.turnCard} numCardToCheck={this.props.numCardToCheck} flippedCardBack={this.props.flippedCardBack} askQuiz={this.props.askQuiz} doNotShowQuiz={this.props.doNotShowQuiz}/>);
//         })}
//       </div>
//     );
//   }
// }

export default Board;