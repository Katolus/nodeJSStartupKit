var express = require("express"); //Web Server dependency
var path = require("path"); //Dependency object that helps to relate with paths in project folder
var open = require("open");//Dependency that opens links/application with given variables

var port = 3000;
var app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function (err) { //Listen on a define port and if error occours:
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
})
