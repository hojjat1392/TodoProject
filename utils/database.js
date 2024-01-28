const { Sequelize } = require("sequelize");
//? initial database
const sequelize = new Sequelize("todo_db", "root", "@013", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
