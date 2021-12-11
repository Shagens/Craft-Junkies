const { Post } = require('../models');

const postdata = [
  {
    title: 'DIY Holiday Wreath',
    post_content: 'Items needed: wreath, ribbon, ornaments, flowers(optional) and hot glue gun. Directions: Use the glue gun to attach items to the wreath. Placement is all up to You!',
    user_id: 1
  },
  {
    title: 'DIY Hair mask',
    post_content: 'Items needed: Mayo, honey, leave-in conditioner, avacado. Directions: Mix all items needed and leave on hair for 30 mins to a hr, wash out with warm water!',
    user_id: 2
  },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;