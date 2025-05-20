async function hasher(password) {
  const bcrypt = require("bcrypt");
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log("Hashed password: ", hashedPassword);
}

module.exports = { hasher };
