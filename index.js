// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".
let hacker1 = "Alice";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Bob";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
console.log(
  hacker1.length > hacker2.length
    ? `The driver has the longest name, it has ${hacker1.length} characters.`
    : hacker1.length < hacker2.length
    ? `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    : `Wow, you both have equally long names, ${hacker1.length} characters!`
);

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let driverName = hacker1.toUpperCase().split("").join(" ");
console.log(driverName);
// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let navigatorName = hacker2.split("").reverse().join("");
console.log(navigatorName);

// 3.3 Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
// Bonus 1:
// Go to the lorem ipsum generator website and:

// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// IMPORTANT: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as join(), reverse(), etc.). However, we want you to apply your current knowledge and try to come up with a solution by just using the for loop and if-else statements with some break and continue.
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul .amco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
let etCount = 0;
let words = longText.split(" ");
for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === "et") {
    etCount++;
  }
}
console.log(`The word "et" appears ${etCount} times in the text.`);

// Bonus 2: Palindrome check
let phraseToCheck = "A man, a plan, a canal, Panama!";

// Step 1: Clean the string

let cleanedSentence = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();

  // Check if it's a letter or number (basic alphabet filter)
  if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
    cleanedSentence += char;
  }
}

// Step 2: Check for palindrome
let isPalindrome = true;
for (let i = 0; i < cleanedSentence.length / 2; i++) {
  if (cleanedSentence[i] !== cleanedSentence[cleanedSentence.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

// Step 3: Output
if (isPalindrome) {
  console.log("It's a palindrome!");
} else {
  console.log("Not a palindrome.");
}
