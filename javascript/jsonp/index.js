const http = require("http");

http
  .createServer((request, response) => {
    console.log("hello");
    response.writeHeader(200, { "Content-Type": "text/javascript" });
    response.end("callback({ name: 'shianqi' })");
  })
  .listen(3000);
