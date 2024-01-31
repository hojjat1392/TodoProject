const Todo = require("../model/todo");

exports.addTodo = async (req, res) => {
  //add new todo
  if (!req.body.todo) return res.redirect("/");
  try {
    await Todo.create({ text: req.body.todo });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

exports.deleteTodo = async (req, res) => {
  //استفاده از params برای دریافت id کار که از طریق url دریافت شده.
  try {
    await Todo.destroy({ where: { id: req.params.todo } });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

exports.completeTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    todo.completed = true;
    res.redirect("/");
    return todo.save();
  } catch (error) {
    console.log(err);
  }
};
