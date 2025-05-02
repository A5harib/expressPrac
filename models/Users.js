const mongoose = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 50 },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true, min: 3, max: 20 },
  password: { type: String, required: true, min: 6, max: 20 },
  role: { type: String, default: "Customer" }, 
});

// User Model
const UsersModel = mongoose.model("users", UserSchema);
module.exports = { UsersModel };
