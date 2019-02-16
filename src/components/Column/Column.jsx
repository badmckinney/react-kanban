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
        status={card.status}
        assignedBy={card.assignedBy}
        assignedTo={card.assignedTo} />
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