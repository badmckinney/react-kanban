const express = require('express');
const router = express.Router();
const Card = require('../../database/models/Card');
const Priority = require('../../database/models/Priority');
const Status = require('../../database/models/Status');
const User = require('../../database/models/User');

/************************
 *  GET
************************/

router.get('/', (req, res) => {
  Card.fetchAll({
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

/************************
 * POST
************************/

router.post('/', (req, res) => {
  const newCard = req.body;

  Card.forge({
    title: newCard.title,
    body: newCard.body,
    priority_id: newCard.priority_id,
    status_id: newCard.status_id,
    created_by: newCard.created_by,
    assigned_to: newCard.assigned_to
  }).save(null, { method: 'insert' })
    .then(() => {
      new Card({ title: newCard.title }).fetch({
        withRelated: ['priority', 'status', 'createdBy', 'assignedTo']
      })
        .then((card) => {
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

          return res.json(cardData);
        });
    });
});

/************************
 *  PUT
************************/

router.put('/', (req, res) => {
  const card = req.body;

  new Card({ id: card.id })
    .save({
      title: card.title,
      body: card.body,
      priority: card.priority,
      status: card.status,
      created_by: card.created_by,
      assigned_to: card.assigned_to
    }, { patch: true })
    .then(() => {
      new Card({ id: card.id }).fetch({
        withRelated: ['priority', 'status', 'createdBy', 'assignedTo']
      })
        .then((card) => {
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

          return res.json(cardData);
        });
    });
});

/************************
 *  DELETE
************************/

router.delete('/', (req, res) => {
  const id = req.body.id;
  new Card({ id: id })
    .destroy()
    .then(() => {
      Card.fetchAll({
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
        });
    });
});

module.exports = router;