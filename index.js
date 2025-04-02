// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops


// Iteration 1: Names and Input
let hacker1 = "Andres"; // Cambia el nombre según sea necesario
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Maria"; // Cambia el nombre según sea necesario
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print the driver's name in uppercase with spaces
let driverNameUppercase = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameUppercase += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameUppercase.trim());

// 3.2 Print the navigator's name in reverse order
let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

// 3.3 Lexicographic order comparison
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sapien nec nisi tincidunt tincidunt. 
Vestibulum et ligula in nunc bibendum fringilla a eu lectus. Nulla facilisi.`;

let wordCount = 0;
let etCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " " || longText[i] === "\n") {
    wordCount++;
  }
  if (longText.slice(i, i + 3).toLowerCase() === "et ") {
    etCount++;
  }
}
wordCount++; // Contar la última palabra
console.log(`The text contains ${wordCount} words.`);
console.log(`The word "et" appears ${etCount} times.`);

// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i].match(/[a-zA-Z]/)) {
    cleanedPhrase += phraseToCheck[i].toLowerCase();
  }
}

let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}
