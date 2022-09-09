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

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let newHacker1 = "";
for (let i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(
  `The characters of the driver's name in capital are ${newHacker1.trim()}`
);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let newHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i];
}
console.log(
  `The characters of the navigator's name in reverse order are ${newHacker2}`
);
