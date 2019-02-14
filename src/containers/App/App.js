import React, { Component } from 'react';
import Board from '../Board';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Board cards={this.props.cards} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
