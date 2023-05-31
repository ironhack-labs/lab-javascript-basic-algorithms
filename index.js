// Iteration 1: Names and Input
// 1.1
const hacker1 = "Alex";

// 1.2
console.log("The driver's name is " + hacker1);

// 1.3
const hacker2 = "Tom";

// 1.4
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
// 2.1
function checkNameLength(driver, navigator) {
  if (driver.length > navigator.length) {
    console.log("The driver has the longer name");
  } else {
    console.log("The navigator has the longer name");
  }
}
checkNameLength(hacker1, hacker2);

// Iteration 3: Loops
// 3.1
function printCharacters(driver) {
  let newString = "";
  for (let i = 0; i < driver.length; i++) {
    newString += driver[i].toUpperCase() + " ";
  }
  newString = newString.slice(0, -1);
  return newString;
}

console.log(printCharacters(hacker1));
// 3.2
function printReverse(navigator) {
  let newString = "";
  for (let i = navigator.length - 1; i >= 0; i--) {
    newString += navigator[i];
  }
  return newString;
}

console.log(printReverse(hacker2));

// 3.3
function compareLexicalOrder(string1, string2) {
  const stringLowerCase1 = string1.toLowerCase();
  const stringLowerCase2 = string2.toLowerCase();

  if (stringLowerCase1 < stringLowerCase2) {
    return "The drivers name goes first";
  } else if (stringLowerCase1 > stringLowerCase2) {
    return "Yo, the navigator goes first, definitely.";
  } else if (stringLowerCase1 === stringLowerCase2) {
    return "What?! You both have the same name?";
  }
}

console.log("Result:", compareLexicalOrder(hacker1, hacker2));

// BONUS
function phraseToCheck(phrase) {
  const phraseCompressed = phrase
    .toLowerCase()
    .replaceAll(",", "", -1)
    .replaceAll(" ", "", -1)
    .replaceAll("!", "", -1)
    .replaceAll(".", "", -1);

  function printReverse(phraseCompressed) {
    let newString = "";
    for (let i = phraseCompressed.length - 1; i >= 0; i--) {
      newString += phraseCompressed[i];
    }
    return newString;
  }

  const phraseCompressedReversed = printReverse(phraseCompressed);

  if (phraseCompressed === phraseCompressedReversed) {
    return "This sentence is an Palindrome";
  } else {
    return "It is NOT an Palindrome";
  }
}

console.log(phraseToCheck("A man, a plan, a canal, Panama!"));
