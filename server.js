// server.js
// database module
const fs = require("fs");
// express module
const express = require("express");
// bodyParser value
const bodyParser = require("body-parser");
// cors module
const cors = require("cors");
// mysql module
const mysql = require("mysql");
// userRoute
import userRoute from "./routes/usersRoute.js";

// data value(database.json)
const data = fs.readFileSync("./database.json");
// data parsing
const conf = JSON.parse(data);

// connection(mysql)
const conn = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

// connection start(function => database[mysql])
conn.connect();

// app value(express)
const app = express();
// port value
const port = 4000;

// use(bodyParser => json)
app.use(bodyParser.json());
// use(cors)
app.use(cors());

// user(url)
app.use("/", userRoute);

// home
app.get("/user", (req, res) => {
  // connection query
  conn.query("SELECT * FROM music", (err, rows, fields) => {
    // check data
    res.send(rows);
  });
});

// not found(url)
app.all("*", (req, res) => {
  // send response(msg)
  res.send("That route doesn't exist!");
});

// where is port?(number)
app.listen(port, function () {
  console.log(`express server is running on port ${port}`);
});
