// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name. Aquí creamos una variable llamada hacker1 y le asignamos el nombre del conductor (driver). En este caso, he usado "Juan" como ejemplo

let hacker1 = "Juan";

// 1.2 Print "The driver's name is XXXX". Utilizamos console.log() para imprimir un mensaje que incluya el nombre almacenado en hacker1. La concatenación se realiza usando el operador +.

console.log("The driver's name is " + hacker1);

// 1.3 Create a variable hacker2 with the navigator's name. Creamos otra variable llamada hacker2 y le asignamos el nombre del navegante (navigator). En este caso, he usado "Maria" como ejemplo.

let hacker2 = "Maria";

// 1.4 Print "The navigator's name is YYYY".

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

// Suponemos que ya tenemos los nombres de hacker1 y hacker2

let hacker1 = "Juan";   // Nombre del conductor
let hacker2 = "Maria";  // Nombre del navegante

//  2.1. Depending on which name is longer, print:
//  - The driver has the longest name, it has XX characters. or
//  - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}


// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let hacker1 = "Juan";   // Nombre del conductor
let hacker2 = "Maria";  // Nombre del navegante

//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let driverNameSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
    driverNameSpaces += hacker1[i].toUpperCase() + " "; // Convertir a mayúsculas y agregar un espacio
}

console.log(driverNameSpaces.trim()); // Imprimir el resultado sin el espacio final

// 3.2 Print all the characters of the navigator's name in reverse order
let navigatorNameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorNameReverse += hacker2[i]; // Agregar cada carácter en orden inverso
}

console.log(navigatorNameReverse); // Imprimir el nombre del navegante al revés
//3.3 Depending on the lexicographic order of the strings, print:

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

/* Bonus
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.

Generar 3 párrafos de texto usando un generador de Lorem Ipsum.
Contar el número de palabras en el texto.
Contar cuántas veces aparece la palabra "et".
*/
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. 
Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;

const wordCount = longText.split(/\s+/).length; // Se divide el texto en palabras y se cuenta

const etCount = (longText.match(/et/g) || []).length; // Buscar "et" y contar ocurrencias

console.log(`Número de palabras: ${wordCount}`);
console.log(`Número de veces que aparece "et": ${etCount}`);


/*Bonus 2:
Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

const phraseToCheck = "A man, a plan, a canal, Panama!";

// Función para comprobar si una frase es un palíndromo
function isPalindrome(phrase) {
    // Eliminar caracteres no alfabéticos y convertir a minúsculas
    const cleanedPhrase = phrase.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Comparar la frase con su reverso
    return cleanedPhrase === cleanedPhrase.split('').reverse().join('');
}

// Comprobar si es un palíndromo
if (isPalindrome(phraseToCheck)) {
    console.log(`"${phraseToCheck}" es un palíndromo.`);
} else {
    console.log(`"${phraseToCheck}" no es un palíndromo.`);
}