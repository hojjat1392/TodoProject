const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

router.post("/add-todo", adminController.addTodo);

router.get("/delete-todo/:id", adminController.deleteTodo); //در  این قسمت وقتی میخواهیم id را دریافت کنیم باید حتما بعد از مسیر :id را اضافه کنیم
router.get("/completed-todo/:id", adminController.completeTodo);

module.exports = router;
