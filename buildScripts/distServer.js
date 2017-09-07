import express from 'express'; //Web Server dependency
import path from 'path'; //Dependency object that helps to relate with paths in project folder
import open from 'open';//Dependency that opens links/application with given variables
import compression from 'compression'; // packs your production code with gzip

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression()); // Not usable on prod - just to see this package is created
app.use(express.static('dist'));

app.get("/users", function(req,res){
  res.json([
    {"id":1,"firstName":"Piotr","lastName":"Katolik","email":"p.p.katolik@gmail.com"},
    {"id":2,"firstName":"Pawel","lastName":"Chrzescijanin","email":"piotrpawel91@gmail.com"},
    {"id":3,"firstName":"Jacek","lastName":"Jesus","email":"nauka.dane@gmail.com"}
  ])
})// mock API that return set off listed data

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, function (err) { //Listen on a define port and if error occours:
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
})
