const express = require('express');
const app = express();

// config middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
app.use(require('./config/routes'));

//run server
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("app listening at http://%s:%s", host, port);
})