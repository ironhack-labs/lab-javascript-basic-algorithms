// Iteration 1: Names and Input
const hacker1 = "Matt"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Boby"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
let hacker1NameLength = hacker1.length
console.log(hacker1NameLength);

let hacker2NameLength = hacker2.length
console.log(hacker2NameLength);

if (hacker1NameLength > hacker2NameLength) {
  console.log(`The driver has the longest name, it has ${hacker1NameLength} characters.`);
} else if (hacker1NameLength < hacker2NameLength) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2NameLength}`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1NameLength} and ${hacker2NameLength}`)
}




// Iteration 3: Loops
