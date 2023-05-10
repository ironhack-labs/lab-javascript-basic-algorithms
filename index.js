// Iteration 1: Names and Input

let hacker1 = "Pierre";
let hacker2 = "Fernando";

console.log(`The driver's name is ${hacker2}`);
console.log(`The navigator's name is ${hacker1}`);

// Iteration 2: Conditionals

if (hacker2.length > hacker1.length) {
  console.log(
    `The driver has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker2.length < hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

//3.1

let upperCasedName = hacker2.toUpperCase();
let char = "";

for (let i = 0; i < upperCasedName.length; i++) {
  char += upperCasedName[i] + " ";
}
console.log(char);

//3.2

let navigator = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  navigator += hacker1[i];
}
console.log(navigator);

//3.3

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}
