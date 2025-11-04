// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
const hacker1 = "John";

// 1.2 Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1);


// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = "Jane";

// 1.4 Print "The navigator's name is YYYY".
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
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
let driverNameSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameSpaced += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameSpaced.trim());

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

/* Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears. */

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Etiam et turpis mattis, egestas erat a, commodo libero. 
Nullam et quam nec leo facilisis tincidunt. 
Pellentesque et justo nec urna efficitur tincidunt. 
Vestibulum et velit euismod, pulvinar erat at, fermentum odio.`;

const wordCount = longText.split(" ").length;
const etCount = (longText.match(/et/g) || []).length;

console.log("Number of words:", wordCount);
console.log("Number of times 'et' appears:", etCount);

/* Bonus 2:
Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon". */

const phraseToCheck = "A man, a plan, a canal, Panama!";
const cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z]/g, '');
const reversedPhrase = cleanedPhrase.split('').reverse().join('');

if (cleanedPhrase === reversedPhrase) {
  console.log("The phrase is a palindrome.");
} else {
  console.log("The phrase is not a palindrome.");
}
