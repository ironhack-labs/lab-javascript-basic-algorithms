// Iteration 1: Names and Input
const hacker1 = "Amrit";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Joshua";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
console.log("Shortcut approach: ", hacker1.toUpperCase().split('').join(' '));

let hacker1Uppercase = '';
for(let i = 0; i < hacker1.length; i++) {
  if (i === hacker1.length - 1) {
    hacker1Uppercase += hacker1[i].toUpperCase();
  } else {
  hacker1Uppercase += (hacker1[i].toUpperCase() + ' ');
  }
}
hacker1Uppercase = hacker1Uppercase.trim(); // to remove trailing space
console.log("hacker1 name in uppercase with space: ", hacker1Uppercase);

let hacker2Reversed = '';
for(let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}
console.log("hacker2 name reversed: ", hacker2Reversed);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1: Lorem ipsum generator
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
pariatur. Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const words = longText.split(' ');
console.log(`Total number of words: ${words.length}`);

let etCount = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase().includes('et')) {
    etCount += 1;
  }
}
console.log(`Number of times the word "et" appears: ${etCount}`);

// Bonus 2: Palindrome checker
const phraseToCheck = "A man, a plan, a canal, Panama!";
// const cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, '');
const cleanedPhrase = phraseToCheck.toLowerCase().split('')
                        .filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')).join('');
console.log("Cleaned phrase: ", cleanedPhrase);

let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length / 2; i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(`Is the phrase "${phraseToCheck}" a palindrome? ${isPalindrome}`);

function isPalindromeFunc(phrase) {
  const cleaned = phrase.toLowerCase().split('')
                    .filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')).join('');
    for (let i = 0; i < cleaned.length / 2; i++) {
        if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const testPhrases = [ 
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    `Was it a car or a cat I saw?" and "No 'x' in Nixon` ];

for (let phrase of testPhrases) {
    console.log(`Is the phrase "${phrase}" a palindrome? ${isPalindromeFunc(phrase)}`);
}