// Iteration 1: Names and Input
const hacker1 = "Guven";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Servis";
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
let driverNameSpaced = "";

for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    driverNameSpaced += hacker1[i].toUpperCase();
  } else {
    driverNameSpaced += hacker1[i].toUpperCase() + " ";
  }
}

console.log(driverNameSpaced);

let navigatorNameReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}

console.log(navigatorNameReversed);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


// Bonus 1:
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere, velit et vulputate blandit, justo neque interdum augue, et facilisis lorem enim at nulla. Donec sed risus eget augue facilisis eleifend. Integer et libero in urna luctus tincidunt sit amet vitae est. Vivamus et erat a odio dignissim finibus.

Aliquam erat volutpat. Vestibulum et lorem vel ipsum efficitur tempus. Praesent et lectus sit amet metus ullamcorper congue. Donec et orci eget sapien tristique dignissim. Sed et ligula at neque luctus consequat. Curabitur sit amet lorem et dolor dictum tempor vel et nisl.

Nam et justo vel mauris suscipit placerat. Morbi et erat id augue interdum consequat. Suspendisse et sapien non risus faucibus vestibulum. Cras et enim et neque pretium tincidunt. Etiam et purus et est viverra facilisis et et magna.`;

let wordCount = 0;
let insideWord = false;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] !== " " && longText[i] !== "\n") {
    if (insideWord === false) {
      wordCount++;
      insideWord = true;
    }
  } else {
    insideWord = false;
  }
}

console.log(`The text has ${wordCount} words.`);

let etCount = 0;

for (let i = 0; i < longText.length - 1; i++) {
  const currentLetter = longText[i].toLowerCase();
  const nextLetter = longText[i + 1].toLowerCase();
  const letterBefore = i === 0 ? " " : longText[i - 1].toLowerCase();
  const letterAfter = i + 2 >= longText.length ? " " : longText[i + 2].toLowerCase();
  const startsWithEt = currentLetter === "e" && nextLetter === "t";
  const hasBoundaryBefore = letterBefore < "a" || letterBefore > "z";
  const hasBoundaryAfter = letterAfter < "a" || letterAfter > "z";

  if (startsWithEt && hasBoundaryBefore && hasBoundaryAfter) {
    etCount++;
  }
}

console.log(`The word "et" appears ${etCount} times.`);


// Bonus 2:
const phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  const character = phraseToCheck[i].toLowerCase();

  if (character >= "a" && character <= "z") {
    cleanPhrase += character;
  }
}

let isPalindrome = true;

for (let i = 0; i < cleanPhrase.length / 2; i++) {
  if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}
