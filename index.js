// Iteration 1: Names and Input
let hacker1 = "tonyq";
let hacker2 = "amal";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1StrLength = hacker1.length;
let hacker2StrLength = hacker2.length;
if (hacker1StrLength > hacker2StrLength) {
  console.log(`The driver has the longest name, it has ${hacker1StrLength}characters.`);
} else if (hacker2StrLength > hacker1StrLength) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2StrLength} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1StrLength} characters!`);
}
// Iteration 3: Loops
// Caps Hacker 1
let modifiedHacker1 = "";

for (let i = 0; i < hacker1.length; i++) {
  modifiedHacker1 = modifiedHacker1 + hacker1[i].toUpperCase() + " ";
}
console.log(modifiedHacker1);

// Reverse string

let reversedHacker2 = "";
for (let i = 0; i < hacker2.length; i++) {
  reversedHacker2 = reversedHacker2 + hacker2[hacker2.length - 1 - i];
}
console.log(reversedHacker2);
