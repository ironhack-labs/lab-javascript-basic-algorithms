// Test to confirm JavaScript is running
console.log("JavaScript is running!");

// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name
const hacker1 = "John"; // Replace with actual driver's name

// 1.2 Print "The driver's name is XXXX"
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name
const hacker2 = "Anna"; // Replace with actual navigator's name

// 1.4 Print "The navigator's name is YYYY"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
// 2.1 Depending on which name is longer, print a message
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters
let driverNameSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameSpaced += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    driverNameSpaced += " ";
  }
}
console.log(driverNameSpaced);

// 3.2 Print all the characters of the navigator's name in reverse order
let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

// 3.3 Depending on the lexicographic order of the strings, print a message
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


// Bonus 1: Lorem Ipsum Text
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.

Ut vitae tristique magna. In hac habitasse platea dictumst. Aliquam tempor dolor in ante porta, quis convallis metus laoreet. Ut a magna mauris. Vestibulum blandit ante vitae felis gravida hendrerit. Nulla eleifend vel diam non viverra. Nullam at maximus mi. Integer luctus quis felis vitae ornare. Ut eu consequat libero.

Maecenas eleifend sapien felis, quis interdum ex tempor a. Aenean sodales, eros ac fermentum elementum, enim nisi finibus nisi, sed tempus turpis mauris ac quam. Aenean ac leo vel ante sollicitudin consequat in ut augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sodales odio diam. Phasellus ultricies faucibus massa sit amet pharetra.`;

// Count the number of words in the string
let wordCount = 0;
let isWord = false;

for (let i = 0; i < longText.length; i++) {
  // Check if the current character is a letter or number
  if (/[a-zA-Z0-9]/.test(longText[i])) {
    // If we weren't in a word before, we are now
    if (!isWord) {
      isWord = true;
      wordCount++;
    }
  } else {
    // If we encounter a non-alphanumeric character, we're no longer in a word
    isWord = false;
  }
}

console.log(`The text contains ${wordCount} words.`);

// Count the number of times the Latin word "et" appears
let etCount = 0;
for (let i = 0; i < longText.length - 1; i++) {
  // Check for "et" as a whole word (surrounded by spaces or punctuation)
  if (
    (i === 0 || !/[a-zA-Z]/.test(longText[i - 1])) &&
    longText.substring(i, i + 2).toLowerCase() === "et" &&
    (i + 2 >= longText.length || !/[a-zA-Z]/.test(longText[i + 2]))
  ) {
    etCount++;
  }
}

console.log(`The Latin word "et" appears ${etCount} times.`);


// Bonus 2: Palindrome Check
const phraseToCheck = "A man, a plan, a canal, Panama!";

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters
  let cleanStr = "";
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z0-9]/.test(str[i])) {
      cleanStr += str[i].toLowerCase();
    }
  }

  // Check if the string is the same forward and backward
  for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

if (isPalindrome(phraseToCheck)) {
  console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}
