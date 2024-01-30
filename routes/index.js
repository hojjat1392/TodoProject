const express = require("express");//import express for using Router
//using exporess router
const router = express.Router();

//import getIndex method from todos-shows module
const todosController = require("../controllers/todos-show");

//send data to root web page using getIndex method from todos-show module
router.get("/", todosController.getIndex);

module.exports = router;
