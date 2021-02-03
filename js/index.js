// ==============Iteration 1: Names and Input

// Iteration 2: Conditionals

// Iteration 3: Loops
let hacker1 = "Magali";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Thaïs";
console.log(`The navigator's name is ${hacker2}`);
// ==============Iteration 2: Conditionals
let smallestNameLength; // useful for iteration 3
if (hacker1.length > hacker2.length) {
  console.log(
    `${hacker1} has the longest name, it has ${hacker1.length} characters`
  );
  smallestNameLength = hacker2.length;
} else if (hacker1.length < hacker2.length) {
  console.log(
    `${hacker2} has the longest name, it has ${hacker2.length} characters`
  );
  smallestNameLength = hacker1.length;
} else {
  console.log(
    `You both have equally long names : ${hacker2.length} characters`
  );
  smallestNameLength = hacker2.length;
}
// =============Iteration 3: Loops
let hacker1UpperCased = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1UpperCased += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1UpperCased);

let hacker2Backwards = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Backwards += hacker2[i];
}
console.log(hacker2Backwards);

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (let i = 0; i < smallestNameLength; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log(`The driver's name ${hacker1} goes first.`);
      break;
    } else if (hacker1[i] > hacker2[i]) {
      console.log(`Yo, the navigator ${hacker2} goes first definitely."`);
      break;
    } else {
      continue;
    }
  }
}