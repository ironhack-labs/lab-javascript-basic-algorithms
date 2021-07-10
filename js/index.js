// https://github.com/pablochux/lab-javascript-basic-algorithms
// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
let driver = "Pablo";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${driver}`);
// "" '' ` `
// 1.3 Create a variable `hacker2` with the navigator's name.

let navigator = "Chris";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${navigator}`);

// Iteration 2: Conditionals

// 2.1. Depending on which name [is longer]
if (driver.length < navigator.length) {
  console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
} else if (driver.length > navigator.length) {
  console.log(`The driver has the longest name, it has ${driver.length} characters.`);
} else if (driver.length == navigator.length) {
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

for (let i = 0; i < driver.length; i++){
    console.log(driver[i].toUpperCase());
    console.log(" ");
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

for (let j = driver.length; j > 0; j++){
    console.log(driver[j]);
}

// 3.3 Depending on the lexicographic order of the strings, print: 
// > < for Strings compares in a lexicographic way

if (driver > navigator) {
  console.log(`The driver's name goes first.`);
} else if (driver.length < navigator.length) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (driver.length == navigator.length) {
  console.log(`What?! You both have the same name?`);
}

// BONUS 1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat dignissim accumsan. Aliquam vel tristique tellus. Sed quam ligula, aliquet non est et, volutpat fringilla lacus.`;

// Algorithm: 
// - Iterate the whole string
// - When you detect a character that is not a space, a comma or a dot, counter++ 
// (we can include : ; etc but since Lorem doesn't create them we'll forget about them)

let counter = 0;
let inWordFlag = false; // by default if a variable is not define it will be falsy so it will work even if we don't define false as its value
for (let i = 0; i < lorem.length; i++){
    // Check if the character we are reading is a character or a space, dot or comma
	if ((lorem[i] == " ") || (lorem[i] == ",") || (lorem[i] == ".")){
        inWordFlag = false;
    }else{
        // When we detect a new word, we turn the inWordFlag as true, if we enter again but we haven't seen a space, comma or dot we don't count it as a word
        if (!inWordFlag){
            inWordcounter++;
            inWordFlag = true;
        }
    }
}

console.log(`Bonus 1 \n`)
console.log(counter);
// counter should be 26




// BONUS 2
let phraseToCheck = "Amor, Roma";
// console.log(isPalindrome);

function isPalindrome(phraseToCheck){
  // Since we don't count the spaces, we'll delete all the spaces in the string
  phraseToCheck = phraseToCheck.replace(/ /g, "");

  // We can also do a for iterating the string, then store all the values in a second string and then compare them to make sure they are the same
  let arrayPhraseToCheck = phraseToCheck.split();
  let inverseArrayPhraseToCheck = arrayPhraseToCheck.reverse();

  // Check one by one if they are the same
    for (let i = 0; i < arrayPhraseToCheck.length; i++){
        if(arrayPhraseToCheck[i] != inverseArrayPhraseToCheck[i]) return false;
    }

  return true;
}
