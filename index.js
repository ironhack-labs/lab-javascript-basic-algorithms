// Iteration 1: Names and Input
const hacker1 = "Enrique";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Armando";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has ", hacker1.length, " characters.")
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has ", hacker2.length, " characters.")
} else {
    console.log("Wow, you both have equally long names,", hacker1.length, "characters!")
}

// Iteration 3: Loops
let driver = "";

for (let i = 0; i < hacker1.length; i++) {
    driver += `${hacker1[i].toUpperCase()} `;
}

console.log(driver);

let navigator = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    navigator += hacker2[i];
}

console.log(navigator);

const lexicographicOrder = driver.localeCompare(navigator);

if (lexicographicOrder === -1) {
    console.log("The driver's name goes first.");
} else if (lexicographicOrder === 1) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1

const longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"

let words = longText.split(' ');

console.log(words.length)

let contador = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'et') {
        contador++
    }
}

console.log(contador);

// Bonus 2

const abc = "abcdefghijklmnopqrstuvwxyz";

const phraseToCheck = "No 'x' in Nixon";
let cleanPhraseToCheck = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    if (abc.indexOf(phraseToCheck[i].toLowerCase()) >= 0) {
        cleanPhraseToCheck += phraseToCheck[i].toLowerCase();
    }
}

let backwardsPhrase = "";

for (let i = cleanPhraseToCheck.length - 1; i >= 0; i--) {
    backwardsPhrase += cleanPhraseToCheck[i];
}

console.log("cleanPhraseToCheck: ", cleanPhraseToCheck);
console.log("backwardsPhrase: ", backwardsPhrase);

const isPalindrome = cleanPhraseToCheck === backwardsPhrase;

if (isPalindrome) {
    console.log("It's a palindrome!");
} else {
    console.log("No, it is not a palindrome :(");
}
