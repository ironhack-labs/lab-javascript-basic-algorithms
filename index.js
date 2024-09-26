// Divya -> driver
// Anna -> navigator

// Iteration 1: Names and Input
let hacker1 = "Divya";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Anna";
console.log(`The navigator's name is ${hacker2}`);

// #Iteration 2: Conditionals

let hacker1Length = hacker1.length; // 5 driver
let hacker2Length = hacker2.length; // 4 navigator

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters`
  );
} else if (hacker1Length < hacker2Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1Length} characters!`
  );
}

// Iteration 3: Loops

let hacker1WithSpaces = "";
let hacker2WithSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1WithSpaces += hacker1[i] + " ";
}

let hacker1WithSpacesToUpperCase = hacker1WithSpaces.toUpperCase();

console.log(hacker1WithSpacesToUpperCase);

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2WithSpaces += hacker2[i] + " ";
}

let hacker2WithSpacesToUpperCase = hacker2WithSpaces.toUpperCase();
console.log(hacker2WithSpacesToUpperCase);

let order = hacker1.localeCompare(hacker2);

if (order < 0) {
  console.log("The driver's name goes first.");
} else if (order > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (order === 0) {
  console.log("What?! You both have the same name?");
}
