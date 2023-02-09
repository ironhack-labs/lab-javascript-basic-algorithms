// Iteration 1: Names and Input
let hacker1 = "XXXX";
console.log("The driver's name is ", hacker1);

let hacker2 = "YYY";
console.log("The navigator's name is ", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has ",
    hacker1.length,
    " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has",
    hacker2.length,
    "characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names",
    hacker1.length,
    "characters!"
  );
}

// Iteration 3: Loops
let newDriver = "";
hacker1 = "John";
for (let i = 0; i < hacker1.length; i++) {
  newDriver += hacker1[i] + " ";
}

console.log(newDriver.toUpperCase());

let newNavigator = "";
hacker2 = "John";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newNavigator += hacker2[i];
}
console.log(newNavigator);

let a = hacker1;
let b = hacker2;
if (a.localeCompare(b) === -1) {
  console.log("The driver's name goes first.");
} else if (a.localeCompare(b) === 0) {
  console.log("What?! You both have the same name?");
} else {
  console.log("Yo, the navigator goes first definitely.");
}
