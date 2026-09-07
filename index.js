// Iteration 1: Names and Input
const hacker1 = "Manal";
console.log("The driver's name is", hacker1);
const hacker2 = "Bob";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`,
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`,
  );
}

// Iteration 3: Loops
console.log(hacker1.split("").join(" ").toUpperCase());
console.log(hacker2.split("").reverse().join(""));

const driver = hacker1.toLowerCase();
const navigator = hacker2.toLowerCase();

if (driver === navigator) {
  console.log("What?! You both have the same name?");
} else if (driver < navigator) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("The driver's name goes first.");
}
