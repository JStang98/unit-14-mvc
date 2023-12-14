const  { Comment } = require("../models")

const  commentData = (
  {
    text: "this post smells, that's all I'll say",
    post_id: 1
  },
  {
    text: "mucho texto",
    post_id: 2
  }, 
  {
    text: "too long didn't read",
    post_id: 3
  },
  {
    text: "aaaaaaaaaaaaaaaaa *fell asleep on my keyboard",
    post_id: 4
  }

)

const seedPost = () => Comment.bulkCreate(commentData);
module.exports = seedPost
