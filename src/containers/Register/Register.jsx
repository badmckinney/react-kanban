import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions';
import './Register.scss';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: ''
    };

    this.handleUsernameOnChange = this.handleUsernameOnChange.bind(this);
    this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this);
    this.handleFirstNameOnChange = this.handleFirstNameOnChange.bind(this);
    this.handleLastNameOnChange = this.handleLastNameOnChange.bind(this);
    this.handleEmailOnChange = this.handleEmailOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameOnChange(e) {
    const value = e.target.value;
    this.setState({ username: value });
  };

  handlePasswordOnChange(e) {
    const value = e.target.value;
    this.setState({ password: value });
  };

  handleFirstNameOnChange(e) {
    const value = e.target.value;
    this.setState({ first_name: value });
  };

  handleLastNameOnChange(e) {
    const value = e.target.value;
    this.setState({ last_name: value });
  };

  handleEmailOnChange(e) {
    const value = e.target.value;
    this.setState({ email: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.close();
    const { username, password, first_name, last_name, email } = this.state;

    this.props.onAdd({
      username,
      password,
      first_name,
      last_name,
      email,
    });

    this.setState({
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: ''
    });
  };

  render() {
    return (
      <form className="register-form">
        <div className="form-header">
          <h2 className="form-title">Create an account</h2>
        </div>
        <div className="username">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameOnChange} autoFocus />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordOnChange} />
        </div>
        <div className="first_name">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleFirstNameOnChange} />
        </div>
        <div className="last_name">
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleLastNameOnChange} />
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleEmailOnChange} />
        </div>
        <button onClick={this.handleSubmit}>Register</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (user) => {
      dispatch(addUser(user));
    }
  }
};

Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default Register;
