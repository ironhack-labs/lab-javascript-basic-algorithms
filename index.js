// Iteration 1: Names and Input
const hacker1 = "Konstantin";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Konstantin";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length}.`);
}

// Iteration 3: Loops
if (hacker1.localeCompare (hacker2) < 0) {
    console.log("The driver's name comes first.");
}
else if (hacker1.localeCompare (hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}