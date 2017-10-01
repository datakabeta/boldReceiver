function main() {
  var express = require('express');
  var app = new express();
  var bodyParser = require('body-parser');

  app.set('port', (process.env.PORT || 3000));
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  //Sample homepage code.
  app.get('/',function(req,res){
    res.status(200).send("You've reached the Homepage.");
  });

  //Receives BoldChat POST requests
  app.post('/boldlogs',function(req,res){
    console.log("Chat Details: \n");
    console.log(req.body);
  });

  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
};
