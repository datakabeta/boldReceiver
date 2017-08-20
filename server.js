var express = require('express');
var app = new express();

app.set('port', (process.env.PORT || 5000));

app.get('/',function(req,res){
  res.status(200).send("You've reached the Homepage.");
});

app.post('/boldlogs',function(req,res){
  res.status(200).send("Got BoldChat logs!");
  console.log("Received Bold POST!");
  //console.log(req.query);
  console.log(req.body);
  console.log("\nFresh? \n" + req.fresh);
  console.log(req.get('Content-Type'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
