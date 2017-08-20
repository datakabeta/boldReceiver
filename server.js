var express = require('express');
var app = new express();

app.set('port', (process.env.PORT || 5000));

app.route('/')
.get(function(req,res){
  res.status(200).send("You've reached Homepage.");
});

app.route('/receive')
.get(function(req,res){
  res.status(200).send("Placeholder for BoldChat trigger receiver.");
});

app.route('/boldlogs')
.post(function(req,res){
  res.status(200).send("Got BoldChat logs!");
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
