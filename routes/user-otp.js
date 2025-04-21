//router config
const express = require(`express`);
const router = express.Router();
const path = require(`path`);
const { getUserHtmlForm } = require("../controllers/UserController.js");

router.get(`/new`, getUserHtmlForm);

router.get(`/otp`, (req, res) => {
  const otp1 = Math.floor(300 + Math.random() * 300);
  const otp2 = Math.floor(300 + Math.random() * 300);
  res.send(`<h1>Your OTP is ${otp1}-${otp2} </h1>`);
});

router.get(`/:name/:email/:password`, (req, res) => {
  const name = req.params.name;
  const email = req.params.email;
  const password = req.params.password;
  let valid = "youre not asharib!!!!!!!";
  if (password === "localhost") {
    valid = "oh hey you are asharib!";
  }
  res.send(` <h1>User Created:</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
    
    <h1><p><strong>Validation:</strong> ${valid}</p> </h1>
    `);
});

router.get(`/:id`, (req, res) => {
  const id = req.params.id;
  res.send(`Read specific id data: ${id}`);
});
// const users = [
//   { id: 1, name: `John` },
//   { id: 2, name: `Jane` },
//   { id: 3, name: `Doe` },
// ];
// router.param(`id`, (req, res, next, id) => {
//   req.user = users[id];

//   next();
// });
module.exports = router;
