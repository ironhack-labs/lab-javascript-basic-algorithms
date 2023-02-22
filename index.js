// Iteration 1: Names and Input
const hacker1 = 'Ismael';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Sophie';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name, it has ${driverLength} characters.`);
} else if (driverLength < navigatorLength) {
  console.log(
    `The navigator has the longest name, it has ${navigatorLength} characters.`);
} else {
  console.log(
    `You both have equally long names, with ${driverLength} characters.`);
}

// Iteration 3: Loops
