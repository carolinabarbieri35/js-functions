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

