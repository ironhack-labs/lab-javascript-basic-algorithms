// ==========================================
// Iteration 1: Names and Input
// ==========================================
const hacker1 = "Alex"; // <-- Pon aquí tu nombre (Driver)
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Navigator"; // <-- Pon aquí el nombre de tu compi (Navigator)
console.log(`The navigator's name is ${hacker2}`);


// ==========================================
// Iteration 2: Conditionals
// ==========================================
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// ==========================================
// Iteration 3: Loops
// ==========================================

// 3.1 Nombre del driver en mayúsculas y con espacios
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedName.trim()); // .trim() quita el espacio final extra

// 3.2 Nombre del navigator al revés
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// 3.3 Orden lexicográfico (abecedario)
// Pasamos todo a minúsculas para comparar bien
const name1Lower = hacker1.toLowerCase();
const name2Lower = hacker2.toLowerCase();

if (name1Lower < name2Lower) {
  console.log("The driver's name goes first.");
} else if (name1Lower > name2Lower) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


// ==========================================
// Bonus Time!
// ==========================================

// --- BONUS 1 ---
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Et, et.`;

// Contar palabras
// Dividimos el texto por espacios para crear un array de palabras
const wordsArray = longText.split(" ");
console.log(`The number of words is: ${wordsArray.length}`);

// Contar la palabra 'et'
let etCount = 0;
for (let i = 0; i < wordsArray.length; i++) {
  // Limpiamos la palabra de signos de puntuación (comas, puntos) para comparar solo la palabra
  let cleanWord = "";
  for (let j = 0; j < wordsArray[i].length; j++) {
    let char = wordsArray[i][j].toLowerCase();
    // Si es una letra de la 'a' a la 'z', la añadimos
    if (char >= "a" && char <= "z") {
      cleanWord += char;
    }
  }
  
  // Si la palabra limpia es exactamente "et", sumamos 1
  if (cleanWord === "et") {
    etCount++;
  }
}
console.log(`The word 'et' appears ${etCount} times.`);


// --- BONUS 2: Palindrome ---
const phraseToCheck = "A man, a plan, a canal, Panama!";

// 1. Limpiar la frase (quitar espacios y signos) y pasar a minúsculas
let cleanPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  // Solo añadimos letras y números
  if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
    cleanPhrase += char;
  }
}

// 2. Comprobar si es palíndromo usando un bucle
let isPalindrome = true;
// Solo necesitamos recorrer hasta la mitad de la frase
for (let i = 0; i < cleanPhrase.length / 2; i++) {
  // Comparamos la letra del principio con la del final correspondiente
  if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
    isPalindrome = false;
    break; // Si falla una, ya no es palíndromo, salimos del bucle
  }
}

if (isPalindrome) {
  console.log("It is a palindrome!");
} else {
  console.log("It is not a palindrome.");
}