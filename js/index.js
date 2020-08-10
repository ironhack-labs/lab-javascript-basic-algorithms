// Iteration 1: Names and Input

const hacker1 = 'Barbara';

console.log(`The drivers Name is ${hacker1}`);

const hacker2 = 'Olesya';

console.log(`The drivers Name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  } 

// Iteration 3: Loops

const hacker = hacker1.toUpperCase();

console.log(hacker1.toUpperCase().split('').join(' '));

console.log(hacker1.split('').reverse().join(''));

const found = name.lastIndexOf('l');
console.log(found);

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const firstIndexHacker1 = hacker1[0];
const firstIndexHacker2 = hacker2[0];

console.log(firstIndexHacker2);

const found1 = alphabet.indexOf(firstIndexHacker1);
const found2 = alphabet.indexOf(firstIndexHacker2);

console.log(found1);

if(found1 < found2) {
  console.log('The drivers name goes first.');
} else if (found1 > found2) {
    console.log('Yo, the navigator goes first definitely.');
  } else {
    console.log('What?! You both have the same name?');
  }



const compare = hacker1[0].localeCompare(hacker2[0]);
if (compare < 0) {
  console.log(hacker1);
} else {
  console.log(hacker2);
}
