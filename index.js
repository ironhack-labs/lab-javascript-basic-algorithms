const hacker1 = "Nelson";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Elena";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3.1
let driverNameSpaced = "";

for (let i = 0; i < hacker1.length; i++) {
  driverNameSpaced += hacker1[i].toUpperCase() + " ";
}

console.log(driverNameSpaced.trim());

// Iteration 3.2
let navigatorReversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReversed += hacker2[i];
}

console.log(navigatorReversed);

// Iteration 3.3
if (hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}