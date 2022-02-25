/* creare array con le email che possono accedere */
/* richiedere l'imput dell'email dall'utente */
/* è nella lista di quelli che possono accedere ? */
/* se si, scrivi un messaggio appropriato, se no, scrivi un messaggio appropriato alla risposta negativa */


const emailUtente = prompt("inserisci emali");
const emailNecessarie = [ "ciccio.pasticcio@ciccio.com", "ci.si.becca@ciccio.com", "bella.raga@ciccio.com", "okkeeeeeiiii@ciccio.com"];



for(i = 0; i<= emailNecessarie.length; i++){

    if(emailUtente.includes == emailNecessarie) {
        console.log("bravo");
    }
    else{
        console.log("cattivo")
    };
};
