// Iteration 1: Names and Input

const hacker1 = 'Romina';
const hacker2 = 'John';
console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length >= hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length >= hacker1.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops

const splittedString =hacker1.split('').join(' ').toUpperCase();
console.log(splittedString);

const newString =hacker2.split('').reverse().join('');
console.log (newString);

const randomArray = ['Romina', 'John'];
{ console.log({sortedArray:randomArray.sort()})
}


