require('dotenv').config();
const express = require("express");
const app = express();
// const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/twitter", (req, res) => {
  res.send("Vaibhav.com");
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login at balle balle</h1>')
});

app.get('/youtube', (req, res) => {
  res.send("<h2>Chai or Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on the port : ${port}`);
});