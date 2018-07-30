import React, { Component } from 'react';
import listCountries from '../countries.js';
import _ from 'lodash';

class FlagTrivia extends Component {
  rightAnswer = this.props.name;
  bgColors = {
    0: '#20adab',
    1: '#de386b',
    2: '#ef6942',
    3: '#34a63b'
  };

  // function to create array of 4 answers
  createAnswerArray = () => {
    const tempArray = _.shuffle((_.filter(listCountries, (country) => country.name !== this.rightAnswer)));
    let answerArray = [this.rightAnswer];
    for (let i = 0; i < 3; i++) {
      answerArray.push(tempArray[i].name);
    }
    return _.shuffle(answerArray);
  }

  checkAnswer = (e) => {
    if (e.target.dataset.id === this.rightAnswer) {
      this.props.onUserAnswer('isCorrect', true);
    }
    else {
      this.props.onUserAnswer('isShowing', false);
    }
  }

  render() {
    const src =`https://www.countryflags.io/${this.props.code}/shiny/64.png`;
    return (
      // <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      //   <div className="modal-dialog modal-dialog-centered" role="document">
      //     <div className="modal-content">
      //       <div className="modal-header">
      //         <h2 className="modal-title">Which county does this flag belong to?</h2>
      //         <img src={src}/>
      //       </div>
      //       <ul className="modal-body">
      //         {this.createAnswerArray().map((answer, index) => <li key={index} className={answer} onClick={this.checkAnswer}>{answer}</li>)}
      //       </ul>
      //     </div>
      //   </div>
      // </div>
      <div>
        <div className="modal-header">
          <h4 className="modal-title">Which county does this flag belong to?</h4>
          <img src={src} alt=""/>
        </div>
        <ul className="modal-body">
          {this.createAnswerArray().map((answer, index) =>
            <li key={index}
              data-id={answer}
              className="answer"
              onClick={this.checkAnswer}
              style={{ backgroundColor: this.bgColors[index] }}
            >{answer}
            </li>)}
        </ul>
      </div>
    );
  }
}

export default FlagTrivia;