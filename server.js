const express = require("express");
const app = express();
const path = require(`path`);
app.set(`view engine`, `ejs`);
app.use(login);
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  //   res.send(`<h1 class="">hi</h1>`);
  res.sendFile(path.join(__dirname, `./views/index.html`));
});

const userRouter = require(`./routes/users`);
app.use("/users", userRouter);

function login(req, res, next) {
  console.log(req.originalUrl);
  next();
}
app.listen(5173);
