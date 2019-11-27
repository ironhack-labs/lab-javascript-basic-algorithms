// Iteration 1: Names and Input
const hacker1 = "Juliane";
console.log(`The driver's name is ${hacker1}.`)

const hacker2 = "Leonardo";
console.log(`The navigator\'s name is ${hacker2}.`)

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker2.length === hacker1.length) {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
// 3.1
let processedString = '';
for (let i = 0; i < hacker1.length; i++) {
  processedString = processedString + hacker1[i].toUpperCase() + ' ';
}
console.log(processedString);

// // 3.2 
let processedString2 = '';
for (let i = hacker2.length -1; i >= 0; i--) {
  processedString2 = processedString2 + hacker2[i];
}
console.log(processedString2);

// 3.3

const localeCompareResult = hacker1.localeCompare(hacker2);
if (localeCompareResult === -1) {
  console.log(`The driver's name goes first.`)
 } else if (localeCompareResult === 1) {
   console.log(`Yo, the navigator goes first definitely.`)
 } else if (localeCompareResult === 0) {
   console.log(`What?! You both have the same name?`)
 }