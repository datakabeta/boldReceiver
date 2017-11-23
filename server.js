
  var express = require('express');
  var app = new express();
  var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
  app.set('port', (process.env.PORT || 3000));

  //Create HTTP server and listen on default port
  app.listen(app.get('port'), function() {
   console.log('Node app is running on port ', app.get('port'));
  });

  //Handles Bold exports
  app.post('/boldlogs',function(req,res){
    var contype = req.headers['content-type'];
    console.log(contype);
    console.log("Chat Log \n");
    console.log(req.body);
    console.log("\n");
    console.log(req.hostname);
    console.log("\n");
    console.log(req.baseURL);
    console.log("\n");
    console.log(req.path);
    console.log("\n");
    res.send('Received chat');
  })

  //404 Catch all
  app.use(function(req,res){
    res.send("Random page!");
    console.log("\nAnother 404");
  })
