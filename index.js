// Iteration 1: Names and Input
const hacker1 = prompt("Introduce el nombre de tu compañero");
console.log(`The driver's name is ${hacker1}`);

const hacker2 = prompt("Introduce tu nombre");
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
// DRIVER NAME
let driverName = "";

for (let i = 0; i < hacker1.length; i++) {
  driverName = driverName + hacker1[i].toUpperCase() + " ";
}

console.log(driverName);
// NAVIGATOR NAME
let navigatorName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorName = navigatorName + hacker2[i];
}

console.log(navigatorName);

// LEXICOGRAGRAPHIC ORDER
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


/*
---------------
BONUS
---------------
1.-
*/
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.`;

let wordCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] !== " " && longText[i] !== "\n" && (i === 0 || longText[i - 1] === " " || longText[i - 1] === "\n") ) {
    wordCount++;
  }
}

console.log(wordCount);

let etCount = 0;

for (let i = 0; i < longText.length; i++) {
  if(longText[i - 1] === " " && longText[i] === "e"  && longText[i + 1] === "t" && longText[i + 2] === " ") {
    etCount++;
  }
}

console.log(etCount);


/*
1.2 
*/
const phrase = prompt("Introduce tu frase (y veremos si es un palindromo)").toLowerCase();

let cleanPhrase = "";
for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] !== " " && phrase[i] !== "," && phrase[i] !== "!" && phrase[i] !== "'" && phrase[i] !== "?" && phrase[i] !== ".") {
    cleanPhrase = cleanPhrase + phrase[i];
  }
}

let reversedPhrase = "";
for (let i = cleanPhrase.length - 1; i >= 0; i--) {
  reversedPhrase = reversedPhrase + cleanPhrase[i];
}

if (cleanPhrase === reversedPhrase) {
  console.log("The phrase is a palindrome.");
} else {
  console.log("The phrase is not a palindrome.");
}