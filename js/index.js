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
let hacker1InCapital = hacker1.toUpperCase()
console.log(hacker1InCapital);

const reverseArrayHacker1 = hacker1InCapital.split("").reverse().join("");
console.log(reverseArrayHacker1);

let hacker1Loop = "";
for (let i = hacker1.length -1; i >= 0; i--) {
    console.log(hacker1[i]);
  hacker1Loop += hacker1[i]
}

console.log(hacker1Loop);
