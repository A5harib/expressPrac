//usermodel
const { UsersModel } = require("../models/Users");

//controllers

async function createUser(req, res) {
  try {
    const user = new UsersModel(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { createUser };
