import React from 'react';
import Card from '../../containers/Card';
import './Column.scss';

const Column = (props) => {
  const cards = props.cards.map((card) => {
    return (
      <Card key={card.id}
        id={card.id}
        title={card.title}
        body={card.body}
        priority={card.priority}
        priority_id={card.priority_id}
        status={card.status}
        status_id={card.status_id}
        assignedBy={card.assignedBy}
        assignedBy_id={card.assignedBy_id}
        assignedTo={card.assignedTo}
        assignedTo_id={card.assignedTo_id} />
    );
  });

  return (
    <div className="column">
      <h2 className="status">{props.status}</h2>
      {cards}
    </div>
  )
};

export default Column;