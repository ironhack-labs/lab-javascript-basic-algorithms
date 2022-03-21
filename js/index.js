// Iteration 1: Names and Input
let hacker1 = 'John'; 
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = 'Alexander';
console.log(`"The driver's name is ${hacker2}"`);

// Iteration 2: Conditionals
//option 1: hacker 1’s name longer than hacker 2
//option 2: hacker 2’s name longer than hacker 1
//option 3: both name’s are equal length

if (hacker1.length > hacker2.length) {
  console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`);
} else if (hacker1.length < hacker2.length) {
  console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`);
} else {
  console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`);
}

// Iteration 3: Loops
let i = 0;
let printedName = '';

for (let i = 0; i < hacker1.length; i ++) {
  printedName += (`${hacker1[i]} `);
}
  console.log(printedName.toUpperCase());
  
let hacker2 = 'Alexander';

let x = 0;
let printedNavName= '';

for (let x = hacker2.length-1; x >= 0; x --) {
  printedNavName += (`${hacker2[x]} `);
}
  console.log(printedNavName.toUpperCase());
