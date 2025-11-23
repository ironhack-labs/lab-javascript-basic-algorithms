// Iteration 1: Names and Input
let hacker1 = "Alice"; // Driver's name
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bob"; // Navigator's name
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

// 3.1 Driver's name in uppercase with spaces
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedName.trim());

// 3.2 Navigator's name reversed
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// 3.3 Lexicographic order
if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1: Lorem Ipsum word count & "et" occurrences
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Etiam et justo at lacus. Etiam et velit nec urna. 
Vestibulum et sapien et odio.`;

let words = longText.split(" ").length;
console.log(`Total words: ${words}`);

let countEt = 0;
for (let i = 0; i < longText.length; i++) {
  if (longText.substring(i, i + 2).toLowerCase() === "et") {
    countEt++;
  }
}
console.log(`Number of times "et" appears: ${countEt}`);

// Bonus 2: Palindrome checker
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedPhrase = "";

// Clean the string: remove non-letter characters and lowercase
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  if (char >= 'a' && char <= 'z') {
    cleanedPhrase += char;
  }
}

// Check palindrome
let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(`Is palindrome? ${isPalindrome}`);
