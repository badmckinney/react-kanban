import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Login from '../Login';
import './LoginButton.scss';

Modal.setAppElement('#root');

class LoginButton extends Component {
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
        <button className="login" onClick={this.openModal}>Login</button>
        <Modal
          className="modal"
          overlayClassName="overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Login Form"
          shouldCloseOnOverlayClick={true}>
          <Login close={this.closeModal} />
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

LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);

export default LoginButton;
