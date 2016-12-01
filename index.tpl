<html>
    
  <head>
    <title>Progetto Vale</title>
    <link href="vista.css" rel="stylesheet" type="text/css">
  </head>
    
  <body>
      
      <!-- Tabella di dimensione preffissate e non generate dinamicamente per farla funzionare anche senza abilitazione javascript.
        L'emepio non è molto veritiero:in una potenziale applicazione Android si dovrebbero leggere tutte le raggruppate sotto una categoria
        Il mia è tuttavia una demo a scopo emulativo e rappresentativo-->
    <div id="contenuto">
        
        <table>
            <tr>
                <th id="Sezioneid">(:Sezione:)</th>
            </tr>
            <tr id="Notiziaid">
                <th>(:titolo1:) </th>
            </tr>
            <tr id="Notiziaid">
                <td>(:notizia1:)</td>
            </tr>
            <tr id="Notiziaid">
                <th>(:titolo2:) </th>
            </tr>
            <tr id="Notiziaid">
                <td>(:notizia2:)</td>
            </tr>
            <tr id="Notiziaid">
                <th>(:titolo3:) </th>
            </tr>
            <tr id="Notiziaid">
                <td>(:notizia3:)</td>
            </tr>            
        </table>
    </div>
      
    <div id="CambioSezione">
                
        <form  id="visualizza" action="/CaricaSezione" method="post">
            <input type="submit" id="Sez2" name="Sez2" value="(:Sezione2:)"></th>
            <br>
            <input type="submit" id="Sez3" name="Sez3" value="(:Sezione3:)"></th>
        </form>
    
    </div>

    <div id="BottoniBassi">
        <button id="btnCitta"><a href="index.tpl">Città</a></button>
        <button id="btnUni"><a href="#">Università</a>/button>
        <button id="btnMappa"><a href="#">Mappa</a></button>
        <button id="btnEve"><a href="#">Eventi</a></button>
    </div>

  </body>

</html>