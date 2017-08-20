var express = require('express');
var app = new express();

app.set('port', (process.env.PORT || 5000));

app.route('/')
.get(function(req,res){
  res.status(200).send("You've reached Homepage.");
});

app.route('/boldlogs')
.post(function(req,res){
  res.status(200).send("Got BoldChat logs!");
  console.log("Received Bold POST!");
  console.log("Hostname \n" + req.hostname);
  console.log("Body \n" + req.body);
  console.log("\nCookies \n" + req.cookies);
  console.log("\nFresh? \n" + req.fresh);
})

app.route('/boldlogs')
.get(function(req,res){
  res.status(200).send("Get equivalent of Bold Node!");
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
