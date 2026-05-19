// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name
const hacker1 = "Joao";
// 1.2 Print "The driver's name is XXXX"
console.log("The driver's name is " + hacker1);
// 1.3 Create a variable `hacker2` with the navigator's name
const hacker2 = "JC";

// 1.4 Print "The navigator's name is YYYY"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`,);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`,);
}
// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let nameCapital = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i < hacker1.length - 1) {
    nameCapital += hacker1[i].toUpperCase() + " ";
  } else {
    nameCapital += hacker1[i].toUpperCase();
  }
}
console.log(nameCapital);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let nameReverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  nameReverse += hacker1[i];
}
console.log(nameReverse);
// 3.3 Depending on the lexicographic order of the strings, print:
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
    } else if (hacker1 > hacker2) {
        console.log("Yo, the navigator goes first definitely.");
    } else {
        console.log("What?! You both have the same name?");
    }