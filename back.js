var insertdati=require('./insert.js'); 

//lista che conterrà le notizie
var notizie =[];

notizie= insertdati.RitornaTutteLeNotizie();

/**
 * @restituisce le notizie di una certa categoria.
 * @param [in] string tiposcelto, il tipo della notizia. Può essere: "Hot", "Notizie città" o "Notizie Università"
 * @return temp [], lista di notizie del tipo prescelto.
 */
function StampaNotizie(tiposcelto)
{
    //imopstiamo il limite a 3, appunto per scopi puramente di sviluppo di questa versione web, nell'app definitiva NON ci dovrà essere
    var conta=0,limite=3;
    
    var temp =[];
    
    for (var i=0; i<notizie.length; i++)
    {
        if (notizie[i].tipo==tiposcelto && conta<limite)
        {
            temp.push(notizie[i]);
            conta++;
        }
    }
    
    //se il tipo è sbagliato restituisco delle notizie scelte casualmente tra le notizie disponibili
    if(conta==0)
    {
        for(var i=0; i<limite;i++)
        {
            temp.push(notizie[Math.floor((Math.random() * notizie.length))]); 
        }
    }
    
    return temp;

}


exports.StampaNotizie = StampaNotizie;
