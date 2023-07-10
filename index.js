// Iteration 1: Names and Input

let hacker1 = "Mariana";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Aamir";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has 7 characters.");
} 
else {
  console.log;
}

// Iteration 3: Loops

const characters = hacker1.toUpperCase().split("").join(" ");
console.log(characters);

const name = "Aamir";
const reverseName = name.split("").reverse().join(" ");
console.log(reverseName);

const hacker1Name = "Mariana";
const hacker2Name = "Aamir";

const comparisonResult = hacker1Name.localeCompare(hacker2Name );

if (comparisonResult > 0) {
    console.log("The driver's name goes first");
} else if (comparisonResult > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}