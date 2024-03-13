// Iteration 1: Names and Input
const hacker1 = "Mirko";
const hacker2 = "Fabio";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has XX characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has XX characters.`
  );
} else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, XX characters!`);
}

// Iteration 3: Loops
let nameDriveLicense = "";

for (let i = 0; i < hacker1.length; i++) {
  let char = hacker1[i].toUpperCase();
  nameDriveLicense += char + " ";
}

console.log(nameDriveLicense);

let nameNavigatorName = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
  nameNavigatorName += hacker2[j];
}

console.log(nameNavigatorName);

// Mirk, Fabio
// M -> F
if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
