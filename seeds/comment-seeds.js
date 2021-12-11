const { Comment } = require('../models');

const commentdata = [
  {
    content: 'sticky mess and very stinky!!',
    user_id: 2,
    post_id: 2
  },
  {
    content: 'hair is very shiny afterwards',
    user_id: 2,
    post_id: 2
  },
  {
    content: 'easier than i thought!!',
    user_id: 1,
    post_id: 1
  },
  {
    content: 'will never buy another from a store',
    user_id: 1,
    post_id: 1
  },
  {
    content: 'I can make this for gifts!!',
    user_id: 1,
    post_id: 1
  },
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;