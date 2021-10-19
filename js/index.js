console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Hugo";
console.log("The driver's name is " + hacker1 + ".");

let hacker2 = "Viviane";
console.log("The navigator's name is " + hacker2 + ".");

// Iteration 2: Conditionals
let length1 = hacker1.length;
let length2 = hacker2.length;

if (length1 > length2) {
  console.log ("The driver has the longest name, it has " + length1 + " characters.")
} else if (length1 == length2) {
  console.log ("Wow, you both have equally long names, " + length1 + " characters!")
} else {
  console.log ("It seems that the navigator has the longest name, it has " + length2 + " characters.")
};

// Iteration 3: Loops

const splittedHacker1 = hacker1.split('');
const stringWithSpaces1 = splittedHacker1.join(' ');
const upperCaseStringWithSpaces1 = stringWithSpaces1.toUpperCase();
console.log(upperCaseStringWithSpaces1);

//const splittedHacker2 = hacker2.split('');
//const stringWithSpaces2 = splittedHacker2.join(' ');
//const upperCaseStringWithSpaces2 = stringWithSpaces2.toUpperCase();
//console.log(upperCaseStringWithSpaces2);

function ReverseString(str) {
   return str.split('').reverse().join('')
}
console.log (ReverseString(hacker2));
