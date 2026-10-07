// Iteration 1: Names and Input
const hacker1 = "Isaac";
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Walter";
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else 
console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)

// Iteration 3: Loops
let hacker3 = "John";
let result = "";

for (let i = 0; i < hacker3.length; i++){
   result += hacker3[i].toUpperCase() + " ";
}

console.log(result)

let reversedName = "";

for (let i = hacker3.length - 1; i >= 0; i--) {
reversedName = reversedName + hacker3[i];
console.log(reversedName)
}


if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}