// Iteration 1: Names and Input

let hacker1 = "driver's name";
console.log("The driver's name is XXXX");
let hacker2 = "navigator's name";
console.log("The navigator's name is YYYY")

// Iteration 2: Conditionals

let driver1 =  "The driver has the longest name, it has XX characters.";
let driver1_char = driver1.length;

let navigator = "It seems that the navigator has the longest name, it has XX characters.";
let navigator_char1 = navigator.length;

console.log(navigator_char1);
console.log(driver1_char);

if (driver1_char > navigator_char1) {
    console.log("The driver has the longest name, it has XX characters.");
} else if (navigator_char1 > driver1_char) {
    console.log("It seems that the navigator has the longest name, it has XX characters.");
} else {
    console.log("Wow, you both have equally long names, XX characters!");
}



// Iteration 3: Loops

// 3.1 --------------
/* Imprimir los caracteres del nombre del conductor, separados por espacios y en letras mayúsculas , es decir, "J O H N". */

// Primera forma:
let name = "John";
let nameSeparate = name.split('').join(' ').toUpperCase();
console.log(nameSeparate);

// Segunda forma:


let nombreConductor = "John";
let resultado = "";

for (let i = 0; i < nombreConductor.length; i++) {

  resultado += nombreConductor[i].toUpperCase();
  
  if (i < nombreConductor.length - 1) {
    resultado += " ";
  }
}
console.log(resultado);

// 3.2 ----------------------
/* 3.2 Imprimir todos los caracteres del nombre del navegante en orden inverso, es decir, "nhoJ". */

let navigator_name = "John";
let name_reverse = '';

for (let i = navigator_name.length - 1; i >= 0; i--) {
    name_reverse += navigator_name[i];
}

console.log(name_reverse);

// 3.3  ----------------------------
/* 
Dependiendo del orden lexicográfico de las cadenas, imprima:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?
*/

let driver_name ="Anna";
let navigator1_name ="Gerard";

let result_comparison = driver_name.localeCompare(navigator1_name); // .localeCompare --> retorna según orden alfabético

if (result_comparison < 0) {
    console.log("The driver's name goes first.");
} else if (comparisonResult > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bono 1

/* 
Vaya al sitio web del generador de lorem ipsum y:

1. - Genera 3 párrafos. Almacene el texto en una nueva variable de cadena denominada longText.
Haga que su programa cuente el número de palabras en la cadena.

2. - Haz que tu programa cuente el número de veces que et aparece la palabra latina.
*/
// 1
let LongText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. 

Lorem ipsum dolor sit amet, et consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. 

Lorem ipsum dolor sit amet, consectetur et adipiscing elit. et Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.`;

let numPalabras = LongText.split(/\s+/).length;

console.log(`El número de palabras en el texto es: ${numPalabras}`);


// 2 
let palabras = LongText.split(' ');
let palabraRepetida = 'et';
let contador = 0;

for (let i = 0; i < palabras.length; i++) {
    if(palabras[i] === palabraRepetida) {
        contador++;
    }
}

console.log(`La palabra ${palabraRepetida} se repite ${contador} veces`);

