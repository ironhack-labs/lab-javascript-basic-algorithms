// Iteration 1: Names and Input

// 1.1
const hacker1 = "Ian";

// 1.2
console.log("The driver's name is " + hacker1);

// 1.3
const hacker2 = "Montezuma";

// 1.4
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

// 2.1
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}

// Iteration 3: Loops

// 3.1
let driverNameWithSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
  driverNameWithSpaces += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameWithSpaces);

// 3.2
let navigatorNameReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}

console.log(navigatorNameReversed);

// 3.3

// The < and > operators compare strings in lexicographical order. Lexicographical order essentially means "dictionary order". In simpler terms, a < b if the first character of a comes before the first character of b in the ASCII table

let nameOrder = 0;

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    nameOrder = -1;
    break;
  } else if (hacker1[i] > hacker2[i]) {
    nameOrder = 1;
    break;
  }
}

if (nameOrder < 0) {
  console.log("The driver's name goes first.");
} else if (nameOrder > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien quam, venenatis ut elementum eget, rutrum vitae ante. Proin quis arcu nec lorem pulvinar gravida. Vivamus est lacus, scelerisque nec urna nec, fringilla rutrum magna. Curabitur interdum augue vel augue efficitur pretium. Ut sodales mattis lacus. Praesent diam purus, blandit non rhoncus at, semper posuere dui. Duis et nisl neque. Suspendisse in interdum ipsum. Nulla eget pretium felis. Vivamus elementum diam at tincidunt pharetra. Donec ullamcorper nec lacus ac sollicitudin. Quisque in vulputate ligula. Donec dictum rhoncus dui vel malesuada. Fusce lobortis nec sem non fringilla. Sed vulputate massa malesuada, suscipit lacus nec, suscipit tortor. Quisque pretium iaculis magna, a tincidunt enim dapibus ac. Nunc fringilla in velit accumsan imperdiet. Donec cursus nisi augue, a sodales justo tempor vitae. Vivamus vitae dui neque. Mauris laoreet, velit eget vehicula pulvinar, magna diam faucibus metus, et vehicula est quam at augue. Pellentesque ultrices odio ac tellus rutrum, in varius tellus vestibulum. Nunc facilisis diam id turpis pretium auctor. Morbi in pellentesque lacus. Cras interdum ultrices sem, ut laoreet justo lacinia quis. In sed sem in turpis varius iaculis ut sit amet erat. Donec venenatis erat ac lacus semper, at sagittis ante finibus. Curabitur rhoncus vestibulum commodo. Maecenas malesuada tellus sed nulla dictum, lobortis ornare metus luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

// Counts every space " " and then adds 1 to account for the last word. Probably not foolproof, but it works in this instance.

let wordCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] == " ") {
    wordCount++;
  }
}

console.log("The text has " + (wordCount + 1) + " words.");

// longText.length - 1 is used to prevent the loop from checking the last character of the string, which would error because there is no character after it to check.
let wordEtCount = 0;

for (let i = 0; i < longText.length - 1; i++) {
  if (
    longText[i] === "e" &&
    longText[i + 1] === "t" &&
    longText[i - 1] === " " &&
    longText[i + 2] === " "
  ) {
    wordEtCount++;
  }
}
console.log("The word 'et' appears " + wordEtCount + " times.");

// --------------- Bonus 2 ---------------

// Approach - remove spaces and punctuation, convert to lowercase, reverse string, compare to original string

// let phraseToCheck = "Was it a car or a cat I saw?";

// let fixedPhrase = "";

// for (let i = 0; i < phraseToCheck.length; i++) {
//   let char = phraseToCheck[i];

// removes spaces and punctuation (return true only in case of letter), adds to new string
//   if (char.toUpperCase() !== char.toLowerCase()) {
//     fixedPhrase += char;
//   }
// }

// converts string to lowercase for comparison

// let fixedPhraseLower = fixedPhrase.toLowerCase();

// reverse the string

// let reversedPhrase = "";

// iterates over the characters in reverse order and appends them to the new string

// for (let i = fixedPhraseLower.length - 1; i >= 0; i--) {
//   reversedPhrase += fixedPhraseLower[i];
// }

// check if palindrome

// let isPalindrome = true;

// for (let i = 0; i < fixedPhraseLower.length; i++) {
//   if (fixedPhraseLower[i] !== reversedPhrase[i]) {
//     isPalindrome = false;
//     break;
//   }
// }

// if (isPalindrome) {
//   console.log("The phrase is a palindrome.");
// } else {
//   console.log("The phrase is not a palindrome.");
// }

// Put into a function to look nicer

function isPalindrome(str) {
  let lettersOnly = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.toUpperCase() !== char.toLowerCase()) {
      lettersOnly += char;
    }
  }
  let lettersOnlyLower = lettersOnly.toLowerCase();
  let reversedPhrase = "";

  for (let i = lettersOnlyLower.length - 1; i >= 0; i--) {
    reversedPhrase += lettersOnlyLower[i];
  }
  let isPalindrome = true;

  for (let i = 0; i < lettersOnlyLower.length; i++) {
    if (lettersOnlyLower[i] !== reversedPhrase[i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    return "The phrase is a palindrome.";
  } else {
    return "The phrase is not a palindrome.";
  }
}

console.log(isPalindrome("Was it a car or a cat I saw?"));
