const http = require("http");

const server = http.createServer((req, res) => {
  res.write(req.url);
  res.end();
});

server.listen(3000);

console.log("listening to 3000");
