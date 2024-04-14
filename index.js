// Iteration 1: Names and Input
let hacker1 = 'Peter';
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Julia'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)
} else {
    console.log(`Wow you both have equally long names, ${hacker1.length}`)
}

// Iteration 3: Loops
//3.1 metodo toUpperCase() convierte a mayúsculas, metodo trim() elimina el ultimo espacio
let hacker1Capitalized = "";
for (let i = 0; i < hacker1.length; i++) {
    hacker1Capitalized += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Capitalized.trim());

//3.2

// Inicialización de la variable hacker2Reversed: Se crea una variable vacía llamada hacker2Reversed. Esta variable almacenará la cadena invertida.
// Bucle for: El bucle for se utiliza para iterar sobre los caracteres de la cadena hacker2 en orden inverso.
// Inicialización del índice: i se inicializa en hacker2.length - 1, que es el índice del último carácter de la cadena.
// Condición de continuación: El bucle continúa mientras i sea mayor o igual a 0, lo que significa que el bucle recorrerá todos los caracteres de la cadena desde el final hasta el principio.
// Decremento del índice: Después de cada iteración, i se decrementa en 1 (i--), moviéndose hacia el principio de la cadena.
// Concatenación de caracteres: Dentro del bucle, se concatena cada carácter de hacker2 en la posición i a la cadena hacker2Reversed. Esto se hace utilizando el operador +=, que añade el carácter actual a la cadena hacker2Reversed.
// Impresión de la cadena invertida: Una vez que el bucle ha terminado de iterar sobre todos los caracteres de hacker2, se imprime la cadena hacker2Reversed, que ahora contiene la cadena original invertida.

let hacker2Reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reversed += hacker2[i];
}
console.log(hacker2Reversed);

//3.3 método localeCompare() compara dos cadenas de texto y devuelve un número negativo si la primera cadena es menor que la segunda, un número positivo si la primera cadena es mayor que la segunda, o 0 si son iguales.'

let comparisonResult = hacker1.localeCompare(hacker2);

if (comparisonResult < 0) {
    console.log("The driver's name goes first.");
} else if (comparisonResult > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
