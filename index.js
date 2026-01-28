// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name
let hacker1 = "Geo";

// 1.2 Print "The driver's name is XXXX"
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name
let hacker2 = "Joanie";

// 1.4 Print "The navigator's name is YYYY"
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
// 2.1 Compare the lengths of hacker1 and hacker2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
// 3.1 Print the driver's name in capital letters, with spaces
let driverSpaced = hacker1.toUpperCase().split('').join(' ');
console.log(driverSpaced);

// 3.2 Print the navigator's name in reverse order
let navigatorReversed = hacker2.split('').reverse().join('');
console.log(navigatorReversed);

// 3.3 Lexicographic order comparison
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


// Example: paste 3 paragraphs from Lorem Ipsum
// Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
Lorem et ipsum dolor sit amet, et consectetur adipiscing elit. 

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, et consectetur, adipisci velit.`;


// Count the number of words
let words = longText.split(/\s+/).filter(word => word.length > 0); 
console.log(`Number of words: ${words.length}`);

// Count how many times the Latin word 'et' appears
// Use regex with word boundaries to match only whole words
let etMatches = longText.match(/\bet\b/g);
let etCount = etMatches ? etMatches.length : 0;
console.log(`Number of times 'et' appears: ${etCount}`);


// Create a variable with a phrase
let phraseToCheck = "A man, a plan, a canal, Panama!";

// Step 1: Clean the string
let cleaned = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();

  // Skip non-alphabetic characters
  if (char < 'a' || char > 'z') {
    continue;
  }
  cleaned += char;
}

// Step 2: Check if it's a palindrome
let isPalindrome = true;
for (let i = 0; i < Math.floor(cleaned.length / 2); i++) {
  if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

// Step 3: Print the result
if (isPalindrome) {
  console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
  console.log(`"${phraseToCheck}" is NOT a palindrome.`);
}

// Bonus 2 - ouch! fun!
// Create a variable with a phrase
let phraseToCheck = "A man, a plan, a canal, Panama!";

// Step 1: Clean the string
let cleaned = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();

  // Skip non-alphabetic characters
  if (char < 'a' || char > 'z') {
    continue;
  }
  cleaned += char;
}

// Step 2: Check if it's a palindrome
let isPalindrome = true;
for (let i = 0; i < Math.floor(cleaned.length / 2); i++) {
  if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

// Step 3: Print the result
if (isPalindrome) {
  console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
  console.log(`"${phraseToCheck}" is NOT a palindrome.`);
}

