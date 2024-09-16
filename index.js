// Iteration 1: Names and Input
let hacker1 = 'Bonnie';
// let hacker1 = 'Tom';
// let hacker1 = 'Adams';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Clyde';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

// 3.1
let formattedName = '';

for (let i = 0; i < hacker1.length; i++){  
  formattedName += hacker1[i].toUpperCase() + " ";
}
console.log(`${formattedName}`); // I wanted to avoid having a space after the last capitalized letter but didn't know how to achieve it in a simple way or without refactoring the code

// 3.2
let reversedName = '';

for (let j = hacker2.length -1; j >= 0; j--){  
  reversedName += hacker2[j];
}
console.log(`${reversedName}`);

// 3.3
// hacker1 = 'Adam';
// hacker2 = 'Eve';

if (hacker1.localeCompare(hacker2) === -1){
  console.log(`The driver's name goes first.`)
}
else if (hacker2.localeCompare(hacker1) === -1){
  console.log(`Yo, the navigator goes first, definitely.`)
}
else {
  console.log(`What?! You both have the same name?`)
}
// or... else if (hacker1.localeCompare(hacker2) === 0){}