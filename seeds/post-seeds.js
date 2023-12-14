const { Post } = require("../models")

const postData = [
  {
    title: "Why you, yes you, smell really bad",
    text: "I mean, do I even have to say anything? Look at youself, filthy, disgusting.",
    user_id: 1
  },
  {
    title: "Why user: globus should be banned",
    text: "All of his posts suck",
    user_id: 2
  },
  {
    title: "Can't we all just get along?",
    text: "Can we all come together and agree tha every blog post on this site is godawful?",
    user_id: 3
  }
]









const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost