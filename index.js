// Iteration 1: Names and Input
/*driver it's Patricio and navigator is Maria */

const hacker1 = "Patricio";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Maria";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1 > hacker2) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}characters.`);
}


// Iteration 3: Loops
const letter = hacker1.split("");
const makeStr = letter.toString();
const mayusText = makeStr.toUpperCase();
console.log(mayusText);


const letter2 = hacker2.split("");

const reverse = letter.reverse();
console.log(reverse);
