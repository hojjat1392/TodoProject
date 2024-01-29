const Todo = require("../model/todo");

exports.getIndex = (req, res) => {
  Todo.findAll().then((todos) => {
    res.render("index", {
      pageTitle: "فهرست کارها",
      todos,
      completedTodos: 20,
      remainingTodos: 20,
    });
  });
};
