//router config
const express = require(`express`);
const router = express.Router();
const { createUser } = require("../controllers/UserController");
const path = require("path");
//createUser
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/form.html"));
});
router.post("/", createUser);

//otp
router.get(`/otp`, (req, res) => {
  const otp1 = Math.floor(300 + Math.random() * 300);
  const otp2 = Math.floor(300 + Math.random() * 300);
  res.send(`<h1>Your OTP is ${otp1}-${otp2} </h1>`);
});

module.exports = router;
