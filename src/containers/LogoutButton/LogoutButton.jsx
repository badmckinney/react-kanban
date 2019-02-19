import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import './LogoutButton.scss';

class LogoutButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.onLogout();
  }

  render() {
    return (
      <button className="login" onClick={this.handleLogout}>Logout</button>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logoutUser());
    }
  }
};

LogoutButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton);

export default LogoutButton;
