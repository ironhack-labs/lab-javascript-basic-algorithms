// Iteration 1: Names and Input

let hacker1 = "Ram";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Laxman";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function compareLengths(driver, navigator) {
  if (driver > navigator) {
    console.log(
      `The driver, ${driver}, has the longest name, it has ${driver} characters.`
    );
  } else if (driver < navigator) {
    console.log(
      `It seems that the navigator, ${navigator}, has the longest name, it has ${navigator} characters.`
    );
  } else {
    console.log(
      `Wow, you both the driver (${driver}) and the navigator (${navigator}) have equally long names, ${driver} characters!`
    );
  }
}

compareLengths(hacker1, hacker2);
compareLengths("Ana", "Diana");
compareLengths("Diana", "Ana");
compareLengths("Ana", "Can");

// Iteration 3: Loops

// 3.1
console.log(hacker1.toUpperCase().split("").join(" "));

// 3.2
console.log(hacker2.split("").reverse().join(""));

// 3.3
function lexicalComparison(driver, navigator) {
  if (driver < navigator) {
    console.log(`The driver's name goes first.`);
  } else if (driver > navigator) {
    console.log(`Yo, the navigator goes first definitely.`);
  } else {
    console.log(`What?! You both have the same name?`);
  }
}

lexicalComparison(hacker1, hacker2);
lexicalComparison("Ana", "Diana");
lexicalComparison("Diana", "Ana");
lexicalComparison("Ana", "Ana");

// Bonus time

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
est laborum.`;

let longTextWithoutPunctuation = longText.replace(
  /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
  ""
);

let words = longTextWithoutPunctuation.split(/\s+/);

console.log(`Number of words in paragraphs is ${words.length}`);

let allEt = longTextWithoutPunctuation.match(/et/g);
console.log(`Number of times the word "et" appears is ${allEt.length}`);

// Bonus 2

function isPalindrome(stringToCheck) {
  // replace all punctuation marks and white spaces with empty string
  let cleanedString = stringToCheck
    .toLowerCase()
    .replace(/[.?,\'\"\/#!$%\^&\*;:{}=\-_`~()/\s+/]/g, "");

  // reverse the string
  let reversed = cleanedString.split("").reverse().join("");

  // if they are same, then it's a palindrome
  return cleanedString === reversed;
}

// should be true
console.log(isPalindrome("racecar"));
console.log(isPalindrome("A man, a plan, a canal, Panama!"));
console.log(isPalindrome("Amor, Roma"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("stack cats"));
console.log(isPalindrome("step on no pets"));
console.log(isPalindrome("taco cat"));
console.log(isPalindrome("put it up"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("No 'x' in Nixon"));

// should be false
console.log(isPalindrome("rat"));
console.log(isPalindrome("We don't need no education"));
