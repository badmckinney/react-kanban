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
    const cards = this.props.cards;
    console.log(this.props.cards);
    const queued = cards.filter(card => {
      return card.status === 'queue';
    });
    const doing = cards.filter(card => {
      return card.status === 'in progress';
    });
    const done = cards.filter(card => {
      return card.status === 'done';
    })

    return (
      <div className="board">
        <Header header={this.state.header}
          handleAddClick={this.handleAddClick} />
        <div className="columns">
          <Column status={"In Queue"}
            cards={queued} />
          <Column status={"In Progress"}
            cards={doing} />
          <Column status={"Done"}
            cards={done} />
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