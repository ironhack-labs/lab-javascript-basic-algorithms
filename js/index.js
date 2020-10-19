// Iteration 1: Names and Input

const hacker1 = 'Barcus';
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = 'Fiona';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name. It has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name. It has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both ahve equally long names; ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// Uppercase + Space
let result = "";
for (let i=0; i <hacker1.length; i++) {
  result += hacker1[i].toUpperCase()+" ";
}
console.log(result);

//reverse 
let reverse = "";
for (let i=hacker2.length-1; i >= 0; i--){
  reverse += hacker2.charAt(i);
}
console.log(reverse);

// lexicographic order 
if (hacker1.charAt(0) < hacker2.charAt(0)) {
   console.log(`${hacker1} goes first.`);
} else if (hacker1.charAt(0) > hacker2.charAt(0)) {
   console.log(`${hacker2} goes first.`);
} else {
  console.log('You both have the same name.');
}
