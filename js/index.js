// Main Exercise

console.log("Main exercise:");
console.log("");

//
// Iteration 1: Names and Input
//

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "John Doe";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`)

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Jane Doe";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals
//

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

//
// Iteration 3: Loops
//

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let separatedUppercaseCharacters = "";
for (const character in hacker1) {
  separatedUppercaseCharacters += hacker1[character].toUpperCase();
  separatedUppercaseCharacters += " ";
}
console.log(separatedUppercaseCharacters);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = "";
for (const character in hacker2) {
  reverseIndex = hacker1.length - character - 1;
  reverseName += hacker1[reverseIndex];
  reverseName += " ";
}
console.log(reverseName);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
} else if (hacker1.length < hacker2.length) {
  console.log(`The driver's name goes first.`);
} else {
  console.log (`Yo, the navigator goes first definitely.`);
}

//
// Bonus Time!
//
// Bonus 1
//

console.log("");
console.log("Bonus:");
console.log("");

// Generate 3 paragraphs. Store the text in a variable type of string.

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum suscipit augue in mollis. Mauris in sollicitudin erat. Vivamus et vulputate quam. Vivamus quis velit at sapien dignissim iaculis nec imperdiet nisl. Maecenas accumsan rhoncus tortor vestibulum blandit. Proin quam orci, ornare nec ligula in, eleifend auctor lorem. Fusce eleifend erat sit amet porttitor lobortis. Nulla at porttitor orci, tincidunt consectetur arcu. Sed id ante leo. Maecenas blandit, magna sed consequat ultricies, ex mauris finibus erat, in pellentesque turpis est ut lectus. Pellentesque ornare leo et felis luctus consectetur. Curabitur eget tincidunt turpis. Donec eget lorem tempor, elementum leo quis, pharetra sem. Cras vestibulum pharetra tempor. Suspendisse pretium consectetur fermentum. Nunc in auctor sapien. Duis ut nisi lacus. Nulla euismod aliquet sem in mattis. Fusce consequat turpis id nunc sollicitudin, sit amet interdum mauris tempor. Morbi sed commodo elit, vel maximus est. Nam varius ipsum tempus odio lobortis viverra. Duis ligula velit, malesuada eu malesuada ut, lacinia id enim. Vestibulum nec nisi sit amet velit convallis faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at facilisis massa, et elementum nisi. Nam interdum nec neque nec placerat. Ut suscipit tortor interdum lectus luctus consectetur. Pellentesque rutrum odio auctor, rhoncus libero luctus, dignissim eros. Suspendisse id sem nec metus vulputate tincidunt. Donec ante mi, fringilla aliquet fermentum at, viverra ut ligula. Etiam fermentum nisl a odio placerat, sit amet dignissim magna auctor. Quisque id laoreet turpis. Pellentesque libero metus, facilisis vitae nulla sit amet, faucibus luctus velit. Fusce rhoncus eget odio vitae condimentum. Maecenas convallis ligula felis, ac luctus tortor cursus sit amet. Integer tincidunt volutpat purus, vel cursus risus pellentesque eu. Nunc arcu justo, euismod vitae dignissim interdum, ultrices a ligula. Nam non nibh tellus. Vestibulum ut orci ex."

// Make your program count the number of words in the string.
// Count spaces, then words = spaces + 1 (as the last word doesn't have a space after)
let numberOfWords = 0;
for (const character in loremIpsum) {
  if (loremIpsum[character] === " ") {
    numberOfWords++;
  }
}
numberOfWords++ // For last word
console.log(`Number of words: ${numberOfWords}`);

// Make your program count the number of times the Latin word et appears.
// Doing it by recursion (learnt in one of my CS classes). 

const countWords = (string, word) => {
  let wordCount = 0;
  let wordOccurence = 0;

  // Creating an auxiliary function on top of the recursive one to be able to capture different scenarios (word before comma, word before dot)
  const countWordsAux = (string, word) => {
    const countWordsRecursive = (stringRecursive, word) => {
      wordOccurence = stringRecursive.indexOf(word);
      if (wordOccurence >= 0) {
        wordCount++;
        let subString = stringRecursive.substring(wordOccurence + word.length);
        countWordsRecursive(subString, word);
      }
      return;
    }
    countWordsRecursive(string, word);
  }

  // Accounting for those different scenarios
  countWordsAux(string, " " + word + ",");
  countWordsAux(string, " " + word + ".", word);
  countWordsAux(string, " " + word + " ", word);

  return `The word "${word}" appears ${wordCount} times.`;  
}

console.log(countWords(loremIpsum, "et"));

//
// Bonus 2:
//
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.

let phraseToCheck = 'step on no pets'

const characterIsLetter = (string) => {
  if (string.length > 1) { return "Error: only meant for characters"}
  if (string.toLowerCase() >= 'a' && string.toLowerCase() <= 'z') {
    return true
  } else {
    return false
  }
}

const isPalindrome = (string) => {
  let straightWord = "";
  let reverseWord = "";

  for (const character in string) {
    if (characterIsLetter(string[character])) {
      straightWord += string[character].toLowerCase();
      reverseWord = string[character].toLowerCase() + reverseWord;
    }
  }

  if (straightWord === reverseWord) {
    return `Word "${string}" is a palindrome :)`
  } else {
    return `Word "${string}" is not a palindrome :(`
  }
}

isPalindrome(phraseToCheck);