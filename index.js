const hacker1 = "Simon";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jan";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver's name is longer it has ${hacker1.length} characters!`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters!`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops

let result1 = "";

for (let i = 0; i < hacker1.length; i++) {
  result1 += hacker1[i].toUpperCase();
}
console.log(result1);
let result2 = "";

for (let i = hacker2.length; i > 0; i--) {
  result2 += hacker2[i - 1];
}
console.log(result2);

let result = hacker1.localeCompare(hacker2);
if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

console.log(hacker1.localeCompare(hacker2));
