// Iteration 1: Names and Input

const hacker1 = "Fabien";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Edvi";

console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops

// Iteration 3.1 : print in capital letters with space
let finalName = "";

for (let i = 0; i < hacker1.length; i++) {
  if (i !== 0) {
    finalName += " " + hacker1[i].toUpperCase();
  } else {
    finalName += hacker1[i].toUpperCase();
  }
}

console.log(finalName);

// Iteration 3.2 : print the reverse name

let finalNameReversed = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  finalNameReversed += hacker1[i];
}

console.log(finalNameReversed);

// Iteration 3.3 : Print in the lexicographic order

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const hacker1Initial = hacker1[0];
const hacker2Initial = hacker2[0];

let hacker1InitialIndex = "";
let hacker2InitialIndex = "";

for (let i = 0; i < alphabet.length; i++) {
  if (alphabet[i] === hacker1Initial) {
    hacker1InitialIndex = i;
  }
  if (alphabet[i] === hacker2Initial) {
    hacker2InitialIndex = i;
  }
}

if (hacker1InitialIndex < hacker2InitialIndex) {
  console.log("The driver's name goes first.");
} else if (hacker1InitialIndex > hacker2InitialIndex) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Alternative solution
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let wordCount = 1;

let etCount = 0;

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis quam id arcu pellentesque, et egestas urna elementum. Suspendisse ut urna a erat ultricies fringilla. Cras elit orci, egestas id ipsum vitae, congue ullamcorper augue. Nam quis ante erat. Duis quis massa tellus. Cras a tortor ullamcorper leo sagittis sodales eget non urna. Suspendisse fermentum sollicitudin odio eu euismod. Etiam vel nunc at felis luctus aliquet tristique id turpis.
Vestibulum pulvinar iaculis mi, quis imperdiet urna molestie sed. Donec ut nulla pellentesque, fringilla mi aliquam, auctor lacus. Aliquam vitae nisi interdum, egestas orci nec, iaculis dui. Fusce ultricies ipsum vel feugiat vehicula. Vestibulum porta, velit sit amet vestibulum volutpat, nisi quam egestas lacus, ut pharetra quam ipsum sit amet ante. Cras imperdiet ligula sed viverra sagittis. Maecenas aliquam in nibh eget ornare. Duis quis arcu sem. Aliquam commodo augue ut erat scelerisque, non mattis nisi luctus. Aliquam et ex in nulla tristique venenatis hendrerit ac nunc. Sed massa velit, fringilla vel pulvinar sit amet, elementum non tellus. Integer sit amet libero eget erat tempus rutrum nec consectetur nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec consequat, velit non semper euismod, tellus neque sagittis elit, vitae vestibulum eros augue sit amet massa.
Sed non lobortis tellus. Quisque aliquam posuere nisl, id ornare nulla varius et. Aenean tempor luctus velit facilisis vehicula. Praesent ut erat id urna auctor imperdiet. Morbi mollis, lacus a fermentum pulvinar, ante mi venenatis felis, id vulputate arcu nibh vel elit. Duis cursus venenatis dui, nec mollis urna. Pellentesque pharetra ante quis sodales tristique. Phasellus feugiat porta nisl. Aliquam eget venenatis dui, et faucibus lacus.`;

if (paragraph === "") {
  wordCount = 0;
} else {
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === " ") {
      wordCount++;
    }
    if (
      paragraph[i - 1] === " " &&
      paragraph[i] === "e" &&
      paragraph[i + 1] === "t" &&
      (paragraph[i + 2] === " " || paragraph[i + 2] === ".")
    ) {
      etCount++;
    }
  }
}
console.log(wordCount);
console.log(etCount);

//Bonus 2:

let phraseToCheck = "Amor, Roma";

phraseToCheck = phraseToCheck.toLowerCase();

let prereversedPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] === " " ||
    phraseToCheck[i] === "," ||
    phraseToCheck[i] === "!" ||
    phraseToCheck[i] === "?" ||
    phraseToCheck[i] === "'" ||
    phraseToCheck[i] === "."
  ) {
    continue;
  } else {
    prereversedPhrase += phraseToCheck[i];
  }
}

let reversedPhrase = "";

for (let i = prereversedPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += prereversedPhrase[i];
}

if (prereversedPhrase === reversedPhrase) {
  console.log(`${phraseToCheck}: It's a palindrome!`);
} else {
  console.log(`${phraseToCheck}: Not a palindrome!`);
}

/// Bonus 2 with the use of a function

function testPalindrome(phraseToCheck) {
  phraseToCheck = phraseToCheck.toLowerCase();

  let prereversedPhrase = "";

  for (let i = 0; i < phraseToCheck.length; i++) {
    if (
      phraseToCheck[i] === " " ||
      phraseToCheck[i] === "," ||
      phraseToCheck[i] === "!" ||
      phraseToCheck[i] === "?" ||
      phraseToCheck[i] === "'" ||
      phraseToCheck[i] === "."
    ) {
      continue;
    } else {
      prereversedPhrase += phraseToCheck[i];
    }
  }

  let reversedPhrase = "";

  for (let i = prereversedPhrase.length - 1; i >= 0; i--) {
    reversedPhrase += prereversedPhrase[i];
  }

  if (prereversedPhrase === reversedPhrase) {
    console.log(`${phraseToCheck}: It's a palindrome!`);
  } else {
    console.log(`${phraseToCheck}: Not a palindrome!`);
  }
}

testPalindrome("A man, a plan, a canal, Panama!");
testPalindrome("Amor, Roma");
testPalindrome("race car");
testPalindrome("stack cats");
testPalindrome("step on no pets");
testPalindrome("taco cat");
testPalindrome("put it up");
testPalindrome("Was it a car or a cat I saw?");
testPalindrome("No 'x' in Nixon");
