var prova = require("../back.js");


/* Test per la funzione 
  * che preleva le notizie e le mette in un vettore
  * controlla:
  * 1- correct input
  * 2- wrong input
  */

describe("Test  StampaNotizie", function() 
{
    describe("on incorrect input", function()
    {
        it("returns array of 'notizie' ", function(done) 
        {
            var v = prova.StampaNotizie();
            expect(v).not.toBeNull();
            done();
        });
    });
    
    describe("another incorrect input", function()
    {
        it("returns array of 'notizie' ", function(done) 
        {
            var v1 = prova.StampaNotizie("aaa");
            expect(v1).not.toBeNull(); 
            done();
        });
    });
     
    describe("on correct input", function()
    {
        it("returns array of 'notizie' ", function(done) 
        {
            var v2 = prova.StampaNotizie("Hot");
            expect(v2).not.toBeNull(); 
            done();
        });
    });       
}); 
    
    