// Iteration 1: Names and Input
const hacker1 = "Omar";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Ali";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const difference = hacker1.length - hacker2.length;

if (difference > 0) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (difference < 0) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
let spacedName = "";

for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    spacedName += " ";
  }
}
console.log(spacedName);

// 3.2
let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// 3.3
const lexiOrder = hacker1.localeCompare(hacker2);

if (lexiOrder < 0) {
  console.log("The driver's name goes first.");
} else if (lexiOrder > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const wordsCount = longText.split(" ").length;
console.log(`Words count: ${wordsCount}`);

const etCount = longText.match(/et/g).length;
console.log(`"et" count: ${etCount}`);

// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";

const cleaned = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "");

const isPalindrome = cleaned === cleaned.split("").reverse().join("");

console.log(`Is palindrome: ${isPalindrome}`);