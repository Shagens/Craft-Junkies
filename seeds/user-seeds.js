const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'kelia',
    email: 'kelia@email.com',
    password: 'password1234'
  },
  {
    username: 'kam',
    email: 'kam@email.com',
    password: 'password1234'
  },
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;