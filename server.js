//Restaurant Management System (RMS)
const express = require("express");
const http = require("http");
const os = require("os");
const app = express();
const path = require(`path`);

//middleware
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

app.listen(5173);

// //getip
// const PORT = 8080;
// const getLocalIp = () => {
//   const interfaces = os.networkInterfaces();
//   for (const name of Object.keys(interfaces)) {
//     for (const net of interfaces[name]) {
//       if (net.family === "IPv4" && !net.internal) {
//         return net.address;
//       }
//     }
//   }
//   return "127.0.0.1";
// };

// //send data
// const httpServer = http.createServer((req, res) => {
//   const ip = req.socket.remoteAddress;
//   const now = new Date().toLocaleString();
//   res.end(`
//     <h1>HTTP Server Response</h1>
//     <p><strong>Your Name:</strong> John Doe</p>
//     <p><strong>Roll Number:</strong> 12345</p>
//     <p><strong>Date/Time:</strong> ${now}</p>
//     <p><strong>Your IP:</strong> ${ip}</p>
//   `);
// });

// //checkip
// const HostIp = getLocalIp();
// httpServer.listen(PORT, HostIp, () => {
//   console.log(`running at: ${HostIp}:${PORT}`);
// });
