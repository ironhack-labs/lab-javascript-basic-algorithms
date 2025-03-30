// Iteration 1: Names and Input
let hacker1 = "Alice";
console.log("The driver's name is " + hacker1);

let hacker2 = "Bob";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
  } else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
  } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
  }
  

// Iteration 3: Loops
//3.1 
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedName.trim());

//3.2
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

//3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }

  let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Phasellus et ligula vitae libero vestibulum dapibus. 
Suspendisse potenti. Vivamus et ipsum et neque tincidunt efficitur.`;

let wordCount = 0;
let inWord = false;

for (let i = 0; i < longText.length; i++) {
  let char = longText[i];
  if (char === ' ' || char === '\n') {
    if (inWord) {
      wordCount++;
      inWord = false;
    }
  } else {
    inWord = true;
  }
}
if (inWord) wordCount++; // Count last word if text doesn't end with space
console.log("Number of words:", wordCount);

// Count occurrences of 'et'
let etCount = 0;
for (let i = 0; i < longText.length - 1; i++) {
  if (
    longText[i] === 'e' &&
    longText[i + 1] === 't' &&
    (i === 0 || longText[i - 1] === ' ' || longText[i - 1] === '\n') &&
    (i + 2 === longText.length || longText[i + 2] === ' ' || longText[i + 2] === '.' || longText[i + 2] === ',')
  ) {
    etCount++;
  }
}
console.log("Number of times 'et' appears:", etCount);

// Bonus 2: Palindrome check
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleaned = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  if (char >= 'a' && char <= 'z') {
    cleaned += char;
  }
}

let isPalindrome = true;
for (let i = 0; i < cleaned.length / 2; i++) {
  if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("It's a palindrome!");
} else {
  console.log("It's not a palindrome.");
}