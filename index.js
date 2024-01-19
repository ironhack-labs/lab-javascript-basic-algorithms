/*******************************************************************************
Iteration 1: Names and Input
*******************************************************************************/

let hacker1 = "XXXX";
let hacker2 = "YYYY";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

/*******************************************************************************
Iteration 2: Conditionals
*******************************************************************************/

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

/*******************************************************************************
Iteration 3: Loops
*******************************************************************************/

/*******************************************************************************
3.1 Print name in upper case with spaces between each character
*******************************************************************************/

// Initialize counter and empty string
let i = 0;
let capitalizedName = "";

// Loop through each character of hacker1 and add each character capitalized plus a space
while (i < hacker1.length) {
  capitalizedName += hacker1[i].toUpperCase() + " ";
  i++;
}

// Print result, deleting the last space
console.log(capitalizedName.trim());

/*******************************************************************************
 3.2 Print name backwards
*******************************************************************************/

// Set counter to the length of hacker2, minus 1 so that it is equal to the string index
i = hacker2.length - 1;

// Initialize empty string
let backwardsName = "";

// Iterate from the end of hacker2 and add each character backwards to the new string backwardsName
for (i; i > -1; i--) {
  backwardsName += hacker2[i];
}

// Print result
console.log(backwardsName);

/*******************************************************************************
3.3 Lexicographic Comparison
*******************************************************************************/

if (hacker1.localeCompare(hacker2) > 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

/*******************************************************************************
BONUS!
*******************************************************************************/

/*******************************************************************************
Bonus 1 - Word Counter
*******************************************************************************/

// Initialize lorem String, reset i to zero and initialize spacesCount to zero
let loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id odio sed nunc feugiat congue vel ut ante. Donec porttitor, nibh sit amet facilisis porta, lectus ex pretium est, eu feugiat est ligula non urna. Pellentesque pharetra tincidunt magna sit amet lacinia. Fusce ut neque purus. Morbi a lorem eu odio ultricies ornare. Quisque congue felis ut dui suscipit porttitor vitae non nunc. Proin sit amet scelerisque arcu. In vel sapien ut arcu semper venenatis. Sed quis neque et massa placerat tempus. Mauris euismod neque tincidunt erat condimentum rutrum. Cras lobortis, elit venenatis rhoncus tristique, dolor velit condimentum massa, efficitur tempus velit nulla vel justo. Sed non leo tempus, vestibulum neque vel, faucibus mi. Cras sagittis metus ac mi pharetra malesuada. Nulla dapibus dignissim facilisis. Sed lorem lacus, lacinia non porttitor et, congue eu risus. Nunc rhoncus cursus imperdiet. Morbi et massa sodales, auctor lectus malesuada, sagittis eros. Aenean neque neque, condimentum sed rhoncus at, congue ut justo. Nullam dictum leo in diam scelerisque hendrerit. Pellentesque viverra turpis interdum gravida gravida. Praesent ut sem quis dui pellentesque imperdiet maximus quis urna. Aenean luctus lobortis velit, sit amet consectetur tortor mollis eget. Aenean at felis porttitor mi tincidunt gravida tempor nec nibh. Donec ultricies in justo bibendum faucibus. Praesent volutpat tristique dolor, ut ultricies metus finibus quis. Aliquam erat volutpat. Donec sed suscipit massa, mollis rutrum lectus. Phasellus placerat hendrerit tortor a iaculis. Sed quis molestie nulla. Nulla at lacinia odio, congue ornare nibh. Morbi pellentesque purus at augue viverra sodales. Phasellus maximus ex volutpat risus vehicula, in fringilla mi condimentum. Fusce eget lobortis massa.";
i = 0;
let spacesCount = 0;

// Loop through each character of loremText and count the spaces
while (i < loremText.length - 1) {
  if (loremText.charAt(i) === " ") {
    spacesCount++;
  }
  i++;
}

// Check, in one-line if statements, to see if there are any spaces at the beginning or end of the string. Remove if so. Otherwise, do nothing
loremText.charAt(loremText[0]) === " " ? spacesCount-- : {};
loremText.charAt(loremText.length - 1) === " " ? spacesCount-- : {};

// Print result, adding 1 to spacesCount to infer number of words
console.log(`There are ${spacesCount + 1} words in this text`);

/*******************************************************************************
Count instances of word "et"
*******************************************************************************/

// Set counter to 0
counter = 0;

// Check for "et" in whole loremText
if (!loremText.includes("et")) {
  // Do nothing if there is no "et" in the string
} else {
  i = 0;
  while (i < loremText.length) {
    if (loremText.startsWith("et", i)) {
      counter++;
    }
    i++;
  }
}

console.log("There are " + counter + ' instances of "et" in this text.');

/*******************************************************************************
Bonus 2. Palindrome Check
*******************************************************************************/

// Reset index to zero, initialize palindrome, empty string and char variable
let phraseToCheck = "Murder for a jar of red rum";
let phraseSimplified = "";
i = 0;
let char;

// Create array with common punctuation, even though a regex would be easier and more efficient
let punctuationCommon = [
  "!",
  '"',
  "'",
  "(",
  ")",
  ",",
  "-",
  ".",
  ":",
  ";",
  "?",
  "!",
];

// First, add every character except punctuation and spaces to phraseSimplified
for (i; i < phraseToCheck.length; i++) {
  char = phraseToCheck[i];
  if (!punctuationCommon.includes(char) && char !== " ") {
    phraseSimplified += char;
  }
}
// Remove capitalization, initialize iterations
phraseSimplified = phraseSimplified.toLowerCase();
let iterations;

// Then, figure out the number of comparisons to do based on the string length
if (phraseSimplified.length % 2 === 0) {
  // if even
  iterations = phraseSimplified.length / 2;
} else {
  // if odd
  iterations = (phraseSimplified.length - 1) / 2;
}

// Initialize variables for while loop
isSameChar = true;
i = 0;
let ending = phraseSimplified.length - 1;

// If there are any differences, stop loop
while (isSameChar && i <= iterations) {
  if (phraseSimplified[i] === phraseSimplified[ending]) {
    isSameChar = true;
  } else {
    isSameChar = false;
  }
  i++;
  ending--;
}

// Print results
console.log(`It is ${isSameChar} that "${phraseToCheck}" is a palindrome.`);
