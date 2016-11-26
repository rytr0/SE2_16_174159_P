var express = require("express");           
var app = express();                        
var bind = require("bind");
//var back = require("./script.js");
var bodyParser = require('body-parser');


app.listen(1337, "127.0.0.1");
app.use(express.static(__dirname + '/Scripts'));


app.use('/', function(req, res)
    {
        bind.toFile('index.tpl', 
        {
            Titolo:"Hot",
            notizia1:"qualcosas s skjaldjn",
            notizia2:"qualcosas s skjaldjn",
            notizia3:"qualcosas s skjaldjn"
        }, 
        function(data) 
        {
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data);
        });  
});

