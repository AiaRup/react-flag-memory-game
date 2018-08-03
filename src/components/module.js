import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    this.props.saveGame(this.props.time);
    return (

      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          {/* <ModalHeader toggle={this.toggle}>Congratulations</ModalHeader> */}
          <ModalBody style={{ textAlign: 'center' }}>
            <img className="imgModule" src="goodJob.gif" alt="" />
            {/* <img className="imgModule" src="goodJob.gif" alt="" />
                        <img className="imgModule" src="goodJob.gif" alt="" /> */}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalGame;