var express = require("express");           
var app = express();                        
var bind = require("bind");
var back = require("./back.js");
var bodyParser = require('body-parser');


app.listen(1337, "127.0.0.1");
app.use(express.static(__dirname + '/Scripts'));


app.use('/', function(req, res)
    {    
        bind.toFile('index.tpl', 
        {
            Sezione:"Hot",
            titolo1:"aato",
            notizia1:"beeet",
            notizia2:"qualcosas s skjaldjn",
            notizia3:"qualcosas s skjaldjn"
        }, 
        function(data) 
        {
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data);
        });  
});

