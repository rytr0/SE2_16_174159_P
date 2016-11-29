var notizie =[];

notizie.push(new Notizia(1, "Hot", "Trento premiata città verde", "Grazie al parco di Melta, alla riqualificazione dell'ex area Michelin ed al giardino delle materne Rodari."));

notizie.push(new Notizia(2, "Hot", "Trento SmartCity", "Grazie all'amministrazione digitale oggi è possibile consultare un referto medico online, oppure pagare il bollo con lo smartphone."));

notizie.push(new Notizia(3, "Normal", "Calcio", "Trento vs Verona allo stadio"));

notizie.push(new Notizia(4, "Hot", "Archivio Fotografico Storico", "La mostra sarà inaugurata giovedì 1 dicembre alle ore 17.30 presso la sede di Torre Vanga, piazza della Portèla 1."));

notizie.push(new Notizia(5, "Hot", "Vota!", "Fai la tua scelta tra si e no!"));



function Notizia(id, tipo, titolo, testo)
{
    this.id= id;
    this.tipo = tipo;
    this.titolo = titolo;
    this.testo = testo;
}



function StampaNotiziHot()
{
    //imopstiamo il limite a 3, appunto per scopi puramente di sviluppo di questa versione web, nell'app definitiva NON ci dovrà essere
    var conta=0,limite=3;
    
    var temp =[];
    
    for (var i=0; i<notizie.length; i++)
    {
        if (notizie[i].tipo=="Hot" && conta<limite)
        {
            temp.push(notizie[i]);
            conta++;
        }
    }
    
    return temp;

}


exports.StampaNotiziHot = StampaNotiziHot;