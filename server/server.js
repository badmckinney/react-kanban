const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const redis = require('connect-redis')(session);
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');
const router = require('./routes/cards');
const authRouter = require('./routes/auth');
const User = require('../database/models/User');

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;
const SESSION_SECRET = process.env.SESSION_SECRET || 'bulbasaur';

if (!PORT) {
  throw new Error('PORT not set');
}

if (!ENV) {
  throw new Error('ENV not set');
}

if (!SESSION_SECRET) {
  throw new Error('SESSION_SECRET not set');
}

const app = express();

app.use(bodyParser.json());
app.use(session({
  store: new redis({ url: 'redis://redis-server:6379', logErrors: true }),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(methodOverride('_method'));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  return done(null, {
    id: user.id,
    username: user.username,
  });
});

passport.deserializeUser((user, done) => {
  new User({ id: user.id }).fetch()
    .then(dbUser => {
      if (dbUser === null) {
        return done();
      }
      dbUser = dbUser.toJSON();
      return done(null, {
        id: dbUser.id,
        username: dbUser.username,
      });
    })
    .catch((err) => {
      return done(err);
    });
});

passport.use(new LocalStrategy(function (username, password, done) {
  return new User({ username: username }).fetch()
    .then(dbUser => {
      if (dbUser === null) {
        return done(null, false, { message: 'That username does not exist' });
      }
      else {
        dbUser = dbUser.toJSON();
        bcrypt.compare(password, dbUser.password)
          .then((res) => {
            if (res) {
              return done(null, dbUser);
            } else {
              return done(null, false, { message: 'bad username or password' });
            }
          });
      }
    })
    .catch(err => {
      console.log('catch')
      return done(err);
    });
}));

app.use('/cards', router);
app.use('/auth', authRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

module.exports = server;