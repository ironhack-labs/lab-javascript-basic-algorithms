// Iteration 1: Names and Input
let hacker1 = "Luiz";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Felipe";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let message = "";
const lengthName1 = hacker1.length;
const lengthName2 = hacker2.length;

if (lengthName1 > lengthName2) {
    message = `The driver has the longest name, it has ${lengthName1} characters.`;
} else if (lengthName1 < lengthName2) {
    message = `It seems that the navigator has the longest name, it has ${lengthName2} characters.`;
} else {
    message = `Wow, you both have equally long names, ${lengthName1} characters!`;
}
console.log(message);

// Iteration 3: Loops
