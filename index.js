// Iteration 1: Names and Input
let hacker1 = "Timny";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Timny";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const phrase1 = `The driver has the longest name, it has ${hacker1.length} characters`;

const phrase2 = `The driver has the longest name, it has ${hacker2.length} characters`;

const phrase3 = `Wow, you both have equally long names, ${hacker1.length} characters!`;

if (hacker1.length > hacker2.length) {
  console.log(phrase1);
} else if (hacker2.length > hacker1.length) {
  console.log(phrase2);
} else if (hacker1.length === hacker2.length) {
  console.log(phrase3);
}

// Iteration 3: Loops

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?

for (i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i]);
  console.log(" ");
}

for (k = hacker2.length - 1; k >= 0; k--) {
  console.log(hacker2[k]);
}

if (hacker1 > hacker2) {
  console.log("The driver's name goes first");
} else if (hacker2 > hacker1) {
  console.log("Yo, the navigator goes first, definitely");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
}
