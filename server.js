var port = 443;
var express = require('express');
var app = new express();

app.route('/receive')
.get(function(req,res){
  res.status(200).send("This is the API");
});

app.listen(port, function(){
  console.log("App listening");
});
