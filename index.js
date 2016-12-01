var express = require("express");           
var app = express();                        
var bind = require("bind");
var back = require("./back.js");
var bodyParser = require('body-parser');

//imposto parametri del server
app.listen(process.env.PORT || 5000);
app.use(express.static(__dirname + '/Scripts'));
app.use(bodyParser.urlencoded({ extended: false }));

//evento generato in risposta all'evento post del form "visualizza"
app.post('/CaricaSezione', function(req, res)
    {
        //se ho premuto sulla sezione Notizia Città, indifferemente dalla prima o seconda sezione cliccabile
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
        
    
        //se ho premuto sulla sezione Notizia Università, indifferemente dalla prima o seconda sezione cliccabile
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
        //Se ho cliccato la prima o la seconda sezione e non sono nei casi precedenti significa che voglio tornare alle sezione "Hot"
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
           

//in una prima fase, setta i valori
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

