// Iteration 1: Names and Input

const hacker1 = "Marco";
console.log("The driver's name is " + hacker1);

const hacker2 = "Fernando";
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

let spacedName = "";

for (let i = 0; i < hacker1.length; i++) {
  spacedName = spacedName + hacker1[i].toUpperCase() + " ";
}

console.log(spacedName);


let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName = reversedName + hacker2[i];
}

console.log(reversedName);


// Lexicographic order

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


// Bonus 1

const longText = "Et lorem ipsum et dolor sit amet, consectetur adipiscing elit. Sed et magna ut enim fermentum tempor. Vivamus et sapien nec justo suscipit tincidunt.";

let wordCount = 0;
let insideWord = false;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] !== " " && longText[i] !== "\n" && longText[i] !== "\t") {
    if (insideWord === false) {
      wordCount++;
      insideWord = true;
    }
  } else {
    insideWord = false;
  }
}

console.log("Number of words: " + wordCount);


let etCount = 0;
let currentWord = "";

for (let i = 0; i < longText.length; i++) {
  let char = longText[i].toLowerCase();

  if (
    char !== " " &&
    char !== "." &&
    char !== "," &&
    char !== "!" &&
    char !== "?" &&
    char !== ";" &&
    char !== ":" &&
    char !== "\n"
  ) {
    currentWord = currentWord + char;
  } else {
    if (currentWord === "et") {
      etCount++;
    }
    currentWord = "";
  }
}

if (currentWord === "et") {
  etCount++;
}

console.log("Number of times 'et' appears: " + etCount);

// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!";

let cleanPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();

  if (
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
  ) {
    cleanPhrase = cleanPhrase + char;
  }
}


let isPalindrome = true;

for (let i = 0; i < cleanPhrase.length / 2; i++) {
  if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
    isPalindrome = false;
  }
}

if (isPalindrome) {
  console.log("It is a palindrome.");
} else {
  console.log("It is not a palindrome.");
}