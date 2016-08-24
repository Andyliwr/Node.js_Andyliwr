var express = require('express');

var app = express();

app.get('/', function(req,res){
   res.send("世界，你好！！");
});

app.listen(3500, function(){
   console.log("app is listen at port 3500!!");
});

