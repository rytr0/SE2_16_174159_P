var express = require("express");           
var app = express();                        
var bind = require("bind");
var back = require("./back.js");
var bodyParser = require('body-parser');


app.listen(1337, "127.0.0.1");
app.use(express.static(__dirname + '/Scripts'));


app.use('/', function(req, res)
    {    
        var notizie = back.StampaNotiziHot();
    
        bind.toFile('index.tpl', 
        {
            Sezione: "Hot",
            titolo1:notizie[0].titolo,
            notizia1:notizie[0].testo,
            titolo2:notizie[1].titolo,
            notizia2:notizie[1].testo,
            titolo3:notizie[2].titolo,
            notizia3:notizie[2].testo,
            Sezione2: "Notizi Città",
            Sezione3: "Notizie Università"
            
        }, 
        function(data) 
        {
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data);
        });  
});

