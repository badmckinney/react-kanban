import React from 'react';
import './Card.scss';

const Card = (props) => {

  return (
    <div className="card">
      <div className="card-top">
        <h3 className="task-name">{props.title}</h3>
        <p className="id">Card-id #{Array(Math.max(3 - String(props.id).length + 1, 0)).join(0) + props.id}</p>
      </div>
      <p className="body">{props.body}</p>
      <p className="priority">Priority: {props.priority}</p>
      <p className="assigned-by">Assigned by: {props.assignedBy}</p>
      <div className="card-bottom">
        <div className="card-buttons">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
        <p className="assigned-to">{props.status} – {props.assignedTo}</p>
      </div>
    </div>
  );
};

export default Card;