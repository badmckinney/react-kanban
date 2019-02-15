const express = require('express');
const router = express.Router();
const Cards = require('../../database/models/Card');
const Priority = require('../../database/models/Priority');
const Status = require('../../database/models/Status');
const User = require('../../database/models/User');

router.get('/', (req, res) => {
  Cards.fetchAll({
    withRelated: ['priority', 'status', 'createdBy', 'assignedTo']
  })
    .then((cards) => {
      cardList = cards.models;
      cards = [];


      cardList.forEach(card => {
        let relations = card.relations;
        const priority = relations.priority.attributes.name;
        const status = relations.status.attributes.name;
        const assignedBy = relations.createdBy.attributes.first_name;
        const assignedTo = relations.assignedTo.attributes.first_name;

        const cardData = {
          id: card.id,
          title: card.attributes.title,
          body: card.attributes.body,
          priority: priority,
          status: status,
          assignedBy: assignedBy,
          assignedTo: assignedTo
        }

        cards.push(cardData);
      });
      res.json(cards);
    })
});

router.post('/', (req, res) => {
  res.json({ success: true });
});

router.put('/', (req, res) => {
  res.json({ success: true });
});

router.delete('/', (req, res) => {
  res.json({ success: true });
});

module.exports = router;