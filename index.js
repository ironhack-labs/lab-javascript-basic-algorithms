// Iteration 1: Names and Input

const hacker1 = 'Philippe';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Paula';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const driverCount = hacker1.length;
const navigatorCount = hacker2.length;
if (driverCount > navigatorCount) {
  console.log(
    `The driver has the longest name, it has ${driverCount} characters.`
  );
} else if (driverCount < navigatorCount) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorCount} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${navigatorCount} characters.`
  );
}

// Iteration 3: Loops
