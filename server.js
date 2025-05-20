//Restaurant Management System (RMS)
const express = require("express");
const http = require("http");
const os = require("os");
const app = express();
const path = require(`path`);

const { hasher } = require("./middleware/hashing.js");
const { event_logger } = require("./middleware/logger.js");
hasher("Asharib");
//middleware
app.use(event_logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//dbConnect
const { db_connection } = require("./config/database");
db_connection();

//basic stuff for 5173
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, `./views/index.html`));
});
const userRouter = require(`./routes/user-otp`);
app.use("/api/users", userRouter);

app.listen(5173, () => {
  console.log("http://10.9.5.103:5173");
});

//git config
//git config --global user.name "Asharib"
