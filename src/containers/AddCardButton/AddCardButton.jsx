import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCard from '../AddCard';
import Modal from 'react-modal';
import './AddCardButton.scss';

Modal.setAppElement('#root');

class AddCardButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
    document.querySelector('.board').classList.add('blur');
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    document.querySelector('.board').classList.remove('blur');
  }

  render() {
    return (
      <>
        <button className="add" onClick={this.openModal}>+ NEW TASK</button>
        <Modal
          className="modal"
          overlayClassName="overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Add Task Form"
          shouldCloseOnOverlayClick={true}>
          <AddCard close={this.closeModal} />
        </Modal>

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {}
};

AddCardButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardButton);

export default AddCardButton;