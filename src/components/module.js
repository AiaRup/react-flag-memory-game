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
                        <div className="row">
                            <div className="col-8">
                                <img className="imgModule" src="goodJob.gif" alt="" />
                                <img className="imgModule" src="goodJob.gif" alt="" />
                            </div>
                            <div className="col-4">
                                <br />
                                <br />
                                <br />

                                <h3>Time left:   {this.props.endtime.m}: {this.props.endtime.s}</h3>
                            </div>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>close</Button>
                        <Button color="info" onClick={this.clickNewGame}>NewGame</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalGame;