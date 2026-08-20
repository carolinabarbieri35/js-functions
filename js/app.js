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



