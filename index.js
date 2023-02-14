// Iteration 1: Names and Input 
console.log("I'm ready!");

//Iteration 1: Names and Input
var hacker1 = 'iola';
console.log(`"The driver's name is ${hacker1}`);
var hacker2 = 'Guillem';
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
const hacker1 = 'iola';
const hacker2 = 'Guillem';
console.log(`"The driver's name is ${hacker1.length} characters"`);
console.log(`"The navigator's name is ${hacker2.length} characters"`);

if (hacker1.length > hacker2.length) {  
  console.log('The driver has the longest name, it has' + hacher1.length + 'characters.');
} else if (hacker1.length < hacker2.length) {
  console.log('It seems the navigator has the longest name, it has ' + hacker2.length + ' characters.');
} else {
    console.log('Wow, you both have equally long names, ' + hacker1.length + ' characters!');
  }

// Iteration 3: Loops
//3.1:              
let hacker1 = "iola";
console.log(hacker1.toUpperCase());

//3.2:  
let hacker2 = "guillem";
  let reversed = "";
  for (let i = hacker2.length -1; i >= 0; i--) {
    reversed += hacker2[i];
  }
    console.log(reversed);
       