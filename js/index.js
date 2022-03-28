// Iteration 1: Names and Input
//
const hacker1 = "Ronald";
const hacker2 = "Pieter";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}

// Iteration 3: Loops

const printCharacters = function (driverName, navigatorName) {
  for (let i = 0; i < driverName.length; i++) {
    console.log([i].toUpperCase());
  }
};
