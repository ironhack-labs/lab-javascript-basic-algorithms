// Iteration 1: Names and Input
const hacker1 = "Mario"; // Hier Driver-Namen eintragen
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Luigi"; // Hier Navigator-Namen eintragen
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

// 3.1 Driver's name in caps with spaces
let driverNameSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameSpaced += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameSpaced.trim());

// 3.2 Navigator's name reversed
let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

// 3.3 Lexicographic order
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


// BONUS 1: Lorem Ipsum counter
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

// Word count
const wordCount = longText.split(" ").length;
console.log(`Word count: ${wordCount}`);

// Count the word "et"
let etCounter = 0;
const wordsArray = longText.split(" ");
for (let i = 0; i < wordsArray.length; i++) {
  // Wir prüfen auf "et", ignorieren aber Satzzeichen drumherum
  if (wordsArray[i] === "et" || wordsArray[i] === "et.") {
    etCounter++;
  }
}
console.log(`Number of times "et" appears: ${etCounter}`);


// BONUS 2: Palindrome check
const phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanStr = "";

// Nur Buchstaben behalten und in Kleinschreibung umwandeln
for (let i = 0; i < phraseToCheck.length; i++) {
  const char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    cleanStr += char;
  }
}

let isPalindrome = true;
for (let i = 0; i < cleanStr.length / 2; i++) {
  if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("The phrase is a palindrome!");
} else {
  console.log("Not a palindrome.");
}