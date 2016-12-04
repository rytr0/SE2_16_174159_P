//lista che conterrà le notizie
var notizie =[];


//inserimento di alcune notizie 
notizie.push(new Notizia(1, "Hot", "Trento premiata città verde", "Grazie al parco di Melta, alla riqualificazione dell'ex area Michelin ed al giardino delle materne Rodari."));

notizie.push(new Notizia(2, "Hot", "Trento SmartCity", "Grazie all'amministrazione digitale oggi è possibile consultare un referto medico online, oppure pagare il bollo con lo smartphone."));

notizie.push(new Notizia(3, "Notizie città", "Match importante", "Allo stadio Briamasco si terrà l'attesissima partita Trento vs Verona. Vi diamo appuntamento alle 20:30"));

notizie.push(new Notizia(4, "Hot", "Archivio Fotografico Storico", "La mostra sarà inaugurata giovedì 1 dicembre alle ore 17.30 presso la sede di Torre Vanga, piazza della Portèla 1."));

notizie.push(new Notizia(5, "Hot", "Vota!", "Fai la tua scelta tra si e no!"));

notizie.push(new Notizia(6, "Notizie città", "Sempre più svago", "Divertiti a Trento! Durante il periodo invernale è stata allestita in piazza Dante una fantastica pista di pattinaggio "));

notizie.push(new Notizia(7, "Notizie città", "Tutti in piazza", "Divertiamoci assieme! Per la sera del 25 Dicembre non perderti in piazza del Duomo la fantastica festa che abbiamo organizzato per te!"));

notizie.push(new Notizia(8, "Notizie Università", "Convegno di Chimica", "L'università presenta una lezione aperta al pubblico riguardo la struttura delle molecole. Sarà per il dottor Franco"));

notizie.push(new Notizia(9, "Notizie Università", "Convegno di Fisica", "L'università è lieta di presentare un dibattito riguardo i campi elettrici. L'oratore sarà la dottoressa Anna"));

notizie.push(new Notizia(10, "Notizie Università", "Convegno di Filosofia", "L'università presenta una lezione con argomento il pensiero di Platone. Sarà presentata del dottor Marco e sarà aperta al pubblico"));


/**
 * @crea una nuova notizia.
 * @param [in] int id, l'id della notizia
 * @param [in] string tipo, il tipo della notizia. Può essere: "Hot", "Notizie città" o "Notizie Università"
 * @param [in] string titolo, il titlo della notizia.
 * @param [in] string testo, il testo della notizia.
**/
function Notizia(id, tipo, titolo, testo)
{
    this.id= id;
    this.tipo = tipo;
    this.titolo = titolo;
    this.testo = testo;
}


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
