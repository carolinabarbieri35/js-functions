console.log('hello functions!');

// Stai pianificando un viaggio negli USA. Scrivi una funzione che converta una somma in Euro nel corrispondente valore in Dollari, dato il tasso di cambio del giorno.

/**
 * funzione che converte una somma da euro a dollari
 * @param {Number} money 
 */
function converter(money) {

    const valore = money * 1.17;

    return valore;



}

const dollars = converter(500);
console.log('La tua somma convertita in $ è di', dollars);


// Un taxi applica una tariffa extra fissa dopo la mezzanotte. Scrivi una funzione che calcoli il totale della corsa dato il prezzo base all'orario di partenza e all'orario di arrivo.

/**
 * 
 * @param {number} prezzoPartenza 
 * @param {number} prezzoArrivo 
 */
function totaleCorsa(prezzoPartenza, prezzoArrivo) {

    const prezzo = prezzoPartenza + prezzoArrivo;

    const extra = prezzo + (prezzo * 25 / 100);

    return extra;


}

const corsa = totaleCorsa(26, 32);
console.log('il totale della corsa è', corsa, '€');


// Scrivi una funzione che, dato l'anno di nascita e il genere (M/F), calcoli quanti anni mancano per raggiungere l'età pensionabile (fissata a 67 anni per gli uomini e 62 per le donne).


/**
 * calcola quanti anni mancano alla pensione
 * @param {number} età 
 * @param {string} genere 
 */
function pensione(età, genere) {

    const etàUomo = 67;
    const etàDonna = 62;

    if (genere === 'M') {

        const pensioneUomo = etàUomo - età;

        return 'Ti mancano ' + pensioneUomo + ' anni alla pensione'


    } if (genere === 'F') {

        const pensioneDonna = etàDonna - età;

        return 'Ti mancano ' + pensioneDonna + ' anni alla pensione'
    }

}

const anniUtente = Number(prompt('digita la tua età'));

const genereUtente = prompt('M/F');

const calcolo = pensione(anniUtente, genereUtente);

console.log(calcolo);


// Un professore deve convertire un voto numerico in un giudizio. Scrivi una funzione che restituisca "Insufficiente", "Sufficiente" o "Ottimo" in base al punteggio.


/**
 * converte i voti in 'insuff', 'suff', 'ottimo'.
 * @param {number} punteggio 
 */
function voto(punteggio) {

    if (punteggio <= 5) {

        return 'Il tuo voto è insufficiente'

    } if (punteggio <= 8) {

        return 'Il tuo voto è sufficiente'

    } else {

        return 'Il tuo voto è ottimo'

    }



}

const votoFinale = voto(7.5);

console.log(votoFinale);


// Stai organizzando un evento. Scrivi una funzione che ti dica quanti giorni ha un determinato mese.

/**
 * riporta quanti giorni ha un determinato mese
 * @param {string} mese 
 */
function giorniDelMese(mese) {

    const trentuno = ['gennaio', 'marzo', 'maggio', 'luglio', 'agosto', 'ottobre', 'dicembre'];

    const ventotto = ['febbraio'];

    const trenta = ['aprile', 'giugno', 'settembre', 'novembre'];

    if (trentuno.includes(mese)) {

        return 'Questo mese ha 31 giorni';

    } if (ventotto.includes(mese)) {

        return 'Questo mese ha 28 giorni';

    } if (trenta.includes(mese)) {

        return 'Questo mese ha 30 giorni';

    }



}



const infoMese = giorniDelMese('aprile');

console.log(infoMese);


















