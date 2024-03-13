// Iteration 1: Names and Input
const hacker1 = "James";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Francisco";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
let driverLength = hacker1.length;
let navLength = hacker2.length;
if (driverLength > navLength) {
  console.log(`The driver has the longest name, it has ${driverLength} characters.`)
} else if (driverLength < navLength) {  
console.log(`It seems that the navigator has the longest name, it has ${navLength} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}

// Iteration 3: Loops
let spaceDriver = "";
for (let i=0; i < hacker1.length; i++) {
 spaceDriver += `${hacker1.charAt(i).toUpperCase()} `;
}
console.log(spaceDriver);

let revDriver = "";
for (let i=hacker2.length; i >= 0; i--) {
 revDriver += hacker2.charAt(i);
}
console.log(revDriver);



let arr = [hacker1, hacker2];
let sortedNames = arr.sort();

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else if (sortedNames[0] === hacker1) {
  console.log("The driver's name goes first.");
} else if (sortedNames[0] === hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
}