// *Snack1*
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// array = [];

// input = parseInt(prompt("inserisci il tuo numero"));

// i = 0;

// while (i < 50) {
    
//     input = parseInt(prompt("inserisci il tuo numero"));

//     i += input

//     array.push(input)


// }
// console.log(array)
// console.log(`il totale è: ${input}`)
// ---------------------------------------------------------

// *Snack2*
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let i = 0;
let n = 0;

while (i < 5) {
    let input = parseInt(prompt("inserisci numero"))
    n += input;
    i++
    
}

console.log(`la somma è ${n}`)

