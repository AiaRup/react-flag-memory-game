import React, { Component } from 'react';
import listCountries from '../countries.js';
import _ from 'lodash';
import './FlagTrivia.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
class FlagTrivia extends Component {
  state = {
    isAnswer: false
  }

  createAnswers = true;
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
    const rightAnswer = { name: this.rightAnswer, isCorrect: true };
    let answerArray = [rightAnswer];
    for (let i = 0; i < 3; i++) {
      let wrongAnswer = { name:tempArray[i].name, isCorrect: false };
      answerArray.push(wrongAnswer);
    }
    return _.shuffle(answerArray);
  }

  checkAnswer = (e) => {
    this.setState(prevState => ({
      isAnswer: !prevState.isAnswer
    }));

    if (e.target.dataset.id === this.rightAnswer) {
      setTimeout(() => {
        this.props.onUserAnswer('isCorrect', true);
        this.setState(prevState => ({
          isAnswer: !prevState.isAnswer
        }));
      }, 4000);}
    else {
      setTimeout(() => {
        this.props.onUserAnswer('isShowing', false);
        this.setState(prevState => ({
          isAnswer: !prevState.isAnswer
        }));
      }, 4000);}
  }

  showAnswer = (answerType) => {
    if (this.state.isAnswer) {
      if (answerType) return 'answer correct';
      return 'answer wrong';
    } else {
      return 'answer';
    }
  }

  render() {
    const src =`https://www.countryflags.io/${this.props.code}/shiny/64.png`;
    return (
      <Modal isOpen={this.props.modalState} size="lg" centered>
        <ModalHeader>
         Which county does this flag belong to?
          <span className="flag-header"><img src={src} alt=""/></span>
        </ModalHeader>
        <ModalBody>
          <ul className="answers">
            {this.createAnswerArray().map((answer, index) =>
              <li key={index}
                data-id={answer.name}
                className={this.showAnswer(answer.isCorrect)}
                onClick={this.checkAnswer}
                style={{ backgroundColor: this.bgColors[index] }}
              >{answer.name}
              </li>)}
          </ul>
        </ModalBody>
      </Modal>
    );
  }
}

export default FlagTrivia;