import express from 'express'; //Web Server dependency
import path from 'path'; //Dependency object that helps to relate with paths in project folder
import open from 'open';//Dependency that opens links/application with given variables

const port = 3000;
const app = express();

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
