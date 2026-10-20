// Iteration 1: Names and Input
const hacker1 = "John";
const hacker2 = "Peter";

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`,
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
  );
} else {
  console.log(`Wow, you both have equally long names, XX characters!`);
}

// Iteration 3: Loops

const hacker1UpperCaseWithSpace = hacker1.toUpperCase().split("").join(" ");
console.log(hacker1UpperCaseWithSpace);
const hacker2Reverse = hacker2.split("").reverse().join("");
console.log(hacker2Reverse);

if (hacker1[0] < hacker2[0]) {
  console.log(`${hacker1} goes first.`);
} else if (hacker1[0] > hacker2[0]) {
  console.log(`Yo, ${hacker2} goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
