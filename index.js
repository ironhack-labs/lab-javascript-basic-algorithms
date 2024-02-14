// Iteration 1: Names and Input
const hacker1 = "Shaza";
const hacker2 = "Rob";
console.log("The drivers name is " + hacker1);
console.log("The navs name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters `
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
let newDriverName = "";
// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
  if (i < hacker1.length - 1) {
    newDriverName += hacker1[i].toUpperCase() + " ";
  } else {
    newDriverName += hacker1[i].toUpperCase();
  }
}

console.log(`newDriverName ${newDriverName}`);

let newNav = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newNav += hacker2[i];
}

console.log(newNav);

let result = hacker1.localeCompare(hacker2);
if (result === -1) {
  console.log("the driver's name goes first.");
} else if (result === 1) {
  console.log("yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
