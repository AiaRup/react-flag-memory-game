import React from 'react';
import Card from './Card';

const Board = (props) => {
  const { cardsArray, turnCard, numCardToCheck, flippedCardBack, askQuiz, noQuizOnSecondCard } = props;

  return (
    <div className="row">
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
          noQuizOnSecondCard={noQuizOnSecondCard} />);
      })}
    </div>
  );
};
export default Board;