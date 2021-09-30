// Iteration 1: Names and Input
//  1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Mango';
// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);
// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Luis';
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
let driverLength = hacker1.length;
let navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(`The driver has the longest name, it has ${driverLength} characters.`);
} else if (driverLength < navigatorLength) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`)
}

// Iteration 3: Loops