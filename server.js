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

app.listen(port, function(){
  console.log("Server listening on Port "+ port);
});
