const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const redis = require('connect-redis')(session);
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');
const router = require('./routes/main');

const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;
const SESSION_SECRET = process.env.SESSION_SECRET || 'bulbasaur';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  store: new redis({ url: 'redis://redis-server:6379', logErrors: true }),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  return done(null, {
    id: user.id,
    username: user.username,
    role_id: user.role_id
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
        role_id: dbUser.role_id
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
      return done(err);
    });
}));

app.use('/', router);

const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

module.exports = server;