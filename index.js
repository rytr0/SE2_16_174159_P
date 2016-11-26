var express = require("express");           
var app = express();                        
var bind = require("bind");
//var back = require("./script.js");
var bodyParser = require('body-parser');


app.listen(1337, "127.0.0.1");
app.use(express.static(__dirname + '/Scripts'));
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', function(req, res)
    {
        bind.toFile('index.tpl', 
        {
        }, 
        function(data) 
        {
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data);
        });  
});
dSDS


