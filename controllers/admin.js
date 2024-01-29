const Todo = require("../model/todo");
const todoUtils = require("../utils/todos");

exports.addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  //create a task(instance) from Todo class
  //const todo = new Todo(Math.floor(Math.random() * 1000), req.body.todo);
  //!const todo = new Todo( todoUtils.generateRandomId(), req.body.todo);

  // todo.save((err) => {
  //   if (!err) res.redirect("/");
  //   else console.log(err);
  // });

  Todo.create({ text: req.body.todo })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.deleteTodo = (req, res) => {
  Todo.deleteTodo(req.params.id, (err) => {
    //استفاده از params برای دریافت id کار که از طریق url دریافت شده.
    if (!err) res.redirect("/");
    else console.log(err);
  });
};

exports.completeTodo = (req, res) => {
  Todo.setTodoToComplete(req.params.id, (err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  });
};
