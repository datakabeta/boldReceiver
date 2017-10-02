<<<<<<< HEAD
// function main() {
  var express = require('express');
  var app = new express();
  var bodyParser = require('body-parser');

  console.log("Got here0");
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.set('port', (process.env.PORT || 3000));

  console.log("Got here1");

  //Create HTTP server and listen on default port
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port ', app.get('port'));
  });

  console.log("Got here2");

  //Sample homepage code.
  app.get('/',function(req,res){
    res.status(200).send("You've reached the Homepage.");
  });

  console.log("Got here3");

  //Receives BoldChat POST requests
  app.post('/boldlogs',function(req,res){
    console.log("Chat Details: \n");
    console.log(req.body);
  });

// };
=======
var express = require('express');
var app = new express();
var bodyParser = require('body-parser');


app.set('port', (process.env.PORT || 5000));

app.get('/',function(req,res){
  res.status(200).send("You've reached the Homepage.");
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/boldlogs',function(req,res){
  console.log("Received Bold POST!");
  console.log("Body: \n");
  console.log(req.body);
  console.log("\nFresh? \n" + req.fresh);
//  console.log(req.get('Content-Type'));
  //res.json(req.body);

  console.log("Moving on... \n");
  AID = process.env.AID || 0;
  SETTINGSID = process.env.APISETTINGSID || 0;
  KEY = process.env.APIKEY || 0;

  console.log("AID: "+AID);
  console.log("KEY: "+KEY);
  console.log("SETTINGSID: "+SETTINGSID);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
>>>>>>> 6117a74112f9233320229abe395e1a45991191df
