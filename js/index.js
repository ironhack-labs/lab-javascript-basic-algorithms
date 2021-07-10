// Iteration 1: Names and Input

const hacker1 = "Amarílis";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Selene";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals
const hacker1Length = hacker1.length;
const hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker2Length > hacker1Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1Length} characters!`
  );
}

// Iteration 3: Loops
let hacker1Maiusculo = "";

for (let i = 0; i < hacker1.length; i += 1) {
  if (i === hacker1.length - 1) {
    hacker1Maiusculo += `${hacker1[i].toUpperCase()}`;
  } else {
    hacker1Maiusculo += `${hacker1[i].toUpperCase()} `;
  }
}
