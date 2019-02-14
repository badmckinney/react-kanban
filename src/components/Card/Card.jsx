import React from 'react';

const Card = (props) => {
  const { id, title, body, priority, status, assignedBy, assignedTo } = props;

  return (
    <div>
      <div className="card-top">
        <h3 className="task-name">{title}</h3>
        <p className="id">Card-id #{Array(Math.max(3 - String(id).length + 1, 0)).join(0) + id}</p>
      </div>
      <p className="body">{body}</p>
      <p className="priority">{priority}</p>
      <p className="assigned-by">Assigned by: {assignedBy}</p>
      <div className="card-bottom">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
        <p className="assigned-to">{status} – {assignedTo}</p>
      </div>
    </div>
  );
};

export default Card;