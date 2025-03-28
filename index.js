// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1 Driver's name in uppercase and separated by space
console.log(hacker1.toUpperCase().split("").join(" "));

// 3.2 Navigator's name in reverse order
console.log(hacker2.split("").reverse().join(""));

// 3.3 Lexicographic order
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1: Word count and 'et' occurrences
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sapien et libero dapibus.`;
let wordCount = longText.split(/\s+/).length;
let etCount = (longText.match(/\b[Ee]t\b/g) || []).length;
console.log(`Word count: ${wordCount}`);
console.log(`'Et' count: ${etCount}`);

// Bonus 2: Palindrome check
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "");
let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome ? "It's a palindrome!" : "It's not a palindrome.");
