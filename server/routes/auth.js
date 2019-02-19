const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../../database/models/User');

const saltRounds = 12;

/************************
 *  REGISTER
************************/

router.post('/register', (req, res) => {
  User.where({ username: req.body.username }).fetch()
    .then((dbUser) => {
      if (dbUser) {
        res.status(400);
        return res.json({ success: false });
      }

      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          res.status(500);
          res.json({ success: false });
        }

        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) {
            res.status(500);
            res.json({ success: false });
          }

          return new User({
            username: req.body.username,
            password: hash,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
          })
            .save()
            .then((user) => {
              return res.json({ success: true });
            })
            .catch((err) => {
              res.status(500);
              return res.json({ success: false });
            });
        });
      });
    });
});

/************************
 *  LOGIN
************************/

router.post('/login', passport.authenticate('local'), (req, res) => {
  return res.json({ success: true });
});

/************************
 *  LOGOUT
************************/

router.get('/logout', (req, res) => {
  req.logout();
  return res.json({});
});

module.exports = router;