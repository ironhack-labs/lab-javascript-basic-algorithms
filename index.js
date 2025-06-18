// Iteration 1: Names and Input
let hacker1 = prompt("Driver, what's your name?");
let hacker2 = prompt("Navigator, what's your name?");

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters.`
  );
}

// Iteration 3: Loops

// Iteration 3.1

let driverNameSpaced = "";

for (let i = 0; i < hacker1.length; i++) {
  let char = hacker1[i];
  let upperChar = char.toUpperCase();
  driverNameSpaced = driverNameSpaced + upperChar + " ";
}

driverNameSpaced = driverNameSpaced.trim();
console.log(driverNameSpaced);

// Iteration 3.2

let chars = hacker2.split("");
chars.reverse();
let reversedName = chars.join("");

console.log(reversedName);

// Iteration 3.3

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name? ");
}
