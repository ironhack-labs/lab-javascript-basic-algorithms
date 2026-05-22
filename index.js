// Iteration 1: Names and Input

let hacker1 = "Ana";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Thomas";
console.log(`The navigator's name is ${hacker2}`);

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

let driverNameCaps = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameCaps += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameCaps.trim());

let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Fusce ac turpis eu nibh vulputate aliquam. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.

Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.`;

let wordCount = 0;
let inWord = false;
for (let i = 0; i < longText.length; i++) {
  const char = longText[i];
  if (char !== " " && char !== "\n" && char !== "\t") {
    if (!inWord) {
      wordCount++;
      inWord = true;
    }
  } else {
    inWord = false;
  }
}
console.log(wordCount);

let etCount = 0;
for (let i = 0; i < longText.length; i++) {
  if (
    longText[i] === "e" &&
    longText[i + 1] === "t" &&
    (i === 0 || !/[a-zA-Z]/.test(longText[i - 1])) &&
    (i + 2 >= longText.length || !/[a-zA-Z]/.test(longText[i + 2]))
  ) {
    etCount++;
  }
}
console.log(etCount);

// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

let cleanedPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  const char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    cleanedPhrase += char;
  }
}

let reversedPhrase = "";
for (let i = cleanedPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += cleanedPhrase[i];
}

let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length; i++) {
  if (cleanedPhrase[i] !== reversedPhrase[i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("It's a palindrome!");
} else {
  console.log("It's not a palindrome!");
}
