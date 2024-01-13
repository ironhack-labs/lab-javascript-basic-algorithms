// Iteration 1: Names and Input
let hacker1 = "Juan";
console.log("The driver's name is " + hacker1);

let hacker2 = "Vivian";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
const lengthHacker1 = hacker1.length;
const lengthHacker2 = hacker2.length;

if(lengthHacker1 > lengthHacker2){
  console.log(`The driver has the longest name, it has ${lengthHacker1} characters.`);
}else if (lengthHacker2 > lengthHacker1){
  console.log(`It seems the navigator has the longest name, it has ${lengthHacker2} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${lengthHacker1} characters!`);
}

// Iteration 3: Loops
