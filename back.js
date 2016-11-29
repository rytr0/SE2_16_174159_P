var notizie =[];

notizie.push(new Notizia(1, "Hot", "Half marathon", "Gara molto bella e entusiasmante che ti fa correre!"));
notizie.push(new Notizia(2, "Hot", "Concerto", "Concerto di un importante orchesta al teatro comunale"));
notizie.push(new Notizia(3, "Normal", "Calcio", "Trento vs Verona allo stadio"));
notizie.push(new Notizia(4, "Hot", "Freddo", "Arriva il freddo Record! :( "));
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