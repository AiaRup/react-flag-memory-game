import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class ModalGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: true };
  }

  toggle = () => {
    this.props.saveGame(this.props.endtime.m * 60 + this.props.endtime.s);
    this.setState({
      modal: !this.state.modal
    });
  }

  clickNewGame = () => {
    this.setState({
      modal: !this.state.modal
    });
    this.props.newGame();
  }

  presentTime = () => {
    if (this.props.endtime.s === 0) {
      return `${this.props.endtime.m} : 00`;
    }
    else if (this.props.endtime.s < 10) {
      return `${this.props.endtime.m} : 0${this.props.endtime.s}`;
    } else {
      return `${this.props.endtime.m} : ${this.props.endtime.s}`;
    }
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered>
          <ModalBody style={{ textAlign: 'center' }}>
            <img className="imgModule" src="goodJob.gif" alt="" />
            <img className="imgModule" src="goodJob.gif" alt="" />
            <br />
            <br />
            <h3>You Won! Time left-  {this.presentTime()}</h3>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>close</Button>
            <Button color="info" onClick={this.clickNewGame}>New Game</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalGame;