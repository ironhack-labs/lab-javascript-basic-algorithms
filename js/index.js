// Iteration 1: Names and Input
console.log("I'm ready!");
const hacker1 = "Shaul";
console.log(hacker1);
const hacker2 = "Akua";
console.log(hacker2);
if (hacker1.length > hacker2.length) {
  console.log(hacker1);
} else {
  console.log(hacker2);
}

// Iteration 2: Conditionals
let samePage = "";
for (i = 0; i < hacker2.length; i++) {
  samePage += hacker2[i].toUpperCase() + " ";
}
console.log(samePage);
let reverseNavigator = "";
for (i = hacker1.length - 1; i >= 0; i--) {
  reverseNavigator += hacker1[i];
}

console.log(reverseNavigator);

// Iteration 3: Loops
if (hacker1 < hacker2) {
  console.log(`${hacker1}'s name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, ${hacker2} goes first definitely.`);
} else console.log(`What?! You both have the same name?`);
