const km = parseInt(prompt("Quanti chilometri devi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));

const costoAlKm = km * 0.21;

console.log(costoAlKm.toFixed(2)); 
/* .toFixed() arrotonda alla cifra decimale che gli specifico, in questo caso la seconda */
const costoAlKmDecimale = costoAlKm.toFixed(2);

const costoBigliettoMinorenni = costoAlKmDecimale - ((costoAlKmDecimale * 20) / 100);
const costoBigliettoOver = costoAlKmDecimale - ((costoAlKmDecimale * 40) / 100);

if ((age < 0) || (age > 110)){
  console.log("Inserire un'età valida");   
} else if (age < 18){
  console.log("Il tuo biglietto costa " + costoBigliettoMinorenni + " €");
} else if (age > 65) {
  console.log("Il tuo biglietto costa " + costoBigliettoOver + " €");
} else {
  console.log("Il tuo biglietto costa " + costoAlKmDecimale + " €")
}



