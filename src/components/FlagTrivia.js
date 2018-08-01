import React, { Component } from 'react';
import listCountries from '../countries.js';
import _ from 'lodash';
import './FlagTrivia.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
class FlagTrivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswer: false,
      answerArr: [],
      isHint: false
    };
  }
  // some variables
  createAnswers = true;
  rightAnswer = this.props.name;
  userSucceeded = false;
  selectedAnswer = '';
  bgColors = {
    0: '#20adab',
    1: '#de386b',
    2: '#ef6942',
    3: '#34a63b'
  };

  componentDidMount() {
    this.setState({ answerArr: this.createAnswerArray() });
  }

  componentDidUpdate(prevProps) {
    if (this.props.modalState !== prevProps.modalState) {
      this.setState({
        answerArr: this.createAnswerArray(),
        isHint: false });
      this.userSucceeded = false;
      this.selectedAnswer = '';
    }
  }

  // function to create array of 4 answers
  createAnswerArray = () => {
    const tempArray = _.shuffle((_.filter(listCountries, (country) => country.name !== this.rightAnswer)));
    const rightAnswer = { name: this.rightAnswer, isCorrect: true };
    let answerArray = [rightAnswer];
    for (let i = 0; i < 3; i++) {
      if (i < 2) {
        answerArray.push({ name:tempArray[i].name, isCorrect: false, isHint: true });
      } else {
        answerArray.push({ name:tempArray[i].name, isCorrect: false });
      }
    }
    return _.shuffle(answerArray);
  }
  // When the user answers the quiz
  checkAnswer = (e) => {
    this.setState(prevState => ({
      isAnswer: !prevState.isAnswer,
    }));
    this.selectedAnswer = e.target.dataset.id;
    if (this.selectedAnswer === this.rightAnswer) {
      this.userSucceeded = true;
    }
    setTimeout(() => {
      if (this.selectedAnswer === this.rightAnswer) {
        this.props.onUserAnswer('isCorrect', true);
      } else {
        this.props.onUserAnswer('isShowing', false);
      }
      this.setState(prevState => ({
        isAnswer: !prevState.isAnswer
      }));
    }, 4000);}

  // Check which classes to put on every option
  styledAnswer = (answer) => {
    // check if the user answered the quiz
    if (this.state.isAnswer) {
      // check if the answer is correct
      if (this.userSucceeded) {
        if (answer.isCorrect) return 'answer correct';
        return 'answer wrong';
      }
      // answer wrong
      else {
        if (answer.name === this.selectedAnswer) return 'answer unsucceeded';
        return 'answer wrong';
      }
      // if hint was clicked
    } else if (this.state.isHint) {
      if (answer.hasOwnProperty('isHint')) {
        return 'answer hint';
      }
      return 'answer';
    }
    return 'answer';
  }

  onHint= () => {
    this.setState(prevState => ({
      isHint: !prevState.isHint
    }));
  }

  render() {
    return (
      <Modal isOpen={this.props.modalState} size="lg" centered>
        <ModalHeader>
         Which county does this flag belong to?
          <span className="flag-header"><img src={`https://www.countryflags.io/${this.props.code}/shiny/64.png`} alt=""/></span>
        </ModalHeader>
        <ModalBody>
          <ul className="answers">
            {this.state.answerArr.map((answer, index) =>
              <li key={index}
                data-id={answer.name}
                className={this.styledAnswer(answer)}
                onClick={this.checkAnswer}
                style={{ backgroundColor: this.bgColors[index] }}
              >{answer.name}
              </li>)}
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button outline color="secondary" size="sm" onClick={this.onHint} className={(this.state.isAnswer || this.state.isHint) && 'disabled'}>Hint!</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default FlagTrivia;