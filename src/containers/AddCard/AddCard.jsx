import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addCardAsync } from '../../actions';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      priority: '',
      assignedBy: '',
      assignedTo: ''
    }

    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleBodyOnChange = this.handleBodyOnChange.bind(this);
    this.handlePriorityOnChange = this.handlePriorityOnChange.bind(this);
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
    this.setState({ priority: value });
  };

  handleAssignedByOnChange(e) {
    const value = e.target.value;
    this.setState({ assignedBy: value });
  };

  handleAssignedToOnChange(e) {
    const value = e.target.value;
    this.setState({ assignedTo: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { title, body, priority, }
  };

  render() {
    return (
      <form>
        <label for="title">Title:</label>
        <input type="text" name="title" value={this.state.title} onChange={this.handleTitleOnChange} autofocus />
        <label for="body">Body:</label>
        <input type="text" name="body" value={this.state.body} onChange={this.handleBodyOnChange} />
        <label for="priority">Priority:</label>
        <div className="form-priorities">
          <input type="radio" name="priority" value="Low" />
          <input type="radio" name="priority" value="Medium" />
          <input type="radio" name="priority" value="High" />
          <input type="radio" name="priority" value="Blocker" />
        </div>
        <label for="assignedBy">Assigned By:</label>
        <input type="text" name="assignedBy" value={this.state.assignedBy} onChange={this.handleAssignedByOnChange} />
        <label for="assignedTo">Assigned To:</label>
        <input type="text" name="assignedTo" value={this.state.assignedTo} onChange={this.handleAssignedToOnChange} />
        <button onClick={this.handleSubmit}>Add Task</button>
      </form>
    );
  }
}

