import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class ModalGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    console.log(this.props.endtime.m * 60 + this.props.endtime.s)
    this.props.saveGame(this.props.endtime.m * 60 + this.props.endtime.s)

    this.setState({
      modal: !this.state.modal
    });
  }
  clickNewGame = (e) => {
    this.props.newGame()
  }
  render() {

    return (

      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          {/* <ModalHeader toggle={this.toggle}>Congratulations</ModalHeader> */}
          <ModalBody style={{ textAlign: "center" }}>
            <img className="imgModule" src="goodJob.gif" alt="" />
            <img className="imgModule" src="goodJob.gif" alt="" />
            <br />
            <br />
            <h3>Time left:   {this.props.endtime.m}: {this.props.endtime.s}</h3>

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