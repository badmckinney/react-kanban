import React, { Component } from 'react';
import Board from '../Board';
import { connect } from 'react-redux';
import { loadCards } from '../../actions';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  componentWillMount() {
    return this.props.loadCards();
  }

  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      return dispatch(loadCards());
    }
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
