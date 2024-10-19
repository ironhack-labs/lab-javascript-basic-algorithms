// Iteration 1: Names and Input

const hacker1 = "Sophia";
const hacker2 = "Viktor";
const length1 = hacker1.length;
const length2 = hacker2.length;

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (length1 > length2){
   console.log (`The driver has the longest name, it has  ${length1} characters.`)
}
else if (length1 < length2){
   console.log (`It seems that the navigator has the longest name, it has ${length2} characters.`)
}
else {
   console.log (`Wow, you both have equally long names, ${length1} characters!`)
}
let driverName = hacker1.toUpperCase().split('').join(' ');
let driverNameInReverse = hacker1.split('').reverse().join('');
console.log(driverName)
console.log(driverNameInReverse)

// Iteration 3: Loops
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }