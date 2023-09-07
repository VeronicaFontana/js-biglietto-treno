/* Creo le due variabili in prompt per l'età e i km; metto parseInt in modo che la stringa sia letta come numero */
const km = parseInt(prompt("Quanti chilometri devi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));

/* Calcolo il costo per i km */
const costoAlKm = km * 0.21;

/* .toFixed() arrotonda alla cifra decimale che gli specifico, in questo caso la seconda */
console.log(costoAlKm.toFixed(2)); 
const costoAlKmDecimale = costoAlKm.toFixed(2);

/* Calcolo il costo con gli sconti e creo due variabili con i risultati */
const costoBigliettoMinorenni = (costoAlKmDecimale - ((costoAlKmDecimale * 20) / 100)).toFixed(2);
const costoBigliettoOver = (costoAlKmDecimale - ((costoAlKmDecimale * 40) / 100)).toFixed(2);

/* Creo un if con 4 situazioni: la prima è con età fuori scala o non un numero, la seconda nel caso di un minorenne, la terza per un over 65, l'ultima per tutti gli altri casi; tutto testato in console */
if ((age < 0) || (age > 110) || (isNaN(age))){
  console.log("Inserire un'età valida");   
} else if (age < 18){
  console.log("Il tuo biglietto costa " + costoBigliettoMinorenni + " €");
} else if (age > 65) {
  console.log("Il tuo biglietto costa " + costoBigliettoOver + " €");
} else {
  console.log("Il tuo biglietto costa " + costoAlKmDecimale + " €")
}

/* Funziona, quindi creo la variabile messaggio e vado a selezionare in HTML l'id dell'H1 in modo che il risulttao si veda anche in pagina */
let messaggio;

if ((age < 0) || (age > 110) || (isNaN(age))){
  messaggio = `Inserire un'età valida`;   
} else if (age < 18){
  messaggio = `Il tuo biglietto costava ${costoAlKmDecimale}€, ma con lo sconto sono ${costoBigliettoMinorenni}€`;
} else if (age > 65) {
  messaggio = `Il tuo biglietto costava ${costoAlKmDecimale}€, ma con lo sconto sono ${costoBigliettoOver}€`;
} else {
  messaggio = `Il tuo biglietto costa ${costoAlKmDecimale}€`
}

document.getElementById("Costo").innerHTML = messaggio;
