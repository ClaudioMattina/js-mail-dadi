/* creare array con le email che possono accedere */
/* richiedere l'imput dell'email dall'utente */
/* è nella lista di quelli che possono accedere ? */
/* se si, scrivi un messaggio appropriato, se no, scrivi un messaggio appropriato alla risposta negativa */


const emailUtente = prompt("inserisci emali");
const emailNecessarie = [ "ciccio.pasticcio@ciccio.com", "ci.si.becca@ciccio.com", "bella.raga@ciccio.com", "okkeeeeeiiii@ciccio.com"];

/* ho creato un ciclo for che dice: i = 0, i deve essere minore uguale della lunghezza dell'array (del numero di elementi presenti nell'array), fai un'altro giro nel caso sia si*/
for(i = 0; i<= emailNecessarie.length; i++){

    /* usando includes gli ho detto: se nell'insieme (array) delle emeailNecessarie è incluso l'input dell'utente scrivi bravo altrimenti scrivi cattivo */
    if(emailNecessarie.includes(emailUtente)) {
        console.log("bravo");
    }
    else{
        console.log("cattivo")
    };
};



/* SECONDO ESERCIZIO */

/* generiamo un numero casuale da 1 a 6 dato dal giocatore*/
/* generiamo un numero casuale da 1 a 6 dato dal PC */
/* se il pc fa genera il numero più grande stampare "IA vince" se è il giocatore a fare il n più grande, stampare "Human vince" */
/* nel caso di pareggio stampare "ritiriamo" */