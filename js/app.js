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


// Hai la durata di un film in minuti totali. Scrivi una funzione che la converta in un formato più leggibile "X ore e Y minuti".

/**
 * converte i minuti in x ore e y minuti
 * @param {number} minuti 
 */
function hourConverter(minutiTotali) {

    const ore = Math.floor(minutiTotali / 60);

    const minutiRimanenti = minutiTotali % 60;

    return ore + ' ore e ' + minutiRimanenti + ' minuti';

}

console.log(hourConverter(236));


// Finisce l'anno scolastico e vuoi fare la media dei tuoi voti. Scrivi una funzione che riceve tre voti numerici e restituisce la media aritmetica.

/**
 * restituisce la media dei voti
 * @param {Number} voto1 
 * @param {Number} voto2 
 * @param {Number} voto3 
 */
function mediaVoti(voto1, voto2, voto3) {

    const somma = (voto1 + voto2 + voto3) / 3;

    return somma;

}

const media = mediaVoti(5, 10, 6);
console.log('La tua media dei voti è ', media);


// Un calendario digitale deve mostrare il giorno esteso. Scrivi una funzione che riceve un numero da 1 a 7 e restituisce il nome del giorno corrispondente (1 = Lunedì, ..., 7 = Domenica). Se il numero non è valido, restituisce "Errore".

/**
 * la funziona ti indica il nome completo del giorno della settimana datogli un valore da 1 a 7 
 * @param {Number} giorno 
 * @returns giorni della settimana
 */
function calendario(giorno) {

    const settimana = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];

    if (giorno < 1 || giorno > 7) {

        return 'Errore';

    }

    return settimana[giorno - 1];
}



const giorni = calendario(1);
console.log(giorni);



// Etichetta l'utente in base alla sua età. Sotto i 18 anni "Minorenne", "Giovane Adulto" tra 18 e 35, "Adulto" se tra 36 e 60, "Senior" oltre 60.

/**
 * una funzione che ritorna un parametro legato all'età
 * @param {Number} età 
 * @returns parametro legato all'età
 */
function parametriUtente(età) {

    if (età <= 18) {
        return 'Minorenne';


    } if (età >= 18 && età <= 35) {
        return 'Giovane Adulto';


    } if (età >= 36 && età <= 60) {
        return 'Adulto';


    } else
        return 'Senior';


}

const laTuaEtà = parametriUtente(59);
console.log(laTuaEtà);



// Un tracker di spedizioni usa codici numerici. Scrivi una funzione che riceve un codice (1, 2, 3) e restituisce "In elaborazione" per 1, "Spedito" per 2, "Consegnato" per 3. Se il codice non esiste, restituisce "Stato sconosciuto".

/**
 * una funziona che indica lo stato della consegna di un ordine
 * @param {Number} codice1 
 * @param {Number} codice2 
 * @param {Number} codice3 
 * @returns lo stato della consegna
 */
function statoConsegna(codice1, codice2, codice3) {

    const datiConsegna = ['In Elaborazione', 'Spedito', 'Consegnato'];

    if (datiConsegna < 1 || datiConsegna > 3) {

        return 'Stato sconosciuto';



    }

    const stato = datiConsegna[codice1 - 1];

    return stato;

}

const laMiaConsegna = statoConsegna(3);

console.log('Il tuo ordine è ', laMiaConsegna);



























