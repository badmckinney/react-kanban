const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const passport = require('passport');
// const bcrypt = require('bcryptjs');
const redis = require('connect-redis')(session);
// const LocalStrategy = require('passport-local');
const flash = require('connect-flash');
const router = require('./routes/main');

// const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
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

app.use('/', router);

const server = app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

module.exports = server;