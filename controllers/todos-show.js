const Todo = require("../model/todo");

exports.getIndex = (req, res) => {
  Todo.count({ where: { completed: true } }).then((completedTodos) => {
    Todo.findAll().then((todos) => {
      res.render("index", {
        pageTitle: "فهرست کارها",
        todos,
        completedTodos,
        remainingTodos: todos.length - completedTodos,
      });
    });
  });
};
