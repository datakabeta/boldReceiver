
  var express = require('express');
  var app = new express();
  var bodyParser = require('body-parser');

  console.log("Got here0");
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  //app.set('port', (process.env.PORT || 3000));

  console.log("Got here1");

  //Create HTTP server and listen on default port
  app.listen(app.get('port'), function() {
   console.log('Node app is running on port ', app.get('port'));
  });

  app.use(function(req,res){
    res.send("Random page!");
  })

  // console.log("Got here2");
  //
  // //Sample homepage code.
  // app.get('/',function(req,res){
  //   res.status(200).send("You've reached the Homepage.");
  // });
  //
  // console.log("Got here3");
  //
  // //Receives BoldChat POST requests
  // app.post('/boldlogs',function(req,res){
  //   console.log("Chat Details: \n");
  //   console.log(req.body);
  // });
