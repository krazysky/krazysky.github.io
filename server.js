var connect = require("connect");
var dir = "/home/krazysky/git/home/krazysky.github.io/";
connect.createServer(
    connect.static(dir)
).listen(8080);
console.log("server started at 8080");
