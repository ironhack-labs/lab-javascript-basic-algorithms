// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
const driverSpacedUpper = hacker1.toUpperCase().split("").join(" ");
console.log(driverSpacedUpper);

const navigatorReversed = hacker2.split("").reverse().join("");
console.log(navigatorReversed);

const lexicographic = hacker1.localeCompare(hacker2);
if (lexicographic < 0) {
  console.log("The driver's name goes first.");
} else if (lexicographic > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Iteration 4: Lorem ipsum text analysis
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.`;

const wordCount = longText.trim().split(/\s+/).length;
console.log(`The number of words in the string is: ${wordCount}`);

const etMatches = longText.toLowerCase().match(/\bet\b/g);
const etCount = etMatches ? etMatches.length : 0;
console.log(`The Latin word et appears ${etCount} times.`);

// Iteration 5: Palindrome check
const phraseToCheck = "A man, a plan, a canal, Panama!";
const normalizedPhrase = phraseToCheck
  .toLowerCase()
  .replace(/[^a-z0-9]/g, "");
const reversedPhrase = normalizedPhrase.split("").reverse().join("");
const isPalindrome = normalizedPhrase === reversedPhrase;
console.log(`Phrase to check: "${phraseToCheck}"`);
console.log(isPalindrome ? "This phrase is a palindrome." : "This phrase is not a palindrome."); 
