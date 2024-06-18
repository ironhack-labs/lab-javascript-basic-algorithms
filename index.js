// Iteration 1: Names and Input
// forma larga de declarar una variable y asignarle valor a la variable

let hacker1;
hacker1 = "manuel";
console.log("the driver's name is:", hacker1);

// Forma corta de declarar y asignar valor a la variable.
let hacker2 = "juan";
console.log("the navigator's name is:", hacker2);
// al imprimir en consola usamos , para separar el texto de la variable.

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// al imprimir en consola utilizamos en lugar de la , el + para separar el texto de la variable.


// Iteration 3: Loops()

// 3.1 Imprimir los caracteres del nombre del conductor, separados por espacios y en letras mayúsculas , es decir, "J O H N"

let upperCaseName = hacker1.toUpperCase();
let spacedName = upperCaseName.split('').join(' ');
console.log(spacedName);

//3.2 Imprimir todos los caracteres del nombre del navegante en orden inverso, es decir, "nhoJ".

let inverseName = hacker2.split('').reverse().join('');
console.log(inverseName);

// 3.3 Dependiendo del orden lexicográfico de las cadenas, imprima:

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
} 
