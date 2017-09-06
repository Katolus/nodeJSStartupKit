import express from 'express'; //Web Server dependency
import path from 'path'; //Dependency object that helps to relate with paths in project folder
import open from 'open';//Dependency that opens links/application with given variables
import webpack from 'webpack';//Adding webpack and webpack config to server configuration
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config); // We are using webpack comipler with the configurations we have made

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo:true,
  publicPath: config.output.publicPath
}));// Using webpack with express

app.get("/users", function(req,res){
  res.json([
    {"id":1,"firstName":"Piotr","lastName":"Katolik","email":"p.p.katolik@gmail.com"},
    {"id":2,"firstName":"Pawel","lastName":"Chrzescijanin","email":"piotrpawel91@gmail.com"},
    {"id":3,"firstName":"Jacek","lastName":"Jesus","email":"nauka.dane@gmail.com"}
  ])
})// mock API that return set off listed data

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
