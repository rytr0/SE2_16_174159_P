var request = require("request");
var prova = require("../back.js");

var base_url= "http://localhost:5000/"


/* Test per get /
  * controlla se il server risponde con l'header 200
  */
describe("Test / get ", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "/", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200); 
                done();
            });
    }); 
});


/* Test per get /
  * controlla se il server risponde con l'header 200
  */
describe("Test /CaricaSezione", function() {
    it("returns status code 200", function(done) {
        request.post(
            base_url + "/CaricaSezione", 
            function(error, response, body) {
                expect(response.statusCode).toBe(200); 
                done();
            });
    }); 
});


/* Test per la funzione 
  * che preleva le notizie e le mette in un vettore
  */

describe("Test  StampaNotizie", function() 
{
    it("returns array of 'notizie' ", function(done) 
    {
        //testo con stringa nulla, una parola inventata e con una parola esistente
        var v = prova.StampaNotizie();
        expect(v).not.toBeNull(); 
        
        var v = prova.StampaNotizie("aaa");
        expect(v).not.toBeNull(); 
        
        var v = prova.StampaNotizie("Hot");
        expect(v).not.toBeNull(); 
        done();
    });
    
}); 