// Iteration 1:

const hacker1 = "Georgie";
console.log(`the driver's name is ${hacker1}`);

const hacker2 = "James";
// console.log(`the navigator's name is ${hacker2}`);

// Iteration 2:

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `it seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(`Wow, you both have equally long names, characters!`);
}

// Iteration 3:
for (i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i]);
}

for (i = hacker1.length; i <= 0; i--) {
  console.log(hacker2[i]);
}
