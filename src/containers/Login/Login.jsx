import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import RegisterButton from '../RegisterButton';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleUsernameOnChange = this.handleUsernameOnChange.bind(this);
    this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.close();
    const { username, password } = this.state;

    this.props.onLogin({
      username,
      password,
    });

    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    return (
      <form className="login-form">
        <div className="form-header">
          <h2 className="form-title">Login</h2>
        </div>
        <div className="username">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameOnChange} autoFocus />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordOnChange} />
        </div>
        <button onClick={this.handleSubmit}>Login</button>
        <div className="register-message">
          <p>Don't have an account?</p>
          <RegisterButton closeLogin={this.props.close} />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => {
      dispatch(loginUser(user));
    }
  }
};

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default Login;
