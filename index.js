// Iteration 1: Names and Input

const hacker1 = "Islam";
const hacker2 = "Murad";

console.log(`The driver's name is ${hacker1}`);
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

let driverNameSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameSpaced += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    driverNameSpaced += " ";
  }
}
console.log(driverNameSpaced);

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

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.

Fusce ac turpis eu lorem vehicula pharetra. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.`;

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

console.log(`The text has ${wordCount} words.`);

let etCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (
    longText[i] === "e" &&
    i + 1 < longText.length &&
    longText[i + 1] === "t"
  ) {
    const before = i === 0 ? " " : longText[i - 1];
    const after = i + 2 >= longText.length ? " " : longText[i + 2];

    const isWordChar = (c) =>
      (c >= "a" && c <= "z") ||
      (c >= "A" && c <= "Z") ||
      (c >= "0" && c <= "9");

    if (!isWordChar(before) && !isWordChar(after)) {
      etCount++;
    }
  }
}

console.log(`The word "et" appears ${etCount} times.`);

// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!";

let cleanedPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  const char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    cleanedPhrase += char;
  }
}

let isPalindrome = true;

for (let i = 0; i < cleanedPhrase.length; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseToCheck}" is NOT a palindrome.`);
}
