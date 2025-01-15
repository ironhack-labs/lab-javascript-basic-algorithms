// Iteration 1: Names and Input
let hacker1 = "David";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Sebastien";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow,you both have equally long names,${hacker1.length === hacker2.length}`
  );
}

// Iteration 3: Loops
let drivers3 = "";
for (let i = 0; i < hacker1.length; i++) {
  drivers3 += hacker1[i].toUpperCase() + "  ";
}
console.log(drivers3);

let drivers4 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  drivers4 += hacker2[i];
}
console.log(drivers4);

if (hacker1 < hacker2) {
  console.log(`the ${hacker1} goes first`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, ${hacker2} goes first, definitely.`);
} else if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
}
