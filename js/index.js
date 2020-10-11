// Iteration 1: Names and Input

const hacker1 = `josue`;
console.log(`The driver's name is ${hacker1}`);

const hacker2 = `teammate`;
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  

// Iteration 3: Loops

let str = hacker1.toUpperCase();
let newString = ``;
let i;
for (i = 0; i < hacker1.length; i++) {
  newString = newString + hacker1.toUpperCase()[i]+ " "; 
}
console.log(newString);

let str1 = hacker2;
let newString1 = ``;
let i1;
for (i1 = hacker2.length; i1 > 0; i1--) {
  newString1= newString1 + hacker2[i1-1]; 
}
console.log(newString1);
