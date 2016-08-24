var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/', function(){
    superagent.get('http://cnodejs.org/')
        .end(function(err, sres){
            if(err){
                return next(err);
            }

            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each(function(idx, element){
                var $element = $(element);
                items.push(
                    {
                        title: $element.attr('title'),
                        href: $element.attr('href')
                    }
                );
            })
            console.log(items);
        })
});

app.listen(3500, function(){
    console.log("service is started on 3500 port.");
});