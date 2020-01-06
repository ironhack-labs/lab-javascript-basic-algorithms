console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Jackie";
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = "Shahinya";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1 Print all characters of Driver's name, uppercase and with spaces in between.
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedName);

// 3.2 Print all the characters of the navigator's name, in reverse order.
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// 3.3 Alphabetical order
let hackerNames = [hacker1, hacker2];
hackerNames.sort();

if (hackerNames.indexOf(hacker1) < hackerNames.indexOf(hacker2)) {
  console.log("The driver's name goes first.");
} else if (hackerNames.indexOf(hacker2) < hackerNames.indexOf(hacker1)) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1 Word count
let paragraphs = "";

let numberOfWordsArr = paragraphs.split(" ");
let arrLength = numberOfWordsArr.length;
console.log(arrLength);

// Bonus 2 Palindromes
let phraseToCheck = "race car";
let phraseWithoutSpaces = phraseToCheck.replace(/ /g, "");

let wordLength = phraseWithoutSpaces.length;

let halfWordLength = Math.floor(wordLength / 2);

let firstHalf = "";
for (let i = 0; i <= halfWordLength; i++) {
  firstHalf += phraseWithoutSpaces[i];
}

let secondHalf = "";
for (let i = phraseWithoutSpaces.length - 1; i >= halfWordLength; i--) {
  secondHalf += phraseWithoutSpaces[i];
}

if (firstHalf === secondHalf) {
  console.log("This string is a palindrome!");
} else {
  console.log("This string is not a palindrome.");
}
