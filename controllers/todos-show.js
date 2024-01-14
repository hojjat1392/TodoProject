const Todo = require("../model/todo");
const todoUtils = require("../utils/todos");

exports.getIndex = (req, res) => {

  todoUtils.completedTodos((completedTodos) => {
    todoUtils.getRemainingTodos((remainingTodos) => {
      Todo.fetchAll((todos) => {
        res.render("index", {
          pageTitle: "فهرست کارها",
          todos,
          completedTodos,
          remainingTodos
        });
      });
    });

  });
};
