const fs = require("fs");

console.log(
  fs.readdir("./", function (err, file) {
    if (err) console.log(err);
    else console.log(file);
  })
);

//always use async functions for node becasue they are non blocking
