const todoModel = require("../models/todo.model");

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(404).json({
        error: "Title must be sent",
      });
    }
    const newTodo = todoModel({ title, description });
    await newTodo.save();
    res.status(200).json({
      message: "todo created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTodo };
