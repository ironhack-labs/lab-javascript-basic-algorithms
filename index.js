// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops
// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".



console.log("--------ITERATION 01-----------");
console.log("-------------------");
let hacker1;
let hacker2;

hacker1 = "Ikechukwu";
hacker2 = "Andra";
console.log("Iteration #1");
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
console.log("-------------------");
console.log("-------------------");

// --------


console.log("--------ITERATION 02-----------");

// Iteration 2: Conditionals


// 1st version - Traditional Conditional (If, Else If, Else)
console.log("Iteration #2 - Traditional Conditional");
if (hacker1.length > hacker2.length) {
  // Checks if hacker1's name is longer
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  // Checks if hacker2's name is longer
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  // If both names are of equal length
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}
console.log("-------------------");
console.log("-------------------");

//2nd version - Traditional Conditional (If, Else If, Else) using Ternary Operators
hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    ) // If hacker1's name is longer
  : hacker1.length === hacker2.length
  ? console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!.`
    ) // If both names are of equal length
  : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    ); // If hacker2's name is longer
// Here, the ternary operator is used to make the decision based on name lengths.

console.log("-------------------");
console.log("-------------------");

//3rd Variation  - Using a Switch Case
let message;
switch (
  true // Switching based on true condition, as we are comparing boolean expressions
) {
  case hacker1.length > hacker2.length: // If hacker1's name is longer
    message = `The driver has the longest name, it has ${hacker1.length} characters.`;
    break;
  case hacker1.length < hacker2.length: // If hacker2's name is longer
    message = `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
    break;
  default: // If both names are of equal length
    message = `Wow, you both have equally long names, ${hacker1.length} characters!.`;
}
console.log(message);
// Switch case is used to handle different cases based on the length of the names.

console.log("-------------------");
console.log("-------------------");

// 4th Variation - Using a Ternary Operator
hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    ) // If hacker1's name is longer
  : hacker1.length === hacker2.length
  ? console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!.`
    ) // If both names are of equal length
  : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    ); // If hacker2's name is longer
// Similar to the 2nd version, using ternary operators to decide based on name lengths.

console.log("-------------------");
console.log("-------------------");

console.log("--------ITERATION 03-----------");

// 3: Loops Iteration
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
// 1st version - For Loop
let reservedName = "";
for (let i = 0; i < hacker1.length; i++) {
  // Loop through each character of hacker1's name
  reservedName += hacker1[i].toUpperCase() + " "; // Convert each character to uppercase and add a space
}
console.log("Using a for loop");
console.log(reservedName);

// Iteration 3.1 - Using a for...of loop
let driverName = ""; // Initialize an empty string to hold the modified name
for (let amountOfWordsInsideName of hacker1) {
  // Loop through each character of hacker1's name
  driverName += amountOfWordsInsideName.toUpperCase() + " "; // Convert each character to uppercase and add a space
}
console.log("Using a for of loop");
console.log(driverName);

// Iteration 3.1 - Using a forEach loop
// Belkow is  the syntax Empty Arrow Anonymous Function!
// () => { }
//forEach(() => {});
hacker1.split("").forEach((char) => {
  // Split hacker1's name into an array of characters and loop through each character
  char.toUpperCase() + " "; // Convert each character to uppercase and add a space
});
console.log("Using a for each loop");
console.log(driverName); // Trim to remove the extra space at the end

// -------
// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
// 1st version - For Loop
let reverseName = ""; // Initialize an empty string to hold the reversed name
for (let i = hacker1.length - 1; i >= 0; i--) {
  // Loop through each character of hacker1's name in reverse order
  reverseName += hacker1[i]; // Append each character to the reversedName string
}
console.log(reverseName);

// 1st version - For Loop
let reverseNameForOf = ""; // Initialize an empty string to hold the reversed name
for (const letter of hacker1.split("").reverse()) {
  // Split hacker1's name into an array, reverse it, and loop through each character
  reverseNameForOf += letter; // Append each character to the reversedName string
}
console.log(reverseNameForOf);

// 1st version - ForEach Loop
let reverseNameForEach = ""; // Initialize an empty string to hold the reversed name
hacker1
  .split("") // Split hacker1's name into an array of characters
  .reverse() // Reverse the array
  .forEach((letter) => {
    // Loop through each character
    reverseNameForEach += letter; // Append each character to the reversedName string
  });
console.log(reverseNameForEach);

// --------


// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?

// 1st version - Traditional Conditional (If, Else If, Else)
if (hacker1.localeCompare(hacker2) < 0) {
  // Compare lexicographically the names
  console.log("The driver's name goes first."); // If hacker1's name comes first
} else if (hacker1.localeCompare(hacker2) > 0) {
  // If hacker2's name comes first
  console.log("Yo, the navigator goes first, definitely.");
} else {
  // If both names are the same
  console.log("What?! You both have the same name?");
}

//2nd Variation  - Using a Switch Case
const comparisonResult = hacker1.localeCompare(hacker2); // Compare lexicographically the names

switch (
  true // Switch based on true condition
) {
  case comparisonResult < 0: // If hacker1's name comes first
    console.log("The driver's name goes first.");
    break;
  case comparisonResult > 0: // If hacker2's name comes first
    console.log("Yo, the navigator goes first, definitely.");
    break;
  default: // If both names are the same
    console.log("What?! You both have the same name?");
}

// 3rd Variation - Using a Ternary Operator
comparisonResult < 0 // If hacker1's name comes first
  ? console.log("The driver's name goes first.")
  : comparisonResult > 0 // If hacker2's name comes first
  ? console.log("Yo, the navigator goes first, definitely.")
  : console.log("What?! You both have the same name?");


  // Bonus 1


  // Generate 3 paragraphs of lorem ipsum text
const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1');
const text = await response.text();

// Store the text in a new string variable named longText
const longText = text;

// Count the number of words in the string
const wordCount = longText.split(/\s+/).length;

// Count the number of times the Latin word "et" appears
const etCount = longText.split("et").length - 1;

console.log(`Long text: ${longText}`);
console.log(`Word count: ${wordCount}`);
console.log(`Et count: ${etCount}`);


// Bonus 2
// Create a new variable, phraseToCheck, containing some string value
let phraseToCheck = "A man, a plan, a canal, Panama!";

// Remove non-alphanumeric characters and convert to lowercase
let cleanPhrase = phraseToCheck.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

// Reverse the cleaned phrase
let reversedPhrase = cleanPhrase.split('').reverse().join('');

// Check if the cleaned phrase is equal to its reverse
if (cleanPhrase === reversedPhrase) {
    console.log("The phrase is a palindrome!");
} else {
    console.log("The phrase is not a palindrome.");
}


