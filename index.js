// Iteration 1: Names and Input

const hacker1 = "David";

console.log("The driver's name is " + hacker1);

const hacker2 = "Juan";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

const hacker1 = "David";

const hacker2 = "Juan";

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

const hacker1 = "David";

const hacker2 = "Juan";

const driveUpperCase = hacker1.toUpperCase().split("").join(" ");

console.log (driveUpperCase);

const navigatorReversed = hacker2.split("").reverse().join("");

console.log(navigatorReversed);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?")
}