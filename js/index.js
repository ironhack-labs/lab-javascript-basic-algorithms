//iteration 1

const hacker1 = "Pieter"; // tested this with other names so can be different from pauline
const hacker2 = "John";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//iteration 2

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters`
  );
}

//iteration 3

let driverCapitalized = "";
let navigatorReversed = "";

for (let i = 0; i < hacker1.length; i++) {
  driverCapitalized += hacker1[i].toUpperCase() + " ";
}
console.log(driverCapitalized);

for (let y = hacker2.length - 1; y > 0 - 1; y--) {
  navigatorReversed += hacker2[y];
}
console.log(navigatorReversed);

const lexicOrder = hacker1.localeCompare(hacker2);
if (lexicOrder === 1) {
  console.log(`The driver's name goes first.`);
} else if (lexicOrder === -1) {
  console.log(`The driver's name goes first.`);
} else if (lexicOrder === 0) {
  console.log(`What?! You both have the same name?`);
}
