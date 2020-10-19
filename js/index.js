// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `hacker2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

const hacker1 = "Leonie";
const hacker2 = "Vesna";

console.log(`driver's name is ${hacker1} and navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length}!`);
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

// console.log(hacker1.split("").join(" ").toUpperCase());
let newHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase() + " ";
  console.log(newHacker1.trim());
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
// console.log(hacker2.split("").reverse().join(""));

let newHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i];
  console.log(newHacker2);
}
