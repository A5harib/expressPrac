const file = require("fs");
function event_logger(req, res, next) {
  // Perform operation
  //getuserip without socket
  const ip = req.ip;
  const client_req = req.url;
  //basic date and time
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  console.log(
    `1 - (req) for ${client_req} - Req Time = ${formattedDate}- Middleware executed - IP = ${ip}`
  );

  file.appendFileSync(
    "project_loger.txt",
    `1 - (req) for ${client_req} - Req Time = ${formattedDate} IP = ${ip} \n\n`
  );

  next();
}

module.exports = { event_logger };
