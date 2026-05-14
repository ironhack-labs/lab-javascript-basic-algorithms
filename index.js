// Iteration 1: Names and Input
const hacker1="Danilo";
console.log(`The driver's name is ${hacker1}`);

const hacker2="Eugénie";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(`The driver has the longest name, it has ${driverLength} characters.`);
} else if (navigatorLength > driverLength) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}   


// Iteration 3: Loops
console.log(hacker1.toUpperCase().split('').join(' '));

let reversedNavigator = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigator += hacker2[i];
}
console.log(reversedNavigator);


if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1:
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const wordCount = loremIpsum.split(' ').length;
console.log(`The Lorem Ipsum text contains ${wordCount} words.`);

const etCount = (loremIpsum.match(/et/g) || []).length;
console.log(`The word "et" appears ${etCount} times in the Lorem Ipsum text.`);

// Bonus 2: 
   const phraseToCheck = "A man, a plan, a canal, Panama!";

function isPalindrome(str) {
  let cleaned = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
      if (char >= 'A' && char <= 'Z') {
        cleaned += String.fromCharCode(char.charCodeAt(0) + 32);
      } else {
        cleaned += char;
      }
    }
  }
  const len = cleaned.length;
  for (let i = 0; i < len / 2; i++) {
    if (cleaned[i] !== cleaned[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

if (isPalindrome(phraseToCheck)) {
  console.log(`"${phraseToCheck}" is a palindrome.`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome.`);
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   