// Iteration 1: Names and Input
const hacker1 = "El Vaquilla";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "El Gita";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1 > hacker2) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1 < hacker2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}
