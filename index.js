var express = require("express");           
var app = express();                        
var bind = require("bind");
var back = require("./back.js");
var bodyParser = require('body-parser');


app.listen(1337, "127.0.0.1");
app.use(express.static(__dirname + '/Scripts'));
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/CaricaSezione', function(req, res)
    {
        if (req.body.Sez2=="Notizie Città" || req.body.Sez3=="Notizie Città")
        {
            
            var notizie = back.StampaNotizie("Notizie città");
            
            bind.toFile('index.tpl', 
            {
                Sezione: "Notizie Città",
                titolo1:notizie[0].titolo,
                notizia1:notizie[0].testo,
                titolo2:notizie[1].titolo,
                notizia2:notizie[1].testo,
                titolo3:notizie[2].titolo,
                notizia3:notizie[2].testo,
                Sezione2: "Hot",
                Sezione3: "Notizie Università"
            }, 
            function(data) 
            {
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(data);
            });
        }
        
        else if (req.body.Sez2=="Notizie Università" || req.body.Sez3=="Notizie Università")
        {
            
            var notizie = back.StampaNotizie("Notizie Università");
            
            bind.toFile('index.tpl', 
            {
                Sezione: "Notizie Università",
                titolo1:notizie[0].titolo,
                notizia1:notizie[0].testo,
                titolo2:notizie[1].titolo,
                notizia2:notizie[1].testo,
                titolo3:notizie[2].titolo,
                notizia3:notizie[2].testo,
                Sezione2: "Hot",
                Sezione3: "Notizie Città"
            }, 
            function(data) 
            {
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(data);
            });
        }
        else
        {
            var notizie = back.StampaNotizie("Hot");
    
            bind.toFile('index.tpl', 
            {
                Sezione: "Hot",
                titolo1:notizie[0].titolo,
                notizia1:notizie[0].testo,
                titolo2:notizie[1].titolo,
                notizia2:notizie[1].testo,
                titolo3:notizie[2].titolo,
                notizia3:notizie[2].testo,
                Sezione2: "Notizie Città",
                Sezione3: "Notizie Università"

            }, 
            function(data) 
            {
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(data);
            });  
        }
            
    });
           


app.use('/', function(req, res)
    {    
        var notizie = back.StampaNotizie("Hot");
    
        bind.toFile('index.tpl', 
        {
            Sezione: "Hot",
            titolo1:notizie[0].titolo,
            notizia1:notizie[0].testo,
            titolo2:notizie[1].titolo,
            notizia2:notizie[1].testo,
            titolo3:notizie[2].titolo,
            notizia3:notizie[2].testo,
            Sezione2: "Notizie Città",
            Sezione3: "Notizie Università"
            
        }, 
        function(data) 
        {
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data);
        });  
});

