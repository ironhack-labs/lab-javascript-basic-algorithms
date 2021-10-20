// Iteration 1: Names and Input

let hacker1 = 'Bob';
console.log(`'The driver's name is ${hacker1}`);

let hacker2 = 'Jane';
console.log(`'The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let hacker1 = 'Bob';
let hacker2 = 'Jane';

console.log(`The navigator has the longest name, ${hacker2} has ${hacker2.length} characters.`)

// Iteration 3: Loops

let hacker1 = 'Bob';
let hacker2 = 'Jane';

let result = hacker1.toUpperCase().split("").join(" ");
console.log(result); // result is 'B O B'

let hacker2 = 'Jane';
console.log(hacker2.split('').reverse().join('')); // result is 'enaJ'

let hacker1 = 'Bob';
let hacker2 = 'Jane';

if(hacker1 > hacker2) {
  console.log('The drivers name goes first');
} else if(hacker1 < hacker2) {
  console.log('Yo, the navigator goes first definitely');
} else {
  console.log('What?! You both have the same name?');
} 