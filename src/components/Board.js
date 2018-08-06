import React from 'react';
import Card from './Card';

const Board = (props) => {
  return (
    <div className="row">
      {props.cardsArray.map((country, index) => {
        return (<Card
          key={index} index={index}
          code={country.code}
          isMatch={country.isMatch}
          name={country.name}
          isCorrect={country.isCorrect}
          {...props}
        />);
      })}
    </div>
  );
};
export default Board;