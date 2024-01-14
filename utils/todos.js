const fs = require("fs");
const path = require("path");

const rootDir = require("./path");
//access to view file
const filePath = path.join(rootDir, "data", "todos");

exports.getTodos = (callback) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) return callback([]);
    callback(JSON.parse(fileContent));
  });
};

exports.saveTodos = (todos, callback) => {
  fs.writeFile(filePath, JSON.stringify(todos), (err) => {
    callback(err);
  });
};

exports.generateRandomId = () => {
  return Math.floor(Math.random() * 1000);
};

exports.completedTodos = (callback) => {
  this.getTodos((todos) => {
    const filteredTodos = todos.filter((object) => object.completed === true);
    callback(filteredTodos.length);
  });
};

exports.getRemainingTodos = (callback) => {
  this.getTodos((todos) => {
    const filteredTodos = todos.filter((object) => object.completed != true);
    callback(filteredTodos.length);
  });
};
