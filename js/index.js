// Iteration 1: Names and Input
let hacker1 = 'Juan';
console.log(`The driver name is ${hacker1}`);
debugger
let hacker2 = 'José';
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1} characters!`);
  }

// Iteration 3: Loops

let h1upperCased = hacker1.toUpperCase();
let bigName = ""

for (let i=0; i<h1upperCased.length; i++) {
  bigName += h1upperCased[i] + " ";
};
console.log(bigName);