const session = require('express-session');
const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'Super secret secret',
  cookie: { expires: 15 * 60 * 1000},
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});