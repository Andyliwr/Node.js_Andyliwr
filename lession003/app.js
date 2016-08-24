var express = require('express');
var utility = require('utility');

var app = express();

app.post('/', function(req, res){
    var mingwen = req.param.mingwen;

    var miwen = utility.md5(mingwen);
    res.send(miwen);
    console.log(miwen);
});

app.get('/', function(req,res){
   res.send("世界，你好！！");
});

app.listen(3500, function(){
   console.log("app is listen at port 3500!!");
});
