function db_connection() {
  const db = require("mongoose");
  db.connect("mongodb://127.0.0.1:27017/Restaurant").then(() =>
    console.log("MongoDB_Connected!")
  );
}

module.exports = { db_connection };
