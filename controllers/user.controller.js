const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userModel.create({
      name,
      email,
      password,
    });
    if (newUser) {
      return res.status(200).json({
        message: newUser,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        error: "No such user found",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        error: "Invalid Credetials",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        username: user.name,
      },
      process.env.JWT_SECRET
    );
    res.status(200).json({
      message: "Login Successfull",
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, login };
