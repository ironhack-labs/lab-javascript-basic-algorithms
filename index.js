// Iteration 1: Names and Input
const hacker1 = "John"
const hacker2 = "Ana"
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
const drivesLength = hacker1.length;
const navigatorLength = hacker2.length;

console.log(drivesLength);
console.log(navigatorLength);

if (drivesLength > navigatorLength) {
    console.log(`The driver (${hacker1}) has the longest name, it has ${drivesLength} characters.`)
}   else if (drivesLength < navigatorLength) {
    console.log(`It seems that the navigator has the longest name, it has ${drivesLength} characters.`)
}   else if (drivesLength === navigatorLength) {
    console.log(`Wow, you both have equally long names, ${drivesLength} characters!`)
};

// Iteration 3: Loops
// 3.1

let driverCapitalized = "";

for (let i = 0; i < hacker1.length; i++) {
    driverCapitalized += hacker1.slice(i, i + 1).toUpperCase() + " ";
};
console.log(driverCapitalized);

// 3.2

let reversedName = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
    reversedName += hacker1.slice(i, i + 1);
};
console.log(reversedName);

// 3.3

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }