var express = require('express');
var async = require('async');

var app = express();

app.get('/', function(){
    
});

var concurrencyCount = 0;
//抓取函数
var fetchUrl = function(url, callback){
    var delay = parseInt((Math.random()*10000000)% 2000, 10);
    concurrencyCount++;
    console.log("现在的并发数是", concurrencyCount, '，正在抓取的是', url, '，耗时'+delay+'毫秒');
    setTimeout(function(){
        concurrencyCount--;
        callback(null, url+' html content');
    }, delay);
};
//模拟链接
var urls = [];
for(var i=0; i<30; i++){
    urls.push("http://datasource_"+i);
}

async.mapLimit(urls, 5, function(url, callback){
    fetchUrl(url, callback);
}, function(err, result){
    console.log('final:');
    console.log(result);
});

app.listen(3500, function(){
    console.log("server is started on port 3500!");
});