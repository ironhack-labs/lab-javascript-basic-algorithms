// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = "Yosra";
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);
// 1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = "Yousfi";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
const namesComparision = (name1, name2) => {
  if (name1.length > name2.length) {
    return `The driver has the longest name, it has ${hacker1.length} characters.`;
  } else if (name1.length < name2.length) {
    return `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
  } else {
    return `Wow, you both have equally long names, ${hacker2} characters!`;
  }
};
console.log(namesComparision(hacker1, hacker2));

/* named params */
const namesComparision = ({ driverName, navigatorName }) => {
  if (driverName.length > navigatorName.length) {
    return `The driver has the longest name, it has ${driverName.length} characters.`;
  } else if (driverName.length < navigatorName.length) {
    return `It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`;
  } else {
    return `Wow, you both have equally long names, ${navigatorName} characters!`;
  }
};
console.log(namesComparision({ driverName: hacker1, navigatorName: hacker2 }));

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
// Method 1 : spread notation + foreach
const upperCaseHacker = str => {
  let upper = "";
  [...str.toUpperCase()].forEach(function(c) {
    upper += c + " ";
  });
  return upper;
};
console.log("Method 1", upperCaseHacker(hacker1));

// Method 2 : for loop
const upperCaseHacker2 = str => {
  let upper = "";
  for (let i = 0; i < str.length; i++) {
    upper += str[i].toUpperCase() + " ";
  }
  return upper;
};
console.log("Method 2", upperCaseHacker2(hacker1));

// Method 3 " spread notation + Built-in method Join"
const upperCaseHacker3 = str => {
  return [...str.toUpperCase()].join(" ");
};
console.log("Method 3", upperCaseHacker3(hacker1));

// implicit return
// const upperCaseHacker3 = str => [...str.toUpperCase()].join(" ");

// Method 4 : JavaScript Built-in Methods
const upperCaseHacker4 = str => {
  return str
    .split("")
    .join(" ")
    .toUpperCase();
};
console.log("Method 4", upperCaseHacker4(hacker1));

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
// Method 1 :for loop
const reverseString = str => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
console.log("Method 1", reverseString(hacker2));

// Method 2 : foreach loop
const reverseString2 = str => {
  let reversed = "";
  str
    .split("")
    .reverse()
    .forEach(function(item) {
      reversed += item;
    });
  return reversed;
};
console.log("Method 2", reverseString2(hacker2));

// Method 3 : JavaScript Built-in Methods
const reverseString3 = str => {
  return str
    .split("")
    .reverse()
    .join("");
};
console.log("Method 3", reverseString3(hacker2));

// Method 4 :for of
const reverseString4 = str => {
  let reversed = "";
  for (const c of str) {
    reversed = c + reversed;
  }
  return reversed;
};
console.log("Method 4", reverseString4(hacker2));

// Method 5 :Recursion
const reverseString5 = str => {
  return str ? reverseString5(str.substr(1)) + str[0] : str;
};
console.log("Method 5", reverseString5(hacker2));

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Method 1 : Javascript built-in Method
const lexicographicOrder = (name1, name2) => {
  if (name1.localeCompare(name2) < 0) {
    return "The driver's name goes first.";
  } else if (name1.localeCompare(name2) > 0) {
    return "Yo, the navigator goes first definitely.";
  } else {
    return "What?! You both have the same name?";
  }
};
console.log("Method 1 ", lexicographicOrder(hacker1, hacker2));

// Method 2 : > and < operators
const lexicographicOrder2 = (name1, name2) => {
  if (name1 < name2) {
    return "The driver's name goes first.";
  } else if (name1 > name2) {
    return "Yo, the navigator goes first definitely.";
  } else {
    return "What?! You both have the same name?";
  }
};
console.log("Method 2 ", lexicographicOrder2(hacker1, hacker2));

// Bonus 1

// Generate 3 paragraphs. Store the text in a variable type of string.

let paragraph = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

// Make your program count the number of words in the string.
// Method 1
console.log("Method 1", paragraph.split(" ").length);

// functions and regular expressions are first class citizens in JavaScript

// Method 2 : Regulat expression
const countWords = word => {
  word = word.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
  word = word.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
  word = word.replace(/\n /, "\n"); // exclude newline with a start spacing
  return word.split(" ").filter(function(str) {
    return str != "";
  }).length;
};
console.log("Method 2", countWords(paragraph));

// Make your program count the number of times the Latin word et appears.
// Method 1
const countOccurance = word => {
  return word.split("et").length - 1;
};
console.log("Method 1", `there is ${countOccurance(paragraph)} Occurances`);

// Method 2 : Regular expression
const countOccurance1 = word => {
  return (word.match(/et/g) || []).length;
};
console.log("Method 2", `there is ${countOccurance1(paragraph)} Occurances`);

// Bomus 2
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:
// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

let phraseToCheck = "A man, a plan, a canal, Panama!";

// Method 1
const checkPalindrome = str => {
  let onlyLettersPhrase = "";
  for (let i = 0; i < str.length; i += 1) {
    if (
      str[i] === "'" ||
      str[i] === "," ||
      str[i] === "?" ||
      str[i] === "!" ||
      str[i] === " " ||
      str[i] === '"' ||
      str[i] === "."
    ) {
      continue;
    }
    onlyLettersPhrase += str[i].toLowerCase();
  }
  if (onlyLettersPhrase === reverseString(onlyLettersPhrase))
    return "the phrase is Palindrome";
  return "the phrase is not Palindrome";
};
console.log("Method 1", checkPalindrome(phraseToCheck));

// Method 2 : literal Regular expression
const checkPalindrome2 = str => {
  var re = /[^A-Za-z0-9]/gm;
  //[^xyz]  Matches a character other than x or y or z
  //The "g" flag is for global search, in the whole string.
  //the "m" flag is for Multi-line search.
  onlyLettersStr = str.toLowerCase().replace(re, "");
  reversedStr = reverseString(onlyLettersStr);
  if (reversedStr === onlyLettersStr) return "the phrase is Palindrome";
  return "the phrase is not Palindrome";
};
console.log("Method 2", checkPalindrome2(phraseToCheck));
