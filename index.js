// Iteration 1: Names and Input
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Emily";
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
// 3.1
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    spacedName += " ";
  }
}
console.log(spacedName);

// 3.2
let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

// 3.3
let lexResult = 0;
for (let i = 0; i < hacker1.length && i < hacker2.length; i++) {
  if (hacker1[i].toLowerCase() < hacker2[i].toLowerCase()) {
    lexResult = -1;
    break;
  } else if (hacker1[i].toLowerCase() > hacker2[i].toLowerCase()) {
    lexResult = 1;
    break;
  }
}

if (lexResult === 0) {
  if (hacker1.length < hacker2.length) {
    lexResult = -1;
  } else if (hacker1.length > hacker2.length) {
    lexResult = 1;
  }
}

if (lexResult < 0) {
  console.log("The driver's name goes first.");
} else if (lexResult > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget elit eget urna elementum consequat. Sed et justo et nulla facilisis fermentum. Suspendisse fermentum, augue et finibus faucibus, turpis eros consequat lacus, et pulvinar orci dolor at tortor. Nulla facilisi. Suspendisse potenti. Proin eleifend commodo neque, id mollis nulla rhoncus sed. Fusce nec sodales magna, in fermentum eros. Suspendisse vel tortor a augue eleifend facilisis. \n\nPraesent efficitur semper risus, et interdum est vehicula et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam et quam tellus. Nullam auctor lectus ut justo finibus vestibulum. Vivamus ornare vitae urna et tristique. Donec facilisis eleifend odio, vel blandit ligula condimentum id. Cras lacinia ipsum eget finibus dapibus. Aliquam consequat arcu et interdum interdum. Nulla ultrices enim justo, nec euismod risus tempus at. Pellentesque et justo non tortor lacinia faucibus sit amet ut metus. Nulla facilisi. \n\nVivamus vitae nulla in nibh iaculis faucibus. Donec id iaculis sapien. Duis consequat dolor at sodales faucibus. Nam sit amet orci et magna pretium vulputate. Morbi et tortor in ante bibendum posuere. Maecenas tempor quam non lobortis pretium. Sed porta lorem non massa volutpat, et vulputate orci sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sollicitudin neque sed sapien semper, vel lobortis nisi ultrices. Ut eu pharetra magna.";

let wordCount = 0;
let inWord = false;

for (let i = 0; i < longText.length; i++) {
  if (
    longText[i] === " " ||
    longText[i] === "\n" ||
    longText[i] === "\t" ||
    longText[i] === "."
  ) {
    if (inWord) {
      inWord = false;
    }
    continue;
  } else if (!inWord) {
    inWord = true;
    wordCount++;
  }
}
console.log(`Word count: ${wordCount}`);

// count occurrences of "et"
let etCount = 0;
for (let i = 0; i < longText.length - 1; i++) {
  if (
    longText[i] === "e" &&
    longText[i + 1] === "t" &&
    (i + 2 >= longText.length ||
      longText[i + 2] === " " ||
      longText[i + 2] === "." ||
      longText[i + 2] === ",") &&
    (i === 0 || longText[i - 1] === " ")
  ) {
    etCount++;
  }
}
console.log(`Count of "et" occurrences: ${etCount}`);

// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";

// transform to lowercase and remove non alphanumeric characters
let cleanedPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  const char = phraseToCheck[i].toLowerCase();
  if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
    cleanedPhrase += char;
  }
}

// then check if it's a palindrome
let isPalindrome = true;
for (let i = 0; i < Math.floor(cleanedPhrase.length / 2); i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(
  `"${phraseToCheck}" ${isPalindrome ? "is" : "is not"} a palindrome.`
);
