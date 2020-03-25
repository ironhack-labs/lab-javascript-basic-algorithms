// Iteration 1: Names and Input
const hacker1 = "Nelly";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Maxime";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker2.length > hacker1.length) {
  console.log(
    "The navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else if (hacker2.length < hacker1.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}
// Iteration 3: Loops
let res = "";
for (const letter of hacker1) {
  res += letter.toUpperCase() + " ";
  //   letter.toUpperCase().join(" ");
}
console.log(res);
