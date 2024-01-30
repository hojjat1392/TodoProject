const Todo = require("../model/todo");

exports.addTodo = (req, res) => {
  //add new todo
  if (!req.body.todo) return res.redirect("/");

  Todo.create({ text: req.body.todo })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.deleteTodo = (req, res) => {
  //استفاده از params برای دریافت id کار که از طریق url دریافت شده.
  Todo.destroy({ where: { id: req.params.id } })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
};

exports.completeTodo = (req, res) => {
  Todo.setTodoToComplete(req.params.id, (err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  });
};
