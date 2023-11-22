// Iteration 1: Names and Input
const hacker1 = "Adrian Bueno";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Michel Mendes";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker1Length < hacker2Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1Length} characters!`
  );
}
// Iteration 3: Loops
let formattedName = "";
for (let i = 0; i < hacker1Length; i++) {
  formattedName += hacker1[i].toUpperCase() + ' ';
}
console.log(formattedName);

let formattedReverseName = "";
for (let i = hacker2Length - 1; i >= 0; i--) {
  formattedReverseName += hacker2[i]
}
console.log(formattedReverseName)

const comparisonResult = hacker1.localeCompare(hacker2);
if (comparisonResult < 0) {
  console.log("The driver's name goes first.");
} else if (comparisonResult > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
