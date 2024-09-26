// Iteration 1: Names and Input
let hacker1 = "Marco";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Marco";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let hacker1UpperCase = hacker1.toUpperCase();
let hacker1Separate = [];

for (let i = 0; i < hacker1UpperCase.length; i++) {
  hacker1Separate.push(hacker1UpperCase[i]);
  console.log(hacker1Separate[i]);
}

let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);


if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}