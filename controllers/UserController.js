//controllers
const path = require("path");
async function getUserHtmlForm(req, res) {
  res.sendFile(path.join(__dirname, `../views/form.html`));
}

module.exports = { getUserHtmlForm };
