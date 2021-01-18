// Iteration 1: Names and Input
let hacker1 = "Tom"lab-javascript-basic-algorithms

console.log(`The driver´s name is ${hacker1}`);

let hacker2 = "Michael"

console.log(`The navigator´s name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
    } else if (hacker1.length < hacker2.length) {
      console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
    } else {
      console.log (`Wow, you both have equally long names, XX characters!`)
    }

// Iteration 3: Loops
let hacker1UpperCase = hacker1.toUpperCase();
let hacker1Name = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Name += `${hacker1UpperCase[i]} `;
}
console.log(hacker1Name)

let hacker2UpperCase = hacker2.toUpperCase();
let hacker2Name = "";
for (let i = 0; i < hacker2.length; i++) {
  hacker2Name += `${hacker2UpperCase[i]} `;
}
console.log(hacker2Name)

let hacker1Reverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  hacker1Reverse += `${hacker1[i]}`;
}
console.log(hacker1Reverse)

let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += `${hacker2[i]}`;
}
console.log(hacker2Reverse)

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}
