// Iteration 1: Names and Input
let hacker1 = prompt ("Hey Driver, what is your name?");
let hacker2 = prompt ("Hey Navigator, what is your name?");

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {console.log(`The driver has the longest name, it has ${hacker1.length} characcters.`)}
else if (hacker2.length > hacker1.length) {console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)}
else {console.log (`Wow, you both have equally long names,${hacker1.length} characters.`)}

// Iteration 3: Loops
let nameWithSpaces = '';
for (let i = 0; i <hacker1.length; i++) { nameWithSpaces += hacker1[i].toUpperCase() + ' ';}

console.log (nameWithSpaces.trim());

let reverseOrder = '';
for (let i = hacker2.length - 1; i >= 0; i--) { reverseOrder += hacker2[i];}
console.log(reverseOrder);