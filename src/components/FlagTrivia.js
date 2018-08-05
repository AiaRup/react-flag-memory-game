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

  componentDidMount() {
    this.setState({ answerArr: this.createAnswerArray() });
  }

  componentDidUpdate(prevProps) {
    if (this.props.showModal !== prevProps.showModal) {
      this.setState({
        answerArr: this.createAnswerArray(),
        isHint: false });
      this.userSucceeded = false;
      this.selectedAnswer = '';
      this.rightAnswer = this.props.name;
    }
  }

  // function to create array of 4 answers
  createAnswerArray = () => {
    const tempArray = _.shuffle((_.filter(listCountries, (country) => country.name !== this.rightAnswer)));
    const rightAnswer = { name: this.props.name, isCorrect: true };
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
    // save the user correct answer
    if (this.selectedAnswer === this.rightAnswer) {
      this.userSucceeded = true;
    }
    setTimeout(() => {
      // user answered correctly
      if (this.selectedAnswer === this.rightAnswer) {
        this.props.onUserAnswer('isCorrect', true);
        this.props.noQuizOnSecondCard(this.rightAnswer);
      } else {
        this.props.onUserAnswer('isCorrect', false);
        this.props.flippedCardBack(this.props.index);
      }
      this.setState(prevState => ({
        isAnswer: !prevState.isAnswer
      }));
    }, 3000);}

  // Check which classes to put on every answer
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
  // when the user click the hint button
  onHint= () => {
    this.setState(prevState => ({
      isHint: !prevState.isHint
    }));
    this.props.updateNumHints();
  }

  styleHintButton = () => {
    if (this.state.isAnswer || this.state.isHint || !this.props.numHints) {
      return <Button outline color="secondary" size="sm" onClick={this.onHint} disabled>Hint!</Button>;
    }
    return <Button outline color="secondary" size="sm" onClick={this.onHint}>Hint!</Button>;
  }



  render() {
    return (
      <Modal isOpen={this.props.showModal} size="lg" centered>
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
              >{answer.name}
              </li>)}
          </ul>
        </ModalBody>
        <ModalFooter>
          {this.styleHintButton()}
        </ModalFooter>
      </Modal>
    );
  }
}

export default FlagTrivia;