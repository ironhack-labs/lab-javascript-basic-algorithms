// Iteration 1: Names and Input
const hacker1 = "Jonathan";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Dustin";

console.log(`The driver's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let str1 = hacker1
let newStr1 = "";
for (let i = 0; i < hacker1.length; i++) {

    newStr1 += (str1[i].toUpperCase() + " ");
    
}
console.log(newStr1);

let str2 = hacker2
let newStr2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {

    newStr1 += (str2[i].toUpperCase() + " ");
    
}
console.log(newStr2);

for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] > hacker2[i]) {
      console.log("Yo, the navigator goes first, definitely.");
      return "Yo, the navigator goes first, definitely.";
    } else if (hacker2[i] > hacker1[i]) {
      console.log("The driver's name goes first.");
      return "The driver's name goes first.";
    } else {
      continue;
    }
  }
  console.log("What?! You both have the same name?");
  return "What?! You both have the same name?";
  