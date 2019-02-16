import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditCardButton from '../EditCardButton'
import { deleteCard } from '../../actions';
import './Card.scss';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    const id = parseInt(e.target.id);
    this.props.onDelete({ id });
  }


  render() {
    return (
      <div className="card">
        <div className="card-top">
          <h3 className="task-name">{this.props.title}</h3>
          <p className="id">Task-id #{Array(Math.max(3 - String(this.props.id).length + 1, 0)).join(0) + this.props.id}</p>
        </div>
        <p className="body">{this.props.body}</p>
        <p className="priority">Priority: {this.props.priority}</p>
        <p className="assigned-by">Assigned by: {this.props.assignedBy}</p>
        <div className="card-bottom">
          <div className="card-buttons" data-id={this.props.id} data-title={this.props.title} data-body={this.props.body}
            data-priority={this.props.priority_id} data-assignedby={this.props.assignedBy_id} data-status={this.props.status_id}
            data-assignedto={this.props.assignedTo_id}>
            <EditCardButton />
            <button id={this.props.id} className="delete" onClick={this.handleDelete}>Delete</button>
          </div>
          <p className="assigned-to">{this.props.status} – {this.props.assignedTo}</p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(deleteCard(id));
    }
  }
};

Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default Card;