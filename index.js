// Iteration 1: Names and Input
const hacker1 = "Raoul";
console.log("The driver's name is " + hacker1);


const hacker2 = "Sarah";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
const length1 = hacker1.length;
const length2 = hacker2.length;

if (length1 > length2) {
  console.log("The driver has the longest name, it has " + length1 + " characters.");
} else if (length2 > length1) {
  console.log("It seems that the navigator has the longest name, it has " + length2 + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + length1 + " characters!");
}
