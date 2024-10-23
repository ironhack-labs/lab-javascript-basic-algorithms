// Iteration 1: Names and Input
const hacker1 = "Bruno";
const hacker2 = "Baptiste";

console.log(`The driver is ${hacker1}`);
console.log(`The navigator is ${hacker2}`);

// // Iteration 2: Conditionals

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
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// let revName = "onurb";
// let normalName = "";
// for (let i = revName.length - 1; i >= 0; i--) {
//   normalName += revName[i].toUpperCase() + " ";
// }

// console.log(normalName);

let hacker1NameCap = "";
let hacker1NameRev = "";

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] === "o") {
    hacker1NameCap += hacker1[i].toUpperCase();
  } else {
    hacker1NameCap += hacker1[i].toUpperCase() + " ";
  }
}

console.log(hacker1NameCap);

for (let i = hacker1.length - 1; i >= 0; i--) {
  hacker1NameRev += hacker1[i];
}

console.log(hacker1NameRev);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
