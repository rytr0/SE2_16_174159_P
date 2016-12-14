//test of the APIs

//lib for sending requests
var request = require("request");

//set base URL
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


/* Test per post /CaricaSezione
 * controlla se il server risponde con l'header 200
 *controlla:
 *un parametro
 *l'altro  parametro
 *il paraemtro di "default"
 */
describe("Test /CaricaSezione", function() {
    
    //set the data
    var data = {Sez2: 'Notizie Città'};
    it("to returns status code 200", function(done) 
    {
        request.post(base_url + "/CaricaSezione", data, function(err, res, body) 
        {
            expect(res.statusCode).toBe(200);
            done();
        });    
    });
    
    
    var data2 = {Sez3: 'Notizie Città'};
    it("to returns status code 200", function(done) 
    {
        request.post(base_url + "/CaricaSezione", data2, function(err, res, body) 
        {
            expect(res.statusCode).toBe(200);
            done();
        });    
    });
    
    
     var data3 = {Sez3: 'Hot'};
    it("to returns status code 200", function(done) 
    {
        request.post(base_url + "/CaricaSezione", data3, function(err, res, body) 
        {
            expect(res.statusCode).toBe(200);
            done();
        });    
    });
    
});
