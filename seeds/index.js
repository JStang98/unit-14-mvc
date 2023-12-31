const sequelize = require("../config/connection");
const seedUser = require("./user-seeds");
const seedPost = require("./post-seeds");
const seedComment = require("./comment-seeds");

const seedAll = async() => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  await seedPost();
  await seedComment();

 process.exit(0);
};
seedAll()
