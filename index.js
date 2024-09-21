// Iteration 1: Names and Input

const hacker1 = "mike";
const driverSentence = `the driver´s name is ${hacker1}`;
console.log(driverSentence);

const hacker2 = "Joe";
const navigatorSentence = `the navigator´s name is ${hacker2}`

console.log(navigatorSentence);

// Iteration 2: Conditionals
const math = hacker1.length - hacker2.length;
const math2 = hacker2.length - hacker1.length;
const math3 = hacker1.length;

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else { 
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)}

// Iteration 3: Loops
// Given names
const driverName = "Mike";
const navigatorName = "Joe";

// 3.1 Print the driver's name in capital letters, separated by space
let driverNameFormatted = '';
for (let i = 0; i < driverName.length; i++) {
    driverNameFormatted += driverName[i].toUpperCase() + ' ';
}
console.log(driverNameFormatted.trim());  // Output: M I K E

// 3.2 Print the navigator's name in reverse order
let navigatorNameReversed = '';
for (let i = navigatorName.length - 1; i >= 0; i--) {
    navigatorNameReversed += navigatorName[i].toLowerCase();
}
console.log(navigatorNameReversed);  // Output: eoj

// 3.3 Compare names lexicographically
if (driverName.toLowerCase() < navigatorName.toLowerCase()) {
    console.log("The driver's name goes first.");
} else if (driverName.toLowerCase() > navigatorName.toLowerCase()) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
