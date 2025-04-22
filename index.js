// Iteration 1: Names and Input
const hacker1 = "Eve";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "John";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems the navigator has the longest name, it has ${hacker2.length}`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters.`
  );
}
// Iteration 3: Loops
let nameSpaced = "";

for (let i = 0; i < hacker1.length; i++) {
  const eachLetter = hacker1[i].toUpperCase();
  nameSpaced += eachLetter + " ";
  console.log(nameSpaced.trim());
}

//reverse
let nameReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  eachLetter2 = hacker2[i];
  nameReversed += eachLetter2;
}
console.log(nameReversed);

// lexicographic order
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
