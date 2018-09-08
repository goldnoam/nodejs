const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var dt = require('./myfirstmodule');
var url = require('url');
var os = require("os");
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt + os.EOL);
  res.write("<p>The date and time are currently: " + dt.myDateTime());
  res.end();
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});