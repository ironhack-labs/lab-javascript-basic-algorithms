console.log("I was born ready!");



// Iteration 1: Names and Input

let hacker1 = "Marinona";

console.log (`"The driver's name is ${hacker1}"`);


let hacker2 = "Amanda";

console.log(`"The navigator's name is ${hacker2}"`);



// Iteration 2: Conditionals

function longestName (name1, name2) {
  if (name1.length > name2.length){
   return console.log(`The driver has the longest name, it has ${name1.length} characters.`)
  } else if (name2.length > name1.length) {
   return console.log(`It seems that the navigator has the longest name, it has ${name2length} characters.`)
  } else {
   return console.log(`Wow, you both have equally long names, ${name1.length} characters!`)
  }
};

longestName(hacker1, hacker2);



// Iteration 3: Loops

//I know the following steps could be all joined in the same line, however I decided to leave it like this for the moment for easier visualization.
const driversArray = hacker1.split('');
const driversArrayWithSpaces = driversArray.join(' ');
const upperCaseDriversArray = driversArrayWithSpaces.toUpperCase();
console.log(upperCaseDriversArray);

const navigatorsArray = hacker2.split('');
const reverseNavigatorsArray = navigatorsArray.reverse();
const joinReverseNavigatorsArray = reverseNavigatorsArray.join('')
console.log(joinReverseNavigatorsArray);

function compareNames(name1, name2) {
  if (name1 < name2) {
    return console.log("The driver's name goes first.")
  } else if (name2 < name1) {
    return console.log("Yo, the navigator goes first definitely.")
  } else if (name1 === name2) {
    return console.log("What?! You both have the same name?")
  }
};

compareNames(hacker1, hacker2);



//Bonus 1:

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function countWords (text) {  
    return console.log(text.split(' ').length);
};

countWords(loremIpsum);


let textArray = loremIpsum.split(' ');
let etGroup = [];
let notEtGroup = [];

for (i = 0; i <= textArray.length; i++) {
  if (textArray[i] === 'et') {
    etGroup.push(textArray[i]);
  } else if (textArray[i] !== 'et') {
    notEtGroup.push(textArray[i]);
  }
}

console.log(etGroup.length);

/* Bonus 2 
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?"
"No 'x' in Nixon" */

function palindrome (initialPhrase) {
  
  let phrase = initialPhrase
  let phraseLowerCased = phrase.toLowerCase();
  let phraseWoPunctuation = phraseLowerCased.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "")
  let phraseToCheck = phraseWoPunctuation.replaceAll(' ','')

   if (phraseToCheck === phraseToCheck.split('').reverse().join('')) {
    return console.log(`The '${initialPhrase}' phrase is a Palindrome, very cool!`);
  } else {
    return console.log(`The '${initialPhrase}' phrase isn't a Palindrome, sorry mate!`)
  }
}

palindrome("bli blha lsihjsoih");