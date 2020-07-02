// Iteration 1: Names and Input

const hacker1 = 'Diana';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Sardines';
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops
//3.1

let uppercasedName = '';
for (let x = 0; x < hacker1.length; x++) {
  let b = hacker1[x];
  uppercasedName += b.toUpperCase();
  if (x < hacker1.length - 1) {
    uppercasedName += ' ';
  }
}
console.log(uppercasedName);

// Iteration 3.2

let reversedName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  const word = hacker2[i];
  reversedName += word;
}
console.log(reversedName);

// Iteration 3.3
if (hacker1.localeCompare(hacker2, 'en', { sensitivity: 'base' }) > 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2, 'en', { sensitivity: 'base' }) < 0) {
  console.log('Yo, the navigator goes first definitely');
} else {
  console.log('What?! You both have the same name?');
}

//Bonus Time
//Bonus 1

let loremIpsum_phrase =
  'Lorem ipsum dolor sit et! amet, consectetur etadipiscing et elit, sed do eiusmod tempor incidi et dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud et exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure et dolor in reprehenderit in et.  voluptate velit esse cillum dolore eu fugiat nulla pariatur.Et Excepteur et, sint occaecat cupid et atat non proident, sunt in et? culpa qui officia deserunt mollit anim id est et laborum.';

let totalWordCount = 0;
for (let i = 0; i < loremIpsum_phrase.length; i++) {
  if (loremIpsum_phrase[i] === ' ') {
    totalWordCount++;
  }
}

if (loremIpsum_phrase) {
  totalWordCount++;
}
console.log(totalWordCount);

let etWordCheck = 0;
for (let i = 0; i < loremIpsum_phrase.length; i++) {
  if (
    loremIpsum_phrase[i] === ' ' &&
    loremIpsum_phrase.toLowerCase()[i + 1] === 'e' &&
    loremIpsum_phrase[i + 2] === 't' &&
    loremIpsum_phrase[i + 3] <= 'A'
    //!(loremIpsum_phrase[i + 3] >= 'A' && loremIpsum_phrase[i + 3] <= 'z')
  ) {
    etWordCheck++;
  }
}
console.log(etWordCheck);

//Bonus 2

let phraseToCheck =
  'Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era.';

//clean up phrase
let cleanedUpPhrase = '';
for (let i = 0; i < phraseToCheck.length; i++) {
  let strippedPhrase = phraseToCheck[i];
  if (strippedPhrase >= 'A' && strippedPhrase <= 'z') {
    cleanedUpPhrase += strippedPhrase.toLowerCase();
  }
}
//console.log(cleanedUpPhrase);

//reverse phrase

let reversedPhrase = '';
for (let i = cleanedUpPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += cleanedUpPhrase[i];
}
//console.log(reversedPhrase);

//check palindrome exists
const palindromeExists = cleanedUpPhrase === reversedPhrase;

console.log(palindromeExists);
