//router config
const express = require(`express`);
const router = express.Router();
const { createUser } = require("../controllers/UserController");
const { UsersModel } = require("../models/Users");
const path = require("path");
//createUser
router.get("/register/new", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/form.html"));
});
router.post("/register/new", createUser);

//roles
router.put("/:username/role", async (req, res) => {
  const { username } = req.params;
  const { role } = req.body;
  console.log(role, username);
  const validRoles = ["Admin", "Customer", "Salesman"];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ error: "Invalid role specified." });
  }

  try {
    const user = await UsersModel.findOneAndUpdate(
      { username },
      { role },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ message: "Role updated successfully!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//get all users
router.get("/list", async (req, res) => {
  try {
    const users = await UsersModel.find();
    let html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User List</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
          }
          th {
            background-color: #f4f4f4;
            text-align: left;
          }
          tr:nth-child(even) {
            background-color: #f9f9f9;
          }
        </style>
      </head>
      <body>
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            ${users.map(user => `
              <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
                <td>${user.role}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </body>
      </html>
    `;
    res.send(html);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//update user password
router.put("/:username", async (req, res) => {
  const { username } = req.params;
  const { password } = req.body;
  try {
    const user = await UsersModel.findOneAndUpdate(
      { username },
      { password },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ message: "Password updated successfully!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//del user
router.delete("/delete/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await UsersModel.findOneAndDelete({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// //otp
// router.get(`/otp`, (req, res) => {
//   const otp1 = Math.floor(300 + Math.random() * 300);
//   const otp2 = Math.floor(300 + Math.random() * 300);
//   res.send(`<h1>Your OTP is ${otp1}-${otp2} </h1>`);
// });

module.exports = router;
