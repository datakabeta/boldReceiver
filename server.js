
  var express = require('express');
  var app = new express();
  var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(bodyParser.raw());
  app.set('port', (process.env.PORT || 3000));

  //Create HTTP server and listen on default port
  app.listen(app.get('port'), function() {
   console.log('Node app is running on port ', app.get('port'));
  });

  //Handles Bold exports
  app.post('/boldlogs',function(req,res){
    console.log("Chat Log: \n");
    console.log(req.body);
    console.log(req.ip);
    console.log(req.hostname);
    console.log(req.ips);
    console.log(req.originalUrl);
    console.log(req.subdomains);
    console.log(req.protocol);
    res.send('Received chat!');
  })

  //404 Catch all
  app.use(function(req,res){
    res.send("Random page!");
    console.log("\nAnother 404");
  })
