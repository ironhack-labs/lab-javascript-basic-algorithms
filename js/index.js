// Iteration 1: Names and Input

let hacker1 = 'Mariana';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Ferran';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
let names= [hacker1,hacker2]

if (names[0].length > names[1].length) {
    console.log (`driver's has the longest name, it has ${names[0].length} characters`)
} else if (names[1].length > names[0].length) {
    console.log(`it seems that the navigator has the longest name, it has ${names[1].length} characters`)
} else {
    console.log (`wow, you both have equally long names, ${names[0].length} characters`)
};


// Iteration 3: Loops

/* Ejercicio 1 */

let resultado = "";
for(let i=0; i < hacker1.length; i++){
    resultado += `${hacker1.charAt(i).toUpperCase()} `;
}
console.log(resultado);


/* Ejercicio 2 */

let resultado1 = "";
for(let i=hacker2.length; i > -1; i--){
    resultado1 += `${hacker2.charAt(i)}`;
}
console.log(resultado1);

let resultado2 = "";

/* Ejercicio 3 */

let phrases= ["The driver's name goes first","Yo, the navigator goes first definitely","What?! You both have the same name?"]

//let phrases= ["a","c","b"]

//console.log("a".charCodeAt(0), "b".charCodeAt(0), "c".charCodeAt(0),)

let phraseNumbers = 0;
let phraseNumbersHight = 0;
let namephraseNumbersHight = "";

// Iteramos en el array que contiene las frases dentro del array phrases
for (let i=0; i<phrases.length; i++) {
  //Inicializamos valor a 0 para que no se sume con el anterior
  phraseNumbers = 0;
  //Iteramos dentro de la frase prases[i] para recorrer cada letra que compone dicha frase
  for (let j=0; j<phrases[i].length; j++){
    //Averiguamos el valor de cada letra con charCodeAt y lo sumamos a la variable phraseNumbers
    phraseNumbers += phrases[i].charCodeAt(j)   
  }

  //Mostramos la puntuación lexicográfica de cada frase
  console.log(phraseNumbers)

  // Si la frase nueva es mayor que la antigua, asignamos como la frase con más puntuación mediante la variable phraseNumbersHight, y asignamos el string de la frase a la variable namephraseNumbersHight
  if (phraseNumbers > phraseNumbersHight) {
    phraseNumbersHight= phraseNumbers
    namephraseNumbersHight = phrases[i]
  }  
}
//Pintamos la frase con más puntuación lexicográfica
console.log(namephraseNumbersHight)

