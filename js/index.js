// Iteration 1: Names and Input
const hacker1 = "against";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "check";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1 < hacker2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let newHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(`The characters of the driver's name in capital are ${newHacker1}`);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let newHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i];
}
console.log(
  `The characters of the navigator's name in reverse order are ${newHacker2}`
);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let driver = hacker1.toLowerCase();

let passenger = hacker2.toLowerCase();

let carRider = driver.localeCompare(passenger);

console.log(`testing: ${carRider}`);
// negative value --> driver before passenger
if (carRider < 0) {
  console.log(`The driver's name goes first.`);
  // positive value --> driver after passenger
} else if (carRider > 0) {
  console.log(`The navigator's name goes second definitely.`);
  // 0 value --> driver === passenger
} else {
  console.log(`What?! You both have the same name?`);
}
