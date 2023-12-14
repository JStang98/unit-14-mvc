const { User } = require("../models")

const userData = [
  {
    userName: "globus",
    email: "goobusglorbus.gmail.com",
    password: "iamthegoobman"
  },
  {
    userName: "mingus",
    email: "memingus@yahoo.com",
    password: "imfeelingveryeepy"
  },
  {
    userName: "yesman",
    email: "yesguyisi@gmail.com",
    password: "yesyesyesyesyes"
  }
]









const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers