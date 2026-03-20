// Iteración 1: Nombres e información de entrada


// Iteration 1: Names and Input
// 1.1 Crea una variable hacker1con el nombre del conductor.
// 1.2 Imprime "The driver's name is XXXX".

let hacker1 = "Doramas";
console.log("The driver's name is " + hacker1);

// 1.3 Crea una variable hacker2con el nombre del copiloto.
// 1.4 Imprime "The navigator's name is YYYY".
let hacker2 = "copiloto";
console.log("The navigator's name is " + hacker2);

// 2.1. Dependiendo de cuál nombre sea más largo , imprima:
// - The driver has the longest name, it has XX characters.o
// - It seems that the navigator has the longest name, it has XX characters.o
// - Wow, you both have equally long names, XX characters!.

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops
let Upperhacker1 = "";

for (let i = 0; i < hacker1.length; i++) {Upperhacker1 += hacker1[i].toUpperCase() + " ";}

console.log(Upperhacker1.trim());

let hacker2Reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {hacker2Reverse += hacker2[i];}

console.log(hacker2Reverse);

for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
  if (hacker1[i].toLowerCase() < hacker2[i].toLowerCase()) {
    console.log("The driver's name goes first.");
    
    } else if (hacker1[i].toLowerCase() > hacker2[i].toLowerCase()) {
    console.log("Yo, the navigator goes first, definitely.");
   
    } else if (i === Math.min(hacker1.length, hacker2.length) - 1) {
    console.log("What?! You both have the same name?");
    }
}
    
// }

// Bonificación 1:
// Vaya al sitio web del generador lorem ipsum y:

// Genera 3 párrafos. Almacena el texto en una nueva variable de cadena llamada longText.
// Haz que tu programa cuente el número de palabras en la cadena.
// Haz que tu programa cuente el número de veces etque aparece la palabra en latín.

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let wordCount = longText.split(" ").length;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCount++;
  }
}
const CountLatin = (longText.match(/et/g) || []).length;
console.log("Number of words: " + wordCount);


let countLatin = 0;

for (let i = 0; i < longText.length - 1; i++) {
  if (longText[i] === "e" && longText[i + 1] === "t") {
    countLatin++;
  }
}
console.log("Number of times 'et' appears: " + countLatin);




// 3.1 Imprima los caracteres del nombre del conductor, separados por un espacio y en mayúsculas , es decir, "J O H N".





let nameOne= "Armando"
let nametwo= "Zaida"
let nameComplet="";

for (let i = 0 ; i < nameOne.length; i++){
    nameComplet += nameOne[i].toUpperCase() + " ";
}
console.log(nameComplet);

// 3.2 Imprime todos los caracteres del nombre del navegante en orden inverso, es decir, "nhoJ".

let nameReverse = "";
for (let i = nametwo.length - 1; i >= 0; i--){
    nameReverse += nametwo[i];
}
console.log(nameReverse);
// 3.3 Dependiendo del orden lexicográfico de las cadenas, imprime:


// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?
let i = 0;
const cadenas = [nameOne, nametwo];
let decided = false;

while (i < cadenas[0].length && i < cadenas[1].length && !decided) {
  if (cadenas[0][i] < cadenas[1][i]) {
    console.log("The driver's name goes first.");
    decided = true;
  } else if (cadenas[0][i] > cadenas[1][i]) {
    console.log("Yo, the navigator goes first, definitely.");
    decided = true;
  } else {
    // mismo carácter, pasamos al siguiente
    i++;
  }
}

// Si hemos salido del bucle sin decidir, miramos longitudes o igualdad
if (!decided) {
  if (cadenas[0].length < cadenas[1].length) {
    console.log("The driver's name goes first.");
  } else if (cadenas[0].length > cadenas[1].length) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}