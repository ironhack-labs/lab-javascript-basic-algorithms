// Iteration 1: Names and Input
const hacker1 = "Jose";
const hacker2 = "Amrit";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
// Jose -> J O S E
let hacker1Uppercase = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Uppercase = hacker1Uppercase + hacker1[i].toUpperCase() + " ";
}
console.log(`hacker1 name in uppercase with space: ${hacker1Uppercase}`);

// Amrit -> tirmA
let hacker2Rev = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  if (i === 0) hacker2Rev = hacker2Rev + hacker2[0].toUpperCase();
  else hacker2Rev = hacker2Rev + hacker2[i].toLowerCase();
}
console.log(`hacker2 name reversed: ${hacker2Rev}`);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1: Lorem ipsum generator
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const words = longText.split(" ");
console.log(`Total number of words: ${words.length}`);

let etCount = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase().includes("et")) {
    etCount += 1;
  }
}
console.log(`Number of times the word "et" appears: ${etCount}`);

// Bonus 2: Palindrome checker
const phraseToCheck = "A man, a plan, a canal, Panama!";
const cleanedPhrase = phraseToCheck
  .toLowerCase()
  .split("")
  .filter(
    (char) => (char >= "a" && char <= "z") || (char >= "0" && char <= "9")
  )
  .join("");
console.log("Cleaned phrase: ", cleanedPhrase);

let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(`Is the phrase "${phraseToCheck}" a palindrome? ${isPalindrome}`);

function isPalindromeFunc(phrase) {
  const cleaned = phrase
    .toLowerCase()
    .split("")
    .filter(
      (char) => (char >= "a" && char <= "z") || (char >= "0" && char <= "9")
    )
    .join("");

  for (let i = 0; i < cleaned.length / 2; i++) {
    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
