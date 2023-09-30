// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.  

const hacker1 = "Jose Luis";

// 1.2 Print "The driver's name is XXXX".

console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.

const hacker2 = "Torres";

// 1.4 Print "The navigator's name is YYYY".

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:

// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

console.log(hacker1.length) // 9
console.log(hacker2.length) // 6

console.log(hacker1.length > hacker2.length) // true
console.log(hacker1.length < hacker2.length) // false
console.log(hacker1.length === hacker2.length) // false
console.log(hacker1.length !== hacker2.length) // true


// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let newName = '';

for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
  const charUpperCase = hacker1[i].toUpperCase();
  newName += charUpperCase;
  if (i !== hacker1.length - 1) {
    newName += " ";
  }
}

console.log(newName);

// 3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

let reversedName = '';

for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedName += hacker1[i];
}
console.log(reversedName);


// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.  
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (hacker1.localeCompare(hacker2) === 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 2 Palindromos

const phraseToCheck = "Amor, Roma";
let reversedPhrase = '';

console.log(phraseToCheck.replace(/[^A-Za-z0-9]/g, ''));

const alphabeticPhrase = phraseToCheck.replace(/[^A-Za-z0-9]/g, '')

const charactersPhrase = alphabeticPhrase.split('').join('').toLocaleLowerCase();
reversedPhrase = charactersPhrase.split('').reverse().join('');
const isPalyndrome = charactersPhrase === reversedPhrase;

console.log(0, phraseToCheck);
console.log(1, alphabeticPhrase);
console.log(2, charactersPhrase);
console.log(3, reversedPhrase);
console.log(4, isPalyndrome);

