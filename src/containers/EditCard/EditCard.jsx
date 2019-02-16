import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard } from '../../actions';
import './EditCard.scss';

class EditCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      created_by: '',
      assigned_to: ''
    }

    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleBodyOnChange = this.handleBodyOnChange.bind(this);
    this.handlePriorityOnChange = this.handlePriorityOnChange.bind(this);
    this.handleStatusOnChange = this.handleStatusOnChange.bind(this);
    this.handleAssignedByOnChange = this.handleAssignedByOnChange.bind(this);
    this.handleAssignedToOnChange = this.handleAssignedToOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleOnChange(e) {
    const value = e.target.value;
    this.setState({ title: value });
  };

  handleBodyOnChange(e) {
    const value = e.target.value;
    this.setState({ body: value });
  };

  handlePriorityOnChange(e) {
    const value = e.target.value;
    this.setState({ priority_id: value });
  };

  handleStatusOnChange(e) {
    const value = e.target.value;
    this.setState({ status_id: value });
  };

  handleAssignedByOnChange(e) {
    const value = e.target.value;
    this.setState({ created_by: value });
  };

  handleAssignedToOnChange(e) {
    const value = e.target.value;
    this.setState({ assigned_to: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.close();
    const { title, body, priority_id, status_id, created_by, assigned_to } = this.state;

    this.props.onEdit({
      title,
      body,
      priority_id,
      status_id,
      created_by,
      assigned_to
    });

    this.setState({
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      created_by: '',
      assigned_to: ''
    });
  };

  render() {
    return (
      <form className="edit-form">
        <div className="form-header">
          <h2 className="form-title">Edit task</h2>
        </div>
        <div className="title">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleTitleOnChange} autoFocus />
        </div>
        <div className="body">
          <label htmlFor="body">Body:</label>
          <input type="text" name="body" value={this.state.body} onChange={this.handleBodyOnChange} />
        </div>
        <div className="form-priorities">
          <label htmlFor="priority_id">Priority:</label>
          <div className="low">
            <input type="radio" id="low" name="priority_id" value="1" onChange={this.handlePriorityOnChange} />
            <label htmlFor="low">Low</label>
          </div>
          <div className="medium">
            <input type="radio" id="medium" name="priority_id" value="2" onChange={this.handlePriorityOnChange} />
            <label htmlFor="medium">Medium</label>
          </div>
          <div className="high">
            <input type="radio" id="high" name="priority_id" value="3" onChange={this.handlePriorityOnChange} />
            <label htmlFor="high">High</label>
          </div>
          <div className="blocker">
            <input type="radio" id="blocker" name="priority_id" value="4" onChange={this.handlePriorityOnChange} />
            <label htmlFor="blocker">Blocker</label>
          </div>
        </div>
        <div className="form-statuses">
          <label htmlFor="status_id">Status:</label>
          <div className="status-queue">
            <input type="radio" id="queue" name="status_id" value="1" onChange={this.handleStatusOnChange} />
            <label htmlFor="queue">Queue</label>
          </div>
          <div className="status-in-progress">
            <input type="radio" id="progress" name="status_id" value="2" onChange={this.handleStatusOnChange} />
            <label htmlFor="progress">In Progress</label>
          </div>
          <div className="done">
            <input type="radio" id="done" name="status_id" value="3" onChange={this.handleStatusOnChange} />
            <label htmlFor="done">Done</label>
          </div>
        </div>
        <div className="created-by">
          <label htmlFor="created_by">Assigned By:</label>
          <input type="text" name="created_by" value={this.state.created_by} onChange={this.handleAssignedByOnChange} />
        </div>
        <div className="assigned-to">
          <label htmlFor="assigned_to">Assigned To:</label>
          <input type="text" name="assigned_to" value={this.state.assigned_to} onChange={this.handleAssignedToOnChange} />
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (card) => {
      dispatch(editCard(card));
    }
  }
};

EditCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCard);

export default EditCard;