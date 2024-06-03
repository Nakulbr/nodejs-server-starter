const { createTodo } = require("../controllers/todo.controller");
const express = require("express");
const { verify } = require("../utils/verify.middleware");

const router = express.Router();

router.use(verify);

router.post("/todo/create", createTodo);

module.exports = router;
