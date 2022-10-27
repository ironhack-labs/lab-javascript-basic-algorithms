// Iteration 1: Names and Input
// Create two variables a driver and a navigator

let hacker1 = "Ms Marple";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Hercule Poirot";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// Which name is longer

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  // while they both have the same string length, is it enough to just put one name down since they both have the same number of characters in the string?
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters`
  );
}

// Iteration 3: Loops
// initialize a new variable eg. let y = 0; condition on which it will run eg. if y is less than or equal to 10 ; implementation/ condition eg, increment by 1

// Print all the characters of the drivers name in uppercase
for (let driversName of hacker1) {
  console.log(driversName.toUpperCase());
}

// Print the characters of the navigators name in reverse order
