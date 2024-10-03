// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Alice";

// 1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Bob";

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

  

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters.
let driverNameInCaps = "";
for (let i = 0; i < hacker1.length; i++) {
  driverNameInCaps += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameInCaps.trim());  // trim to remove the last extra space

// 3.2 Print all the characters of the navigator's name in reverse order.
let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

// 3.3 Lexicographic order comparison
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
  
// Bonus 1: Lorem Ipsum Text

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

// Count the number of words
let wordCount = longText.split(' ').length;
console.log(`The number of words in the text is: ${wordCount}`);

// Count occurrences of the word 'et'
const etCount = longText.split(' et ').length - 1;
console.log(`Number of occurrences of 'et': ${etCount}`);

// Bonus 2: Palondromo

const isPalindrome = (phrase) => {
  // Normalize the string: remove punctuation, make lowercase
  let normalized = '';
  for (let char of phrase) {
      if (char.toLowerCase() !== char.toUpperCase()) { // Check if it's a letter
          normalized += char.toLowerCase();
      }
  }
  
  // Check palindrome using a loop
  let start = 0;
  let end = normalized.length - 1;
  while (start < end) {
      if (normalized[start] !== normalized[end]) {
          return false; // Not a palindrome
      }
      start++;
      end--;
  }
  return true; // It's a palindrome
};

const phraseToCheck = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(phraseToCheck)); // true


//palindrome checker

class PalindromeChecker {
  constructor(stringToCheck) {
    this.stringToCheck = stringToCheck;
  }
  check() {
    let reverse = "";

    for (let i = this.stringToCheck.length - 1; i >= 0; i--) {
      const char = this.stringToCheck[i];
      reverse += char;
    }
    return this.stringToCheck === reverse;
  }

  clean(str) {
    let result = "";

    for (let i=0; i < str.length; i++) {
      cont char = str[i].toLowerCase();

      if (char !== "."; && char !== " " && char !== "!" && char "?")
    }
  }
}

const checker = new PalindromeChecker ("amor a roma")

const result = checker.check();



// otro aproach

function isPalindrome(str) {
  let right = ''
   for (let i = 0; i >= 0; i++) {
    const char = str[i].toLowerCase();

    if (char< "a")
   }


  let left =
  }
}