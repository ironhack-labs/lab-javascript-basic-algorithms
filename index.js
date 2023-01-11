// Iteration 1: Names and Input
/* Iteration 1: Names and Input

1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY". */

const hacker1 = "Silur";
console.log(`The drivers name is ${hacker1}`);

// Iteration 2: Conditionals

/* 2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

const driverName = "Silur";
const navigatorName = "Lorexiam";

if (driverName.length > navigatorName.length) {
  console.log(`The driver has the longest name, it has ${driverName.length} characters.`)
} 

else if (driverName.length < navigatorName.length) {
  console.log(`The navigator has the longest name, it has ${navigatorName.length} characters.`)
} 

else {
  console.log(`They both have the same length!`)
};


// Iteration 3: Loops
