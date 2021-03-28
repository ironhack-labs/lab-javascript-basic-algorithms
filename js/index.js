// Iteration 1: Names and Input
const hacker1 = "Ferreira";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Andrade";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest anem, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// Print all the characters of the driver's name, separated by a space and // in capitals.
let space = "";
for (let i = 0; i < hacker1.length; i++) {
  space += hacker1.charAt(i) + " ";
}

console.log(space.toUpperCase());

//3.2 Print all the characters of the navigator's name, in reverse order.
let reverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverse = reverse + hacker1.charAt(i);
}

console.log(reverse);

//3.3 Depending on the lexicographic order of the strings, print:
if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus Time!
//Bonus 1:
//Generate 3 paragraphs. Store the text in a variable type of string.
let loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a rutrum ex. Morbi nec quam quam. Cras in mauris ut mi faucibus lacinia quis vitae augue. Aliquam non quam eget lacus pharetra blanditulla non ultrices nisl. Nulla facilisi. Vivamus malesuada ipsum quis felis posuere, ultricies pretium leo rutrum.";

//Make your program count the number of words in the string.
console.log(`There are ${loremIpsum.split(" ").length} words`);

//Make your program count the number of times the Latin word et appears.
console.log(`Word: 'et' appears ${loremIpsum.split("et").length - 1} times`);

//Bonus 2:

let phraseToCheck = "step on no pets";
let palindrome = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  palindrome += phraseToCheck[i];
}

if (palindrome == phraseToCheck) {
  console.log(`Palindrome`);
} else {
  console.log(`Not Palindrome`);
}
