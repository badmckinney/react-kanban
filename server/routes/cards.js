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
        const priority = relations.priority.attributes;
        const status = relations.status.attributes;
        const assignedBy = relations.createdBy.attributes;
        const assignedTo = relations.assignedTo.attributes;

        const cardData = {
          id: card.id,
          title: card.attributes.title,
          body: card.attributes.body,
          priority: priority.name,
          priority_id: priority.id,
          status: status.name,
          status_id: status.id,
          assignedBy: assignedBy.first_name,
          assignedBy_id: assignedBy.id,
          assignedTo: assignedTo.first_name,
          assignedTo_id: assignedTo.id
        }

        cards.push(cardData);
      });
      res.json(cards);
    })
});

router.get('/users', (req, res) => {
  User.fetchAll({
    columns: ['id', 'first_name']
  })
    .then((users) => {
      userList = users.models;
      users = [];

      userList.forEach(user => {
        const userData = {
          id: user.attributes.id,
          first_name: user.attributes.first_name
        }

        users.push(userData);
      });
      res.json(users);
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
            priority: priority.name,
            priority_id: priority.id,
            status: status.name,
            status_id: status.id,
            assignedBy: assignedBy.first_name,
            assignedBy_id: assignedBy.id,
            assignedTo: assignedTo.first_name,
            assignedTo_id: assignedTo.id
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

  Card.where({ id: card.id })
    .save({
      title: card.title,
      body: card.body,
      priority_id: card.priority_id,
      status_id: card.status_id,
      created_by: card.created_by,
      assigned_to: card.assigned_to
    }, { patch: true })
    .then(() => {
      Card.fetchAll({
        withRelated: ['priority', 'status', 'createdBy', 'assignedTo']
      })
        .then((cards) => {
          cardList = cards.models;
          cards = [];


          cardList.forEach(card => {
            let relations = card.relations;
            const priority = relations.priority.attributes;
            const status = relations.status.attributes;
            const assignedBy = relations.createdBy.attributes;
            const assignedTo = relations.assignedTo.attributes;

            const cardData = {
              id: card.id,
              title: card.attributes.title,
              body: card.attributes.body,
              priority: priority.name,
              priority_id: priority.id,
              status: status.name,
              status_id: status.id,
              assignedBy: assignedBy.first_name,
              assignedBy_id: assignedBy.id,
              assignedTo: assignedTo.first_name,
              assignedTo_id: assignedTo.id
            }

            cards.push(cardData);
          });
          res.json(cards);
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