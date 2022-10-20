const express = require("express");
const logger = require("./middlerware/logger");

const app = express();

// making a custom middle ware
app.use(function (req, res, next) {
  console.log("This is Middle ware running ");
  next(); //we need to pass the middle to next on
});

app.use(logger.log());

app.listen(process.env.PORT || 5000);

console.log("listening to the port 5000");
