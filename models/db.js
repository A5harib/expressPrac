const mongoose = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

// User Model
const UsersModel = mongoose.model('users', UserSchema);
module.exports = { UsersModel };