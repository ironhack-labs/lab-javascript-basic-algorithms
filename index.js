// Iteration 1: Names and Input

const hacker1 = "Aslan";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Partner";
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

let driverName = "";

for (let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    driverName += hacker1[i].toUpperCase();
  } else {
    driverName += hacker1[i].toUpperCase() + " ";
  }
}

console.log(driverName);

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


// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et ligula non magna dignissim tincidunt. Sed vitae massa at metus porta volutpat. Integer et sapien sed erat porttitor cursus. Curabitur euismod, justo et faucibus interdum, lacus mi posuere neque, et dignissim turpis lorem non mauris.

Praesent et sem in lorem volutpat luctus. Donec vulputate, neque et interdum facilisis, velit elit egestas odio, vitae pretium ipsum urna et mauris. Maecenas et magna id erat consequat luctus. Nulla facilisi. Aliquam et nibh nec justo pulvinar iaculis.

Vivamus et lectus sed turpis vulputate tincidunt. Cras et neque sed massa facilisis interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse et dolor vitae lacus placerat pretium.`;

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

console.log(`The text has ${wordCount} words.`);

let etCount = 0;
let currentWord = "";

for (let i = 0; i <= longText.length; i++) {
  const currentCharacter = longText[i];

  if (
    i < longText.length &&
    ((currentCharacter >= "a" && currentCharacter <= "z") ||
      (currentCharacter >= "A" && currentCharacter <= "Z"))
  ) {
    currentWord += currentCharacter.toLowerCase();
  } else {
    if (currentWord === "et") {
      etCount++;
    }

    currentWord = "";
  }
}

console.log(`The word et appears ${etCount} times.`);


// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  const currentCharacter = phraseToCheck[i].toLowerCase();

  if (
    (currentCharacter >= "a" && currentCharacter <= "z") ||
    (currentCharacter >= "0" && currentCharacter <= "9")
  ) {
    cleanPhrase += currentCharacter;
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
