// Iteration 1: Names and Input
const hacker1 = "You Sum tin";
console.log(`The driver's name is ${hacker1} `);

const hacker2 = "Lee Me alone";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
  console.log(`it has ${hacker2.length} characters`);
} else {
  console.log(
    `wow! you both have equally long names, ${hacker1.length || hacker2.length}`
  );
}
// Iteration 3: Loops
let str = "";
for (let i = 0; i < hacker1.length; i++) {
  const char = hacker1[i];

  str += char + " ";
}
console.log(str.toUpperCase());

let revName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  revName += hacker2[i];
}
console.log(revName);
