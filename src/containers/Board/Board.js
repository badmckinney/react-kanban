import React, { Component } from 'react';
import Header from '../../components/Header';
import Column from '../../components/Column';
import { connect } from 'react-redux';
import './Board.scss';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'KANBAN'
    };

    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick() {

  };

  render() {
    return (
      <div className="board">
        <Header header={this.state.header}
          handleAddClick={this.handleAddClick} />
        <div className="columns">
          <Column status={"In Queue"}
            cards={this.props.cards} />
          <Column status={"In Progress"}
            cards={this.props.cards} />
          <Column status={"Done"}
            cards={this.props.cards} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default Board;