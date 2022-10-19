// Iteration 1: Names and Input
const driver = "Barry"
console.log(`The driver's name is ${driver}.`)
const navigator = "Ben"
console.log(`The navigator's name is ${navigator}.`)
console.log("-----------------------------------------------")

// Iteration 2: Conditionals
function compareNames(driverName, navigatorName) {
  let winner = driver;
  if (driverName.length > navigatorName.length) {
    console.log(`The driver has the longest name, it has ${driverName.length} characters.`);
  } else if (navigatorName.length > driverName.length) {
    console.log(`It seems that he navigator has the longest name, it has ${navigatorName.length} characters.`);
    winner = navigator;
  } else  if (driverName.length === navigatorName.length) {
    console.log(`Wow, you both have equally long names, ${driverName.length} characters!`);
  } else {
    console.log("Check if the names are assigned properly and try again.")
  }
  return winner;
}
// why navigator shows as var?
console.log("This is the result of function 1 - compareNames: ");
compareNames(driver, navigator);
console.log("-----------------------------------------------")

// Iteration 3: Loops
function capitalizeDriverName(name) {
  let capitalizedName = "";
  for (let i = 0; i < name.length; i++) {
    let letter = name[i];
    letter = `${letter.toUpperCase()} `;
    capitalizedName += letter;
  };
  return capitalizedName;
}
console.log("This is the result of function 2 - capitalizeDriverName: ")
console.log(capitalizeDriverName(driver));
console.log("-----------------------------------------------")

function reverseWord(word) {
  let reversedWord = "";
  for (let i = word.length -1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}
console.log("This is the result of function 3 - reverseWord: ")
console.log(reverseWord(navigator));
console.log("-----------------------------------------------")

function alphabetizeNames(driverName, navigatorName) {
  const result = driverName.localeCompare(navigatorName);
  if (result < 0) {
    console.log("The driver's name goes first.")
  } else if (result > 0) {
    console.log("Yo, the navigator goes first definitely.")
  } else if (result === 0) {
    console.log("It's identical!")
  } else {
    console.log("Check if the names are assigned properly and try again.")
  }
}
console.log("This is the result of function 4 - alphabetizeNames: ")
alphabetizeNames(driver, navigator);
console.log("-----------------------------------------------")


// BONUS assingnments:

const text = "Lorem ipsum et et et efdf tethr zh et"

function countWords(string) {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      counter++;
    }
  }
  return counter + 1;
}
console.log("----BONUS assignments----")
console.log("This is the result of function 1 - countWords: ")
console.log(countWords(text));
console.log("-----------------------------------------------")

function countWord(string, word) {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if (`${string[i]}${string[i +1]}` === word) {
      counter++;
    }
  }
  return counter;
}
console.log("This is the result of function 2 - countWordEt: ")
console.log(countWord(text, "et"));
console.log("-----------------------------------------------")


const phraseToCheck = "step on no pets"

// This one is buggy! Sometimes deletes whitespace, sometimes not:

function palindrome(phrase) {
  for (let i = 0; i < phrase.length; i++) {
    const character = phrase[i];
    if (/[a-zA-Z]/.test(character) === false) {
      phrase = phrase.replace(character, "").toLowerCase();
    }
  }
  console.log("Phrase after deleting the symbols:")
  console.log(phrase)
  return phrase === reverseWord(phrase);
}

console.log(palindrome(phraseToCheck));
