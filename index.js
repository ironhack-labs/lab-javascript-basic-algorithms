console.log("I'm ready!");
// Iteration 1: Names and Input
console.log("The driver's name is " + hacker1 + ".");

const hacker2 = "Will";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length)
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
else if (hacker1.length == hacker2.length)
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length)
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
else if (hacker1.length == hacker2.length)
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );

// Iteration 3: Loops
// Iteration 3.1
const uppercaseDriver = hacker1.toUpperCase();
let spacedName = "";

for (let i = 0; i < uppercaseDriver.length; i++) {
  spacedName += uppercaseDriver[i] + " ";
}

console.log(spacedName);

// Iteration 3.2
let reversedName = "";

for (let i = hacker2.length; i >= 0; i--) {
  reversedName += hacker2.charAt(i);
}

console.log(reversedName);

// Iteration 3.3
if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?");
}
