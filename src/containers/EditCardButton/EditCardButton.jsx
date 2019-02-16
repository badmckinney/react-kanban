import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditCard from '../EditCard';
import Modal from 'react-modal';
import './EditCardButton.scss';

Modal.setAppElement('#root');

class EditCardButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardData: {
        title: '',
        body: '',
        priority_id: '',
        status_id: '',
        created_by: '',
        assigned_to: ''
      },
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  sendCardData() {
    return this.state.cardData;
  }

  openModal(e) {
    console.log(e.target.parentNode.dataset);
    this.setState({
      cardData: {

      },
      modalIsOpen: true
    });
    document.querySelector('.board').classList.add('blur');
  }

  closeModal() {
    this.setState({ cardData: {}, modalIsOpen: false });
    document.querySelector('.board').classList.remove('blur');
  }

  render() {
    return (
      <>
        <button className="edit" onClick={this.openModal}>Edit</button>
        <Modal
          className="modal"
          overlayClassName="overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Add Task Form"
          shouldCloseOnOverlayClick={true}>
          <EditCard close={this.closeModal}
            getCardData={this.sendCardData} />
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

EditCardButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCardButton);

export default EditCardButton;