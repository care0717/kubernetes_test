var sys = require("util");
var http = require("http");
var port = 8080;

http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World!!");
    sys.log("Someone access");
    response.end();
  })
  .listen(port);
sys.log("Server running at http://localhost:" + port);
