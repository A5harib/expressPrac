const express = require("express");
const app = express();
const path = require(`path`);
// app.set(`view engine`, `ejs`);

app.use(express.urlencoded({extended:true}))
// app.use(express.json());

// DB Connection
// const {db_connection} = require('./config/database.js');
// db_connection();

// //User Model Import
// const {UsersModel} = require('./models/db.js');


app.get("/", (req, res) => {
  //   res.send(`<h1 class="">hi</h1>`);
  res.sendFile(path.join(__dirname, `./views/index.html`));
});

const userRouter = require(`./routes/users`);
app.use("/users", userRouter);

app.listen(5173);
